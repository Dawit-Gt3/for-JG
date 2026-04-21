const STORAGE_KEYS = {
    REVIEWS: 'sonic_critique_reviews',
    STARTER_INITIALIZED: 'sonic_critique_initialized',
    ROT_DATE: 'sonic_critique_rot_date',
    ROT_ALBUM: 'sonic_critique_rot_album'
};

const STARTER_ALBUMS = [
    {
        id: 'mock_1',
        title: 'After Hours',
        artist: 'The Weeknd',
        year: '2020',
        genre: 'R&B',
        cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop',
        songs: [
            { title: 'Blinding Lights', lyrics: 'I said, ooh, I\'m blinded by the lights...' },
            { title: 'Save Your Tears', lyrics: 'I saw you dancing in a crowded room...' },
            { title: 'After Hours', lyrics: 'Thought I almost died in my dream again...' },
            { title: 'In Your Eyes', lyrics: 'I just pretend that I\'m in the dark...' },
            { title: 'Faith', lyrics: 'I\'ve been losing my religion lately...' }
        ]
    },
    {
        id: 'mock_1b',
        title: 'Dawn FM',
        artist: 'The Weeknd',
        year: '2022',
        genre: 'Pop',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
        songs: [
            { title: 'Take My Breath', lyrics: 'I saw the fire in your eyes...' },
            { title: 'Sacrifice', lyrics: 'I was born in a city where the winter nights don\'t ever end...' },
            { title: 'Less Than Zero', lyrics: 'Remember I was your hero, yeah...' }
        ]
    },
    {
        id: 'mock_2',
        title: 'Life of a Don',
        artist: 'Don Toliver',
        year: '2021',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop',
        songs: [
            { title: 'What You Need', lyrics: 'Tell me what you need, I got what you need...' },
            { title: 'Swinger', lyrics: 'She a swinger, she a dancer...' },
            { title: 'Way Bigger', lyrics: 'I\'m way bigger than they thought...' }
        ]
    },
    {
        id: 'mock_3',
        title: 'French Exit',
        artist: 'TV Girl',
        year: '2014',
        genre: 'Indie',
        cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop',
        songs: [
            { title: 'Birds Dont Sing', lyrics: 'Birds dont sing, they just fly away...' },
            { title: 'Lovers Rock', lyrics: 'Are you sick of me yet? I remember the night that we met...' },
            { title: 'Louise', lyrics: 'Louise, she\'s the girl for me...' },
            { title: 'Pantyhose', lyrics: 'I want to feel you in my pantyhose...' },
            { title: 'The Getaway', lyrics: 'It\'s a getaway, it\'s a getaway...' }
        ]
    },
    {
        id: 'mock_4',
        title: 'Salad Days',
        artist: 'Mac DeMarco',
        year: '2014',
        genre: 'Indie',
        cover: 'https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop',
        songs: [
            { title: 'Salad Days', lyrics: 'As I\'m getting older, chip on my shoulder...' },
            { title: 'Chamber of Reflection', lyrics: 'Spend some time alone, understand that soon you\'ll run...' },
            { title: 'Blue Boy', lyrics: 'Honey, don\'t you worry, Blue boy...' },
            { title: 'Let Her Go', lyrics: 'She\'s a lady, she\'s a lady...' },
            { title: 'Brother', lyrics: 'Go home, go home...' }
        ]
    },
    {
        id: 'mock_5',
        title: 'To Pimp a Butterfly',
        artist: 'Kendrick Lamar',
        year: '2015',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop',
        songs: [
            { title: 'Alright', lyrics: 'Alls my life I has to fight, nigga...' },
            { title: 'King Kunta', lyrics: 'I got a bone to pick, I dont want you monkey mouth motherfuckers...' },
            { title: 'Wesley\'s Theory', lyrics: 'When the four corners of this cocoon collide...' },
            { title: 'The Blacker the Berry', lyrics: 'Everything black, I don\'t want black...' },
            { title: 'i', lyrics: 'I love myself!...' }
        ]
    },
    {
        id: 'mock_6',
        title: '2014 Forest Hills Drive',
        artist: 'J. Cole',
        year: '2014',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
        songs: [
            { title: 'No Role Modelz', lyrics: 'First things first rest in peace Uncle Phil...' },
            { title: 'Wet Dreamz', lyrics: 'I was a back-seat lover on the first night...' },
            { title: 'G.O.M.D.', lyrics: 'Get off my dick, get off my dick...' },
            { title: 'Apparently', lyrics: 'I keep my head high...' },
            { title: 'Love Yourz', lyrics: 'No such thing as a life that\'s better than yours...' }
        ]
    }
];

const Storage = {
    init() {
        if (!localStorage.getItem(STORAGE_KEYS.STARTER_INITIALIZED)) {
            // Add some initial dummy reviews for the charts
            const initialReviews = STARTER_ALBUMS.map(album => ({
                id: album.id,
                title: album.title,
                artist: album.artist,
                year: album.year,
                genre: album.genre,
                cover: album.cover,
                rating: Math.floor(Math.random() * 3) + 8, // 8-10 for starters
                comment: 'One of my favorite albums of all time!',
                date: new Date().toISOString()
            }));
            localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(initialReviews));
            localStorage.setItem(STORAGE_KEYS.STARTER_INITIALIZED, 'true');
        }
    },

    getReviews() {
        const reviews = localStorage.getItem(STORAGE_KEYS.REVIEWS);
        return reviews ? JSON.parse(reviews) : [];
    },

    saveReview(review) {
        const reviews = this.getReviews();
        // Check if already reviewed, update if so
        const index = reviews.findIndex(r => r.id === review.id);
        if (index !== -1) {
            reviews[index] = { ...reviews[index], ...review, date: new Date().toISOString() };
        } else {
            reviews.push({ ...review, date: new Date().toISOString() });
        }
        localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
    },

    getRecordOfTheDay() {
        const today = new Date().toDateString();
        const savedDate = localStorage.getItem(STORAGE_KEYS.ROT_DATE);

        if (savedDate === today) {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.ROT_ALBUM));
        }

        // Pick new random from starters or reviews
        const pool = [...STARTER_ALBUMS];
        const randomAlbum = pool[Math.floor(Math.random() * pool.length)];

        localStorage.setItem(STORAGE_KEYS.ROT_DATE, today);
        localStorage.setItem(STORAGE_KEYS.ROT_ALBUM, JSON.stringify(randomAlbum));

        return randomAlbum;
    }
};

Storage.init();
