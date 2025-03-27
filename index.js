const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Environment variables (will be set through deployment platforms)
const siteLocation = process.env.SITE_LOCATION || 'default-location';
const apiKey = process.env.API_KEY || 'default-key';

app.get('/', (req, res) => {
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

app.listen(port, () => {
  console.log(`WebWhisper demo running on port ${port}`);
});