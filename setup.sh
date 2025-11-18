#!/bin/bash

# Adzzat Landing Page - Setup Script
# This script sets up your development environment

echo "======================================"
echo "  Adzzat Landing Page - Setup"
echo "======================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Node.js is installed
echo -e "${BLUE}Checking Node.js installation...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js is not installed. Please install Node.js v16 or higher.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Node.js $(node --version) found${NC}"
echo ""

# Check if MongoDB is installed
echo -e "${BLUE}Checking MongoDB installation...${NC}"
if ! command -v mongosh &> /dev/null && ! command -v mongo &> /dev/null; then
    echo -e "${RED}Warning: MongoDB CLI not found. Make sure MongoDB is installed and running.${NC}"
else
    echo -e "${GREEN}✓ MongoDB found${NC}"
fi
echo ""

# Create server .env file
echo -e "${BLUE}Setting up server environment...${NC}"
if [ ! -f "server/.env" ]; then
    cp server/.env.example server/.env
    echo -e "${GREEN}✓ Created server/.env${NC}"
else
    echo -e "${GREEN}✓ server/.env already exists${NC}"
fi

# Create client .env file
echo -e "${BLUE}Setting up client environment...${NC}"
if [ ! -f "client/.env" ]; then
    cp client/.env.example client/.env
    echo -e "${GREEN}✓ Created client/.env${NC}"
else
    echo -e "${GREEN}✓ client/.env already exists${NC}"
fi
echo ""

# Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
echo ""

echo -e "${BLUE}Installing root dependencies...${NC}"
npm install
echo ""

echo -e "${BLUE}Installing server dependencies...${NC}"
cd server
npm install
cd ..
echo ""

echo -e "${BLUE}Installing client dependencies...${NC}"
cd client
npm install
cd ..
echo ""

echo -e "${GREEN}======================================"
echo "  Setup Complete!"
echo "======================================${NC}"
echo ""
echo "Next steps:"
echo ""
echo "1. Start MongoDB:"
echo "   ${BLUE}mongod${NC} or ${BLUE}brew services start mongodb-community${NC} (macOS)"
echo ""
echo "2. Run the application:"
echo "   ${BLUE}npm run dev${NC} (runs both frontend and backend)"
echo ""
echo "   Or run separately:"
echo "   Terminal 1: ${BLUE}cd server && npm run dev${NC}"
echo "   Terminal 2: ${BLUE}cd client && npm start${NC}"
echo ""
echo "3. Open your browser:"
echo "   Frontend: ${BLUE}http://localhost:3000${NC}"
echo "   Backend:  ${BLUE}http://localhost:5000${NC}"
echo ""
echo -e "${GREEN}Happy coding!${NC}"
