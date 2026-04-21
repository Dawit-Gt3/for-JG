// Shared Modal and Detail Logic
const modal = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

if (closeModal) {
    closeModal.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = 'none';
    };
}

async function openReviewModal(id, title, artist, cover, genre = 'Music', year = '2023') {
    modalBody.innerHTML = `
        <div class="review-form">
            <h2>Review: ${title}</h2>
            <p>Artist: ${artist} (${year})</p>
            <div class="rating-input">
                <label>Your Rating (1-10):</label>
                <div class="star-rating">
                    ${[10,9,8,7,6,5,4,3,2,1].map(n => `
                        <input type="radio" id="star${n}" name="rating" value="${n}">
                        <label for="star${n}"><i class="fa-solid fa-star"></i></label>
                    `).join('')}
                </div>
            </div>
            <textarea id="review-comment" placeholder="Write your thoughts..." style="width:100%; height: 100px; padding: 10px; background: var(--bg-dark); color: white; border: 1px solid #333; border-radius: 8px;"></textarea>
            <button class="btn-primary" onclick="submitReview('${id}', \`${title.replace(/'/g, "\\'")}\`, \`${artist.replace(/'/g, "\\'")}\`, '${cover}', '${genre}', '${year}')">Save Review</button>
        </div>
    `;
    modal.style.display = 'flex';
}

function submitReview(id, title, artist, cover, genre, year) {
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    const comment = document.getElementById('review-comment').value;

    if (!rating) {
        alert('Please select a rating!');
        return;
    }

    Storage.saveReview({
        id, title, artist, cover,
        rating: parseInt(rating),
        comment,
        genre: genre || 'Music',
        year: year || '2023'
    });

    modal.style.display = 'none';

    // Refresh current view if functions exist
    if (typeof renderTopCharts === 'function') renderTopCharts();
    if (typeof renderRecentReviews === 'function') renderRecentReviews();
    if (typeof renderMyReviews === 'function') renderMyReviews();
}

async function viewAlbumDetails(albumId) {
    modalBody.innerHTML = '<div class="spinner-container" style="display:flex; justify-content:center; padding:50px;"><div class="spinner"></div></div>';
    modal.style.display = 'flex';

    const tracks = await API.getAlbumTracks(albumId);
    let albumData;

    // Search in reviews first for the cover/metadata
    albumData = Storage.getReviews().find(r => r.id === albumId);

    if (!albumData) {
        albumData = STARTER_ALBUMS.find(a => a.id === albumId);
    }

    // Fallback if still not found (e.g. from API search)
    if (!albumData && typeof searchResults !== 'undefined') {
        albumData = searchResults.find(a => a.id === albumId);
    }

    if (!albumData) {
        modalBody.innerHTML = '<p>Album details not found.</p>';
        return;
    }

    modalBody.innerHTML = `
        <div class="album-details">
            <div style="display: flex; gap: 30px; margin-bottom: 30px; flex-wrap: wrap;">
                <img src="${albumData.cover}" style="width: 200px; height: 200px; border-radius: 12px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/250?text=No+Cover'">
                <div>
                    <h2>${albumData.title}</h2>
                    <p>${albumData.artist} • ${albumData.year}</p>
                    <button class="btn-primary" onclick="openReviewModal('${albumData.id}', \`${albumData.title.replace(/'/g, "\\'")}\`, \`${albumData.artist.replace(/'/g, "\\'")}\`, '${albumData.cover}', '${albumData.genre}', '${albumData.year}')" style="margin-top: 10px;">Review this Album</button>
                </div>
            </div>
            <h3>Tracklist (Click for Lyrics)</h3>
            <ul class="tracklist" style="margin-top: 15px; list-style:none;">
                ${tracks.map(t => `
                    <li onclick="showLyrics(\`${albumData.artist.replace(/'/g, "\\'")}\`, \`${t.title.replace(/'/g, "\\'")}\`)" style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); cursor: pointer; display: flex; justify-content: space-between; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">
                        <span>${t.title}</span>
                        <i class="fa-solid fa-chevron-right" style="color: var(--text-muted); font-size: 0.8rem;"></i>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

async function showLyrics(artist, song) {
    const oldContent = modalBody.innerHTML;

    modalBody.innerHTML = `
        <button class="btn-text" id="back-to-album" style="margin-bottom: 20px; border:none; background:none; cursor:pointer;"><i class="fa-solid fa-arrow-left"></i> Back to Tracks</button>
        <h2>${song}</h2>
        <p style="color: var(--text-muted); margin-bottom: 20px;">by ${artist}</p>
        <div class="lyrics-container" style="white-space: pre-line; background: var(--bg-dark); padding: 20px; border-radius: 12px; max-height: 400px; overflow-y: auto; font-size: 1.1rem; line-height: 1.8;">
            Loading lyrics...
        </div>
    `;

    document.getElementById('back-to-album').onclick = () => {
        modalBody.innerHTML = oldContent;
    };

    const lyrics = await API.getLyrics(artist, song);
    document.querySelector('.lyrics-container').innerText = lyrics;
}
