const API = {
    async searchAlbums(query) {
        // Search in 50-album database
        return STARTER_ALBUMS.filter(a =>
            a.title.toLowerCase().includes(query.toLowerCase()) ||
            a.artist.toLowerCase().includes(query.toLowerCase())
        );
    },

    async searchSongs(query) {
        const matches = [];
        STARTER_ALBUMS.forEach(album => {
            album.songs.forEach(song => {
                if (song.title.toLowerCase().includes(query.toLowerCase())) {
                    matches.push({
                        ...song,
                        albumId: album.id,
                        artist: album.artist,
                        albumTitle: album.title,
                        cover: album.cover
                    });
                }
            });
        });
        return matches;
    },

    async getAlbumTracks(albumId) {
        const album = STARTER_ALBUMS.find(a => a.id === albumId);
        return album ? album.songs : [];
    }
};
