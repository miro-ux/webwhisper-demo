const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Basic route for the API
app.get('/', (req, res) => {
  const siteLocation = process.env.SITE_LOCATION || 'default-location';
  const apiKey = process.env.API_KEY || 'default-key';
  
  res.json({
    message: "WebWhisper Demo is running successfully!",
    config: {
      siteLocation: siteLocation,
      apiKey: apiKey
    }
  });
});

// Export the serverless function
exports.handler = serverless(app);