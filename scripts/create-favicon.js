import sharp from 'sharp';
import { join } from 'path';

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

// Output path
const outputPath = join('static', 'favicon.png');

// Generate the favicon
sharp(Buffer.from(svgText))
  .resize(512, 512)
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log(`Favicon created at: ${outputPath}`);
  })
  .catch(err => {
    console.error('Error creating favicon:', err);
  });
