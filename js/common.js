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

// --- Album Functions ---

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
            <button class="btn-primary" onclick="submitAlbumReview('${id}', \`${title.replace(/'/g, "\\'")}\`, \`${artist.replace(/'/g, "\\'")}\`, '${cover}', '${genre}', '${year}')">Save Review</button>
        </div>
    `;
    modal.style.display = 'flex';
}

function submitAlbumReview(id, title, artist, cover, genre, year) {
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    const comment = document.getElementById('review-comment').value;

    if (!rating) {
        alert('Please select a rating!');
        return;
    }

    Storage.saveAlbumReview({
        id, title, artist, cover,
        rating: parseInt(rating),
        comment,
        genre: genre || 'Music',
        year: year || '2023'
    });

    modal.style.display = 'none';
    refreshViews();
}

async function viewAlbumDetails(albumId) {
    modalBody.innerHTML = '<div class="spinner-container" style="display:flex; justify-content:center; padding:50px;"><div class="spinner"></div></div>';
    modal.style.display = 'flex';

    const tracks = await API.getAlbumTracks(albumId);
    let albumData = STARTER_ALBUMS.find(a => a.id === albumId);

    if (!albumData) {
        albumData = Storage.getAlbumReviews().find(r => r.id === albumId);
    }

    if (!albumData) {
        modalBody.innerHTML = '<p>Album details not found.</p>';
        return;
    }

    const isFav = Storage.isFavorite(albumId, 'albums');

    modalBody.innerHTML = `
        <div class="album-details">
            <div style="display: flex; gap: 30px; margin-bottom: 30px; flex-wrap: wrap;">
                <div style="position: relative;">
                    <img src="${albumData.cover}" style="width: 200px; height: 200px; border-radius: 12px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/250?text=No+Cover'">
                    <button onclick="toggleFav('${albumData.id}', 'albums', this)" class="fav-btn ${isFav ? 'active' : ''}" style="position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.5); border: none; color: white; padding: 10px; border-radius: 50%; cursor: pointer;">
                        <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                    </button>
                </div>
                <div>
                    <h2>${albumData.title}</h2>
                    <p>${albumData.artist} • ${albumData.year}</p>
                    <button class="btn-primary" onclick="openReviewModal('${albumData.id}', \`${albumData.title.replace(/'/g, "\\'")}\`, \`${albumData.artist.replace(/'/g, "\\'")}\`, '${albumData.cover}', '${albumData.genre}', '${albumData.year}')" style="margin-top: 10px;">Review this Album</button>
                </div>
            </div>
            <h3>Tracklist</h3>
            <ul class="tracklist" style="margin-top: 15px; list-style:none;">
                ${tracks.map(t => `
                    <li onclick="viewSongDetails('${albumId}', '${t.id}')" style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <span style="color: var(--text-muted); font-size: 0.9rem;">${t.track || ''}</span>
                            <span>${t.title}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <span style="color: var(--text-muted); font-size: 0.8rem;">${t.duration || ''}</span>
                            <i class="fa-solid fa-chevron-right" style="color: var(--text-muted); font-size: 0.8rem;"></i>
                        </div>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

// --- Song Functions ---

async function viewSongDetails(albumId, songId) {
    const album = STARTER_ALBUMS.find(a => a.id === albumId);
    if (!album) return;
    const song = album.songs.find(s => s.id === songId);
    if (!song) return;

    const oldContent = modalBody.innerHTML;
    const isFav = Storage.isFavorite(songId, 'songs');

    modalBody.innerHTML = `
        <div class="song-details">
            <button class="btn-text" id="back-to-album" style="margin-bottom: 20px; border:none; background:none; cursor:pointer;"><i class="fa-solid fa-arrow-left"></i> Back to Album</button>

            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;">
                <div>
                    <h2 style="font-size: 2rem; margin-bottom: 5px;">${song.title}</h2>
                    <p style="color: var(--text-muted);">by ${album.artist} • Track ${song.track} of ${album.title}</p>
                </div>
                <button onclick="toggleFav('${song.id}', 'songs', this)" class="fav-btn-large ${isFav ? 'active' : ''}" style="background: var(--bg-dark); border: 1px solid #333; color: ${isFav ? 'var(--primary)' : 'white'}; padding: 12px 20px; border-radius: 30px; cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i> ${isFav ? 'Favorited' : 'Add to Favorites'}
                </button>
            </div>

            <div class="song-grid" style="display: grid; grid-template-columns: 1fr 350px; gap: 30px;">
                <div>
                    <div class="song-section">
                        <h3>Interpretation & Meaning</h3>
                        <p style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; line-height: 1.6; border-left: 4px solid var(--primary);">${song.interpretation}</p>
                    </div>

                    <div class="song-section" style="margin-top: 30px;">
                        <h3>Lyrics with Insights</h3>
                        <div class="lyrics-container-v2" style="white-space: pre-line; background: var(--bg-dark); padding: 25px; border-radius: 12px; border: 1px solid #222; font-size: 1.1rem; line-height: 1.8; position: relative;">
                            ${highlightLyrics(song.lyrics, song.key_lines)}
                        </div>
                    </div>
                </div>

                <div class="song-sidebar">
                    <div class="sidebar-box">
                        <h3>Mood & Themes</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px;">
                            ${song.mood.map(m => `<span class="tag mood-tag">${m}</span>`).join('')}
                            ${song.themes.map(t => `<span class="tag theme-tag">${t}</span>`).join('')}
                        </div>
                    </div>

                    <div class="sidebar-box" style="margin-top: 20px; background: rgba(255,0,85,0.05); border: 1px solid var(--primary); padding: 20px; border-radius: 12px;">
                        <h3>Rate this Track</h3>
                        <div class="rating-input" style="margin: 15px 0;">
                            <div class="star-rating">
                                ${[10,9,8,7,6,5,4,3,2,1].map(n => `
                                    <input type="radio" id="song-star${n}" name="song-rating" value="${n}">
                                    <label for="song-star${n}"><i class="fa-solid fa-star"></i></label>
                                `).join('')}
                            </div>
                        </div>
                        <textarea id="song-review-comment" placeholder="Personal notes on this track..." style="width:100%; height: 80px; padding: 10px; background: #000; color: white; border: 1px solid #333; border-radius: 8px; margin-bottom: 10px;"></textarea>
                        <button class="btn-primary" style="width:100%;" onclick="submitSongReview('${song.id}', '${album.id}', \`${song.title.replace(/'/g, "\\'")}\`, \`${album.artist.replace(/'/g, "\\'")}\`)">Save Track Review</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('back-to-album').onclick = () => {
        modalBody.innerHTML = oldContent;
    };
}

function highlightLyrics(lyrics, keyLines) {
    if (!keyLines || keyLines.length === 0) return lyrics;
    let highlighted = lyrics;
    keyLines.forEach(kl => {
        const span = `<span class="highlighted-line" title="${kl.explanation}">${kl.line}</span>`;
        highlighted = highlighted.replace(kl.line, span);
    });
    return highlighted;
}

function submitSongReview(songId, albumId, title, artist) {
    const rating = document.querySelector('input[name="song-rating"]:checked')?.value;
    const comment = document.getElementById('song-review-comment').value;

    if (!rating) {
        alert('Please select a rating!');
        return;
    }

    Storage.saveSongReview({
        songId, albumId, title, artist,
        rating: parseInt(rating),
        comment
    });

    alert('Track review saved!');
    refreshViews();
}

function toggleFav(id, type, btn) {
    const isNowFav = Storage.toggleFavorite(id, type);
    const icon = btn.querySelector('i');
    if (isNowFav) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        btn.style.color = 'var(--primary)';
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        btn.style.color = 'white';
    }
}

function refreshViews() {
    if (typeof renderTopCharts === 'function') renderTopCharts();
    if (typeof renderRecentReviews === 'function') renderRecentReviews();
    if (typeof renderMyReviews === 'function') renderMyReviews();
    if (typeof renderLeaderboard === 'function') renderLeaderboard();
}
