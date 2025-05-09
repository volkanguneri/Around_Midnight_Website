import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a canvas
const size = 512;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Draw black circle background
ctx.beginPath();
ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();

// Draw text "AM"
ctx.fillStyle = 'white';
ctx.font = 'bold 220px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('AM', size / 2, size / 2);

// Save as PNG
const buffer = canvas.toBuffer('image/png');
const outputPath = path.join(__dirname, '..', 'static', 'favicon.png');
fs.writeFileSync(outputPath, buffer);

console.log(`Favicon created at: ${outputPath}`);
