const API = {
    // MusicBrainz API is open and doesn't require a key, but wants a User-Agent
    // We'll prioritize hardcoded fallback as per user request

    async searchAlbums(query) {
        // Search in hardcoded data first
        const localMatches = STARTER_ALBUMS.filter(a =>
            a.title.toLowerCase().includes(query.toLowerCase()) ||
            a.artist.toLowerCase().includes(query.toLowerCase())
        );

        try {
            const response = await fetch(`https://musicbrainz.org/ws/2/release/?query=release:${encodeURIComponent(query)}&fmt=json`, {
                headers: { 'User-Agent': 'SonicCritique/1.0.0 ( contact: user@example.com )' }
            });
            if (!response.ok) throw new Error('API down');

            const data = await response.json();

            const apiResults = data.releases.slice(0, 10).map(rel => ({
                id: rel.id,
                title: rel.title,
                artist: rel['artist-credit']?.[0]?.name || 'Unknown Artist',
                year: rel.date ? rel.date.split('-')[0] : 'N/A',
                genre: 'Music',
                cover: `https://coverartarchive.org/release/${rel.id}/front-250` || 'https://via.placeholder.com/250?text=No+Cover'
            }));

            // Merge local and API, keeping unique IDs
            const merged = [...localMatches];
            apiResults.forEach(res => {
                if (!merged.find(m => m.id === res.id)) {
                    merged.push(res);
                }
            });
            return merged;
        } catch (error) {
            console.warn('API Error (External), using local data only:', error);
            return localMatches;
        }
    },

    async getLyrics(artist, song) {
        // Always check hardcoded first
        const album = STARTER_ALBUMS.find(a => a.artist.toLowerCase() === artist.toLowerCase());
        if (album) {
            const track = album.songs.find(s => s.title.toLowerCase() === song.toLowerCase());
            if (track) return track.lyrics;
        }

        try {
            const response = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`);
            if (!response.ok) throw new Error('Lyrics API down');
            const data = await response.json();
            return data.lyrics || "Lyrics not found for this track.";
        } catch (error) {
            return "Lyrics not found.";
        }
    },

    async getAlbumTracks(albumId) {
        // Always check hardcoded first
        const album = STARTER_ALBUMS.find(a => a.id === albumId);
        if (album) return album.songs;

        try {
            const response = await fetch(`https://musicbrainz.org/ws/2/release/${albumId}?inc=recordings&fmt=json`);
            if (!response.ok) throw new Error('Tracks API down');
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
