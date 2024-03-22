
import express from 'express';
import { join } from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(join(__dirname, 'src', 'public')));

// Serve index.html for all routes
app.get('*', function (req, res) {
    res.sendFile(join(__dirname, 'src', 'public', 'index.html'));
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

