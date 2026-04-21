document.addEventListener('DOMContentLoaded', () => {
    initExplore();
    setupFilters();
});

let currentTab = 'all'; // 'all' or 'reviews'
let searchResults = [];

function initExplore() {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    const sort = urlParams.get('sort');

    if (tab === 'reviews') {
        switchTab('reviews');
    } else {
        if (sort === 'rating') {
            document.getElementById('filter-rating').value = 8;
            document.getElementById('rating-val').innerText = '8';
        }
        renderDiscover();
    }

    // Search event
    document.getElementById('search-btn').addEventListener('click', handleSearch);
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Tab events
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => switchTab(btn.dataset.tab);
    });
}

function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    if (tab === 'reviews') {
        renderMyReviews();
    } else {
        renderDiscover();
    }
}

async function handleSearch() {
    const query = document.getElementById('search-input').value;
    if (!query) return;

    showLoading(true);
    searchResults = await API.searchAlbums(query);
    showLoading(false);

    currentTab = 'all';
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === 'all'));
    renderGrid(searchResults);
}

function renderDiscover() {
    // Show starter albums by default
    searchResults = STARTER_ALBUMS;
    renderGrid(searchResults);
}

function renderMyReviews() {
    const reviews = Storage.getReviews();
    renderGrid(reviews);
}

function renderGrid(items) {
    const grid = document.getElementById('explore-grid');
    const filters = getFilters();

    let filtered = items.filter(item => {
        const matchesGenre = filters.genre === 'all' || item.genre === filters.genre;
        const matchesYear = filters.year === 'all' ||
                           (filters.year === 'older' ? parseInt(item.year) < 2021 : item.year === filters.year);
        const matchesRating = item.rating ? item.rating >= filters.rating : true;

        return matchesGenre && matchesYear && matchesRating;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No albums found matching your criteria.</p>';
        return;
    }

    // Handle sorting if requested
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sort') === 'rating') {
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    grid.innerHTML = filtered.map(album => `
        <div class="album-card" onclick="viewAlbumDetails('${album.id}')">
            ${album.rating ? `<div class="rating-badge">${album.rating}/10</div>` : ''}
            <img src="${album.cover}" alt="${album.title}" onerror="this.src='https://via.placeholder.com/250?text=No+Cover'">
            <h3>${album.title}</h3>
            <p>${album.artist} • ${album.year}</p>
        </div>
    `).join('');
}

function showLoading(show) {
    document.getElementById('loading-state').classList.toggle('hidden', !show);
    document.getElementById('explore-grid').classList.toggle('hidden', show);
}

// Filters logic
function setupFilters() {
    const ratingInput = document.getElementById('filter-rating');
    const ratingVal = document.getElementById('rating-val');

    ratingInput.oninput = () => {
        ratingVal.innerText = ratingInput.value;
        applyFilters();
    };

    document.getElementById('filter-genre').onchange = applyFilters;
    document.getElementById('filter-year').onchange = applyFilters;

    document.getElementById('reset-filters').onclick = () => {
        document.getElementById('filter-genre').value = 'all';
        document.getElementById('filter-year').value = 'all';
        ratingInput.value = 0;
        ratingVal.innerText = '0';
        applyFilters();
    };
}

function getFilters() {
    return {
        genre: document.getElementById('filter-genre').value,
        year: document.getElementById('filter-year').value,
        rating: parseInt(document.getElementById('filter-rating').value)
    };
}

function applyFilters() {
    if (currentTab === 'reviews') {
        renderMyReviews();
    } else {
        renderGrid(searchResults);
    }
}
