const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Example API routes - replace with your own route handlers
app.get('/api/data', (req, res) => {
    // Replace this with logic to handle your API endpoint
    res.json({ message: 'API data here' });
});

// Example POST route - replace with your own route handlers
app.post('/api/data', (req, res) => {
    // Replace this with logic to handle POST requests
    console.log('Received POST request:', req.body);
    res.json({ message: 'Data received successfully' });
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
