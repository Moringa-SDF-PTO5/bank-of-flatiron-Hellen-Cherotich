const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve index.html for all routes
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Example POST route - replace with your own route handlers
app.post('/api/data', (req, res) => {
    // Replace this with logic to handle POST requests
    console.log('Received POST request:', req.body);
    res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(port, function () {
    console.log('Server is running on port ' + port);
});
