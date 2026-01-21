// 1. Always require libraries FIRST
const express = require('express');
const cors = require('cors');

// 2. Load your JSON files using require (Bundles them correctly for Vercel)
// Note: If 'data.json' isn't used, you can remove that line
const data = require('./data.json'); 
const movies = require('./movies.json');

// 3. Initialize the app ONCE
const app = express();

// 4. Middleware
app.use(cors());

// 5. Routes
// Note: We keep '/api' in the path because Vercel passes the full URL
app.get('/api/categories', (req, res) => {
    // Returns the keys (categories) from your movies.json
    res.json(Object.keys(movies));
});

app.get('/api/movies/:category', (req, res) => {
    const category = req.params.category;
    // Returns the array for that category, or an empty array if not found
    res.json(movies[category] || []);
});

// 6. Export the app for Vercel (CRITICAL STEP)
module.exports = app;

// 7. Only listen to port 3000 if running locally (Not on Vercel)
if (require.main === module) {
    app.listen(3000, () => {
        console.log('✅ Backend running locally on http://localhost:3000');
    });
}