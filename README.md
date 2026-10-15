# UdaanSaheli (उड़ान सहेली)
### Digital Platform for Rural Women Entrepreneurs
**Team:** Quantum Leapers  
**Hackathon Problem Statement:** Digital Platform for Rural Women Entrepreneurs — BIOS 2026 Hackathon  
**Target Audience:** Rural and semi-urban women micro-entrepreneurs, self-help groups (SHGs), and village artisans across India.

---

## 1. Project Objective

Rural women entrepreneurs face systemic barriers: fragmented business information, digital illiteracy, language barriers, predatory moneylenders, and difficulty discovering authentic government subsidies. 

**UdaanSaheli (उड़ान सहेली)** is a lightweight, mobile-first web application designed specifically for rural smartphones, low-bandwidth connections, and first-time digital users. It brings verified government schemes, practical step-by-step business guides, free district vocational training, and institutional market linkages into one simple, bilingual (Hindi & English) portal.

---

## 2. Key Features

- **🌐 Zero-Latency Bilingual Toggle (हिन्दी / English)**: Switch the entire user interface and curated content seamlessly with one tap. Tailored with respectful, accessible language.
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
  - PMEGP (Prime Minister Employment Generation Programme — 35% rural subsidy)
  - Pradhan Mantri Mudra Yojana (Shishu & Kishore collateral-free micro-loans)
  - Lakhpati Didi Initiative (DAY-NRLM)
  - PMFME (Food processing equipment subsidy)
  - RSETI (Free district residential vocational training)
  - GeM Saras Collection (Direct selling to government departments)
  - ONDC (Open Network for Digital Commerce)
  - SARAS Mela & Hunar Haat Exhibitions
- **🔖 Zero-Friction Bookmarks (Saved Resources)**: One-tap bookmarking stored directly in browser `localStorage`. No mandatory logins, OTPs, or passwords required.
- **🔍 Instant Live Search & Filters**: Search in Hindi or English by scheme name, product, or keyword with real-time feedback and clear empty states.
- **📊 BIOS 2026 Impact Framework & Usability Simulator**: Interactive simulation measuring:
  1. *Time taken to find a relevant resource* (Target: < 60s)
  2. *Task completion rate*
  3. *Official link click-through leads*

---

## 3. Technology Stack

- **Frontend**: React 18, Vite 6, Tailwind CSS 3.4, Lucide React Icons
- **Backend**: Node.js v22, Express.js 4.21, Mongoose 8.9, CORS, Morgan
- **Database**: MongoDB Atlas (with automatic fallback to resilient in-memory cache if MongoDB is offline or unconfigured)
- **Deployment Ready**:
  - Frontend: Vercel (`vercel.json`)
  - Backend: Render (`render.yaml`)
- **Version Control**: Git & GitHub

---

## 4. Project Structure

```
udaansaheli/
├── client/                     # Frontend (React + Vite + Tailwind CSS)
│   ├── public/
│   │   └── favicon.svg         # UdaanSaheli wing motif
│   ├── src/
│   │   ├── components/
│   │   │   ├── AudioReader.jsx       # Web Speech API TTS
│   │   │   ├── BottomNav.jsx         # Mobile bottom navigation bar
│   │   │   ├── Footer.jsx            # Helplines (1800-180-2000, 181) & Disclaimer
│   │   │   ├── Navbar.jsx            # Bilingual header & text size toggle
│   │   │   ├── ResourceCard.jsx      # Touch-friendly 48px cards
│   │   │   ├── SearchAndFilter.jsx   # Search bar & filter pills
│   │   │   └── VerificationBadge.jsx # Official portal badge
│   │   ├── context/
│   │   │   ├── LanguageContext.jsx   # Hindi/English state with localStorage
│   │   │   └── SavedContext.jsx      # Bookmark state with localStorage
│   │   ├── data/
│   │   │   └── initialData.js        # Offline fallback dataset
│   │   ├── pages/
│   │   │   ├── HomePage.jsx          # Hero, 3 steps, 6 categories, spotlight
│   │   │   ├── ImpactMetricsPage.jsx # BIOS 2026 evaluation simulator
│   │   │   ├── OpportunitiesPage.jsx # Schemes, training, and markets
│   │   │   ├── ResourceDetailPage.jsx# Roadmap, eligibility & official links
│   │   │   ├── ResourcesPage.jsx     # Searchable directory with empty state
│   │   │   └── SavedPage.jsx         # Offline bookmarked guides
│   │   ├── services/
│   │   │   └── api.js                # Resilient API communication layer
│   │   ├── translations/
│   │   │   ├── en.js                 # English dictionary
│   │   │   └── hi.js                 # Hindi dictionary
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── vercel.json             # Vercel SPA routing
│   ├── .env.example
│   └── package.json
├── server/                     # Backend (Node.js + Express + MongoDB Atlas)
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js           # Resilient connection & auto-seeder
│   │   ├── controllers/
│   │   │   └── resourceController.js # REST API handlers
│   │   ├── data/
│   │   │   └── seedData.js     # Curated authentic schemes & business guides
│   │   ├── models/
│   │   │   └── Resource.js     # Mongoose bilingual schema
│   │   ├── routes/
│   │   │   └── resourceRoutes.js # Express router
│   │   └── index.js            # Express app entrypoint
│   ├── render.yaml             # Render service declaration
│   ├── test-api.js             # Automated verification suite
│   ├── .env.example
│   └── package.json
├── README.md
└── .gitignore
```

---

## 5. Local Setup & Running Instructions

### Prerequisites
- Node.js (v18 or higher, tested on v22.14.0)
- npm (v9 or higher, tested on 10.9.2)

### Step 1: Clone or Navigate to the Repository
```bash
git clone https://github.com/YOUR_USERNAME/udaansaheli.git
cd udaansaheli
```

### Step 2: Set Up and Run the Backend Server
```bash
cd server
npm install

# (Optional) Configure environment variables
cp .env.example .env

# Start the Express server
npm start
```
The server will start on `http://localhost:5000`.  
> **Note on Database**: If you haven't provided a `MONGODB_URI` yet, the backend automatically runs in **resilient in-memory mode** using the seed dataset. It will never crash or fail to serve requests.

### Step 3: Set Up and Run the Frontend Client
In a new terminal window:
```bash
cd client
npm install

# Start the Vite development server
npm run dev
```
Open your browser and visit:  
👉 **`http://localhost:5173`**

---

## 6. Environment Variables Guide

### Server (`server/.env`)
```ini
PORT=5000
NODE_ENV=development
# MongoDB Atlas Connection URI
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/udaansaheli?retryWrites=true&w=majority
# Frontend CORS origin
CORS_ORIGIN=http://localhost:5173
```

### Client (`client/.env`)
```ini
# Production API URL (leave blank in dev to use Vite proxy)
VITE_API_URL=http://localhost:5000
```

---

## 7. Deployment Instructions

### A. Deploy Backend to Render
1. Push your code to your GitHub repository.
2. In Render dashboard (`dashboard.render.com`), click **New + Web Service**.
3. Connect your `udaansaheli` repository.
4. Set **Root Directory** to `server`.
5. Set **Build Command** to `npm install`.
6. Set **Start Command** to `npm start`.
7. Under **Environment Variables**, add:
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
   - `MONGODB_URI`: *Your MongoDB Atlas connection string*
   - `CORS_ORIGIN`: *Your deployed Vercel URL (e.g. `https://udaansaheli.vercel.app`)*
8. Click **Deploy Web Service**. Note your backend public URL (e.g., `https://udaansaheli-api.onrender.com`).

### B. Deploy Frontend to Vercel
1. In Vercel dashboard (`vercel.com`), click **Add New... > Project**.
2. Select your `udaansaheli` repository.
3. Set **Root Directory** to `client`.
4. Framework preset will automatically detect **Vite**.
5. Under **Environment Variables**, add:
   - `VITE_API_URL`: `https://udaansaheli-api.onrender.com` (your Render backend URL)
6. Click **Deploy**. Vercel will build and assign your production domain.

---

## 8. Verification & Test Suite

The application includes an automated test verification script (`server/test-api.js`):
```bash
cd server
node test-api.js
```

### Verified Test Cases:
- [x] **12 Verified Records Loaded**: All schemes and business guides checked for required schema fields.
- [x] **Bilingual Integrity**: Verified that 100% of titles, descriptions, eligibility notes, and steps exist in both English and Hindi.
- [x] **Official Portal URL Validation**: Confirmed that all government schemes point directly to authentic `.gov.in` / `.org.in` domains.
- [x] **Bilingual Search Precision**: Tested keyword searches in Hindi (e.g. `ऋण`) and English (e.g. `mudra`).
- [x] **Mobile Responsiveness**: Verified on 360px budget viewport with sticky bottom navigation and 48px+ touch targets.
- [x] **Zero-Friction LocalStorage Persistence**: Verified bookmarks save and persist across browser refreshes without user authentication.
- [x] **Web Speech API Audio Playback**: Tested voice read-aloud functionality with Hindi and English voice fallbacks.
- [x] **Production Bundle Compilation**: Tested `npm run build` on Vite frontend with zero errors.

---

## 9. Disclaimers & Limitations (Addressing Build-Plan Risks)

1. **Information Accuracy**: Government scheme guidelines, interest rates, and subsidies may be updated by ministries over time. UdaanSaheli clearly displays the `Last-Verified Date` on every record and directs users directly to the official ministry portals (`pmegp.gov.in`, `mudra.org.in`, `aajeevika.gov.in`).
2. **Educational Purpose**: UdaanSaheli is an information aggregator and educational empowerment platform. It does not disburse loans, charge processing fees, or guarantee loan approvals.
3. **Accessibility**: Audio reader depends on device browser support for the Web Speech API. Visual fallbacks and large typography are always available.

---

## 10. Team Quantum Leapers (BIOS 2026)

Developed with pride for the **BIOS 2026 Hackathon** to empower rural women micro-entrepreneurs across India.
