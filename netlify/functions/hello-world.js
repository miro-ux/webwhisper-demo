// netlify/functions/hello-world.js

// Use the newer ES modules format
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from WebWhisper!",
      timestamp: new Date().toISOString(),
      env: {
        siteLocation: process.env.SITE_LOCATION || "default-location",
        apiKey: process.env.API_KEY || "default-key"
      }
    })
  };
};