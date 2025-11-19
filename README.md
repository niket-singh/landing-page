# Adzzat Landing Page

A stunning, modern landing page for Adzzat built with the MERN stack (MongoDB, Express.js, React, Node.js), featuring Soul AI-inspired design, premium animations, and enterprise-grade UI.

## 🎨 Design Features

### Premium Visual Experience
- **White & Blue Theme**: Clean, minimal, professional design inspired by Soul AI
- **Floating Orbs**: 11 GPU-accelerated animated gradient orbs for depth
- **Enhanced Animations**: 20+ premium animation effects (magnetic, liquid blobs, morphing gradients)
- **HeroWhiteBlue Component**: Modern hero with blue gradient blobs and grid pattern
- **College Logos Marquee**: Dual-layer infinite scrolling (Soul AI style)
- **Glassmorphism Effects**: Blur(30px) + saturate(180%) for modern depth
- **Expandable Cards**: Hover to reveal content for cleaner UI
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile

### UI Components (V2)
- ✅ Clean centered hero section with animated stats counter
- ✅ Glass-morphism service cards with shimmer effects
- ✅ Interactive timeline for "How It Works"
- ✅ Benefits section with expandable cards
- ✅ Expertise grid showcasing AI/ML capabilities
- ✅ Impact section with metrics
- ✅ Infinite scrolling college logos (2 layers)
- ✅ Interactive FAQ accordion
- ✅ Full-stack contact form (MongoDB backend)

## 🚀 Tech Stack

**Frontend:**
- React 18.2.0
- Modern CSS3 (Animations, Gradients, Glassmorphism)
- Custom hooks (useScrollAnimation, useParticles, useIntersectionObserver)
- Axios for API calls
- Soul AI & Deccan AI inspired design patterns

**Backend:**
- Node.js + Express.js 4.18.2
- MongoDB with Mongoose 8.0.3
- Express Validator for form validation
- Helmet for security headers
- CORS enabled

**Fonts:**
- Inter (Soul AI style)
- Space Grotesk (Creative, modern)
- JetBrains Mono (Code blocks)

## 📁 Project Structure

```
landing-page/
├── client/                     # React frontend
│   ├── public/
│   │   ├── assets/
│   │   │   ├── colleges/       # I1-I29 college logos
│   │   │   └── images/         # Additional images
│   │   └── index.html
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── NavbarV2.js
│   │   │   ├── HeroV2.js       # Premium purple theme
│   │   │   ├── HeroWhiteBlue.js # Clean blue theme (active)
│   │   │   ├── ServicesV2.js
│   │   │   ├── HowItWorksV2.js
│   │   │   ├── BenefitsV2.js
│   │   │   ├── ExpertiseGridV2.js
│   │   │   ├── ImpactSectionV2.js
│   │   │   ├── CollegeLogos.js
│   │   │   ├── CollegeLogosSoulAI.js # Soul AI style (active)
│   │   │   ├── FAQV2.js
│   │   │   ├── Contact.js
│   │   │   └── FloatingOrbs.js
│   │   ├── hooks/              # Custom React hooks
│   │   │   ├── useParticles.js
│   │   │   ├── useScrollAnimation.js
│   │   │   └── useIntersectionObserver.js
│   │   ├── pages/
│   │   │   └── LandingPage.js
│   │   ├── styles/             # Global CSS
│   │   │   ├── premium-backgrounds.css
│   │   │   ├── adzzat-enhanced-animations.css
│   │   │   └── theme-white-blue.css
│   │   ├── index.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── server/                     # Node.js backend
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── models/
│   │   └── Contact.js         # Contact schema
│   ├── routes/
│   │   └── contact.js         # Contact API routes
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── package.json               # Root package.json
├── LICENSE
└── README.md
```

## 🛠️ Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn**

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/niket-singh/landing-page.git
cd landing-page
```

### 2. Create Environment Files

**Server (.env in server/ directory):**
```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/adzzat
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Client (.env in client/ directory):**
```bash
cd ../client
cp .env.example .env
```

Edit `client/.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SITE_NAME=Adzzat
```

### 3. Install Dependencies

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 4. Start MongoDB

Ensure MongoDB is running:

```bash
# macOS (using Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows
net start MongoDB
```

Verify MongoDB is running:
```bash
mongosh
# Should connect successfully
```

## 🚀 Running the Application

You'll need **two terminal windows**:

### Terminal 1: Start Backend Server

```bash
cd server
npm run dev
```

The backend runs on `http://localhost:5000`

Expected output:
```
Server running in development mode on port 5000
MongoDB Connected: localhost
```

### Terminal 2: Start Frontend

```bash
cd client
npm start
```

The frontend runs on `http://localhost:3000` and opens automatically in your browser.

## 🎨 Theme Customization

### Toggle Between Hero Themes

In `client/src/pages/LandingPage.js`:

```javascript
// Option 1: Clean White & Blue (Soul AI style) - ACTIVE
<HeroWhiteBlue />

// Option 2: Premium Purple with Orbs
// <HeroV2 />
```

### Toggle College Logos Style

In `client/src/pages/LandingPage.js`:

```javascript
// Option 1: Soul AI Minimalist Style - ACTIVE
<CollegeLogosSoulAI />

// Option 2: Original Style
// <CollegeLogos />
```

### Enable Full White/Blue Theme

Uncomment in `client/src/index.css`:

```css
/* Import White & Blue Theme */
@import './styles/theme-white-blue.css';
```

## 🔌 API Endpoints

### Contact Form

**POST** `/api/contact`

Submit a contact form entry.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Tech Corp",
  "interest": "talent",
  "message": "We're interested in hiring talent..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us!",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**GET** `/api/contact` - Retrieve all submissions (admin)

**GET** `/api/health` - Health check

## 📱 Browser Support

- ✅ Chrome/Edge: Full support
- ✅ Firefox: Full support
- ✅ Safari: Full support
- ✅ Mobile browsers: Fully responsive

## 🏗️ Building for Production

### Build Frontend

```bash
cd client
npm run build
```

Creates optimized build in `client/build/`

### Production Server Setup

Update `server/server.js`:

```javascript
const path = require('path');

// Serve static files from React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
```

Set production environment:
```bash
# In server/.env
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
```

Start server:
```bash
cd server
npm start
```

## 🚢 Deployment Options

### Vercel (Frontend) + MongoDB Atlas

**Frontend:**
```bash
cd client
vercel
```

**Backend:** Deploy to Heroku, Railway, or Render

**Database:** MongoDB Atlas (cloud)

### Heroku (Full Stack)

```bash
heroku create adzzat-landing
heroku config:set MONGODB_URI=your_atlas_uri
git push heroku main
```

### AWS

- Frontend: S3 + CloudFront
- Backend: EC2 / Elastic Beanstalk
- Database: MongoDB Atlas / DocumentDB

## 🐛 Troubleshooting

### MongoDB Connection Failed

```bash
# Start MongoDB
brew services start mongodb-community  # macOS
sudo systemctl start mongod            # Linux
net start MongoDB                      # Windows
```

Or use **MongoDB Atlas** (cloud):
```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/adzzat
```

### Port Already in Use

```bash
# macOS/Linux
lsof -ti:5000 | xargs kill -9
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Missing .env Files

```bash
cd server && cp .env.example .env
cd ../client && cp .env.example .env
```

### Dependencies Installation Failed

```bash
npm cache clean --force
rm -rf node_modules client/node_modules server/node_modules
cd server && npm install
cd ../client && npm install
```

## ⚡ Performance Optimizations

### Frontend
- ✅ Lazy load components (React.lazy)
- ✅ Optimize images (WebP format)
- ✅ GPU-accelerated animations
- ✅ Hardware-accelerated transforms
- ✅ Reduced motion support

### Backend
- ✅ Helmet.js security headers
- ✅ CORS configured
- ✅ Input validation
- ✅ MongoDB indexes

## 🔒 Security Features

- Helmet.js for security headers
- Input validation (express-validator)
- XSS protection
- CORS configured
- Environment variables for secrets
- Sanitized user inputs

**For Production:**
- Add authentication for admin routes
- Implement rate limiting
- Enable HTTPS
- Add CSRF protection

## 📝 License

Copyright © 2024 Adzzat. All rights reserved.

## 💬 Support

For questions or issues:
- Create an issue on [GitHub](https://github.com/niket-singh/landing-page)
- Contact: support@adzzat.com

## 🎯 Changelog

### Version 2.0.0 (Current)
- ✅ Soul AI inspired redesign
- ✅ White & Blue theme
- ✅ HeroWhiteBlue component
- ✅ Enhanced animations library
- ✅ Dual-layer college logos marquee
- ✅ Floating orbs background
- ✅ Glassmorphism effects
- ✅ Expandable cards
- ✅ Responsive redesign

### Version 1.0.0
- Initial MERN stack implementation
- 3D particle system
- Contact form with MongoDB
- Admin API

## 🚀 Future Enhancements

- [ ] Admin dashboard for contacts
- [ ] Email notifications
- [ ] Newsletter subscription
- [ ] Blog/Case studies section
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] A/B testing framework

---

**Built with ❤️ for Adzzat**
