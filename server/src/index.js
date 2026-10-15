import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB, getDBStatus } from './config/db.js';
import resourceRoutes from './routes/resourceRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// CORS configuration supporting local dev and Vercel deployments
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  process.env.CORS_ORIGIN
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    
    // Allow vercel preview and production subdomains
    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith('.vercel.app') ||
      origin.includes('localhost')
    ) {
      return callback(null, true);
    }
    
    // For open API demo purposes
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// API Routes
app.use('/api', resourceRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  const dbStatus = getDBStatus();
  res.json({
    status: 'online',
    appName: 'UdaanSaheli API',
    team: 'Quantum Leapers',
    hackathon: 'BIOS 2026',
    timestamp: new Date().toISOString(),
    database: dbStatus
  });
});

// Root welcome endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to UdaanSaheli (उड़ान सहेली) API — Empowering Rural Women Entrepreneurs',
    endpoints: {
      health: '/api/health',
      resources: '/api/resources',
      categories: '/api/categories',
      opportunities: '/api/opportunities',
      seed: '/api/seed (POST)'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });
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
