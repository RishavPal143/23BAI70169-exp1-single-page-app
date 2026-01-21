const express = require('express');
const cors = require('cors');
const movies = require('../backend/movies.json');


const app = express();
app.use(cors());


app.get('/api/categories', (req, res) => {
res.json(Object.keys(movies));
});


app.get('/api/movies/:category', (req, res) => {
const category = req.params.category;
res.json(movies[category] || []);
});


app.listen(3000, () => {
module.exports = app;
console.log('✅ Backend running on http://localhost:3000');
});