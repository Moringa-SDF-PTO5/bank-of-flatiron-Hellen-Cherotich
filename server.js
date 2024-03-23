const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Define the API proxy
app.use(
  '/api', // Replace '/api' with the path you want to proxy
  createProxyMiddleware({
    target: 'http://json-server-2bly.onrender.com', // Target the root URL of the JSON server
    changeOrigin: true,
  })
);

// Define route handler for the root URL
app.get('/', (req, res) => {
  // Send the main HTML file or render your application's main page here
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
