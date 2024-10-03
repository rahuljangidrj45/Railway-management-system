// middleware/apiKeyMiddleware.js
require('dotenv').config();

function verifyApiKey(req, res, next) {
    const apiKey = req.header('x-api-key');  // Get API key from request header
    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
        return res.status(403).send('Invalid API key');
    }
    next();
}

module.exports = verifyApiKey;
