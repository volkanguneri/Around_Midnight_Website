import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Create a new image with a black background
const size = 512;
const centerX = size / 2;
const centerY = size / 2;

// Create SVG with "AM" text
const svgText = `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${centerX}" cy="${centerY}" r="${size/2}" fill="black"/>
  <text x="${centerX}" y="${centerY}" font-family="Arial, sans-serif" font-size="220" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">AM</text>
</svg>
`;

// Output paths
const staticPath = path.resolve('static', 'favicon.png');
const svgStaticPath = path.resolve('static', 'favicon.svg');

// Generate the favicon PNG
sharp(Buffer.from(svgText))
  .resize(512, 512)
  .png()
  .toFile(staticPath)
  .then(() => {
    console.log(`Favicon PNG created at: ${staticPath}`);
  })
  .catch(err => {
    console.error('Error creating favicon PNG:', err);
  });

// Save the SVG file
fs.writeFileSync(svgStaticPath, svgText);
console.log(`Favicon SVG created at: ${svgStaticPath}`);

