@echo off
REM Adzzat Landing Page - Setup Script for Windows
REM This script sets up your development environment

echo ======================================
echo   Adzzat Landing Page - Setup
echo ======================================
echo.

REM Check if Node.js is installed
echo Checking Node.js installation...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: Node.js is not installed. Please install Node.js v16 or higher.
    exit /b 1
)
node --version
echo Node.js found!
echo.

REM Check if MongoDB is installed
echo Checking MongoDB installation...
where mongosh >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Warning: MongoDB CLI not found. Make sure MongoDB is installed and running.
) else (
    echo MongoDB found!
)
echo.

REM Create server .env file
echo Setting up server environment...
if not exist "server\.env" (
    copy "server\.env.example" "server\.env"
    echo Created server\.env
) else (
    echo server\.env already exists
)

REM Create client .env file
echo Setting up client environment...
if not exist "client\.env" (
    copy "client\.env.example" "client\.env"
    echo Created client\.env
) else (
    echo client\.env already exists
)
echo.

REM Install dependencies
echo Installing dependencies...
echo.

echo Installing root dependencies...
call npm install
echo.

echo Installing server dependencies...
cd server
call npm install
cd ..
echo.

echo Installing client dependencies...
cd client
call npm install
cd ..
echo.

echo ======================================
echo   Setup Complete!
echo ======================================
echo.
echo Next steps:
echo.
echo 1. Start MongoDB:
echo    mongod (or use MongoDB Compass)
echo.
echo 2. Run the application:
echo    npm run dev (runs both frontend and backend)
echo.
echo    Or run separately:
echo    Terminal 1: cd server ^&^& npm run dev
echo    Terminal 2: cd client ^&^& npm start
echo.
echo 3. Open your browser:
echo    Frontend: http://localhost:3000
echo    Backend:  http://localhost:5000
echo.
echo Happy coding!
echo.
pause
