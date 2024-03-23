// In your React app, create a setupProxy.js file in the src folder
// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Replace '/api' with the path you want to proxy
    createProxyMiddleware({
      target: 'http://json-server-2bly.onrender.com', // Replace with your JSON server URL
      changeOrigin: true,
    })
  );
};
