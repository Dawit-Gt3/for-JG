const API = {
    // MusicBrainz API is open and doesn't require a key, but wants a User-Agent
    // We'll use a mix of hardcoded fallback and dynamic fetching

    async searchAlbums(query) {
        try {
            const response = await fetch(`https://musicbrainz.org/ws/2/release/?query=release:${encodeURIComponent(query)}&fmt=json`, {
                headers: { 'User-Agent': 'SonicCritique/1.0.0 ( contact: user@example.com )' }
            });
            const data = await response.json();

            return data.releases.slice(0, 10).map(rel => ({
                id: rel.id,
                title: rel.title,
                artist: rel['artist-credit']?.[0]?.name || 'Unknown Artist',
                year: rel.date ? rel.date.split('-')[0] : 'N/A',
                genre: 'Music', // MusicBrainz genre info is a bit complex, defaulting for simplicity
                cover: `https://coverartarchive.org/release/${rel.id}/front-250` || 'https://via.placeholder.com/250?text=No+Cover'
            }));
        } catch (error) {
            console.error('API Error:', error);
            // Return filtered hardcoded data as fallback
            return STARTER_ALBUMS.filter(a =>
                a.title.toLowerCase().includes(query.toLowerCase()) ||
                a.artist.toLowerCase().includes(query.toLowerCase())
            );
        }
    },

    async getLyrics(artist, song) {
        try {
            const response = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`);
            const data = await response.json();
            return data.lyrics || "Lyrics not found for this track.";
        } catch (error) {
            // Check hardcoded fallback
            const album = STARTER_ALBUMS.find(a => a.artist.toLowerCase() === artist.toLowerCase());
            if (album) {
                const track = album.songs.find(s => s.title.toLowerCase() === song.toLowerCase());
                if (track) return track.lyrics;
            }
            return "Lyrics not found.";
        }
    },

    // Get tracklist for an album (MusicBrainz)
    async getAlbumTracks(albumId) {
        if (albumId.startsWith('mock_')) {
            const album = STARTER_ALBUMS.find(a => a.id === albumId);
            return album ? album.songs : [];
        }

        try {
            const response = await fetch(`https://musicbrainz.org/ws/2/release/${albumId}?inc=recordings&fmt=json`);
            const data = await response.json();
            return data.media[0].tracks.map(t => ({
                title: t.title,
                id: t.id
            }));
        } catch (error) {
            return [];
        }
    }
};
