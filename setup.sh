#!/bin/bash

# Adzzat Landing Page - Setup Script
# This script sets up the development environment for the Adzzat landing page

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_header() {
    echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
}

# Header
clear
echo -e "${BLUE}"
echo "╔═══════════════════════════════════════════╗"
echo "║                                           ║"
echo "║     Adzzat Landing Page Setup Script     ║"
echo "║                                           ║"
echo "╚═══════════════════════════════════════════╝"
echo -e "${NC}\n"

# Step 1: Check Node.js
print_header "Step 1: Checking Prerequisites"

if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    print_success "Node.js is installed: $NODE_VERSION"

    # Check if version is >= 16
    MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$MAJOR_VERSION" -lt 16 ]; then
        print_warning "Node.js version should be 16 or higher. Current: $NODE_VERSION"
        print_info "Download from: https://nodejs.org/"
    fi
else
    print_error "Node.js is not installed!"
    print_info "Please install Node.js (v16+) from https://nodejs.org/"
    exit 1
fi

# Check npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    print_success "npm is installed: v$NPM_VERSION"
else
    print_error "npm is not installed!"
    exit 1
fi

# Check MongoDB (optional check)
if command -v mongod &> /dev/null; then
    MONGO_VERSION=$(mongod --version | head -n1)
    print_success "MongoDB is installed: $MONGO_VERSION"
elif command -v mongosh &> /dev/null; then
    print_success "MongoDB Shell (mongosh) is installed"
    print_info "Make sure MongoDB server is running or use MongoDB Atlas"
else
    print_warning "MongoDB is not detected on your system"
    print_info "You can either:"
    print_info "  1. Install MongoDB locally: https://www.mongodb.com/try/download/community"
    print_info "  2. Use MongoDB Atlas (cloud): https://www.mongodb.com/atlas"
fi

# Step 2: Create .env files
print_header "Step 2: Creating Environment Files"

# Server .env
if [ -f "server/.env" ]; then
    print_warning "server/.env already exists, skipping..."
else
    if [ -f "server/.env.example" ]; then
        cp server/.env.example server/.env
        print_success "Created server/.env from server/.env.example"
        print_info "Please edit server/.env and configure your MongoDB URI"
    else
        print_error "server/.env.example not found!"
        exit 1
    fi
fi

# Client .env
if [ -f "client/.env" ]; then
    print_warning "client/.env already exists, skipping..."
else
    if [ -f "client/.env.example" ]; then
        cp client/.env.example client/.env
        print_success "Created client/.env from client/.env.example"
    else
        print_error "client/.env.example not found!"
        exit 1
    fi
fi

# Step 3: Install Dependencies
print_header "Step 3: Installing Dependencies"

print_info "Installing server dependencies..."
cd server
npm install
cd ..
print_success "Server dependencies installed"

print_info "Installing client dependencies..."
cd client
npm install
cd ..
print_success "Client dependencies installed"

# Step 4: Final Instructions
print_header "Setup Complete! 🎉"

echo -e "${GREEN}Your Adzzat landing page is ready to run!${NC}\n"

echo -e "${BLUE}Next Steps:${NC}\n"

echo -e "${YELLOW}1. Start MongoDB:${NC}"
echo -e "   ${BLUE}macOS:${NC}     brew services start mongodb-community"
echo -e "   ${BLUE}Linux:${NC}     sudo systemctl start mongod"
echo -e "   ${BLUE}Windows:${NC}   net start MongoDB"
echo -e "   ${BLUE}Or use:${NC}    MongoDB Atlas (cloud)\n"

echo -e "${YELLOW}2. Start Backend Server (Terminal 1):${NC}"
echo -e "   cd server"
echo -e "   npm run dev\n"

echo -e "${YELLOW}3. Start Frontend (Terminal 2):${NC}"
echo -e "   cd client"
echo -e "   npm start\n"

echo -e "${YELLOW}4. Open in Browser:${NC}"
echo -e "   Frontend: ${GREEN}http://localhost:3000${NC}"
echo -e "   Backend:  ${GREEN}http://localhost:5000${NC}\n"

print_info "Configuration files:"
echo -e "   • ${BLUE}server/.env${NC} - Configure MongoDB URI and backend settings"
echo -e "   • ${BLUE}client/.env${NC} - Configure API URL and site settings\n"

print_info "Documentation: See README.md for detailed information\n"

echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}Setup completed successfully!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
