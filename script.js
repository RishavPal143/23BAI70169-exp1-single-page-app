const menu = document.getElementById('menu');
const content = document.getElementById('content');

// CHANGED: Removed 'http://localhost:3000'
// Now it automatically searches the current domain
fetch('/api/categories') 
  .then(res => res.json())
  .then(categories => {
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.innerText = cat.toUpperCase();
      btn.onclick = () => loadMovies(cat);
      menu.appendChild(btn);
    });
    // Load the first category by default
    if (categories.length > 0) {
        loadMovies(categories[0]);
    }
  })
  .catch(err => console.error("Error loading categories:", err));


function loadMovies(category) {
  // CHANGED: Removed 'http://localhost:3000'
  fetch(`/api/movies/${category}`)
    .then(res => res.json())
    .then(movies => {
      content.innerHTML = '';
      movies.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
          <img src="${movie.img}" alt="${movie.title}" />
          <p><strong>${movie.title}</strong></p>
          <p>${movie.year} • ⭐ ${movie.rating}</p>
        `;
        content.appendChild(div);
      });
    })
    .catch(err => console.error("Error loading movies:", err));
}