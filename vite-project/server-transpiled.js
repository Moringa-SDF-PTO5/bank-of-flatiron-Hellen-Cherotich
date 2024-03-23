require('@babel/register')({
    presets: ['@babel/preset-env']
  });
  
  // Your original entry file
  require('./server.js');
  