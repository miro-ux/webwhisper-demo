const express = require('express');
const serverless = require('serverless-http');

// Create Express app
const app = express();

// Create router
const router = express.Router();

// Define your routes
router.get('/', (req, res) => {
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

// Important: register the router on a path
app.use('/.netlify/functions/api', router);

// Export the serverless function
exports.handler = serverless(app);