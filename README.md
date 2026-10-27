# UdaanSaheli (उड़ान सहेली)                                              
### Digital Platform for Rural Women Entrepreneurs
**Team:** Quantum Leapers  
**Hackathon Problem Statement:** Digital Platform for Rural Women Entrepreneurs — BIOS 2026 Hackathon  
**Target Audience:** Rural and semi-urban women micro-entrepreneurs, self-help groups (SHGs), and village artisans across India.

---

## 1. Project Objective & Vision

Rural women entrepreneurs face systemic challenges: fragmented business knowledge, language barriers, predatory informal moneylenders, and difficulty finding verified government subsidies.

**UdaanSaheli (उड़ान सहेली)** is a lightweight, mobile-first web application designed specifically for rural smartphones, low-bandwidth connections, and first-time digital users. It combines verified government schemes, practical step-by-step business guides, free district vocational training, and institutional market linkages into one simple, bilingual (Hindi & English) portal.

---

## 2. Key Features

- **🌐 Zero-Latency Bilingual Toggle (हिन्दी / English)**: Switch the entire user interface and curated content instantly with one tap. Language preference is persisted across browser refreshes via `localStorage`.
- **🔊 Voice Assistance (Web Speech API Audio Reader)**: Text-to-speech speaker button on cards and detail views that reads aloud guide summaries and eligibility requirements in clear Hindi or English for semi-literate users.
- **🔤 Text Size Adjuster (A / A+ / A++)**: Accessible typography controls allowing users to enlarge fonts for enhanced readability in outdoor bright sunlight.
- **📱 Mobile-First Native Experience**: Fixed bottom navigation bar (`Home`, `Learning`, `Schemes & Markets`, `Saved`, `Impact`) with 48px+ touch targets optimized for one-thumb Android smartphone usage.
- **📚 6 Business Learning Categories**:
  1. *Starting a Small Business (छोटा व्यवसाय शुरू करना)*
  2. *Business Planning (व्यवसाय योजना बनाना)*
  3. *Pricing & Finance Basics (मूल्य निर्धारण और वित्त की बुनियादी बातें)*
  4. *Product Improvement & Packaging (उत्पाद सुधार और पैकेजिंग)*
  5. *Branding & Marketing (ब्रांडिंग और मार्केटिंग)*
  6. *Digital Selling (डिजिटल बिक्री — WhatsApp, UPI, GeM, ONDC)*
- **🏛️ Verified Government Schemes Directory**:
  - **PMEGP**: Prime Minister Employment Generation Programme (35% rural subsidy, KVIC/MSME).
  - **Mudra Yojana**: Pradhan Mantri Mudra Yojana (Shishu & Kishore collateral-free micro-loans up to ₹5 Lakhs).
  - **Lakhpati Didi**: DAY-NRLM Self-Help Group livelihood mission.
  - **PMFME**: Food processing machinery capital subsidy up to ₹10 Lakhs.
  - **RSETI**: Free district residential vocational training with lodging & food.
  - **GeM Saras Collection**: Direct institutional sales to Government departments.
  - **ONDC**: Open Network for Digital Commerce for nationwide micro-selling.
  - **SARAS Mela & Hunar Haat**: National urban exhibition stalls for artisans.
- **🔖 Zero-Friction Bookmarks (Saved Resources)**: One-tap bookmarking stored directly in browser `localStorage`. No mandatory logins, OTPs, or passwords required.
- **🔍 Instant Live Search & Filters**: Search in Hindi or English by scheme name, product, or keyword with real-time feedback and clear empty states.
- **📊 BIOS 2026 Impact Framework & Usability Simulator**: Interactive simulation measuring:
  1. *Time taken to find a relevant resource* (Target: < 60s)
  2. *Task completion rate*
  3. *Official link click-through leads*  
  *(Clearly identified as proposed evaluation metrics and simulated usability trials).*

---

## 3. Technology Stack & Architecture

- **Frontend**: React 18, Vite 6, Tailwind CSS 3.4, Lucide React Icons
- **Backend**: Node.js v22, Express.js 4.21, Mongoose 8.9, CORS, Morgan
- **Database**: MongoDB Atlas (with automatic fallback to resilient in-memory cache if MongoDB is offline or unconfigured)
- **Deployment Architecture**: Unified Single Render Web Service where Express directly serves the production Vite build (`client/dist`) and handles `/api` endpoints under the same origin.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   Unified Single-URL Web Service                       │
│                         (Express.js Server)                            │
│                                                                        │
│   ├── Static Assets & SPA Routes (/) ────► Serves client/dist          │
│   │                                       (React + Vite + Tailwind)    │
│   └── REST API Endpoints (/api/*) ───────► Express Controllers         │
│                                                                        │
│          ▲                                        ▲                    │
│          │ Same Origin (No CORS overhead)         │ Mongoose ODM       │
│          ▼                                        ▼                    │
│   [Browser / Mobile App]                  [MongoDB Atlas Cluster]      │
│                                           (Or Resilient Fallback)      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Local Setup & Running Instructions

### Prerequisites
- Node.js (v18 or higher, tested on v22.14.0)
- npm (v9 or higher, tested on 10.9.2)

### Running as a Unified Single Service (Production Simulation)
```bash
# 1. Clone repository
git clone https://github.com/YOUR_USERNAME/udaansaheli.git
cd udaansaheli

# 2. Build the unified project
npm run build

# 3. Start the unified service
npm start
```
Open **`http://localhost:5000`** in your browser. Both the web application and the REST API are live under this single port!

### Running in Split Development Mode (Hot Reloading)
```bash
# Terminal 1: Backend API
cd server
npm start

# Terminal 2: Frontend with Vite HMR
cd client
npm run dev -- --host 127.0.0.1
```
- Frontend Dev URL: `http://127.0.0.1:5173` (proxies `/api` to backend)
- Backend API URL: `http://localhost:5000`

---

## 5. MongoDB Atlas Setup Guide

UdaanSaheli works out-of-the-box with a high-resilience in-memory seed dataset if MongoDB is not yet configured. To connect your persistent cloud database:

1. **Sign in to MongoDB Atlas**: Visit [cloud.mongodb.com](https://cloud.mongodb.com) and create a free Shared Cluster (M0).
2. **Create Database User**:
   - Go to **Security > Database Access**.
   - Click **Add New Database User**.
   - Choose Password authentication (e.g., username `udaan_admin`, password `YOUR_STRONG_PASSWORD`).
   - Grant `Read and write to any database` role.
3. **Configure Network Access**:
   - Go to **Security > Network Access**.
   - Click **Add IP Address**.
   - Click **Allow Access from Anywhere** (`0.0.0.0/0`) so cloud hosting providers (Render) can connect.
4. **Get Connection String**:
   - Go to **Deployment > Database**.
   - Click **Connect > Drivers (Node.js)**.
   - Copy the URI, replacing `<password>` with your database user password:
     ```
     mongodb+srv://udaan_admin:<password>@cluster0.abcde.mongodb.net/udaansaheli?retryWrites=true&w=majority
     ```
5. **Set Environment Variable**:
   - On Render: Add `MONGODB_URI` in **Environment Variables**.
   - Locally: Create `server/.env` and add `MONGODB_URI=<your-connection-string>`.

When connected, the database seeder runs **safely and idempotently** using bulk upserts (`bulkWrite` with `upsert: true`). It **never drops collections or deletes existing records**.

---

## 6. Single-URL Render Deployment Guide

Deploying as a single Render Web Service eliminates CORS issues and simplifies management under one public URL.

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Configure single-service deployment for Render"
   git push origin main
   ```
2. **Create New Web Service in Render**:
   - Go to [dashboard.render.com](https://dashboard.render.com).
   - Click **New + > Web Service**.
   - Connect your GitHub repository `udaansaheli`.
3. **Configure Service Settings**:
   - **Name**: `udaansaheli`
   - **Root Directory**: `.` *(leave empty or dot for repository root)*
   - **Environment**: `Node`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
4. **Add Environment Variables**:
   - `NODE_ENV`: `production`
   - `PORT`: `5000` *(or Render's default 10000)*
   - `MONGODB_URI`: *Your MongoDB Atlas connection URI*
5. **Click "Deploy Web Service"**:
   Render will run `npm run build` (building `client/dist` and installing server dependencies) and execute `npm start`.
   Your unified application will be accessible at:  
   👉 **`https://udaansaheli.onrender.com`**

---

## 7. Automated Test Suite

Run the automated verification suite:
```bash
npm test
# or
node server/test-api.js
```

### Verified Test Cases (19/19 Passing):
- [x] **Data Integrity**: 12 curated records with verified official links.
- [x] **Bilingual Coverage**: 100% of titles, descriptions, eligibility rules, and application roadmaps exist in both Hindi and English.
- [x] **Bilingual Search Precision**: Verified keyword matching in Hindi (`ऋण`) and English (`mudra`).
- [x] **Category Coverage**: All 6 required business literacy categories populated.
- [x] **Input Validation & Security**:
  - Rejects invalid category parameters with `HTTP 400 Bad Request`.
  - Rejects invalid type parameters with `HTTP 400 Bad Request`.
  - Rejects query strings exceeding 100 characters with `HTTP 400 Bad Request`.
  - Rejects non-existent resource IDs with `HTTP 404 Not Found`.
- [x] **Credential Masking**: Connection strings securely masked (`mongodb+srv://***:***@cluster...`) to protect secrets in logs.
- [x] **Diagnostic Health Endpoint**: `/api/health` reports connection status, mode, live record count, and actionable guidance.
- [x] **Frontend Production Build**: Vite build compiles in under 4 seconds with 0 errors.

---

## 8. Disclaimers & Known Limitations

1. **Information Accuracy**: Government scheme guidelines, eligibility rules, and subsidies are subject to policy updates by the respective ministries. UdaanSaheli provides the `Last-Verified Date` and direct buttons to the official government portals (`pmegp.gov.in`, `mudra.org.in`, `aajeevika.gov.in`, `gem.gov.in`).
2. **Educational Purpose**: UdaanSaheli is an information aggregator and educational empowerment platform. It does not disburse loans, collect processing fees, or guarantee loan approvals.
3. **Simulated Usability Metrics**: The Impact Framework and task completion metrics in Section 8 of the application represent proposed evaluation benchmarks and interactive simulations for hackathon judges, not field-measured survey outcomes.
4. **Voice Assistance**: Audio readout relies on browser support for the Web Speech API. If a browser does not support Hindi voice synthesis, visual text and high-contrast font size controls are provided.

---

## 9. Team Quantum Leapers (BIOS 2026)

Developed for the **BIOS 2026 Hackathon** to empower rural women micro-entrepreneurs across India.
