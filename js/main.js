document.addEventListener('DOMContentLoaded', () => {
    renderROT();
    renderTopCharts();
    renderLeaderboard();
    renderRecentReviews();
});

function renderROT() {
    const rot = Storage.getRecordOfTheDay();
    const container = document.getElementById('rot-content');
    if (!rot) return;

    container.innerHTML = `
        <img src="${rot.cover}" alt="${rot.title}">
        <div class="featured-text">
            <h2>${rot.title}</h2>
            <p>by ${rot.artist} (${rot.year})</p>
            <button class="btn-primary" onclick="viewAlbumDetails('${rot.id}')" style="margin-top: 15px;">Discover Album</button>
        </div>
    `;
}

function renderTopCharts() {
    const reviews = Storage.getAlbumReviews();
    // Default show some from starters if no reviews
    let displayAlbums = [];
    if (reviews.length > 0) {
        displayAlbums = [...reviews].sort((a, b) => b.rating - a.rating).slice(0, 5);
    } else {
        displayAlbums = STARTER_ALBUMS.slice(0, 5);
    }

    const grid = document.getElementById('top-charts-grid');
    if (!grid) return;

    grid.innerHTML = displayAlbums.map(album => `
        <div class="album-card" onclick="viewAlbumDetails('${album.id}')">
            ${album.rating ? `<div class="rating-badge">${album.rating}/10</div>` : ''}
            <img src="${album.cover}" alt="${album.title}" onerror="this.src='https://via.placeholder.com/250?text=No+Cover'">
            <h3>${album.title}</h3>
            <p>${album.artist}</p>
        </div>
    `).join('');
}

function renderLeaderboard() {
    const reviews = Storage.getSongReviews();
    const container = document.getElementById('song-leaderboard');
    if (!container) return;

    if (reviews.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 40px; color: var(--text-muted);">No songs rated yet. Start listening and reviewing!</p>';
        return;
    }

    const top = [...reviews].sort((a, b) => b.rating - a.rating).slice(0, 5);

    container.innerHTML = top.map((song, index) => `
        <div class="leaderboard-item" onclick="viewSongDetails('${song.albumId}', '${song.songId}')" style="cursor:pointer;">
            <div class="leaderboard-rank">#${index + 1}</div>
            <div style="flex: 1;">
                <h4 style="margin:0; color: white;">${song.title}</h4>
                <p style="margin:0; font-size: 0.85rem; color: var(--text-muted);">${song.artist}</p>
            </div>
            <div class="rating-badge" style="background: var(--primary); padding: 5px 12px; border-radius: 8px; font-weight: 800;">${song.rating}/10</div>
        </div>
    `).join('');
}

function renderRecentReviews() {
    const aReviews = Storage.getAlbumReviews();
    const sReviews = Storage.getSongReviews();

    // Combine and sort
    const all = [
        ...aReviews.map(r => ({ ...r, type: 'album' })),
        ...sReviews.map(r => ({ ...r, type: 'song' }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);

    const list = document.getElementById('recent-reviews-list');
    if (!list) return;

    if (all.length === 0) {
        list.innerHTML = '<p>No reviews yet. Be the first to critique!</p>';
        return;
    }

    list.innerHTML = all.map(rev => `
        <div class="review-item" onclick="${rev.type === 'album' ? `viewAlbumDetails('${rev.id}')` : `viewSongDetails('${rev.albumId}', '${rev.songId}')`}">
            ${rev.cover ? `<img src="${rev.cover}" alt="${rev.title}">` : `<div style="width:60px; height:60px; background:var(--primary); display:flex; align-items:center; justify-content:center; border-radius:6px;"><i class="fa-solid fa-music"></i></div>`}
            <div class="review-info">
                <span class="tag" style="font-size: 0.6rem; padding: 2px 6px; margin-bottom: 5px; display:inline-block;">${rev.type.toUpperCase()}</span>
                <h4>${rev.rating}/10 - ${rev.title}</h4>
                <p>"${rev.comment || 'No comment.'}"</p>
                <small>Reviewed on ${new Date(rev.date).toLocaleDateString()}</small>
            </div>
        </div>
    `).join('');
}
