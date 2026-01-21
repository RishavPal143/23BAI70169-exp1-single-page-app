const menu = document.getElementById('menu');
const content = document.getElementById('content');


fetch('http://localhost:3000/api/categories')
.then(res => res.json())
.then(categories => {
categories.forEach(cat => {
const btn = document.createElement('button');
btn.innerText = cat.toUpperCase();
btn.onclick = () => loadMovies(cat);
menu.appendChild(btn);
});
loadMovies(categories[0]);
});


function loadMovies(category) {
fetch(`http://localhost:3000/api/movies/${category}`)
.then(res => res.json())
.then(movies => {
content.innerHTML = '';
movies.forEach(movie => {
const div = document.createElement('div');
div.className = 'card';
div.innerHTML = `
<img src="${movie.img}" />
<p><strong>${movie.title}</strong></p>
<p>${movie.year} • ⭐ ${movie.rating}</p>
`;
content.appendChild(div);
});
});
}