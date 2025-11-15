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

### 1. Clone the Repository

```bash
git clone https://github.com/niket-singh/landing-page.git
cd landing-page
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

### 4. Configure Environment Variables

**Backend (.env in server/ directory):**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/adzzat
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Frontend (.env in client/ directory):**
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SITE_NAME=Adzzat
```

### 5. Start MongoDB

Ensure MongoDB is running on your system:

```bash
# On macOS (using Homebrew)
brew services start mongodb-community

# On Linux
sudo systemctl start mongod

# On Windows
net start MongoDB
```

Verify MongoDB is running:
```bash
mongosh
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

### Port Already in Use

```bash
# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9
```

### MongoDB Connection Error

1. Ensure MongoDB is running
2. Check MONGODB_URI in `.env`
3. Try connecting via mongosh: `mongosh mongodb://localhost:27017`

### CORS Errors

Ensure `FRONTEND_URL` in server `.env` matches your React app URL.

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
