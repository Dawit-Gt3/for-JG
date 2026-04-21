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
            { title: 'After Hours', lyrics: 'Thought I almost died in my dream again...' }
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
            { title: 'Swinger', lyrics: 'She a swinger, she a dancer...' }
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
            { title: 'Lovers Rock', lyrics: 'Are you sick of me yet? I remember the night that we met...' }
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
            { title: 'Chamber of Reflection', lyrics: 'Spend some time alone, understand that soon you\'ll run...' }
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
            { title: 'King Kunta', lyrics: 'I got a bone to pick, I dont want you monkey mouth motherfuckers...' }
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
            { title: 'Wet Dreamz', lyrics: 'I was a back-seat lover on the first night...' }
        ]
    },
    {
        id: 'mock_7',
        title: 'Starboy',
        artist: 'The Weeknd',
        year: '2016',
        genre: 'Pop',
        cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop',
        songs: [
            { title: 'Starboy', lyrics: 'I\'m tryna put you in the worst mood, ah...' },
            { title: 'I Feel It Coming', lyrics: 'Tell me what you feel, is it real? Is it real?...' }
        ]
    },
    {
        id: 'mock_8',
        title: 'Beauty Behind the Madness',
        artist: 'The Weeknd',
        year: '2015',
        genre: 'R&B',
        cover: 'https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop',
        songs: [
            { title: 'The Hills', lyrics: 'Your man on the road, he doin\' promo...' },
            { title: 'Can\'t Feel My Face', lyrics: 'And I know she\'ll be the death of me...' }
        ]
    },
    {
        id: 'mock_9',
        title: 'Heaven or Hell',
        artist: 'Don Toliver',
        year: '2020',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop',
        songs: [
            { title: 'After Party', lyrics: 'Okay, I pull up, hop out at the after party...' },
            { title: 'Cardigan', lyrics: 'I\'m not the one to be played with...' }
        ]
    },
    {
        id: 'mock_10',
        title: 'Love Sick',
        artist: 'Don Toliver',
        year: '2023',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop',
        songs: [
            { title: 'Private Landing', lyrics: 'Private landing, yeah, she demanding...' },
            { title: 'Leave the Club', lyrics: 'I\'m tryna leave the club, yeah...' }
        ]
    },
    {
        id: 'mock_11',
        title: 'Who Really Cares',
        artist: 'TV Girl',
        year: '2016',
        genre: 'Indie',
        cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop',
        songs: [
            { title: 'Taking What\'s Not Yours', lyrics: 'I\'m taking what\'s not mine, it\'s a crime...' },
            { title: 'Not Allowed', lyrics: 'You don\'t know how long I could stare into your picture...' }
        ]
    },
    {
        id: 'mock_12',
        title: 'Death of a Party Girl',
        artist: 'TV Girl',
        year: '2018',
        genre: 'Indie',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
        songs: [
            { title: 'Blue Hair', lyrics: 'She had blue hair, or maybe it was purple...' },
            { title: 'Cynical One', lyrics: 'I\'m the cynical one, I\'m the one who\'s always wrong...' }
        ]
    },
    {
        id: 'mock_13',
        title: 'This Old Dog',
        artist: 'Mac DeMarco',
        year: '2017',
        genre: 'Indie',
        cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop',
        songs: [
            { title: 'This Old Dog', lyrics: 'This old dog ain\'t about to forget...' },
            { title: 'On the Level', lyrics: 'Boy, this heart of mine is on the level...' }
        ]
    },
    {
        id: 'mock_14',
        title: '2',
        artist: 'Mac DeMarco',
        year: '2012',
        genre: 'Indie',
        cover: 'https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop',
        songs: [
            { title: 'Ode to Viceroy', lyrics: 'Viceroy, early in the morning...' },
            { title: 'My Kind of Woman', lyrics: 'Oh baby, oh man, as long as I\'m your man...' }
        ]
    },
    {
        id: 'mock_15',
        title: 'good kid, m.A.A.d city',
        artist: 'Kendrick Lamar',
        year: '2012',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop',
        songs: [
            { title: 'Bitch, Don\'t Kill My Vibe', lyrics: 'I am a sinner who\'s probably gonna sin again...' },
            { title: 'Swimming Pools (Drank)', lyrics: 'Pour up, drink, head shot, drink...' }
        ]
    },
    {
        id: 'mock_16',
        title: 'DAMN.',
        artist: 'Kendrick Lamar',
        year: '2017',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop',
        songs: [
            { title: 'HUMBLE.', lyrics: 'Wicked or weakness? You gotta see this...' },
            { title: 'DNA.', lyrics: 'I got, I got, I got, I got loyalty, got royalty inside my DNA...' }
        ]
    },
    {
        id: 'mock_17',
        title: 'Mr. Morale & The Big Steppers',
        artist: 'Kendrick Lamar',
        year: '2022',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop',
        songs: [
            { title: 'N95', lyrics: 'Hello, world, hello, world, hello, world...' },
            { title: 'Die Hard', lyrics: 'I\'m tryna die hard, yeah...' }
        ]
    },
    {
        id: 'mock_18',
        title: '4 Your Eyez Only',
        artist: 'J. Cole',
        year: '2016',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
        songs: [
            { title: 'Deja Vu', lyrics: 'Aye, put a finger in the sky if you want it...' },
            { title: 'Neighbors', lyrics: 'I guess the neighbors think I\'m sellin\' dope...' }
        ]
    },
    {
        id: 'mock_19',
        title: 'KOD',
        artist: 'J. Cole',
        year: '2018',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop',
        songs: [
            { title: 'KOD', lyrics: 'Power, greed, money, Molly, Percocet...' },
            { title: 'Kevin\'s Heart', lyrics: 'She my number one, I don\'t need nothing on the side...' }
        ]
    },
    {
        id: 'mock_20',
        title: 'The Off-Season',
        artist: 'J. Cole',
        year: '2021',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop',
        songs: [
            { title: '9 5 . s o u t h', lyrics: 'Look, it\'s the off-season, nigga...' },
            { title: 'm y . l i f e', lyrics: 'My life, my life, my life...' }
        ]
    },
    {
        id: 'mock_21',
        title: 'IGOR',
        artist: 'Tyler, The Creator',
        year: '2019',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop',
        songs: [
            { title: 'EARFQUAKE', lyrics: 'You make my earth quake, oh, you make my earth quake...' },
            { title: 'NEW MAGIC WAND', lyrics: 'Sometimes you gotta close a door to open a window...' }
        ]
    },
    {
        id: 'mock_22',
        title: 'Flower Boy',
        artist: 'Tyler, The Creator',
        year: '2017',
        genre: 'Hip-Hop',
        cover: 'https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop',
        songs: [
            { title: 'See You Again', lyrics: 'Okay, okay, okay, okay, okay, okay, oh...' },
            { title: '911 / Mr. Lonely', lyrics: 'Call me, call me, call me...' }
        ]
    },
    {
        id: 'mock_23',
        title: 'Blonde',
        artist: 'Frank Ocean',
        year: '2016',
        genre: 'R&B',
        cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop',
        songs: [
            { title: 'Nikes', lyrics: 'These bitches want Nikes, they lookin\' for a check...' },
            { title: 'Ivy', lyrics: 'I thought that I was dreaming when you said you loved me...' }
        ]
    },
    {
        id: 'mock_24',
        title: 'Channel Orange',
        artist: 'Frank Ocean',
        year: '2012',
        genre: 'R&B',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
        songs: [
            { title: 'Thinkin Bout You', lyrics: 'A tornado flew around my room before you came...' },
            { title: 'Pyramids', lyrics: 'The sun\'s coming up, and I\'m still awake...' }
        ]
    },
    {
        id: 'mock_25',
        title: 'Currents',
        artist: 'Tame Impala',
        year: '2015',
        genre: 'Indie',
        cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop',
        songs: [
            { title: 'Let It Happen', lyrics: 'It\'s getting closer, oh, it\'s getting closer...' },
            { title: 'The Less I Know the Better', lyrics: 'Someone said they saw you with the same boy...' }
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
            const savedAlbum = localStorage.getItem(STORAGE_KEYS.ROT_ALBUM);
            if (savedAlbum) return JSON.parse(savedAlbum);
        }

        // Pick new random from starters
        const pool = [...STARTER_ALBUMS];
        const randomAlbum = pool[Math.floor(Math.random() * pool.length)];

        localStorage.setItem(STORAGE_KEYS.ROT_DATE, today);
        localStorage.setItem(STORAGE_KEYS.ROT_ALBUM, JSON.stringify(randomAlbum));

        return randomAlbum;
    }
};

Storage.init();
