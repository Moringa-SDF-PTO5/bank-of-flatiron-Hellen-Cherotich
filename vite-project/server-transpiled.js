import { register } from '@babel/register';

register({
  presets: ['@babel/preset-env']
});

// Your original entry file
import './server.js';
