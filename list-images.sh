#!/bin/bash

# Script to list all images in assets folder and help organize them

echo "========================================"
echo "  ADZZAT - Image Organization Helper"
echo "========================================"
echo ""

ASSETS_DIR="client/public/assets"

echo "📁 Current Assets Structure:"
echo ""

# Check colleges folder
if [ -d "$ASSETS_DIR/colleges" ]; then
    COLLEGE_COUNT=$(ls -1 "$ASSETS_DIR/colleges" 2>/dev/null | wc -l)
    echo "✓ Colleges: $COLLEGE_COUNT images"
    if [ $COLLEGE_COUNT -gt 0 ]; then
        echo "  Files: $(ls "$ASSETS_DIR/colleges" | head -5 | tr '\n' ' ')..."
    fi
else
    echo "✗ Colleges: Folder not found"
fi

echo ""

# Check images folder
if [ -d "$ASSETS_DIR/images" ]; then
    IMAGE_COUNT=$(ls -1 "$ASSETS_DIR/images" 2>/dev/null | grep -E '\.(jpg|jpeg|png|webp|gif)$' | wc -l)
    echo "✓ Images: $IMAGE_COUNT images"
    if [ $IMAGE_COUNT -gt 0 ]; then
        echo ""
        echo "  Found images:"
        ls -1h "$ASSETS_DIR/images" | grep -E '\.(jpg|jpeg|png|webp|gif)$' | nl
    else
        echo "  (No images yet - add your WhatsApp images here!)"
    fi
else
    echo "✗ Images: Folder not found"
fi

echo ""
echo "========================================"
echo ""
echo "📍 To add images:"
echo "   1. Copy your WhatsApp images to: $ASSETS_DIR/images/"
echo "   2. Rename them meaningfully (e.g., team-1.jpg, hero-bg.png)"
echo "   3. Run this script again to verify"
echo ""
echo "📖 Read the guide:"
echo "   $ASSETS_DIR/images/README.md"
echo ""
echo "========================================"
