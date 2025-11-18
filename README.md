# Adzzat Landing Page - MERN Stack

A stunning, modern landing page for Adzzat built with the MERN stack (MongoDB, Express.js, React, Node.js), featuring 3D animations, interactive elements, and enterprise-grade design.

## Features

### Design Highlights
- **3D Particle System**: Interactive hero section with animated particles that respond to mouse movement
- **Smooth Animations**: Floating cards, rotating rings, and scroll-triggered animations
- **Gradient Effects**: Modern gradient text and button styles inspired by top-tier platforms
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Dark Theme**: Professional dark mode design with carefully selected color palette
- **Full-Stack Integration**: Contact form connected to MongoDB database

### Tech Stack

**Frontend:**
- React 18.2.0
- Custom hooks for animations and scroll effects
- Axios for API calls
- CSS3 with advanced animations

**Backend:**
- Node.js
- Express.js 4.18.2
- MongoDB with Mongoose 8.0.3
- Express Validator for form validation
- Helmet for security
- CORS enabled

## Project Structure

```
landing-page/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── Services.js
│   │   │   └── Contact.js
│   │   ├── hooks/         # Custom React hooks
│   │   │   ├── useParticles.js
│   │   │   └── useIntersectionObserver.js
│   │   ├── pages/
│   │   │   └── LandingPage.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── server/                # Node.js backend
│   ├── config/
│   │   └── db.js         # MongoDB connection
│   ├── models/
│   │   └── Contact.js    # Contact schema
│   ├── routes/
│   │   └── contact.js    # Contact API routes
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn**

## Installation & Setup

### Quick Setup (Recommended)

We provide automated setup scripts for both Unix/Mac and Windows:

**On macOS/Linux:**
```bash
git clone https://github.com/niket-singh/landing-page.git
cd landing-page
./setup.sh
```

**On Windows:**
```bash
git clone https://github.com/niket-singh/landing-page.git
cd landing-page
setup.bat
```

The setup script will:
- Check Node.js and MongoDB installation
- Create `.env` files from examples
- Install all dependencies (root, server, and client)
- Provide next steps

### Manual Setup

If you prefer manual setup:

### 1. Clone the Repository

```bash
git clone https://github.com/niket-singh/landing-page.git
cd landing-page
```

### 2. Create Environment Files

**IMPORTANT:** Create `.env` files before installing dependencies.

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
# From project root
npm install          # Install root dependencies
cd server && npm install && cd ..
cd client && npm install && cd ..
```

Or use the convenience script:
```bash
npm run install-all
```

### 4. Start MongoDB

Ensure MongoDB is running on your system:

```bash
# On macOS (using Homebrew)
brew services start mongodb-community

# On Linux
sudo systemctl start mongod

# On Windows
net start MongoDB
# Or use MongoDB Compass
```

Verify MongoDB is running:
```bash
mongosh
# Should connect successfully
```

## Running the Application

You'll need two terminal windows/tabs:

### Terminal 1: Start Backend Server

```bash
cd server
npm run dev
```

The backend will run on `http://localhost:5000`

You should see:
```
Server running in development mode on port 5000
MongoDB Connected: localhost
```

### Terminal 2: Start Frontend Development Server

```bash
cd client
npm start
```

The frontend will run on `http://localhost:3000` and automatically open in your browser.

## API Endpoints

### Contact Form

**POST** `/api/contact`

Submit a contact form entry.

**Request Body:**
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
  "message": "Thank you for contacting us! We will get back to you soon.",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**GET** `/api/contact`

Retrieve all contact submissions (for admin purposes).

**Health Check:** GET `/api/health`

## Building for Production

### Build Frontend

```bash
cd client
npm run build
```

This creates an optimized production build in the `client/build` directory.

### Serve Production Build

You can serve the built React app through the Express server:

1. Update `server/server.js` to serve static files:

```javascript
const path = require('path');

// Serve static files from React app (add after routes)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
```

2. Set environment to production:

```bash
# In server/.env
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
```

3. Start the server:

```bash
cd server
npm start
```

## Deployment

### Deploy to Heroku

1. Create a Heroku app:
```bash
heroku create adzzat-landing
```

2. Add MongoDB (using MongoDB Atlas):
```bash
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
```

3. Deploy:
```bash
git push heroku main
```

### Deploy to Vercel (Frontend) + MongoDB Atlas (Database)

**Frontend (Vercel):**
```bash
cd client
vercel
```

**Backend:** Deploy to Heroku, Railway, or Render.com

**Database:** Use MongoDB Atlas for cloud MongoDB.

### Deploy to AWS

- Frontend: S3 + CloudFront
- Backend: EC2 or Elastic Beanstalk
- Database: MongoDB Atlas or DocumentDB

## Development

### Adding New Components

1. Create component in `client/src/components/`
2. Create corresponding CSS file
3. Import and use in `LandingPage.js`

### Adding New API Routes

1. Create route file in `server/routes/`
2. Add model in `server/models/` if needed
3. Import route in `server/server.js`

### Custom Hooks

Located in `client/src/hooks/`:
- `useParticles.js` - 3D particle animation system
- `useIntersectionObserver.js` - Scroll-triggered animations

## Troubleshooting

### Error: Could not find a required file - index.html

**Error Message:**
```
Could not find a required file.
  Name: index.html
  Searched in: C:\Users\...\landing-page\client\public
```

**Solution:**
This happens if you cloned before the file was pushed. Pull the latest changes:
```bash
git pull origin claude/adzzat-landing-page-01HbfNVcgJnXp9FPHWBaec3v
```

Or manually create `client/public/index.html` with the content from the repository.

### Error: MongoDB URI is undefined

**Error Message:**
```
Error: The `uri` parameter to `openUri()` must be a string, got "undefined"
```

**Solution:**
The `.env` file is missing in the server directory.

**Fix:**
```bash
cd server
cp .env.example .env
```

Then edit `server/.env` and ensure it contains:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/adzzat
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Why this happens:** `.env` files are not tracked by git (for security), so you must create them locally.

### MongoDB Connection Failed

**Error Message:**
```
MongoServerError: connect ECONNREFUSED 127.0.0.1:27017
```

**Solutions:**

1. **MongoDB is not running:**
   ```bash
   # macOS
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod

   # Windows
   net start MongoDB
   ```

2. **MongoDB not installed:**
   - Download from: https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/atlas

3. **Use MongoDB Atlas (Cloud Database):**
   ```env
   # In server/.env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/adzzat
   ```

### Port Already in Use

```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5000 | xargs kill -9
lsof -ti:3000 | xargs kill -9
```

### Dependencies Installation Failed

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete all node_modules
rm -rf node_modules client/node_modules server/node_modules

# Reinstall
npm run install-all
```

### CORS Errors

Ensure `FRONTEND_URL` in server `.env` matches your React app URL:
```env
FRONTEND_URL=http://localhost:3000
```

### React Build Errors

If you see missing dependencies:
```bash
cd client
npm install --legacy-peer-deps
```

## Performance Optimization

### Frontend
- Lazy load components with React.lazy()
- Optimize images (use WebP format)
- Reduce particle count for better performance (in `useParticles.js`)
- Enable React production build

### Backend
- Add Redis for caching
- Implement rate limiting
- Use MongoDB indexes (already configured in models)
- Enable gzip compression

## Security Considerations

- Helmet.js enabled for security headers
- Input validation with express-validator
- CORS configured
- Environment variables for sensitive data
- XSS protection built-in

**For Production:**
- Add authentication for admin endpoints
- Implement rate limiting
- Use HTTPS
- Add CSRF protection
- Sanitize user inputs

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Fully responsive

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

Copyright © 2024 Adzzat. All rights reserved.

## Support

For questions or issues:
- Create an issue on GitHub
- Contact: support@adzzat.com

## Changelog

### Version 1.0.0 (Current)
- Initial MERN stack implementation
- 3D particle system
- Animated hero section
- Full contact form with MongoDB integration
- Responsive design
- Admin API for viewing submissions

## Future Enhancements

- [ ] Admin dashboard for managing contacts
- [ ] Email notifications for form submissions
- [ ] Newsletter subscription
- [ ] Blog section
- [ ] Case studies/portfolio
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Analytics integration
