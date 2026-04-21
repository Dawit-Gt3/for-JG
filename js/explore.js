document.addEventListener('DOMContentLoaded', () => {
    initExplore();
    setupFilters();
});

let currentTab = 'all'; // 'all', 'songs', 'reviews'
let albumResults = [];
let songResults = [];

function initExplore() {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');

    if (tab === 'reviews') {
        switchTab('reviews');
    } else {
        renderDiscover();
    }

    document.getElementById('search-btn').addEventListener('click', handleSearch);
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => switchTab(btn.dataset.tab);
    });
}

function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    document.getElementById('explore-grid').innerHTML = '';

    if (tab === 'reviews') renderMyReviews();
    else if (tab === 'songs') renderSongs(songResults.length > 0 ? songResults : []);
    else renderDiscover();
}

async function handleSearch() {
    const query = document.getElementById('search-input').value;
    if (!query) return;

    showLoading(true);
    albumResults = await API.searchAlbums(query);
    songResults = await API.searchSongs(query);
    showLoading(false);

    if (currentTab === 'reviews') currentTab = 'all';
    renderCurrentTab();
}

function renderCurrentTab() {
    switchTab(currentTab);
}

function renderDiscover() {
    if (albumResults.length === 0) albumResults = STARTER_ALBUMS;
    renderGrid(albumResults);
}

function renderSongs(songs) {
    const grid = document.getElementById('explore-grid');
    const filters = getFilters();

    let filtered = songs.filter(s => {
        const matchesRating = s.rating ? s.rating >= filters.rating : true;
        const matchesFav = filters.favOnly ? Storage.isFavorite(s.id, 'songs') : true;
        return matchesRating && matchesFav;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No songs found matching your search or filters.</p>';
        return;
    }

    grid.innerHTML = filtered.map(song => `
        <div class="album-card" onclick="viewSongDetails('${song.albumId}', '${song.id}')">
            ${song.rating ? `<div class="rating-badge">${song.rating}/10</div>` : ''}
            <img src="${song.cover}" alt="${song.title}" style="opacity: 0.8;">
            <div style="position: absolute; top: 15px; left: 15px; background: rgba(0,0,0,0.6); padding: 4px 8px; border-radius: 4px; font-size: 0.7rem;">SONG</div>
            <h3>${song.title}</h3>
            <p>${song.artist} • ${song.albumTitle}</p>
        </div>
    `).join('');
}

function renderMyReviews() {
    const aReviews = Storage.getAlbumReviews();
    const sReviews = Storage.getSongReviews();

    const grid = document.getElementById('explore-grid');
    if (!grid) return;

    if (aReviews.length === 0 && sReviews.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">You haven\'t written any reviews yet!</p>';
        return;
    }

    let html = '';

    if (aReviews.length > 0) {
        html += `<h3 style="grid-column: 1/-1; margin-top: 20px; color: var(--primary);">Album Reviews</h3>`;
        html += aReviews.map(album => `
            <div class="album-card" onclick="viewAlbumDetails('${album.id}')">
                <div class="rating-badge">${album.rating}/10</div>
                <img src="${album.cover}" alt="${album.title}">
                <h3>${album.title}</h3>
                <p>${album.artist} • ${album.year}</p>
            </div>
        `).join('');
    }

    if (sReviews.length > 0) {
        html += `<h3 style="grid-column: 1/-1; margin-top: 40px; color: var(--primary);">Track Reviews</h3>`;
        html += sReviews.map(song => `
            <div class="album-card" onclick="viewSongDetails('${song.albumId}', '${song.songId}')">
                <div class="rating-badge">${song.rating}/10</div>
                <img src="${song.cover || 'https://via.placeholder.com/250?text=Song'}" alt="${song.title}" style="opacity: 0.7;">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `).join('');
    }

    grid.innerHTML = html;
}

function renderGrid(items) {
    const grid = document.getElementById('explore-grid');
    const filters = getFilters();

    let filtered = items.filter(item => {
        const matchesGenre = filters.genre === 'all' || item.genre.includes(filters.genre);
        const matchesRating = item.rating ? item.rating >= filters.rating : true;
        const matchesFav = filters.favOnly ? Storage.isFavorite(item.id, 'albums') : true;
        return matchesGenre && matchesRating && matchesFav;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No albums found.</p>';
        return;
    }

    grid.innerHTML = filtered.map(album => `
        <div class="album-card" onclick="viewAlbumDetails('${album.id}')">
            ${album.rating ? `<div class="rating-badge">${album.rating}/10</div>` : ''}
            <img src="${album.cover}" alt="${album.title}">
            <h3>${album.title}</h3>
            <p>${album.artist} • ${album.year}</p>
        </div>
    `).join('');
}

function showLoading(show) {
    document.getElementById('loading-state').classList.toggle('hidden', !show);
    document.getElementById('explore-grid').classList.toggle('hidden', show);
}

function setupFilters() {
    const ratingInput = document.getElementById('filter-rating');
    const ratingVal = document.getElementById('rating-val');

    ratingInput.oninput = () => {
        ratingVal.innerText = ratingInput.value;
        applyFilters();
    };

    document.getElementById('filter-genre').onchange = applyFilters;
    document.getElementById('filter-fav').onchange = applyFilters;

    document.getElementById('reset-filters').onclick = () => {
        document.getElementById('filter-genre').value = 'all';
        document.getElementById('filter-fav').checked = false;
        ratingInput.value = 0;
        ratingVal.innerText = '0';
        applyFilters();
    };
}

function getFilters() {
    return {
        genre: document.getElementById('filter-genre').value,
        rating: parseInt(document.getElementById('filter-rating').value),
        favOnly: document.getElementById('filter-fav').checked
    };
}

function applyFilters() {
    if (currentTab === 'reviews') renderMyReviews();
    else if (currentTab === 'songs') renderSongs(songResults);
    else renderGrid(albumResults);
}
