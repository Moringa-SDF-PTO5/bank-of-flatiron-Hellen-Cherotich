const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// Define route handler for the root URL
app.get('/', (req, res) => {
  // Send the main HTML file or render your application's main page here
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
