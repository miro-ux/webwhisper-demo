// netlify/functions/server.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();

// This is important - define the base path
app.use('/.netlify/functions/server', (req, res) => {
  const siteLocation = process.env.SITE_LOCATION || 'default-location';
  const apiKey = process.env.API_KEY || 'default-key';
  
  res.send(`
    <html>
      <head>
        <title>WebWhisper Demo</title>
        <style>
          body { font-family: system-ui, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; }
          .container { border: 1px solid #ddd; padding: 2rem; border-radius: 8px; }
          .info { background: #f5f5f5; padding: 1rem; border-radius: 4px; margin-top: 1rem; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>👋 Hello World!</h1>
          <p>Your WebWhisper demo is running successfully.</p>
          
          <div class="info">
            <h3>Configuration:</h3>
            <p><strong>Site Location:</strong> ${siteLocation}</p>
            <p><strong>API Key:</strong> ${apiKey}</p>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Export the handler
module.exports.handler = serverless(app);