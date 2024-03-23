import express from 'express';

import path from 'path';


const app = express();
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Now you can use __dirname in your code


// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Define route handler for the root URL
app.get('/', (req, res) => {
  // Send the main HTML file or render your application's main page here
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
require('@babel/register')({
  presets: ['@babel/preset-env']
});

// Your original entry file
require('./server.js');


