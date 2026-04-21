document.addEventListener('DOMContentLoaded', () => {
    renderROT();
    renderTopCharts();
    renderRecentReviews();
});

function renderROT() {
    const rot = Storage.getRecordOfTheDay();
    const container = document.getElementById('rot-content');

    container.innerHTML = `
        <img src="${rot.cover}" alt="${rot.title}">
        <div class="featured-text">
            <h2>${rot.title}</h2>
            <p>by ${rot.artist} (${rot.year})</p>
            <button class="btn-primary" onclick="openReviewModal('${rot.id}', \`${rot.title.replace(/'/g, "\\'")}\`, \`${rot.artist.replace(/'/g, "\\'")}\`, '${rot.cover}', '${rot.genre}', '${rot.year}')" style="margin-top: 15px;">Review Now</button>
        </div>
    `;
}

function renderTopCharts() {
    const reviews = Storage.getReviews();
    const top = reviews.sort((a, b) => b.rating - a.rating).slice(0, 5);
    const grid = document.getElementById('top-charts-grid');

    grid.innerHTML = top.map(album => `
        <div class="album-card" onclick="viewAlbumDetails('${album.id}')">
            <div class="rating-badge">${album.rating}/10</div>
            <img src="${album.cover}" alt="${album.title}" onerror="this.src='https://via.placeholder.com/250?text=No+Cover'">
            <h3>${album.title}</h3>
            <p>${album.artist}</p>
        </div>
    `).join('');
}

function renderRecentReviews() {
    const reviews = Storage.getReviews();
    const recent = reviews.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    const list = document.getElementById('recent-reviews-list');

    if (recent.length === 0) {
        list.innerHTML = '<p>No reviews yet. Be the first to critique!</p>';
        return;
    }

    list.innerHTML = recent.map(rev => `
        <div class="review-item" onclick="viewAlbumDetails('${rev.id}')">
            <img src="${rev.cover}" alt="${rev.title}">
            <div class="review-info">
                <h4>${rev.rating}/10 - ${rev.title}</h4>
                <p>"${rev.comment}"</p>
                <small>Reviewed on ${new Date(rev.date).toLocaleDateString()}</small>
            </div>
        </div>
    `).join('');
}
