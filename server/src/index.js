import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { connectDB, getDBStatus } from './config/db.js';
import resourceRoutes from './routes/resourceRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure .env is discovered whether starting from root or server directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// CORS configuration supporting both unified single-service and split local dev
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  process.env.CORS_ORIGIN
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow same-origin, curl, mobile apps, and local dev
    if (!origin) return callback(null, true);
    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith('.vercel.app') ||
      origin.endsWith('.onrender.com') ||
      origin.includes('localhost') ||
      origin.includes('127.0.0.1')
    ) {
      return callback(null, true);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// API Routes
app.use('/api', resourceRoutes);

// Detailed Health check endpoint with actionable database diagnostics
app.get('/api/health', async (req, res) => {
  try {
    const dbStatus = await getDBStatus();
    res.json({
      status: 'online',
      appName: 'UdaanSaheli Unified Service',
      team: 'Quantum Leapers',
      hackathon: 'BIOS 2026',
      timestamp: new Date().toISOString(),
      deploymentMode: 'Single Web Service (API + Static SPA)',
      database: dbStatus
    });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// Single-URL Production Setup: Serve Vite static bundle from client/dist if available
const candidateDistPaths = [
  path.resolve(__dirname, '../../client/dist'),
  path.resolve(__dirname, '../client/dist'),
  path.resolve(process.cwd(), 'client/dist'),
  path.resolve(process.cwd(), '../client/dist')
];
const clientDistPath = candidateDistPaths.find(p => fs.existsSync(p)) || candidateDistPaths[0];
const hasClientDist = fs.existsSync(clientDistPath);

if (hasClientDist) {
  console.log(`📦 [UdaanSaheli Server] Found client/dist. Serving unified frontend from ${clientDistPath}`);
  app.use(express.static(clientDistPath));

  // SPA fallback for all frontend client-side routes (excluding /api)
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
} else {
  // Development fallback when client/dist has not been built yet
  app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to UdaanSaheli (उड़ान सहेली) API — Empowering Rural Women Entrepreneurs',
      notice: 'To run as a unified single URL, build the frontend with `npm run build` in client/ directory.',
      endpoints: {
        health: '/api/health',
        resources: '/api/resources',
        categories: '/api/categories',
        opportunities: '/api/opportunities',
        seed: '/api/seed (POST)'
      }
    });
  });
}

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ success: false, message: `API route not found: ${req.originalUrl}` });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 [UdaanSaheli Server] Running on http://localhost:${PORT}`);
  await connectDB();
});
