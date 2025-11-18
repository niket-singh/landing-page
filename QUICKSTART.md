# Quick Start Guide - Adzzat Landing Page

This guide will help you get the application running on your local machine in minutes.

## Step 1: Pull Latest Changes

Since you already cloned the repo, pull the latest updates:

```bash
cd landing-page
git pull origin claude/adzzat-landing-page-01HbfNVcgJnXp9FPHWBaec3v
```

## Step 2: Run Setup Script

**On Windows (Git Bash or Command Prompt):**
```bash
setup.bat
```

**On macOS/Linux:**
```bash
./setup.sh
```

The script will:
- ✓ Check Node.js installation
- ✓ Check MongoDB installation
- ✓ Create `.env` files
- ✓ Install all dependencies

## Step 3: Start MongoDB

**On Windows:**

Option 1 - Using Command Prompt (as Administrator):
```bash
net start MongoDB
```

Option 2 - Using MongoDB Compass:
- Open MongoDB Compass
- Click "Connect" (default connection)

**On macOS:**
```bash
brew services start mongodb-community
```

**On Linux:**
```bash
sudo systemctl start mongod
```

**Don't have MongoDB?** Use MongoDB Atlas (free cloud database):
1. Go to https://www.mongodb.com/atlas
2. Create free account
3. Create a cluster
4. Get connection string
5. Update `server/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/adzzat
   ```

## Step 4: Start the Application

**Option A - Run Both Together (Recommended):**
```bash
npm run dev
```

This runs both frontend and backend simultaneously.

**Option B - Run Separately:**

Terminal 1 (Backend):
```bash
cd server
npm run dev
```

Terminal 2 (Frontend):
```bash
cd client
npm start
```

## Step 5: Open Your Browser

The frontend will automatically open at:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **Health Check:** http://localhost:5000/api/health

## Troubleshooting

### Issue 1: "Could not find index.html"

**Fix:**
```bash
git pull origin claude/adzzat-landing-page-01HbfNVcgJnXp9FPHWBaec3v
```

### Issue 2: "MongoDB URI is undefined"

**Fix:**
```bash
cd server
copy .env.example .env
# Then edit .env and set MONGODB_URI
```

### Issue 3: "MongoDB connection failed"

**Fix:** Start MongoDB:
```bash
net start MongoDB
```

Or use MongoDB Compass, or use MongoDB Atlas (cloud).

### Issue 4: Port already in use

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

**macOS/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

## What You Should See

### Backend (Server) Output:
```
Server running in development mode on port 5000
MongoDB Connected: localhost
```

### Frontend (Client) Output:
```
Compiled successfully!

You can now view adzzat-landing-client in the browser.

  Local:            http://localhost:3000
```

### Browser:
- Beautiful landing page with 3D particle animations
- Smooth scrolling sections
- Working contact form
- Responsive design

## Testing the Contact Form

1. Scroll to the contact section
2. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Interest: Select any option
   - Message: This is a test
3. Click "Send Message"
4. You should see a success message

### Verify Data in MongoDB:

```bash
mongosh
use adzzat
db.contacts.find().pretty()
```

You should see your test submission!

## Next Steps

1. **Customize Content:** Edit `client/src/components/` files
2. **Update Branding:** Change colors in `client/src/index.css`
3. **Add Features:** Create new components in `client/src/components/`
4. **Deploy:** Follow deployment guides in README.md

## Need Help?

- Check the full README.md for detailed documentation
- See the Troubleshooting section in README.md
- Check MongoDB is running: `mongosh`
- Check Node.js version: `node --version` (should be v16+)

## Common Commands

```bash
# Start development
npm run dev

# Install all dependencies
npm run install-all

# Build for production
cd client && npm run build

# Start backend only
cd server && npm run dev

# Start frontend only
cd client && npm start
```

Happy coding! 🚀
