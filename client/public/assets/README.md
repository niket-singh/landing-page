# Assets Folder

This folder contains all static assets for the Adzzat landing page.

## College Logos

### Location
Place all college logos (I1 to I29) in the `/assets/colleges/` directory.

### File Naming Convention
- Files should be named: `I1.png`, `I2.png`, `I3.png`, ... `I29.png`
- Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`

### Image Requirements
- **Recommended size**: 200x130 pixels (or similar aspect ratio)
- **Format**: PNG with transparent background preferred
- **Quality**: High resolution for crisp display
- **File size**: Optimized (< 100KB per logo)

### How to Add Images

1. **Copy all college logos** (I1 to I29) to:
   ```
   client/public/assets/colleges/
   ```

2. **Verify naming**:
   ```
   I1.png
   I2.png
   I3.png
   ...
   I29.png
   ```

3. **Test**: Refresh the browser and scroll to "Experts From Premier Colleges" section

### If You Have Different Extensions
If your images are `.jpg` instead of `.png`, update the file paths in:
`client/src/components/CollegeLogos.js` at line 8:
```javascript
path: `/assets/colleges/I${i + 1}.jpg` // Change .png to .jpg
```

## Other Images

Place other images in appropriate subdirectories:
- `/assets/images/` - General images
- `/assets/icons/` - Icon files
- `/assets/backgrounds/` - Background images

## Usage

Images are accessed via:
```javascript
<img src="/assets/colleges/I1.png" alt="College Logo" />
```

Or in CSS:
```css
background-image: url('/assets/colleges/I1.png');
```
