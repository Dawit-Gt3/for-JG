const STORAGE_KEYS = {
    REVIEWS_ALBUMS: 'sonic_critique_reviews_albums',
    REVIEWS_SONGS: 'sonic_critique_reviews_songs',
    FAVORITES_ALBUMS: 'sonic_critique_favorites_albums',
    FAVORITES_SONGS: 'sonic_critique_favorites_songs',
    STARTER_INITIALIZED: 'sonic_critique_initialized_v2', // Increment version
    ROT_DATE: 'sonic_critique_rot_date',
    ROT_ALBUM: 'sonic_critique_rot_album'
};

// We will populate this with 50 albums in a separate action
const STARTER_ALBUMS = [
    {
        "id": "alb_1",
        "title": "After Hours",
        "artist": "The Weeknd",
        "year": "2020",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "alb_1_1",
                "track": 1,
                "title": "Alone Again",
                "duration": "3:10",
                "lyrics": "Take off my disguise...",
                "interpretation": "Intro to isolation.",
                "themes": [
                    "Identity"
                ],
                "mood": [
                    "Dark"
                ],
                "key_lines": [
                    {
                        "line": "Take off my disguise",
                        "explanation": "Character study."
                    }
                ]
            },
            {
                "id": "alb_1_2",
                "track": 2,
                "title": "Too Late",
                "duration": "3:59",
                "lyrics": "We're in hell...",
                "interpretation": "Toxic love.",
                "themes": [
                    "Love"
                ],
                "mood": [
                    "Sad"
                ],
                "key_lines": [
                    {
                        "line": "Hell as paradise",
                        "explanation": "LA lifestyle."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_2",
        "title": "Dawn FM",
        "artist": "The Weeknd",
        "year": "2022",
        "genre": "Pop",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_2_1",
                "track": 1,
                "title": "Track 1 for Dawn FM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Dawn FM go here...",
                "interpretation": "This track exploring the depths of Track 1 for Dawn FM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Dawn FM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_2_2",
                "track": 2,
                "title": "Track 2 for Dawn FM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Dawn FM go here...",
                "interpretation": "This track exploring the depths of Track 2 for Dawn FM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Dawn FM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_2_3",
                "track": 3,
                "title": "Track 3 for Dawn FM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Dawn FM go here...",
                "interpretation": "This track exploring the depths of Track 3 for Dawn FM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Dawn FM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_2_4",
                "track": 4,
                "title": "Track 4 for Dawn FM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Dawn FM go here...",
                "interpretation": "This track exploring the depths of Track 4 for Dawn FM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Dawn FM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_2_5",
                "track": 5,
                "title": "Track 5 for Dawn FM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Dawn FM go here...",
                "interpretation": "This track exploring the depths of Track 5 for Dawn FM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Dawn FM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_2_6",
                "track": 6,
                "title": "Track 6 for Dawn FM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Dawn FM go here...",
                "interpretation": "This track exploring the depths of Track 6 for Dawn FM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Dawn FM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_2_7",
                "track": 7,
                "title": "Track 7 for Dawn FM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Dawn FM go here...",
                "interpretation": "This track exploring the depths of Track 7 for Dawn FM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Dawn FM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_2_8",
                "track": 8,
                "title": "Track 8 for Dawn FM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Dawn FM go here...",
                "interpretation": "This track exploring the depths of Track 8 for Dawn FM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Dawn FM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_2_9",
                "track": 9,
                "title": "Track 9 for Dawn FM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Dawn FM go here...",
                "interpretation": "This track exploring the depths of Track 9 for Dawn FM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Dawn FM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_2_10",
                "track": 10,
                "title": "Track 10 for Dawn FM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Dawn FM go here...",
                "interpretation": "This track exploring the depths of Track 10 for Dawn FM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Dawn FM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_2_11",
                "track": 11,
                "title": "Track 11 for Dawn FM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Dawn FM go here...",
                "interpretation": "This track exploring the depths of Track 11 for Dawn FM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Dawn FM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_2_12",
                "track": 12,
                "title": "Track 12 for Dawn FM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Dawn FM go here...",
                "interpretation": "This track exploring the depths of Track 12 for Dawn FM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Dawn FM",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_3",
        "title": "Life of a Don",
        "artist": "Don Toliver",
        "year": "2021",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_3_1",
                "track": 1,
                "title": "Track 1 for Life of a Don",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Life of a Don go here...",
                "interpretation": "This track exploring the depths of Track 1 for Life of a Don's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Life of a Don",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_3_2",
                "track": 2,
                "title": "Track 2 for Life of a Don",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Life of a Don go here...",
                "interpretation": "This track exploring the depths of Track 2 for Life of a Don's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Life of a Don",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_3_3",
                "track": 3,
                "title": "Track 3 for Life of a Don",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Life of a Don go here...",
                "interpretation": "This track exploring the depths of Track 3 for Life of a Don's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Life of a Don",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_3_4",
                "track": 4,
                "title": "Track 4 for Life of a Don",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Life of a Don go here...",
                "interpretation": "This track exploring the depths of Track 4 for Life of a Don's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Life of a Don",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_3_5",
                "track": 5,
                "title": "Track 5 for Life of a Don",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Life of a Don go here...",
                "interpretation": "This track exploring the depths of Track 5 for Life of a Don's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Life of a Don",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_3_6",
                "track": 6,
                "title": "Track 6 for Life of a Don",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Life of a Don go here...",
                "interpretation": "This track exploring the depths of Track 6 for Life of a Don's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Life of a Don",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_3_7",
                "track": 7,
                "title": "Track 7 for Life of a Don",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Life of a Don go here...",
                "interpretation": "This track exploring the depths of Track 7 for Life of a Don's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Life of a Don",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_3_8",
                "track": 8,
                "title": "Track 8 for Life of a Don",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Life of a Don go here...",
                "interpretation": "This track exploring the depths of Track 8 for Life of a Don's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Life of a Don",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_3_9",
                "track": 9,
                "title": "Track 9 for Life of a Don",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Life of a Don go here...",
                "interpretation": "This track exploring the depths of Track 9 for Life of a Don's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Life of a Don",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_3_10",
                "track": 10,
                "title": "Track 10 for Life of a Don",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Life of a Don go here...",
                "interpretation": "This track exploring the depths of Track 10 for Life of a Don's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Life of a Don",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_3_11",
                "track": 11,
                "title": "Track 11 for Life of a Don",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Life of a Don go here...",
                "interpretation": "This track exploring the depths of Track 11 for Life of a Don's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Life of a Don",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_3_12",
                "track": 12,
                "title": "Track 12 for Life of a Don",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Life of a Don go here...",
                "interpretation": "This track exploring the depths of Track 12 for Life of a Don's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Life of a Don",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_4",
        "title": "Heaven or Hell",
        "artist": "Don Toliver",
        "year": "2020",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_4_1",
                "track": 1,
                "title": "Track 1 for Heaven or Hell",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Heaven or Hell go here...",
                "interpretation": "This track exploring the depths of Track 1 for Heaven or Hell's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Heaven or Hell",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_4_2",
                "track": 2,
                "title": "Track 2 for Heaven or Hell",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Heaven or Hell go here...",
                "interpretation": "This track exploring the depths of Track 2 for Heaven or Hell's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Heaven or Hell",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_4_3",
                "track": 3,
                "title": "Track 3 for Heaven or Hell",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Heaven or Hell go here...",
                "interpretation": "This track exploring the depths of Track 3 for Heaven or Hell's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Heaven or Hell",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_4_4",
                "track": 4,
                "title": "Track 4 for Heaven or Hell",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Heaven or Hell go here...",
                "interpretation": "This track exploring the depths of Track 4 for Heaven or Hell's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Heaven or Hell",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_4_5",
                "track": 5,
                "title": "Track 5 for Heaven or Hell",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Heaven or Hell go here...",
                "interpretation": "This track exploring the depths of Track 5 for Heaven or Hell's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Heaven or Hell",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_4_6",
                "track": 6,
                "title": "Track 6 for Heaven or Hell",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Heaven or Hell go here...",
                "interpretation": "This track exploring the depths of Track 6 for Heaven or Hell's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Heaven or Hell",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_4_7",
                "track": 7,
                "title": "Track 7 for Heaven or Hell",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Heaven or Hell go here...",
                "interpretation": "This track exploring the depths of Track 7 for Heaven or Hell's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Heaven or Hell",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_4_8",
                "track": 8,
                "title": "Track 8 for Heaven or Hell",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Heaven or Hell go here...",
                "interpretation": "This track exploring the depths of Track 8 for Heaven or Hell's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Heaven or Hell",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_4_9",
                "track": 9,
                "title": "Track 9 for Heaven or Hell",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Heaven or Hell go here...",
                "interpretation": "This track exploring the depths of Track 9 for Heaven or Hell's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Heaven or Hell",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_4_10",
                "track": 10,
                "title": "Track 10 for Heaven or Hell",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Heaven or Hell go here...",
                "interpretation": "This track exploring the depths of Track 10 for Heaven or Hell's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Heaven or Hell",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_4_11",
                "track": 11,
                "title": "Track 11 for Heaven or Hell",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Heaven or Hell go here...",
                "interpretation": "This track exploring the depths of Track 11 for Heaven or Hell's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Heaven or Hell",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_4_12",
                "track": 12,
                "title": "Track 12 for Heaven or Hell",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Heaven or Hell go here...",
                "interpretation": "This track exploring the depths of Track 12 for Heaven or Hell's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Heaven or Hell",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_5",
        "title": "Love Sick",
        "artist": "Don Toliver",
        "year": "2023",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_5_1",
                "track": 1,
                "title": "Track 1 for Love Sick",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Love Sick go here...",
                "interpretation": "This track exploring the depths of Track 1 for Love Sick's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Love Sick",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_5_2",
                "track": 2,
                "title": "Track 2 for Love Sick",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Love Sick go here...",
                "interpretation": "This track exploring the depths of Track 2 for Love Sick's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Love Sick",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_5_3",
                "track": 3,
                "title": "Track 3 for Love Sick",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Love Sick go here...",
                "interpretation": "This track exploring the depths of Track 3 for Love Sick's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Love Sick",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_5_4",
                "track": 4,
                "title": "Track 4 for Love Sick",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Love Sick go here...",
                "interpretation": "This track exploring the depths of Track 4 for Love Sick's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Love Sick",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_5_5",
                "track": 5,
                "title": "Track 5 for Love Sick",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Love Sick go here...",
                "interpretation": "This track exploring the depths of Track 5 for Love Sick's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Love Sick",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_5_6",
                "track": 6,
                "title": "Track 6 for Love Sick",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Love Sick go here...",
                "interpretation": "This track exploring the depths of Track 6 for Love Sick's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Love Sick",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_5_7",
                "track": 7,
                "title": "Track 7 for Love Sick",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Love Sick go here...",
                "interpretation": "This track exploring the depths of Track 7 for Love Sick's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Love Sick",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_5_8",
                "track": 8,
                "title": "Track 8 for Love Sick",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Love Sick go here...",
                "interpretation": "This track exploring the depths of Track 8 for Love Sick's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Love Sick",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_5_9",
                "track": 9,
                "title": "Track 9 for Love Sick",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Love Sick go here...",
                "interpretation": "This track exploring the depths of Track 9 for Love Sick's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Love Sick",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_5_10",
                "track": 10,
                "title": "Track 10 for Love Sick",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Love Sick go here...",
                "interpretation": "This track exploring the depths of Track 10 for Love Sick's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Love Sick",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_5_11",
                "track": 11,
                "title": "Track 11 for Love Sick",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Love Sick go here...",
                "interpretation": "This track exploring the depths of Track 11 for Love Sick's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Love Sick",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_5_12",
                "track": 12,
                "title": "Track 12 for Love Sick",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Love Sick go here...",
                "interpretation": "This track exploring the depths of Track 12 for Love Sick's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Love Sick",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_6",
        "title": "French Exit",
        "artist": "TV Girl",
        "year": "2014",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_6_1",
                "track": 1,
                "title": "Track 1 for French Exit",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for French Exit go here...",
                "interpretation": "This track exploring the depths of Track 1 for French Exit's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for French Exit",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_6_2",
                "track": 2,
                "title": "Track 2 for French Exit",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for French Exit go here...",
                "interpretation": "This track exploring the depths of Track 2 for French Exit's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for French Exit",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_6_3",
                "track": 3,
                "title": "Track 3 for French Exit",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for French Exit go here...",
                "interpretation": "This track exploring the depths of Track 3 for French Exit's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for French Exit",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_6_4",
                "track": 4,
                "title": "Track 4 for French Exit",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for French Exit go here...",
                "interpretation": "This track exploring the depths of Track 4 for French Exit's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for French Exit",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_6_5",
                "track": 5,
                "title": "Track 5 for French Exit",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for French Exit go here...",
                "interpretation": "This track exploring the depths of Track 5 for French Exit's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for French Exit",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_6_6",
                "track": 6,
                "title": "Track 6 for French Exit",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for French Exit go here...",
                "interpretation": "This track exploring the depths of Track 6 for French Exit's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for French Exit",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_6_7",
                "track": 7,
                "title": "Track 7 for French Exit",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for French Exit go here...",
                "interpretation": "This track exploring the depths of Track 7 for French Exit's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for French Exit",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_6_8",
                "track": 8,
                "title": "Track 8 for French Exit",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for French Exit go here...",
                "interpretation": "This track exploring the depths of Track 8 for French Exit's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for French Exit",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_6_9",
                "track": 9,
                "title": "Track 9 for French Exit",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for French Exit go here...",
                "interpretation": "This track exploring the depths of Track 9 for French Exit's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for French Exit",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_6_10",
                "track": 10,
                "title": "Track 10 for French Exit",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for French Exit go here...",
                "interpretation": "This track exploring the depths of Track 10 for French Exit's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for French Exit",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_6_11",
                "track": 11,
                "title": "Track 11 for French Exit",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for French Exit go here...",
                "interpretation": "This track exploring the depths of Track 11 for French Exit's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for French Exit",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_6_12",
                "track": 12,
                "title": "Track 12 for French Exit",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for French Exit go here...",
                "interpretation": "This track exploring the depths of Track 12 for French Exit's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for French Exit",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_7",
        "title": "Who Really Cares",
        "artist": "TV Girl",
        "year": "2016",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_7_1",
                "track": 1,
                "title": "Track 1 for Who Really Cares",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Who Really Cares go here...",
                "interpretation": "This track exploring the depths of Track 1 for Who Really Cares's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Who Really Cares",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_7_2",
                "track": 2,
                "title": "Track 2 for Who Really Cares",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Who Really Cares go here...",
                "interpretation": "This track exploring the depths of Track 2 for Who Really Cares's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Who Really Cares",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_7_3",
                "track": 3,
                "title": "Track 3 for Who Really Cares",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Who Really Cares go here...",
                "interpretation": "This track exploring the depths of Track 3 for Who Really Cares's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Who Really Cares",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_7_4",
                "track": 4,
                "title": "Track 4 for Who Really Cares",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Who Really Cares go here...",
                "interpretation": "This track exploring the depths of Track 4 for Who Really Cares's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Who Really Cares",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_7_5",
                "track": 5,
                "title": "Track 5 for Who Really Cares",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Who Really Cares go here...",
                "interpretation": "This track exploring the depths of Track 5 for Who Really Cares's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Who Really Cares",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_7_6",
                "track": 6,
                "title": "Track 6 for Who Really Cares",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Who Really Cares go here...",
                "interpretation": "This track exploring the depths of Track 6 for Who Really Cares's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Who Really Cares",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_7_7",
                "track": 7,
                "title": "Track 7 for Who Really Cares",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Who Really Cares go here...",
                "interpretation": "This track exploring the depths of Track 7 for Who Really Cares's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Who Really Cares",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_7_8",
                "track": 8,
                "title": "Track 8 for Who Really Cares",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Who Really Cares go here...",
                "interpretation": "This track exploring the depths of Track 8 for Who Really Cares's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Who Really Cares",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_7_9",
                "track": 9,
                "title": "Track 9 for Who Really Cares",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Who Really Cares go here...",
                "interpretation": "This track exploring the depths of Track 9 for Who Really Cares's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Who Really Cares",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_7_10",
                "track": 10,
                "title": "Track 10 for Who Really Cares",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Who Really Cares go here...",
                "interpretation": "This track exploring the depths of Track 10 for Who Really Cares's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Who Really Cares",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_7_11",
                "track": 11,
                "title": "Track 11 for Who Really Cares",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Who Really Cares go here...",
                "interpretation": "This track exploring the depths of Track 11 for Who Really Cares's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Who Really Cares",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_7_12",
                "track": 12,
                "title": "Track 12 for Who Really Cares",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Who Really Cares go here...",
                "interpretation": "This track exploring the depths of Track 12 for Who Really Cares's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Who Really Cares",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_8",
        "title": "Death of a Party Girl",
        "artist": "TV Girl",
        "year": "2018",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_8_1",
                "track": 1,
                "title": "Track 1 for Death of a Party Girl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Death of a Party Girl go here...",
                "interpretation": "This track exploring the depths of Track 1 for Death of a Party Girl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Death of a Party Girl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_8_2",
                "track": 2,
                "title": "Track 2 for Death of a Party Girl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Death of a Party Girl go here...",
                "interpretation": "This track exploring the depths of Track 2 for Death of a Party Girl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Death of a Party Girl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_8_3",
                "track": 3,
                "title": "Track 3 for Death of a Party Girl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Death of a Party Girl go here...",
                "interpretation": "This track exploring the depths of Track 3 for Death of a Party Girl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Death of a Party Girl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_8_4",
                "track": 4,
                "title": "Track 4 for Death of a Party Girl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Death of a Party Girl go here...",
                "interpretation": "This track exploring the depths of Track 4 for Death of a Party Girl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Death of a Party Girl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_8_5",
                "track": 5,
                "title": "Track 5 for Death of a Party Girl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Death of a Party Girl go here...",
                "interpretation": "This track exploring the depths of Track 5 for Death of a Party Girl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Death of a Party Girl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_8_6",
                "track": 6,
                "title": "Track 6 for Death of a Party Girl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Death of a Party Girl go here...",
                "interpretation": "This track exploring the depths of Track 6 for Death of a Party Girl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Death of a Party Girl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_8_7",
                "track": 7,
                "title": "Track 7 for Death of a Party Girl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Death of a Party Girl go here...",
                "interpretation": "This track exploring the depths of Track 7 for Death of a Party Girl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Death of a Party Girl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_8_8",
                "track": 8,
                "title": "Track 8 for Death of a Party Girl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Death of a Party Girl go here...",
                "interpretation": "This track exploring the depths of Track 8 for Death of a Party Girl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Death of a Party Girl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_8_9",
                "track": 9,
                "title": "Track 9 for Death of a Party Girl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Death of a Party Girl go here...",
                "interpretation": "This track exploring the depths of Track 9 for Death of a Party Girl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Death of a Party Girl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_8_10",
                "track": 10,
                "title": "Track 10 for Death of a Party Girl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Death of a Party Girl go here...",
                "interpretation": "This track exploring the depths of Track 10 for Death of a Party Girl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Death of a Party Girl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_8_11",
                "track": 11,
                "title": "Track 11 for Death of a Party Girl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Death of a Party Girl go here...",
                "interpretation": "This track exploring the depths of Track 11 for Death of a Party Girl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Death of a Party Girl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_8_12",
                "track": 12,
                "title": "Track 12 for Death of a Party Girl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Death of a Party Girl go here...",
                "interpretation": "This track exploring the depths of Track 12 for Death of a Party Girl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Death of a Party Girl",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_9",
        "title": "Salad Days",
        "artist": "Mac DeMarco",
        "year": "2014",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_9_1",
                "track": 1,
                "title": "Track 1 for Salad Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Salad Days go here...",
                "interpretation": "This track exploring the depths of Track 1 for Salad Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Salad Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_9_2",
                "track": 2,
                "title": "Track 2 for Salad Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Salad Days go here...",
                "interpretation": "This track exploring the depths of Track 2 for Salad Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Salad Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_9_3",
                "track": 3,
                "title": "Track 3 for Salad Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Salad Days go here...",
                "interpretation": "This track exploring the depths of Track 3 for Salad Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Salad Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_9_4",
                "track": 4,
                "title": "Track 4 for Salad Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Salad Days go here...",
                "interpretation": "This track exploring the depths of Track 4 for Salad Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Salad Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_9_5",
                "track": 5,
                "title": "Track 5 for Salad Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Salad Days go here...",
                "interpretation": "This track exploring the depths of Track 5 for Salad Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Salad Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_9_6",
                "track": 6,
                "title": "Track 6 for Salad Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Salad Days go here...",
                "interpretation": "This track exploring the depths of Track 6 for Salad Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Salad Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_9_7",
                "track": 7,
                "title": "Track 7 for Salad Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Salad Days go here...",
                "interpretation": "This track exploring the depths of Track 7 for Salad Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Salad Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_9_8",
                "track": 8,
                "title": "Track 8 for Salad Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Salad Days go here...",
                "interpretation": "This track exploring the depths of Track 8 for Salad Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Salad Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_9_9",
                "track": 9,
                "title": "Track 9 for Salad Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Salad Days go here...",
                "interpretation": "This track exploring the depths of Track 9 for Salad Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Salad Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_9_10",
                "track": 10,
                "title": "Track 10 for Salad Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Salad Days go here...",
                "interpretation": "This track exploring the depths of Track 10 for Salad Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Salad Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_9_11",
                "track": 11,
                "title": "Track 11 for Salad Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Salad Days go here...",
                "interpretation": "This track exploring the depths of Track 11 for Salad Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Salad Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_9_12",
                "track": 12,
                "title": "Track 12 for Salad Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Salad Days go here...",
                "interpretation": "This track exploring the depths of Track 12 for Salad Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Salad Days",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_10",
        "title": "This Old Dog",
        "artist": "Mac DeMarco",
        "year": "2017",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_10_1",
                "track": 1,
                "title": "Track 1 for This Old Dog",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for This Old Dog go here...",
                "interpretation": "This track exploring the depths of Track 1 for This Old Dog's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for This Old Dog",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_10_2",
                "track": 2,
                "title": "Track 2 for This Old Dog",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for This Old Dog go here...",
                "interpretation": "This track exploring the depths of Track 2 for This Old Dog's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for This Old Dog",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_10_3",
                "track": 3,
                "title": "Track 3 for This Old Dog",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for This Old Dog go here...",
                "interpretation": "This track exploring the depths of Track 3 for This Old Dog's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for This Old Dog",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_10_4",
                "track": 4,
                "title": "Track 4 for This Old Dog",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for This Old Dog go here...",
                "interpretation": "This track exploring the depths of Track 4 for This Old Dog's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for This Old Dog",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_10_5",
                "track": 5,
                "title": "Track 5 for This Old Dog",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for This Old Dog go here...",
                "interpretation": "This track exploring the depths of Track 5 for This Old Dog's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for This Old Dog",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_10_6",
                "track": 6,
                "title": "Track 6 for This Old Dog",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for This Old Dog go here...",
                "interpretation": "This track exploring the depths of Track 6 for This Old Dog's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for This Old Dog",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_10_7",
                "track": 7,
                "title": "Track 7 for This Old Dog",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for This Old Dog go here...",
                "interpretation": "This track exploring the depths of Track 7 for This Old Dog's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for This Old Dog",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_10_8",
                "track": 8,
                "title": "Track 8 for This Old Dog",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for This Old Dog go here...",
                "interpretation": "This track exploring the depths of Track 8 for This Old Dog's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for This Old Dog",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_10_9",
                "track": 9,
                "title": "Track 9 for This Old Dog",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for This Old Dog go here...",
                "interpretation": "This track exploring the depths of Track 9 for This Old Dog's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for This Old Dog",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_10_10",
                "track": 10,
                "title": "Track 10 for This Old Dog",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for This Old Dog go here...",
                "interpretation": "This track exploring the depths of Track 10 for This Old Dog's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for This Old Dog",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_10_11",
                "track": 11,
                "title": "Track 11 for This Old Dog",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for This Old Dog go here...",
                "interpretation": "This track exploring the depths of Track 11 for This Old Dog's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for This Old Dog",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_10_12",
                "track": 12,
                "title": "Track 12 for This Old Dog",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for This Old Dog go here...",
                "interpretation": "This track exploring the depths of Track 12 for This Old Dog's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for This Old Dog",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_11",
        "title": "2",
        "artist": "Mac DeMarco",
        "year": "2012",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_11_1",
                "track": 1,
                "title": "Track 1 for 2",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for 2 go here...",
                "interpretation": "This track exploring the depths of Track 1 for 2's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for 2",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_11_2",
                "track": 2,
                "title": "Track 2 for 2",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for 2 go here...",
                "interpretation": "This track exploring the depths of Track 2 for 2's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for 2",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_11_3",
                "track": 3,
                "title": "Track 3 for 2",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for 2 go here...",
                "interpretation": "This track exploring the depths of Track 3 for 2's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for 2",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_11_4",
                "track": 4,
                "title": "Track 4 for 2",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for 2 go here...",
                "interpretation": "This track exploring the depths of Track 4 for 2's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for 2",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_11_5",
                "track": 5,
                "title": "Track 5 for 2",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for 2 go here...",
                "interpretation": "This track exploring the depths of Track 5 for 2's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for 2",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_11_6",
                "track": 6,
                "title": "Track 6 for 2",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for 2 go here...",
                "interpretation": "This track exploring the depths of Track 6 for 2's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for 2",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_11_7",
                "track": 7,
                "title": "Track 7 for 2",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for 2 go here...",
                "interpretation": "This track exploring the depths of Track 7 for 2's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for 2",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_11_8",
                "track": 8,
                "title": "Track 8 for 2",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for 2 go here...",
                "interpretation": "This track exploring the depths of Track 8 for 2's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for 2",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_11_9",
                "track": 9,
                "title": "Track 9 for 2",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for 2 go here...",
                "interpretation": "This track exploring the depths of Track 9 for 2's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for 2",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_11_10",
                "track": 10,
                "title": "Track 10 for 2",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for 2 go here...",
                "interpretation": "This track exploring the depths of Track 10 for 2's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for 2",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_11_11",
                "track": 11,
                "title": "Track 11 for 2",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for 2 go here...",
                "interpretation": "This track exploring the depths of Track 11 for 2's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for 2",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_11_12",
                "track": 12,
                "title": "Track 12 for 2",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for 2 go here...",
                "interpretation": "This track exploring the depths of Track 12 for 2's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for 2",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_12",
        "title": "To Pimp a Butterfly",
        "artist": "Kendrick Lamar",
        "year": "2015",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_12_1",
                "track": 1,
                "title": "Track 1 for To Pimp a Butterfly",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for To Pimp a Butterfly go here...",
                "interpretation": "This track exploring the depths of Track 1 for To Pimp a Butterfly's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for To Pimp a Butterfly",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_12_2",
                "track": 2,
                "title": "Track 2 for To Pimp a Butterfly",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for To Pimp a Butterfly go here...",
                "interpretation": "This track exploring the depths of Track 2 for To Pimp a Butterfly's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for To Pimp a Butterfly",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_12_3",
                "track": 3,
                "title": "Track 3 for To Pimp a Butterfly",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for To Pimp a Butterfly go here...",
                "interpretation": "This track exploring the depths of Track 3 for To Pimp a Butterfly's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for To Pimp a Butterfly",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_12_4",
                "track": 4,
                "title": "Track 4 for To Pimp a Butterfly",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for To Pimp a Butterfly go here...",
                "interpretation": "This track exploring the depths of Track 4 for To Pimp a Butterfly's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for To Pimp a Butterfly",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_12_5",
                "track": 5,
                "title": "Track 5 for To Pimp a Butterfly",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for To Pimp a Butterfly go here...",
                "interpretation": "This track exploring the depths of Track 5 for To Pimp a Butterfly's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for To Pimp a Butterfly",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_12_6",
                "track": 6,
                "title": "Track 6 for To Pimp a Butterfly",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for To Pimp a Butterfly go here...",
                "interpretation": "This track exploring the depths of Track 6 for To Pimp a Butterfly's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for To Pimp a Butterfly",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_12_7",
                "track": 7,
                "title": "Track 7 for To Pimp a Butterfly",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for To Pimp a Butterfly go here...",
                "interpretation": "This track exploring the depths of Track 7 for To Pimp a Butterfly's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for To Pimp a Butterfly",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_12_8",
                "track": 8,
                "title": "Track 8 for To Pimp a Butterfly",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for To Pimp a Butterfly go here...",
                "interpretation": "This track exploring the depths of Track 8 for To Pimp a Butterfly's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for To Pimp a Butterfly",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_12_9",
                "track": 9,
                "title": "Track 9 for To Pimp a Butterfly",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for To Pimp a Butterfly go here...",
                "interpretation": "This track exploring the depths of Track 9 for To Pimp a Butterfly's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for To Pimp a Butterfly",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_12_10",
                "track": 10,
                "title": "Track 10 for To Pimp a Butterfly",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for To Pimp a Butterfly go here...",
                "interpretation": "This track exploring the depths of Track 10 for To Pimp a Butterfly's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for To Pimp a Butterfly",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_12_11",
                "track": 11,
                "title": "Track 11 for To Pimp a Butterfly",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for To Pimp a Butterfly go here...",
                "interpretation": "This track exploring the depths of Track 11 for To Pimp a Butterfly's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for To Pimp a Butterfly",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_12_12",
                "track": 12,
                "title": "Track 12 for To Pimp a Butterfly",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for To Pimp a Butterfly go here...",
                "interpretation": "This track exploring the depths of Track 12 for To Pimp a Butterfly's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for To Pimp a Butterfly",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_13",
        "title": "good kid, m.A.A.d city",
        "artist": "Kendrick Lamar",
        "year": "2012",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_13_1",
                "track": 1,
                "title": "Track 1 for good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for good kid, m.A.A.d city go here...",
                "interpretation": "This track exploring the depths of Track 1 for good kid, m.A.A.d city's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for good kid, m.A.A.d city",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_13_2",
                "track": 2,
                "title": "Track 2 for good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for good kid, m.A.A.d city go here...",
                "interpretation": "This track exploring the depths of Track 2 for good kid, m.A.A.d city's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for good kid, m.A.A.d city",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_13_3",
                "track": 3,
                "title": "Track 3 for good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for good kid, m.A.A.d city go here...",
                "interpretation": "This track exploring the depths of Track 3 for good kid, m.A.A.d city's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for good kid, m.A.A.d city",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_13_4",
                "track": 4,
                "title": "Track 4 for good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for good kid, m.A.A.d city go here...",
                "interpretation": "This track exploring the depths of Track 4 for good kid, m.A.A.d city's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for good kid, m.A.A.d city",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_13_5",
                "track": 5,
                "title": "Track 5 for good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for good kid, m.A.A.d city go here...",
                "interpretation": "This track exploring the depths of Track 5 for good kid, m.A.A.d city's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for good kid, m.A.A.d city",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_13_6",
                "track": 6,
                "title": "Track 6 for good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for good kid, m.A.A.d city go here...",
                "interpretation": "This track exploring the depths of Track 6 for good kid, m.A.A.d city's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for good kid, m.A.A.d city",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_13_7",
                "track": 7,
                "title": "Track 7 for good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for good kid, m.A.A.d city go here...",
                "interpretation": "This track exploring the depths of Track 7 for good kid, m.A.A.d city's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for good kid, m.A.A.d city",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_13_8",
                "track": 8,
                "title": "Track 8 for good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for good kid, m.A.A.d city go here...",
                "interpretation": "This track exploring the depths of Track 8 for good kid, m.A.A.d city's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for good kid, m.A.A.d city",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_13_9",
                "track": 9,
                "title": "Track 9 for good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for good kid, m.A.A.d city go here...",
                "interpretation": "This track exploring the depths of Track 9 for good kid, m.A.A.d city's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for good kid, m.A.A.d city",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_13_10",
                "track": 10,
                "title": "Track 10 for good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for good kid, m.A.A.d city go here...",
                "interpretation": "This track exploring the depths of Track 10 for good kid, m.A.A.d city's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for good kid, m.A.A.d city",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_13_11",
                "track": 11,
                "title": "Track 11 for good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for good kid, m.A.A.d city go here...",
                "interpretation": "This track exploring the depths of Track 11 for good kid, m.A.A.d city's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for good kid, m.A.A.d city",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_13_12",
                "track": 12,
                "title": "Track 12 for good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for good kid, m.A.A.d city go here...",
                "interpretation": "This track exploring the depths of Track 12 for good kid, m.A.A.d city's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for good kid, m.A.A.d city",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_14",
        "title": "DAMN.",
        "artist": "Kendrick Lamar",
        "year": "2017",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_14_1",
                "track": 1,
                "title": "Track 1 for DAMN.",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for DAMN. go here...",
                "interpretation": "This track exploring the depths of Track 1 for DAMN.'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for DAMN.",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_14_2",
                "track": 2,
                "title": "Track 2 for DAMN.",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for DAMN. go here...",
                "interpretation": "This track exploring the depths of Track 2 for DAMN.'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for DAMN.",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_14_3",
                "track": 3,
                "title": "Track 3 for DAMN.",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for DAMN. go here...",
                "interpretation": "This track exploring the depths of Track 3 for DAMN.'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for DAMN.",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_14_4",
                "track": 4,
                "title": "Track 4 for DAMN.",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for DAMN. go here...",
                "interpretation": "This track exploring the depths of Track 4 for DAMN.'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for DAMN.",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_14_5",
                "track": 5,
                "title": "Track 5 for DAMN.",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for DAMN. go here...",
                "interpretation": "This track exploring the depths of Track 5 for DAMN.'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for DAMN.",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_14_6",
                "track": 6,
                "title": "Track 6 for DAMN.",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for DAMN. go here...",
                "interpretation": "This track exploring the depths of Track 6 for DAMN.'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for DAMN.",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_14_7",
                "track": 7,
                "title": "Track 7 for DAMN.",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for DAMN. go here...",
                "interpretation": "This track exploring the depths of Track 7 for DAMN.'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for DAMN.",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_14_8",
                "track": 8,
                "title": "Track 8 for DAMN.",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for DAMN. go here...",
                "interpretation": "This track exploring the depths of Track 8 for DAMN.'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for DAMN.",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_14_9",
                "track": 9,
                "title": "Track 9 for DAMN.",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for DAMN. go here...",
                "interpretation": "This track exploring the depths of Track 9 for DAMN.'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for DAMN.",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_14_10",
                "track": 10,
                "title": "Track 10 for DAMN.",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for DAMN. go here...",
                "interpretation": "This track exploring the depths of Track 10 for DAMN.'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for DAMN.",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_14_11",
                "track": 11,
                "title": "Track 11 for DAMN.",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for DAMN. go here...",
                "interpretation": "This track exploring the depths of Track 11 for DAMN.'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for DAMN.",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_14_12",
                "track": 12,
                "title": "Track 12 for DAMN.",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for DAMN. go here...",
                "interpretation": "This track exploring the depths of Track 12 for DAMN.'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for DAMN.",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_15",
        "title": "Mr. Morale & The Big Steppers",
        "artist": "Kendrick Lamar",
        "year": "2022",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_15_1",
                "track": 1,
                "title": "Track 1 for Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Mr. Morale & The Big Steppers go here...",
                "interpretation": "This track exploring the depths of Track 1 for Mr. Morale & The Big Steppers's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Mr. Morale & The Big Steppers",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_15_2",
                "track": 2,
                "title": "Track 2 for Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Mr. Morale & The Big Steppers go here...",
                "interpretation": "This track exploring the depths of Track 2 for Mr. Morale & The Big Steppers's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Mr. Morale & The Big Steppers",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_15_3",
                "track": 3,
                "title": "Track 3 for Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Mr. Morale & The Big Steppers go here...",
                "interpretation": "This track exploring the depths of Track 3 for Mr. Morale & The Big Steppers's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Mr. Morale & The Big Steppers",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_15_4",
                "track": 4,
                "title": "Track 4 for Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Mr. Morale & The Big Steppers go here...",
                "interpretation": "This track exploring the depths of Track 4 for Mr. Morale & The Big Steppers's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Mr. Morale & The Big Steppers",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_15_5",
                "track": 5,
                "title": "Track 5 for Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Mr. Morale & The Big Steppers go here...",
                "interpretation": "This track exploring the depths of Track 5 for Mr. Morale & The Big Steppers's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Mr. Morale & The Big Steppers",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_15_6",
                "track": 6,
                "title": "Track 6 for Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Mr. Morale & The Big Steppers go here...",
                "interpretation": "This track exploring the depths of Track 6 for Mr. Morale & The Big Steppers's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Mr. Morale & The Big Steppers",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_15_7",
                "track": 7,
                "title": "Track 7 for Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Mr. Morale & The Big Steppers go here...",
                "interpretation": "This track exploring the depths of Track 7 for Mr. Morale & The Big Steppers's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Mr. Morale & The Big Steppers",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_15_8",
                "track": 8,
                "title": "Track 8 for Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Mr. Morale & The Big Steppers go here...",
                "interpretation": "This track exploring the depths of Track 8 for Mr. Morale & The Big Steppers's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Mr. Morale & The Big Steppers",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_15_9",
                "track": 9,
                "title": "Track 9 for Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Mr. Morale & The Big Steppers go here...",
                "interpretation": "This track exploring the depths of Track 9 for Mr. Morale & The Big Steppers's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Mr. Morale & The Big Steppers",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_15_10",
                "track": 10,
                "title": "Track 10 for Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Mr. Morale & The Big Steppers go here...",
                "interpretation": "This track exploring the depths of Track 10 for Mr. Morale & The Big Steppers's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Mr. Morale & The Big Steppers",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_15_11",
                "track": 11,
                "title": "Track 11 for Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Mr. Morale & The Big Steppers go here...",
                "interpretation": "This track exploring the depths of Track 11 for Mr. Morale & The Big Steppers's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Mr. Morale & The Big Steppers",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_15_12",
                "track": 12,
                "title": "Track 12 for Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Mr. Morale & The Big Steppers go here...",
                "interpretation": "This track exploring the depths of Track 12 for Mr. Morale & The Big Steppers's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Mr. Morale & The Big Steppers",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_16",
        "title": "2014 Forest Hills Drive",
        "artist": "J. Cole",
        "year": "2014",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_16_1",
                "track": 1,
                "title": "Track 1 for 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for 2014 Forest Hills Drive go here...",
                "interpretation": "This track exploring the depths of Track 1 for 2014 Forest Hills Drive's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for 2014 Forest Hills Drive",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_16_2",
                "track": 2,
                "title": "Track 2 for 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for 2014 Forest Hills Drive go here...",
                "interpretation": "This track exploring the depths of Track 2 for 2014 Forest Hills Drive's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for 2014 Forest Hills Drive",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_16_3",
                "track": 3,
                "title": "Track 3 for 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for 2014 Forest Hills Drive go here...",
                "interpretation": "This track exploring the depths of Track 3 for 2014 Forest Hills Drive's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for 2014 Forest Hills Drive",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_16_4",
                "track": 4,
                "title": "Track 4 for 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for 2014 Forest Hills Drive go here...",
                "interpretation": "This track exploring the depths of Track 4 for 2014 Forest Hills Drive's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for 2014 Forest Hills Drive",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_16_5",
                "track": 5,
                "title": "Track 5 for 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for 2014 Forest Hills Drive go here...",
                "interpretation": "This track exploring the depths of Track 5 for 2014 Forest Hills Drive's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for 2014 Forest Hills Drive",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_16_6",
                "track": 6,
                "title": "Track 6 for 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for 2014 Forest Hills Drive go here...",
                "interpretation": "This track exploring the depths of Track 6 for 2014 Forest Hills Drive's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for 2014 Forest Hills Drive",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_16_7",
                "track": 7,
                "title": "Track 7 for 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for 2014 Forest Hills Drive go here...",
                "interpretation": "This track exploring the depths of Track 7 for 2014 Forest Hills Drive's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for 2014 Forest Hills Drive",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_16_8",
                "track": 8,
                "title": "Track 8 for 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for 2014 Forest Hills Drive go here...",
                "interpretation": "This track exploring the depths of Track 8 for 2014 Forest Hills Drive's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for 2014 Forest Hills Drive",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_16_9",
                "track": 9,
                "title": "Track 9 for 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for 2014 Forest Hills Drive go here...",
                "interpretation": "This track exploring the depths of Track 9 for 2014 Forest Hills Drive's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for 2014 Forest Hills Drive",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_16_10",
                "track": 10,
                "title": "Track 10 for 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for 2014 Forest Hills Drive go here...",
                "interpretation": "This track exploring the depths of Track 10 for 2014 Forest Hills Drive's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for 2014 Forest Hills Drive",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_16_11",
                "track": 11,
                "title": "Track 11 for 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for 2014 Forest Hills Drive go here...",
                "interpretation": "This track exploring the depths of Track 11 for 2014 Forest Hills Drive's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for 2014 Forest Hills Drive",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_16_12",
                "track": 12,
                "title": "Track 12 for 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for 2014 Forest Hills Drive go here...",
                "interpretation": "This track exploring the depths of Track 12 for 2014 Forest Hills Drive's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for 2014 Forest Hills Drive",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_17",
        "title": "4 Your Eyez Only",
        "artist": "J. Cole",
        "year": "2016",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_17_1",
                "track": 1,
                "title": "Track 1 for 4 Your Eyez Only",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for 4 Your Eyez Only go here...",
                "interpretation": "This track exploring the depths of Track 1 for 4 Your Eyez Only's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for 4 Your Eyez Only",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_17_2",
                "track": 2,
                "title": "Track 2 for 4 Your Eyez Only",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for 4 Your Eyez Only go here...",
                "interpretation": "This track exploring the depths of Track 2 for 4 Your Eyez Only's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for 4 Your Eyez Only",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_17_3",
                "track": 3,
                "title": "Track 3 for 4 Your Eyez Only",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for 4 Your Eyez Only go here...",
                "interpretation": "This track exploring the depths of Track 3 for 4 Your Eyez Only's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for 4 Your Eyez Only",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_17_4",
                "track": 4,
                "title": "Track 4 for 4 Your Eyez Only",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for 4 Your Eyez Only go here...",
                "interpretation": "This track exploring the depths of Track 4 for 4 Your Eyez Only's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for 4 Your Eyez Only",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_17_5",
                "track": 5,
                "title": "Track 5 for 4 Your Eyez Only",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for 4 Your Eyez Only go here...",
                "interpretation": "This track exploring the depths of Track 5 for 4 Your Eyez Only's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for 4 Your Eyez Only",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_17_6",
                "track": 6,
                "title": "Track 6 for 4 Your Eyez Only",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for 4 Your Eyez Only go here...",
                "interpretation": "This track exploring the depths of Track 6 for 4 Your Eyez Only's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for 4 Your Eyez Only",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_17_7",
                "track": 7,
                "title": "Track 7 for 4 Your Eyez Only",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for 4 Your Eyez Only go here...",
                "interpretation": "This track exploring the depths of Track 7 for 4 Your Eyez Only's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for 4 Your Eyez Only",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_17_8",
                "track": 8,
                "title": "Track 8 for 4 Your Eyez Only",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for 4 Your Eyez Only go here...",
                "interpretation": "This track exploring the depths of Track 8 for 4 Your Eyez Only's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for 4 Your Eyez Only",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_17_9",
                "track": 9,
                "title": "Track 9 for 4 Your Eyez Only",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for 4 Your Eyez Only go here...",
                "interpretation": "This track exploring the depths of Track 9 for 4 Your Eyez Only's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for 4 Your Eyez Only",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_17_10",
                "track": 10,
                "title": "Track 10 for 4 Your Eyez Only",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for 4 Your Eyez Only go here...",
                "interpretation": "This track exploring the depths of Track 10 for 4 Your Eyez Only's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for 4 Your Eyez Only",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_17_11",
                "track": 11,
                "title": "Track 11 for 4 Your Eyez Only",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for 4 Your Eyez Only go here...",
                "interpretation": "This track exploring the depths of Track 11 for 4 Your Eyez Only's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for 4 Your Eyez Only",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_17_12",
                "track": 12,
                "title": "Track 12 for 4 Your Eyez Only",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for 4 Your Eyez Only go here...",
                "interpretation": "This track exploring the depths of Track 12 for 4 Your Eyez Only's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for 4 Your Eyez Only",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_18",
        "title": "KOD",
        "artist": "J. Cole",
        "year": "2018",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_18_1",
                "track": 1,
                "title": "Track 1 for KOD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for KOD go here...",
                "interpretation": "This track exploring the depths of Track 1 for KOD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for KOD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_18_2",
                "track": 2,
                "title": "Track 2 for KOD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for KOD go here...",
                "interpretation": "This track exploring the depths of Track 2 for KOD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for KOD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_18_3",
                "track": 3,
                "title": "Track 3 for KOD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for KOD go here...",
                "interpretation": "This track exploring the depths of Track 3 for KOD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for KOD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_18_4",
                "track": 4,
                "title": "Track 4 for KOD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for KOD go here...",
                "interpretation": "This track exploring the depths of Track 4 for KOD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for KOD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_18_5",
                "track": 5,
                "title": "Track 5 for KOD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for KOD go here...",
                "interpretation": "This track exploring the depths of Track 5 for KOD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for KOD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_18_6",
                "track": 6,
                "title": "Track 6 for KOD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for KOD go here...",
                "interpretation": "This track exploring the depths of Track 6 for KOD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for KOD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_18_7",
                "track": 7,
                "title": "Track 7 for KOD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for KOD go here...",
                "interpretation": "This track exploring the depths of Track 7 for KOD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for KOD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_18_8",
                "track": 8,
                "title": "Track 8 for KOD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for KOD go here...",
                "interpretation": "This track exploring the depths of Track 8 for KOD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for KOD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_18_9",
                "track": 9,
                "title": "Track 9 for KOD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for KOD go here...",
                "interpretation": "This track exploring the depths of Track 9 for KOD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for KOD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_18_10",
                "track": 10,
                "title": "Track 10 for KOD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for KOD go here...",
                "interpretation": "This track exploring the depths of Track 10 for KOD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for KOD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_18_11",
                "track": 11,
                "title": "Track 11 for KOD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for KOD go here...",
                "interpretation": "This track exploring the depths of Track 11 for KOD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for KOD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_18_12",
                "track": 12,
                "title": "Track 12 for KOD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for KOD go here...",
                "interpretation": "This track exploring the depths of Track 12 for KOD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for KOD",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_19",
        "title": "The Off-Season",
        "artist": "J. Cole",
        "year": "2021",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_19_1",
                "track": 1,
                "title": "Track 1 for The Off-Season",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for The Off-Season go here...",
                "interpretation": "This track exploring the depths of Track 1 for The Off-Season's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for The Off-Season",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_19_2",
                "track": 2,
                "title": "Track 2 for The Off-Season",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for The Off-Season go here...",
                "interpretation": "This track exploring the depths of Track 2 for The Off-Season's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for The Off-Season",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_19_3",
                "track": 3,
                "title": "Track 3 for The Off-Season",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for The Off-Season go here...",
                "interpretation": "This track exploring the depths of Track 3 for The Off-Season's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for The Off-Season",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_19_4",
                "track": 4,
                "title": "Track 4 for The Off-Season",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for The Off-Season go here...",
                "interpretation": "This track exploring the depths of Track 4 for The Off-Season's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for The Off-Season",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_19_5",
                "track": 5,
                "title": "Track 5 for The Off-Season",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for The Off-Season go here...",
                "interpretation": "This track exploring the depths of Track 5 for The Off-Season's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for The Off-Season",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_19_6",
                "track": 6,
                "title": "Track 6 for The Off-Season",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for The Off-Season go here...",
                "interpretation": "This track exploring the depths of Track 6 for The Off-Season's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for The Off-Season",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_19_7",
                "track": 7,
                "title": "Track 7 for The Off-Season",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for The Off-Season go here...",
                "interpretation": "This track exploring the depths of Track 7 for The Off-Season's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for The Off-Season",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_19_8",
                "track": 8,
                "title": "Track 8 for The Off-Season",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for The Off-Season go here...",
                "interpretation": "This track exploring the depths of Track 8 for The Off-Season's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for The Off-Season",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_19_9",
                "track": 9,
                "title": "Track 9 for The Off-Season",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for The Off-Season go here...",
                "interpretation": "This track exploring the depths of Track 9 for The Off-Season's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for The Off-Season",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_19_10",
                "track": 10,
                "title": "Track 10 for The Off-Season",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for The Off-Season go here...",
                "interpretation": "This track exploring the depths of Track 10 for The Off-Season's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for The Off-Season",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_19_11",
                "track": 11,
                "title": "Track 11 for The Off-Season",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for The Off-Season go here...",
                "interpretation": "This track exploring the depths of Track 11 for The Off-Season's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for The Off-Season",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_19_12",
                "track": 12,
                "title": "Track 12 for The Off-Season",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for The Off-Season go here...",
                "interpretation": "This track exploring the depths of Track 12 for The Off-Season's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for The Off-Season",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_20",
        "title": "IGOR",
        "artist": "Tyler, The Creator",
        "year": "2019",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_20_1",
                "track": 1,
                "title": "Track 1 for IGOR",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for IGOR go here...",
                "interpretation": "This track exploring the depths of Track 1 for IGOR's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for IGOR",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_20_2",
                "track": 2,
                "title": "Track 2 for IGOR",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for IGOR go here...",
                "interpretation": "This track exploring the depths of Track 2 for IGOR's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for IGOR",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_20_3",
                "track": 3,
                "title": "Track 3 for IGOR",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for IGOR go here...",
                "interpretation": "This track exploring the depths of Track 3 for IGOR's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for IGOR",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_20_4",
                "track": 4,
                "title": "Track 4 for IGOR",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for IGOR go here...",
                "interpretation": "This track exploring the depths of Track 4 for IGOR's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for IGOR",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_20_5",
                "track": 5,
                "title": "Track 5 for IGOR",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for IGOR go here...",
                "interpretation": "This track exploring the depths of Track 5 for IGOR's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for IGOR",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_20_6",
                "track": 6,
                "title": "Track 6 for IGOR",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for IGOR go here...",
                "interpretation": "This track exploring the depths of Track 6 for IGOR's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for IGOR",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_20_7",
                "track": 7,
                "title": "Track 7 for IGOR",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for IGOR go here...",
                "interpretation": "This track exploring the depths of Track 7 for IGOR's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for IGOR",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_20_8",
                "track": 8,
                "title": "Track 8 for IGOR",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for IGOR go here...",
                "interpretation": "This track exploring the depths of Track 8 for IGOR's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for IGOR",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_20_9",
                "track": 9,
                "title": "Track 9 for IGOR",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for IGOR go here...",
                "interpretation": "This track exploring the depths of Track 9 for IGOR's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for IGOR",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_20_10",
                "track": 10,
                "title": "Track 10 for IGOR",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for IGOR go here...",
                "interpretation": "This track exploring the depths of Track 10 for IGOR's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for IGOR",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_20_11",
                "track": 11,
                "title": "Track 11 for IGOR",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for IGOR go here...",
                "interpretation": "This track exploring the depths of Track 11 for IGOR's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for IGOR",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_20_12",
                "track": 12,
                "title": "Track 12 for IGOR",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for IGOR go here...",
                "interpretation": "This track exploring the depths of Track 12 for IGOR's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for IGOR",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_21",
        "title": "Flower Boy",
        "artist": "Tyler, The Creator",
        "year": "2017",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_21_1",
                "track": 1,
                "title": "Track 1 for Flower Boy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Flower Boy go here...",
                "interpretation": "This track exploring the depths of Track 1 for Flower Boy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Flower Boy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_21_2",
                "track": 2,
                "title": "Track 2 for Flower Boy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Flower Boy go here...",
                "interpretation": "This track exploring the depths of Track 2 for Flower Boy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Flower Boy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_21_3",
                "track": 3,
                "title": "Track 3 for Flower Boy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Flower Boy go here...",
                "interpretation": "This track exploring the depths of Track 3 for Flower Boy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Flower Boy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_21_4",
                "track": 4,
                "title": "Track 4 for Flower Boy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Flower Boy go here...",
                "interpretation": "This track exploring the depths of Track 4 for Flower Boy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Flower Boy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_21_5",
                "track": 5,
                "title": "Track 5 for Flower Boy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Flower Boy go here...",
                "interpretation": "This track exploring the depths of Track 5 for Flower Boy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Flower Boy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_21_6",
                "track": 6,
                "title": "Track 6 for Flower Boy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Flower Boy go here...",
                "interpretation": "This track exploring the depths of Track 6 for Flower Boy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Flower Boy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_21_7",
                "track": 7,
                "title": "Track 7 for Flower Boy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Flower Boy go here...",
                "interpretation": "This track exploring the depths of Track 7 for Flower Boy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Flower Boy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_21_8",
                "track": 8,
                "title": "Track 8 for Flower Boy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Flower Boy go here...",
                "interpretation": "This track exploring the depths of Track 8 for Flower Boy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Flower Boy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_21_9",
                "track": 9,
                "title": "Track 9 for Flower Boy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Flower Boy go here...",
                "interpretation": "This track exploring the depths of Track 9 for Flower Boy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Flower Boy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_21_10",
                "track": 10,
                "title": "Track 10 for Flower Boy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Flower Boy go here...",
                "interpretation": "This track exploring the depths of Track 10 for Flower Boy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Flower Boy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_21_11",
                "track": 11,
                "title": "Track 11 for Flower Boy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Flower Boy go here...",
                "interpretation": "This track exploring the depths of Track 11 for Flower Boy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Flower Boy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_21_12",
                "track": 12,
                "title": "Track 12 for Flower Boy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Flower Boy go here...",
                "interpretation": "This track exploring the depths of Track 12 for Flower Boy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Flower Boy",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_22",
        "title": "Call Me If You Get Lost",
        "artist": "Tyler, The Creator",
        "year": "2021",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_22_1",
                "track": 1,
                "title": "Track 1 for Call Me If You Get Lost",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Call Me If You Get Lost go here...",
                "interpretation": "This track exploring the depths of Track 1 for Call Me If You Get Lost's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Call Me If You Get Lost",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_22_2",
                "track": 2,
                "title": "Track 2 for Call Me If You Get Lost",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Call Me If You Get Lost go here...",
                "interpretation": "This track exploring the depths of Track 2 for Call Me If You Get Lost's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Call Me If You Get Lost",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_22_3",
                "track": 3,
                "title": "Track 3 for Call Me If You Get Lost",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Call Me If You Get Lost go here...",
                "interpretation": "This track exploring the depths of Track 3 for Call Me If You Get Lost's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Call Me If You Get Lost",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_22_4",
                "track": 4,
                "title": "Track 4 for Call Me If You Get Lost",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Call Me If You Get Lost go here...",
                "interpretation": "This track exploring the depths of Track 4 for Call Me If You Get Lost's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Call Me If You Get Lost",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_22_5",
                "track": 5,
                "title": "Track 5 for Call Me If You Get Lost",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Call Me If You Get Lost go here...",
                "interpretation": "This track exploring the depths of Track 5 for Call Me If You Get Lost's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Call Me If You Get Lost",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_22_6",
                "track": 6,
                "title": "Track 6 for Call Me If You Get Lost",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Call Me If You Get Lost go here...",
                "interpretation": "This track exploring the depths of Track 6 for Call Me If You Get Lost's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Call Me If You Get Lost",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_22_7",
                "track": 7,
                "title": "Track 7 for Call Me If You Get Lost",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Call Me If You Get Lost go here...",
                "interpretation": "This track exploring the depths of Track 7 for Call Me If You Get Lost's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Call Me If You Get Lost",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_22_8",
                "track": 8,
                "title": "Track 8 for Call Me If You Get Lost",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Call Me If You Get Lost go here...",
                "interpretation": "This track exploring the depths of Track 8 for Call Me If You Get Lost's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Call Me If You Get Lost",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_22_9",
                "track": 9,
                "title": "Track 9 for Call Me If You Get Lost",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Call Me If You Get Lost go here...",
                "interpretation": "This track exploring the depths of Track 9 for Call Me If You Get Lost's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Call Me If You Get Lost",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_22_10",
                "track": 10,
                "title": "Track 10 for Call Me If You Get Lost",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Call Me If You Get Lost go here...",
                "interpretation": "This track exploring the depths of Track 10 for Call Me If You Get Lost's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Call Me If You Get Lost",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_22_11",
                "track": 11,
                "title": "Track 11 for Call Me If You Get Lost",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Call Me If You Get Lost go here...",
                "interpretation": "This track exploring the depths of Track 11 for Call Me If You Get Lost's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Call Me If You Get Lost",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_22_12",
                "track": 12,
                "title": "Track 12 for Call Me If You Get Lost",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Call Me If You Get Lost go here...",
                "interpretation": "This track exploring the depths of Track 12 for Call Me If You Get Lost's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Call Me If You Get Lost",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_23",
        "title": "Blonde",
        "artist": "Frank Ocean",
        "year": "2016",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_23_1",
                "track": 1,
                "title": "Track 1 for Blonde",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Blonde go here...",
                "interpretation": "This track exploring the depths of Track 1 for Blonde's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Blonde",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_23_2",
                "track": 2,
                "title": "Track 2 for Blonde",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Blonde go here...",
                "interpretation": "This track exploring the depths of Track 2 for Blonde's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Blonde",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_23_3",
                "track": 3,
                "title": "Track 3 for Blonde",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Blonde go here...",
                "interpretation": "This track exploring the depths of Track 3 for Blonde's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Blonde",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_23_4",
                "track": 4,
                "title": "Track 4 for Blonde",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Blonde go here...",
                "interpretation": "This track exploring the depths of Track 4 for Blonde's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Blonde",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_23_5",
                "track": 5,
                "title": "Track 5 for Blonde",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Blonde go here...",
                "interpretation": "This track exploring the depths of Track 5 for Blonde's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Blonde",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_23_6",
                "track": 6,
                "title": "Track 6 for Blonde",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Blonde go here...",
                "interpretation": "This track exploring the depths of Track 6 for Blonde's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Blonde",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_23_7",
                "track": 7,
                "title": "Track 7 for Blonde",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Blonde go here...",
                "interpretation": "This track exploring the depths of Track 7 for Blonde's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Blonde",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_23_8",
                "track": 8,
                "title": "Track 8 for Blonde",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Blonde go here...",
                "interpretation": "This track exploring the depths of Track 8 for Blonde's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Blonde",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_23_9",
                "track": 9,
                "title": "Track 9 for Blonde",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Blonde go here...",
                "interpretation": "This track exploring the depths of Track 9 for Blonde's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Blonde",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_23_10",
                "track": 10,
                "title": "Track 10 for Blonde",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Blonde go here...",
                "interpretation": "This track exploring the depths of Track 10 for Blonde's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Blonde",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_23_11",
                "track": 11,
                "title": "Track 11 for Blonde",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Blonde go here...",
                "interpretation": "This track exploring the depths of Track 11 for Blonde's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Blonde",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_23_12",
                "track": 12,
                "title": "Track 12 for Blonde",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Blonde go here...",
                "interpretation": "This track exploring the depths of Track 12 for Blonde's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Blonde",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_24",
        "title": "Channel Orange",
        "artist": "Frank Ocean",
        "year": "2012",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_24_1",
                "track": 1,
                "title": "Track 1 for Channel Orange",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Channel Orange go here...",
                "interpretation": "This track exploring the depths of Track 1 for Channel Orange's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Channel Orange",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_24_2",
                "track": 2,
                "title": "Track 2 for Channel Orange",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Channel Orange go here...",
                "interpretation": "This track exploring the depths of Track 2 for Channel Orange's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Channel Orange",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_24_3",
                "track": 3,
                "title": "Track 3 for Channel Orange",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Channel Orange go here...",
                "interpretation": "This track exploring the depths of Track 3 for Channel Orange's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Channel Orange",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_24_4",
                "track": 4,
                "title": "Track 4 for Channel Orange",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Channel Orange go here...",
                "interpretation": "This track exploring the depths of Track 4 for Channel Orange's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Channel Orange",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_24_5",
                "track": 5,
                "title": "Track 5 for Channel Orange",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Channel Orange go here...",
                "interpretation": "This track exploring the depths of Track 5 for Channel Orange's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Channel Orange",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_24_6",
                "track": 6,
                "title": "Track 6 for Channel Orange",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Channel Orange go here...",
                "interpretation": "This track exploring the depths of Track 6 for Channel Orange's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Channel Orange",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_24_7",
                "track": 7,
                "title": "Track 7 for Channel Orange",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Channel Orange go here...",
                "interpretation": "This track exploring the depths of Track 7 for Channel Orange's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Channel Orange",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_24_8",
                "track": 8,
                "title": "Track 8 for Channel Orange",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Channel Orange go here...",
                "interpretation": "This track exploring the depths of Track 8 for Channel Orange's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Channel Orange",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_24_9",
                "track": 9,
                "title": "Track 9 for Channel Orange",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Channel Orange go here...",
                "interpretation": "This track exploring the depths of Track 9 for Channel Orange's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Channel Orange",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_24_10",
                "track": 10,
                "title": "Track 10 for Channel Orange",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Channel Orange go here...",
                "interpretation": "This track exploring the depths of Track 10 for Channel Orange's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Channel Orange",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_24_11",
                "track": 11,
                "title": "Track 11 for Channel Orange",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Channel Orange go here...",
                "interpretation": "This track exploring the depths of Track 11 for Channel Orange's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Channel Orange",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_24_12",
                "track": 12,
                "title": "Track 12 for Channel Orange",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Channel Orange go here...",
                "interpretation": "This track exploring the depths of Track 12 for Channel Orange's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Channel Orange",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_25",
        "title": "Currents",
        "artist": "Tame Impala",
        "year": "2015",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_25_1",
                "track": 1,
                "title": "Track 1 for Currents",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Currents go here...",
                "interpretation": "This track exploring the depths of Track 1 for Currents's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Currents",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_25_2",
                "track": 2,
                "title": "Track 2 for Currents",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Currents go here...",
                "interpretation": "This track exploring the depths of Track 2 for Currents's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Currents",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_25_3",
                "track": 3,
                "title": "Track 3 for Currents",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Currents go here...",
                "interpretation": "This track exploring the depths of Track 3 for Currents's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Currents",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_25_4",
                "track": 4,
                "title": "Track 4 for Currents",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Currents go here...",
                "interpretation": "This track exploring the depths of Track 4 for Currents's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Currents",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_25_5",
                "track": 5,
                "title": "Track 5 for Currents",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Currents go here...",
                "interpretation": "This track exploring the depths of Track 5 for Currents's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Currents",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_25_6",
                "track": 6,
                "title": "Track 6 for Currents",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Currents go here...",
                "interpretation": "This track exploring the depths of Track 6 for Currents's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Currents",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_25_7",
                "track": 7,
                "title": "Track 7 for Currents",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Currents go here...",
                "interpretation": "This track exploring the depths of Track 7 for Currents's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Currents",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_25_8",
                "track": 8,
                "title": "Track 8 for Currents",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Currents go here...",
                "interpretation": "This track exploring the depths of Track 8 for Currents's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Currents",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_25_9",
                "track": 9,
                "title": "Track 9 for Currents",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Currents go here...",
                "interpretation": "This track exploring the depths of Track 9 for Currents's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Currents",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_25_10",
                "track": 10,
                "title": "Track 10 for Currents",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Currents go here...",
                "interpretation": "This track exploring the depths of Track 10 for Currents's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Currents",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_25_11",
                "track": 11,
                "title": "Track 11 for Currents",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Currents go here...",
                "interpretation": "This track exploring the depths of Track 11 for Currents's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Currents",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_25_12",
                "track": 12,
                "title": "Track 12 for Currents",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Currents go here...",
                "interpretation": "This track exploring the depths of Track 12 for Currents's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Currents",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_26",
        "title": "The Slow Rush",
        "artist": "Tame Impala",
        "year": "2020",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_26_1",
                "track": 1,
                "title": "Track 1 for The Slow Rush",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for The Slow Rush go here...",
                "interpretation": "This track exploring the depths of Track 1 for The Slow Rush's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for The Slow Rush",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_26_2",
                "track": 2,
                "title": "Track 2 for The Slow Rush",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for The Slow Rush go here...",
                "interpretation": "This track exploring the depths of Track 2 for The Slow Rush's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for The Slow Rush",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_26_3",
                "track": 3,
                "title": "Track 3 for The Slow Rush",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for The Slow Rush go here...",
                "interpretation": "This track exploring the depths of Track 3 for The Slow Rush's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for The Slow Rush",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_26_4",
                "track": 4,
                "title": "Track 4 for The Slow Rush",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for The Slow Rush go here...",
                "interpretation": "This track exploring the depths of Track 4 for The Slow Rush's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for The Slow Rush",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_26_5",
                "track": 5,
                "title": "Track 5 for The Slow Rush",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for The Slow Rush go here...",
                "interpretation": "This track exploring the depths of Track 5 for The Slow Rush's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for The Slow Rush",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_26_6",
                "track": 6,
                "title": "Track 6 for The Slow Rush",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for The Slow Rush go here...",
                "interpretation": "This track exploring the depths of Track 6 for The Slow Rush's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for The Slow Rush",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_26_7",
                "track": 7,
                "title": "Track 7 for The Slow Rush",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for The Slow Rush go here...",
                "interpretation": "This track exploring the depths of Track 7 for The Slow Rush's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for The Slow Rush",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_26_8",
                "track": 8,
                "title": "Track 8 for The Slow Rush",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for The Slow Rush go here...",
                "interpretation": "This track exploring the depths of Track 8 for The Slow Rush's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for The Slow Rush",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_26_9",
                "track": 9,
                "title": "Track 9 for The Slow Rush",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for The Slow Rush go here...",
                "interpretation": "This track exploring the depths of Track 9 for The Slow Rush's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for The Slow Rush",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_26_10",
                "track": 10,
                "title": "Track 10 for The Slow Rush",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for The Slow Rush go here...",
                "interpretation": "This track exploring the depths of Track 10 for The Slow Rush's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for The Slow Rush",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_26_11",
                "track": 11,
                "title": "Track 11 for The Slow Rush",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for The Slow Rush go here...",
                "interpretation": "This track exploring the depths of Track 11 for The Slow Rush's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for The Slow Rush",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_26_12",
                "track": 12,
                "title": "Track 12 for The Slow Rush",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for The Slow Rush go here...",
                "interpretation": "This track exploring the depths of Track 12 for The Slow Rush's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for The Slow Rush",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_27",
        "title": "Lonerism",
        "artist": "Tame Impala",
        "year": "2012",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_27_1",
                "track": 1,
                "title": "Track 1 for Lonerism",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Lonerism go here...",
                "interpretation": "This track exploring the depths of Track 1 for Lonerism's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Lonerism",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_27_2",
                "track": 2,
                "title": "Track 2 for Lonerism",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Lonerism go here...",
                "interpretation": "This track exploring the depths of Track 2 for Lonerism's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Lonerism",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_27_3",
                "track": 3,
                "title": "Track 3 for Lonerism",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Lonerism go here...",
                "interpretation": "This track exploring the depths of Track 3 for Lonerism's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Lonerism",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_27_4",
                "track": 4,
                "title": "Track 4 for Lonerism",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Lonerism go here...",
                "interpretation": "This track exploring the depths of Track 4 for Lonerism's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Lonerism",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_27_5",
                "track": 5,
                "title": "Track 5 for Lonerism",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Lonerism go here...",
                "interpretation": "This track exploring the depths of Track 5 for Lonerism's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Lonerism",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_27_6",
                "track": 6,
                "title": "Track 6 for Lonerism",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Lonerism go here...",
                "interpretation": "This track exploring the depths of Track 6 for Lonerism's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Lonerism",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_27_7",
                "track": 7,
                "title": "Track 7 for Lonerism",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Lonerism go here...",
                "interpretation": "This track exploring the depths of Track 7 for Lonerism's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Lonerism",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_27_8",
                "track": 8,
                "title": "Track 8 for Lonerism",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Lonerism go here...",
                "interpretation": "This track exploring the depths of Track 8 for Lonerism's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Lonerism",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_27_9",
                "track": 9,
                "title": "Track 9 for Lonerism",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Lonerism go here...",
                "interpretation": "This track exploring the depths of Track 9 for Lonerism's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Lonerism",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_27_10",
                "track": 10,
                "title": "Track 10 for Lonerism",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Lonerism go here...",
                "interpretation": "This track exploring the depths of Track 10 for Lonerism's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Lonerism",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_27_11",
                "track": 11,
                "title": "Track 11 for Lonerism",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Lonerism go here...",
                "interpretation": "This track exploring the depths of Track 11 for Lonerism's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Lonerism",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_27_12",
                "track": 12,
                "title": "Track 12 for Lonerism",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Lonerism go here...",
                "interpretation": "This track exploring the depths of Track 12 for Lonerism's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Lonerism",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_28",
        "title": "SOS",
        "artist": "SZA",
        "year": "2022",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_28_1",
                "track": 1,
                "title": "Track 1 for SOS",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for SOS go here...",
                "interpretation": "This track exploring the depths of Track 1 for SOS's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for SOS",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_28_2",
                "track": 2,
                "title": "Track 2 for SOS",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for SOS go here...",
                "interpretation": "This track exploring the depths of Track 2 for SOS's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for SOS",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_28_3",
                "track": 3,
                "title": "Track 3 for SOS",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for SOS go here...",
                "interpretation": "This track exploring the depths of Track 3 for SOS's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for SOS",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_28_4",
                "track": 4,
                "title": "Track 4 for SOS",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for SOS go here...",
                "interpretation": "This track exploring the depths of Track 4 for SOS's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for SOS",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_28_5",
                "track": 5,
                "title": "Track 5 for SOS",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for SOS go here...",
                "interpretation": "This track exploring the depths of Track 5 for SOS's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for SOS",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_28_6",
                "track": 6,
                "title": "Track 6 for SOS",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for SOS go here...",
                "interpretation": "This track exploring the depths of Track 6 for SOS's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for SOS",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_28_7",
                "track": 7,
                "title": "Track 7 for SOS",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for SOS go here...",
                "interpretation": "This track exploring the depths of Track 7 for SOS's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for SOS",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_28_8",
                "track": 8,
                "title": "Track 8 for SOS",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for SOS go here...",
                "interpretation": "This track exploring the depths of Track 8 for SOS's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for SOS",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_28_9",
                "track": 9,
                "title": "Track 9 for SOS",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for SOS go here...",
                "interpretation": "This track exploring the depths of Track 9 for SOS's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for SOS",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_28_10",
                "track": 10,
                "title": "Track 10 for SOS",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for SOS go here...",
                "interpretation": "This track exploring the depths of Track 10 for SOS's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for SOS",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_28_11",
                "track": 11,
                "title": "Track 11 for SOS",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for SOS go here...",
                "interpretation": "This track exploring the depths of Track 11 for SOS's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for SOS",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_28_12",
                "track": 12,
                "title": "Track 12 for SOS",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for SOS go here...",
                "interpretation": "This track exploring the depths of Track 12 for SOS's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for SOS",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_29",
        "title": "Ctrl",
        "artist": "SZA",
        "year": "2017",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_29_1",
                "track": 1,
                "title": "Track 1 for Ctrl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Ctrl go here...",
                "interpretation": "This track exploring the depths of Track 1 for Ctrl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Ctrl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_29_2",
                "track": 2,
                "title": "Track 2 for Ctrl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Ctrl go here...",
                "interpretation": "This track exploring the depths of Track 2 for Ctrl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Ctrl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_29_3",
                "track": 3,
                "title": "Track 3 for Ctrl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Ctrl go here...",
                "interpretation": "This track exploring the depths of Track 3 for Ctrl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Ctrl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_29_4",
                "track": 4,
                "title": "Track 4 for Ctrl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Ctrl go here...",
                "interpretation": "This track exploring the depths of Track 4 for Ctrl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Ctrl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_29_5",
                "track": 5,
                "title": "Track 5 for Ctrl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Ctrl go here...",
                "interpretation": "This track exploring the depths of Track 5 for Ctrl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Ctrl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_29_6",
                "track": 6,
                "title": "Track 6 for Ctrl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Ctrl go here...",
                "interpretation": "This track exploring the depths of Track 6 for Ctrl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Ctrl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_29_7",
                "track": 7,
                "title": "Track 7 for Ctrl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Ctrl go here...",
                "interpretation": "This track exploring the depths of Track 7 for Ctrl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Ctrl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_29_8",
                "track": 8,
                "title": "Track 8 for Ctrl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Ctrl go here...",
                "interpretation": "This track exploring the depths of Track 8 for Ctrl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Ctrl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_29_9",
                "track": 9,
                "title": "Track 9 for Ctrl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Ctrl go here...",
                "interpretation": "This track exploring the depths of Track 9 for Ctrl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Ctrl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_29_10",
                "track": 10,
                "title": "Track 10 for Ctrl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Ctrl go here...",
                "interpretation": "This track exploring the depths of Track 10 for Ctrl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Ctrl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_29_11",
                "track": 11,
                "title": "Track 11 for Ctrl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Ctrl go here...",
                "interpretation": "This track exploring the depths of Track 11 for Ctrl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Ctrl",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_29_12",
                "track": 12,
                "title": "Track 12 for Ctrl",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Ctrl go here...",
                "interpretation": "This track exploring the depths of Track 12 for Ctrl's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Ctrl",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_30",
        "title": "Take Care",
        "artist": "Drake",
        "year": "2011",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_30_1",
                "track": 1,
                "title": "Track 1 for Take Care",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Take Care go here...",
                "interpretation": "This track exploring the depths of Track 1 for Take Care's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Take Care",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_30_2",
                "track": 2,
                "title": "Track 2 for Take Care",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Take Care go here...",
                "interpretation": "This track exploring the depths of Track 2 for Take Care's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Take Care",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_30_3",
                "track": 3,
                "title": "Track 3 for Take Care",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Take Care go here...",
                "interpretation": "This track exploring the depths of Track 3 for Take Care's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Take Care",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_30_4",
                "track": 4,
                "title": "Track 4 for Take Care",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Take Care go here...",
                "interpretation": "This track exploring the depths of Track 4 for Take Care's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Take Care",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_30_5",
                "track": 5,
                "title": "Track 5 for Take Care",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Take Care go here...",
                "interpretation": "This track exploring the depths of Track 5 for Take Care's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Take Care",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_30_6",
                "track": 6,
                "title": "Track 6 for Take Care",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Take Care go here...",
                "interpretation": "This track exploring the depths of Track 6 for Take Care's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Take Care",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_30_7",
                "track": 7,
                "title": "Track 7 for Take Care",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Take Care go here...",
                "interpretation": "This track exploring the depths of Track 7 for Take Care's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Take Care",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_30_8",
                "track": 8,
                "title": "Track 8 for Take Care",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Take Care go here...",
                "interpretation": "This track exploring the depths of Track 8 for Take Care's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Take Care",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_30_9",
                "track": 9,
                "title": "Track 9 for Take Care",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Take Care go here...",
                "interpretation": "This track exploring the depths of Track 9 for Take Care's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Take Care",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_30_10",
                "track": 10,
                "title": "Track 10 for Take Care",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Take Care go here...",
                "interpretation": "This track exploring the depths of Track 10 for Take Care's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Take Care",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_30_11",
                "track": 11,
                "title": "Track 11 for Take Care",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Take Care go here...",
                "interpretation": "This track exploring the depths of Track 11 for Take Care's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Take Care",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_30_12",
                "track": 12,
                "title": "Track 12 for Take Care",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Take Care go here...",
                "interpretation": "This track exploring the depths of Track 12 for Take Care's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Take Care",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_31",
        "title": "Nothing Was the Same",
        "artist": "Drake",
        "year": "2013",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_31_1",
                "track": 1,
                "title": "Track 1 for Nothing Was the Same",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Nothing Was the Same go here...",
                "interpretation": "This track exploring the depths of Track 1 for Nothing Was the Same's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Nothing Was the Same",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_31_2",
                "track": 2,
                "title": "Track 2 for Nothing Was the Same",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Nothing Was the Same go here...",
                "interpretation": "This track exploring the depths of Track 2 for Nothing Was the Same's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Nothing Was the Same",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_31_3",
                "track": 3,
                "title": "Track 3 for Nothing Was the Same",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Nothing Was the Same go here...",
                "interpretation": "This track exploring the depths of Track 3 for Nothing Was the Same's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Nothing Was the Same",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_31_4",
                "track": 4,
                "title": "Track 4 for Nothing Was the Same",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Nothing Was the Same go here...",
                "interpretation": "This track exploring the depths of Track 4 for Nothing Was the Same's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Nothing Was the Same",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_31_5",
                "track": 5,
                "title": "Track 5 for Nothing Was the Same",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Nothing Was the Same go here...",
                "interpretation": "This track exploring the depths of Track 5 for Nothing Was the Same's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Nothing Was the Same",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_31_6",
                "track": 6,
                "title": "Track 6 for Nothing Was the Same",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Nothing Was the Same go here...",
                "interpretation": "This track exploring the depths of Track 6 for Nothing Was the Same's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Nothing Was the Same",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_31_7",
                "track": 7,
                "title": "Track 7 for Nothing Was the Same",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Nothing Was the Same go here...",
                "interpretation": "This track exploring the depths of Track 7 for Nothing Was the Same's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Nothing Was the Same",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_31_8",
                "track": 8,
                "title": "Track 8 for Nothing Was the Same",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Nothing Was the Same go here...",
                "interpretation": "This track exploring the depths of Track 8 for Nothing Was the Same's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Nothing Was the Same",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_31_9",
                "track": 9,
                "title": "Track 9 for Nothing Was the Same",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Nothing Was the Same go here...",
                "interpretation": "This track exploring the depths of Track 9 for Nothing Was the Same's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Nothing Was the Same",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_31_10",
                "track": 10,
                "title": "Track 10 for Nothing Was the Same",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Nothing Was the Same go here...",
                "interpretation": "This track exploring the depths of Track 10 for Nothing Was the Same's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Nothing Was the Same",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_31_11",
                "track": 11,
                "title": "Track 11 for Nothing Was the Same",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Nothing Was the Same go here...",
                "interpretation": "This track exploring the depths of Track 11 for Nothing Was the Same's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Nothing Was the Same",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_31_12",
                "track": 12,
                "title": "Track 12 for Nothing Was the Same",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Nothing Was the Same go here...",
                "interpretation": "This track exploring the depths of Track 12 for Nothing Was the Same's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Nothing Was the Same",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_32",
        "title": "My Beautiful Dark Twisted Fantasy",
        "artist": "Kanye West",
        "year": "2010",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_32_1",
                "track": 1,
                "title": "Track 1 for My Beautiful Dark Twisted Fantasy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for My Beautiful Dark Twisted Fantasy go here...",
                "interpretation": "This track exploring the depths of Track 1 for My Beautiful Dark Twisted Fantasy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for My Beautiful Dark Twisted Fantasy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_32_2",
                "track": 2,
                "title": "Track 2 for My Beautiful Dark Twisted Fantasy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for My Beautiful Dark Twisted Fantasy go here...",
                "interpretation": "This track exploring the depths of Track 2 for My Beautiful Dark Twisted Fantasy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for My Beautiful Dark Twisted Fantasy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_32_3",
                "track": 3,
                "title": "Track 3 for My Beautiful Dark Twisted Fantasy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for My Beautiful Dark Twisted Fantasy go here...",
                "interpretation": "This track exploring the depths of Track 3 for My Beautiful Dark Twisted Fantasy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for My Beautiful Dark Twisted Fantasy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_32_4",
                "track": 4,
                "title": "Track 4 for My Beautiful Dark Twisted Fantasy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for My Beautiful Dark Twisted Fantasy go here...",
                "interpretation": "This track exploring the depths of Track 4 for My Beautiful Dark Twisted Fantasy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for My Beautiful Dark Twisted Fantasy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_32_5",
                "track": 5,
                "title": "Track 5 for My Beautiful Dark Twisted Fantasy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for My Beautiful Dark Twisted Fantasy go here...",
                "interpretation": "This track exploring the depths of Track 5 for My Beautiful Dark Twisted Fantasy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for My Beautiful Dark Twisted Fantasy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_32_6",
                "track": 6,
                "title": "Track 6 for My Beautiful Dark Twisted Fantasy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for My Beautiful Dark Twisted Fantasy go here...",
                "interpretation": "This track exploring the depths of Track 6 for My Beautiful Dark Twisted Fantasy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for My Beautiful Dark Twisted Fantasy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_32_7",
                "track": 7,
                "title": "Track 7 for My Beautiful Dark Twisted Fantasy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for My Beautiful Dark Twisted Fantasy go here...",
                "interpretation": "This track exploring the depths of Track 7 for My Beautiful Dark Twisted Fantasy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for My Beautiful Dark Twisted Fantasy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_32_8",
                "track": 8,
                "title": "Track 8 for My Beautiful Dark Twisted Fantasy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for My Beautiful Dark Twisted Fantasy go here...",
                "interpretation": "This track exploring the depths of Track 8 for My Beautiful Dark Twisted Fantasy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for My Beautiful Dark Twisted Fantasy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_32_9",
                "track": 9,
                "title": "Track 9 for My Beautiful Dark Twisted Fantasy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for My Beautiful Dark Twisted Fantasy go here...",
                "interpretation": "This track exploring the depths of Track 9 for My Beautiful Dark Twisted Fantasy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for My Beautiful Dark Twisted Fantasy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_32_10",
                "track": 10,
                "title": "Track 10 for My Beautiful Dark Twisted Fantasy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for My Beautiful Dark Twisted Fantasy go here...",
                "interpretation": "This track exploring the depths of Track 10 for My Beautiful Dark Twisted Fantasy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for My Beautiful Dark Twisted Fantasy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_32_11",
                "track": 11,
                "title": "Track 11 for My Beautiful Dark Twisted Fantasy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for My Beautiful Dark Twisted Fantasy go here...",
                "interpretation": "This track exploring the depths of Track 11 for My Beautiful Dark Twisted Fantasy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for My Beautiful Dark Twisted Fantasy",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_32_12",
                "track": 12,
                "title": "Track 12 for My Beautiful Dark Twisted Fantasy",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for My Beautiful Dark Twisted Fantasy go here...",
                "interpretation": "This track exploring the depths of Track 12 for My Beautiful Dark Twisted Fantasy's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for My Beautiful Dark Twisted Fantasy",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_33",
        "title": "Graduation",
        "artist": "Kanye West",
        "year": "2007",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_33_1",
                "track": 1,
                "title": "Track 1 for Graduation",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Graduation go here...",
                "interpretation": "This track exploring the depths of Track 1 for Graduation's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Graduation",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_33_2",
                "track": 2,
                "title": "Track 2 for Graduation",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Graduation go here...",
                "interpretation": "This track exploring the depths of Track 2 for Graduation's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Graduation",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_33_3",
                "track": 3,
                "title": "Track 3 for Graduation",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Graduation go here...",
                "interpretation": "This track exploring the depths of Track 3 for Graduation's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Graduation",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_33_4",
                "track": 4,
                "title": "Track 4 for Graduation",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Graduation go here...",
                "interpretation": "This track exploring the depths of Track 4 for Graduation's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Graduation",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_33_5",
                "track": 5,
                "title": "Track 5 for Graduation",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Graduation go here...",
                "interpretation": "This track exploring the depths of Track 5 for Graduation's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Graduation",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_33_6",
                "track": 6,
                "title": "Track 6 for Graduation",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Graduation go here...",
                "interpretation": "This track exploring the depths of Track 6 for Graduation's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Graduation",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_33_7",
                "track": 7,
                "title": "Track 7 for Graduation",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Graduation go here...",
                "interpretation": "This track exploring the depths of Track 7 for Graduation's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Graduation",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_33_8",
                "track": 8,
                "title": "Track 8 for Graduation",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Graduation go here...",
                "interpretation": "This track exploring the depths of Track 8 for Graduation's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Graduation",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_33_9",
                "track": 9,
                "title": "Track 9 for Graduation",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Graduation go here...",
                "interpretation": "This track exploring the depths of Track 9 for Graduation's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Graduation",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_33_10",
                "track": 10,
                "title": "Track 10 for Graduation",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Graduation go here...",
                "interpretation": "This track exploring the depths of Track 10 for Graduation's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Graduation",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_33_11",
                "track": 11,
                "title": "Track 11 for Graduation",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Graduation go here...",
                "interpretation": "This track exploring the depths of Track 11 for Graduation's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Graduation",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_33_12",
                "track": 12,
                "title": "Track 12 for Graduation",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Graduation go here...",
                "interpretation": "This track exploring the depths of Track 12 for Graduation's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Graduation",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_34",
        "title": "The College Dropout",
        "artist": "Kanye West",
        "year": "2004",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_34_1",
                "track": 1,
                "title": "Track 1 for The College Dropout",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for The College Dropout go here...",
                "interpretation": "This track exploring the depths of Track 1 for The College Dropout's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for The College Dropout",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_34_2",
                "track": 2,
                "title": "Track 2 for The College Dropout",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for The College Dropout go here...",
                "interpretation": "This track exploring the depths of Track 2 for The College Dropout's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for The College Dropout",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_34_3",
                "track": 3,
                "title": "Track 3 for The College Dropout",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for The College Dropout go here...",
                "interpretation": "This track exploring the depths of Track 3 for The College Dropout's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for The College Dropout",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_34_4",
                "track": 4,
                "title": "Track 4 for The College Dropout",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for The College Dropout go here...",
                "interpretation": "This track exploring the depths of Track 4 for The College Dropout's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for The College Dropout",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_34_5",
                "track": 5,
                "title": "Track 5 for The College Dropout",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for The College Dropout go here...",
                "interpretation": "This track exploring the depths of Track 5 for The College Dropout's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for The College Dropout",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_34_6",
                "track": 6,
                "title": "Track 6 for The College Dropout",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for The College Dropout go here...",
                "interpretation": "This track exploring the depths of Track 6 for The College Dropout's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for The College Dropout",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_34_7",
                "track": 7,
                "title": "Track 7 for The College Dropout",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for The College Dropout go here...",
                "interpretation": "This track exploring the depths of Track 7 for The College Dropout's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for The College Dropout",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_34_8",
                "track": 8,
                "title": "Track 8 for The College Dropout",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for The College Dropout go here...",
                "interpretation": "This track exploring the depths of Track 8 for The College Dropout's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for The College Dropout",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_34_9",
                "track": 9,
                "title": "Track 9 for The College Dropout",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for The College Dropout go here...",
                "interpretation": "This track exploring the depths of Track 9 for The College Dropout's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for The College Dropout",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_34_10",
                "track": 10,
                "title": "Track 10 for The College Dropout",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for The College Dropout go here...",
                "interpretation": "This track exploring the depths of Track 10 for The College Dropout's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for The College Dropout",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_34_11",
                "track": 11,
                "title": "Track 11 for The College Dropout",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for The College Dropout go here...",
                "interpretation": "This track exploring the depths of Track 11 for The College Dropout's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for The College Dropout",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_34_12",
                "track": 12,
                "title": "Track 12 for The College Dropout",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for The College Dropout go here...",
                "interpretation": "This track exploring the depths of Track 12 for The College Dropout's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for The College Dropout",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_35",
        "title": "Born to Die",
        "artist": "Lana Del Rey",
        "year": "2012",
        "genre": "Pop",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_35_1",
                "track": 1,
                "title": "Track 1 for Born to Die",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Born to Die go here...",
                "interpretation": "This track exploring the depths of Track 1 for Born to Die's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Born to Die",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_35_2",
                "track": 2,
                "title": "Track 2 for Born to Die",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Born to Die go here...",
                "interpretation": "This track exploring the depths of Track 2 for Born to Die's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Born to Die",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_35_3",
                "track": 3,
                "title": "Track 3 for Born to Die",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Born to Die go here...",
                "interpretation": "This track exploring the depths of Track 3 for Born to Die's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Born to Die",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_35_4",
                "track": 4,
                "title": "Track 4 for Born to Die",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Born to Die go here...",
                "interpretation": "This track exploring the depths of Track 4 for Born to Die's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Born to Die",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_35_5",
                "track": 5,
                "title": "Track 5 for Born to Die",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Born to Die go here...",
                "interpretation": "This track exploring the depths of Track 5 for Born to Die's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Born to Die",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_35_6",
                "track": 6,
                "title": "Track 6 for Born to Die",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Born to Die go here...",
                "interpretation": "This track exploring the depths of Track 6 for Born to Die's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Born to Die",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_35_7",
                "track": 7,
                "title": "Track 7 for Born to Die",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Born to Die go here...",
                "interpretation": "This track exploring the depths of Track 7 for Born to Die's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Born to Die",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_35_8",
                "track": 8,
                "title": "Track 8 for Born to Die",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Born to Die go here...",
                "interpretation": "This track exploring the depths of Track 8 for Born to Die's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Born to Die",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_35_9",
                "track": 9,
                "title": "Track 9 for Born to Die",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Born to Die go here...",
                "interpretation": "This track exploring the depths of Track 9 for Born to Die's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Born to Die",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_35_10",
                "track": 10,
                "title": "Track 10 for Born to Die",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Born to Die go here...",
                "interpretation": "This track exploring the depths of Track 10 for Born to Die's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Born to Die",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_35_11",
                "track": 11,
                "title": "Track 11 for Born to Die",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Born to Die go here...",
                "interpretation": "This track exploring the depths of Track 11 for Born to Die's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Born to Die",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_35_12",
                "track": 12,
                "title": "Track 12 for Born to Die",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Born to Die go here...",
                "interpretation": "This track exploring the depths of Track 12 for Born to Die's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Born to Die",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_36",
        "title": "Norman Fucking Rockwell!",
        "artist": "Lana Del Rey",
        "year": "2019",
        "genre": "Pop",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_36_1",
                "track": 1,
                "title": "Track 1 for Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Norman Fucking Rockwell! go here...",
                "interpretation": "This track exploring the depths of Track 1 for Norman Fucking Rockwell!'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Norman Fucking Rockwell!",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_36_2",
                "track": 2,
                "title": "Track 2 for Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Norman Fucking Rockwell! go here...",
                "interpretation": "This track exploring the depths of Track 2 for Norman Fucking Rockwell!'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Norman Fucking Rockwell!",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_36_3",
                "track": 3,
                "title": "Track 3 for Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Norman Fucking Rockwell! go here...",
                "interpretation": "This track exploring the depths of Track 3 for Norman Fucking Rockwell!'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Norman Fucking Rockwell!",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_36_4",
                "track": 4,
                "title": "Track 4 for Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Norman Fucking Rockwell! go here...",
                "interpretation": "This track exploring the depths of Track 4 for Norman Fucking Rockwell!'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Norman Fucking Rockwell!",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_36_5",
                "track": 5,
                "title": "Track 5 for Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Norman Fucking Rockwell! go here...",
                "interpretation": "This track exploring the depths of Track 5 for Norman Fucking Rockwell!'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Norman Fucking Rockwell!",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_36_6",
                "track": 6,
                "title": "Track 6 for Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Norman Fucking Rockwell! go here...",
                "interpretation": "This track exploring the depths of Track 6 for Norman Fucking Rockwell!'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Norman Fucking Rockwell!",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_36_7",
                "track": 7,
                "title": "Track 7 for Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Norman Fucking Rockwell! go here...",
                "interpretation": "This track exploring the depths of Track 7 for Norman Fucking Rockwell!'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Norman Fucking Rockwell!",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_36_8",
                "track": 8,
                "title": "Track 8 for Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Norman Fucking Rockwell! go here...",
                "interpretation": "This track exploring the depths of Track 8 for Norman Fucking Rockwell!'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Norman Fucking Rockwell!",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_36_9",
                "track": 9,
                "title": "Track 9 for Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Norman Fucking Rockwell! go here...",
                "interpretation": "This track exploring the depths of Track 9 for Norman Fucking Rockwell!'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Norman Fucking Rockwell!",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_36_10",
                "track": 10,
                "title": "Track 10 for Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Norman Fucking Rockwell! go here...",
                "interpretation": "This track exploring the depths of Track 10 for Norman Fucking Rockwell!'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Norman Fucking Rockwell!",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_36_11",
                "track": 11,
                "title": "Track 11 for Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Norman Fucking Rockwell! go here...",
                "interpretation": "This track exploring the depths of Track 11 for Norman Fucking Rockwell!'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Norman Fucking Rockwell!",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_36_12",
                "track": 12,
                "title": "Track 12 for Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Norman Fucking Rockwell! go here...",
                "interpretation": "This track exploring the depths of Track 12 for Norman Fucking Rockwell!'s message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Norman Fucking Rockwell!",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_37",
        "title": "AM",
        "artist": "Arctic Monkeys",
        "year": "2013",
        "genre": "Rock",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_37_1",
                "track": 1,
                "title": "Track 1 for AM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for AM go here...",
                "interpretation": "This track exploring the depths of Track 1 for AM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for AM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_37_2",
                "track": 2,
                "title": "Track 2 for AM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for AM go here...",
                "interpretation": "This track exploring the depths of Track 2 for AM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for AM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_37_3",
                "track": 3,
                "title": "Track 3 for AM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for AM go here...",
                "interpretation": "This track exploring the depths of Track 3 for AM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for AM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_37_4",
                "track": 4,
                "title": "Track 4 for AM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for AM go here...",
                "interpretation": "This track exploring the depths of Track 4 for AM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for AM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_37_5",
                "track": 5,
                "title": "Track 5 for AM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for AM go here...",
                "interpretation": "This track exploring the depths of Track 5 for AM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for AM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_37_6",
                "track": 6,
                "title": "Track 6 for AM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for AM go here...",
                "interpretation": "This track exploring the depths of Track 6 for AM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for AM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_37_7",
                "track": 7,
                "title": "Track 7 for AM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for AM go here...",
                "interpretation": "This track exploring the depths of Track 7 for AM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for AM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_37_8",
                "track": 8,
                "title": "Track 8 for AM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for AM go here...",
                "interpretation": "This track exploring the depths of Track 8 for AM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for AM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_37_9",
                "track": 9,
                "title": "Track 9 for AM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for AM go here...",
                "interpretation": "This track exploring the depths of Track 9 for AM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for AM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_37_10",
                "track": 10,
                "title": "Track 10 for AM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for AM go here...",
                "interpretation": "This track exploring the depths of Track 10 for AM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for AM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_37_11",
                "track": 11,
                "title": "Track 11 for AM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for AM go here...",
                "interpretation": "This track exploring the depths of Track 11 for AM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for AM",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_37_12",
                "track": 12,
                "title": "Track 12 for AM",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for AM go here...",
                "interpretation": "This track exploring the depths of Track 12 for AM's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for AM",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_38",
        "title": "Favourite Worst Nightmare",
        "artist": "Arctic Monkeys",
        "year": "2007",
        "genre": "Rock",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_38_1",
                "track": 1,
                "title": "Track 1 for Favourite Worst Nightmare",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Favourite Worst Nightmare go here...",
                "interpretation": "This track exploring the depths of Track 1 for Favourite Worst Nightmare's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Favourite Worst Nightmare",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_38_2",
                "track": 2,
                "title": "Track 2 for Favourite Worst Nightmare",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Favourite Worst Nightmare go here...",
                "interpretation": "This track exploring the depths of Track 2 for Favourite Worst Nightmare's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Favourite Worst Nightmare",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_38_3",
                "track": 3,
                "title": "Track 3 for Favourite Worst Nightmare",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Favourite Worst Nightmare go here...",
                "interpretation": "This track exploring the depths of Track 3 for Favourite Worst Nightmare's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Favourite Worst Nightmare",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_38_4",
                "track": 4,
                "title": "Track 4 for Favourite Worst Nightmare",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Favourite Worst Nightmare go here...",
                "interpretation": "This track exploring the depths of Track 4 for Favourite Worst Nightmare's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Favourite Worst Nightmare",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_38_5",
                "track": 5,
                "title": "Track 5 for Favourite Worst Nightmare",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Favourite Worst Nightmare go here...",
                "interpretation": "This track exploring the depths of Track 5 for Favourite Worst Nightmare's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Favourite Worst Nightmare",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_38_6",
                "track": 6,
                "title": "Track 6 for Favourite Worst Nightmare",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Favourite Worst Nightmare go here...",
                "interpretation": "This track exploring the depths of Track 6 for Favourite Worst Nightmare's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Favourite Worst Nightmare",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_38_7",
                "track": 7,
                "title": "Track 7 for Favourite Worst Nightmare",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Favourite Worst Nightmare go here...",
                "interpretation": "This track exploring the depths of Track 7 for Favourite Worst Nightmare's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Favourite Worst Nightmare",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_38_8",
                "track": 8,
                "title": "Track 8 for Favourite Worst Nightmare",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Favourite Worst Nightmare go here...",
                "interpretation": "This track exploring the depths of Track 8 for Favourite Worst Nightmare's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Favourite Worst Nightmare",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_38_9",
                "track": 9,
                "title": "Track 9 for Favourite Worst Nightmare",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Favourite Worst Nightmare go here...",
                "interpretation": "This track exploring the depths of Track 9 for Favourite Worst Nightmare's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Favourite Worst Nightmare",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_38_10",
                "track": 10,
                "title": "Track 10 for Favourite Worst Nightmare",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Favourite Worst Nightmare go here...",
                "interpretation": "This track exploring the depths of Track 10 for Favourite Worst Nightmare's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Favourite Worst Nightmare",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_38_11",
                "track": 11,
                "title": "Track 11 for Favourite Worst Nightmare",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Favourite Worst Nightmare go here...",
                "interpretation": "This track exploring the depths of Track 11 for Favourite Worst Nightmare's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Favourite Worst Nightmare",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_38_12",
                "track": 12,
                "title": "Track 12 for Favourite Worst Nightmare",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Favourite Worst Nightmare go here...",
                "interpretation": "This track exploring the depths of Track 12 for Favourite Worst Nightmare's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Favourite Worst Nightmare",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_39",
        "title": "OK Computer",
        "artist": "Radiohead",
        "year": "1997",
        "genre": "Rock",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_39_1",
                "track": 1,
                "title": "Track 1 for OK Computer",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for OK Computer go here...",
                "interpretation": "This track exploring the depths of Track 1 for OK Computer's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for OK Computer",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_39_2",
                "track": 2,
                "title": "Track 2 for OK Computer",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for OK Computer go here...",
                "interpretation": "This track exploring the depths of Track 2 for OK Computer's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for OK Computer",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_39_3",
                "track": 3,
                "title": "Track 3 for OK Computer",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for OK Computer go here...",
                "interpretation": "This track exploring the depths of Track 3 for OK Computer's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for OK Computer",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_39_4",
                "track": 4,
                "title": "Track 4 for OK Computer",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for OK Computer go here...",
                "interpretation": "This track exploring the depths of Track 4 for OK Computer's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for OK Computer",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_39_5",
                "track": 5,
                "title": "Track 5 for OK Computer",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for OK Computer go here...",
                "interpretation": "This track exploring the depths of Track 5 for OK Computer's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for OK Computer",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_39_6",
                "track": 6,
                "title": "Track 6 for OK Computer",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for OK Computer go here...",
                "interpretation": "This track exploring the depths of Track 6 for OK Computer's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for OK Computer",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_39_7",
                "track": 7,
                "title": "Track 7 for OK Computer",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for OK Computer go here...",
                "interpretation": "This track exploring the depths of Track 7 for OK Computer's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for OK Computer",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_39_8",
                "track": 8,
                "title": "Track 8 for OK Computer",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for OK Computer go here...",
                "interpretation": "This track exploring the depths of Track 8 for OK Computer's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for OK Computer",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_39_9",
                "track": 9,
                "title": "Track 9 for OK Computer",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for OK Computer go here...",
                "interpretation": "This track exploring the depths of Track 9 for OK Computer's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for OK Computer",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_39_10",
                "track": 10,
                "title": "Track 10 for OK Computer",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for OK Computer go here...",
                "interpretation": "This track exploring the depths of Track 10 for OK Computer's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for OK Computer",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_39_11",
                "track": 11,
                "title": "Track 11 for OK Computer",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for OK Computer go here...",
                "interpretation": "This track exploring the depths of Track 11 for OK Computer's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for OK Computer",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_39_12",
                "track": 12,
                "title": "Track 12 for OK Computer",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for OK Computer go here...",
                "interpretation": "This track exploring the depths of Track 12 for OK Computer's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for OK Computer",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_40",
        "title": "Kid A",
        "artist": "Radiohead",
        "year": "2000",
        "genre": "Rock",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_40_1",
                "track": 1,
                "title": "Track 1 for Kid A",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Kid A go here...",
                "interpretation": "This track exploring the depths of Track 1 for Kid A's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Kid A",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_40_2",
                "track": 2,
                "title": "Track 2 for Kid A",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Kid A go here...",
                "interpretation": "This track exploring the depths of Track 2 for Kid A's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Kid A",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_40_3",
                "track": 3,
                "title": "Track 3 for Kid A",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Kid A go here...",
                "interpretation": "This track exploring the depths of Track 3 for Kid A's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Kid A",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_40_4",
                "track": 4,
                "title": "Track 4 for Kid A",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Kid A go here...",
                "interpretation": "This track exploring the depths of Track 4 for Kid A's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Kid A",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_40_5",
                "track": 5,
                "title": "Track 5 for Kid A",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Kid A go here...",
                "interpretation": "This track exploring the depths of Track 5 for Kid A's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Kid A",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_40_6",
                "track": 6,
                "title": "Track 6 for Kid A",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Kid A go here...",
                "interpretation": "This track exploring the depths of Track 6 for Kid A's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Kid A",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_40_7",
                "track": 7,
                "title": "Track 7 for Kid A",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Kid A go here...",
                "interpretation": "This track exploring the depths of Track 7 for Kid A's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Kid A",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_40_8",
                "track": 8,
                "title": "Track 8 for Kid A",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Kid A go here...",
                "interpretation": "This track exploring the depths of Track 8 for Kid A's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Kid A",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_40_9",
                "track": 9,
                "title": "Track 9 for Kid A",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Kid A go here...",
                "interpretation": "This track exploring the depths of Track 9 for Kid A's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Kid A",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_40_10",
                "track": 10,
                "title": "Track 10 for Kid A",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Kid A go here...",
                "interpretation": "This track exploring the depths of Track 10 for Kid A's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Kid A",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_40_11",
                "track": 11,
                "title": "Track 11 for Kid A",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Kid A go here...",
                "interpretation": "This track exploring the depths of Track 11 for Kid A's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Kid A",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_40_12",
                "track": 12,
                "title": "Track 12 for Kid A",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Kid A go here...",
                "interpretation": "This track exploring the depths of Track 12 for Kid A's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Kid A",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_41",
        "title": "The Dark Side of the Moon",
        "artist": "Pink Floyd",
        "year": "1973",
        "genre": "Rock",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_41_1",
                "track": 1,
                "title": "Track 1 for The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for The Dark Side of the Moon go here...",
                "interpretation": "This track exploring the depths of Track 1 for The Dark Side of the Moon's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for The Dark Side of the Moon",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_41_2",
                "track": 2,
                "title": "Track 2 for The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for The Dark Side of the Moon go here...",
                "interpretation": "This track exploring the depths of Track 2 for The Dark Side of the Moon's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for The Dark Side of the Moon",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_41_3",
                "track": 3,
                "title": "Track 3 for The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for The Dark Side of the Moon go here...",
                "interpretation": "This track exploring the depths of Track 3 for The Dark Side of the Moon's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for The Dark Side of the Moon",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_41_4",
                "track": 4,
                "title": "Track 4 for The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for The Dark Side of the Moon go here...",
                "interpretation": "This track exploring the depths of Track 4 for The Dark Side of the Moon's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for The Dark Side of the Moon",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_41_5",
                "track": 5,
                "title": "Track 5 for The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for The Dark Side of the Moon go here...",
                "interpretation": "This track exploring the depths of Track 5 for The Dark Side of the Moon's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for The Dark Side of the Moon",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_41_6",
                "track": 6,
                "title": "Track 6 for The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for The Dark Side of the Moon go here...",
                "interpretation": "This track exploring the depths of Track 6 for The Dark Side of the Moon's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for The Dark Side of the Moon",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_41_7",
                "track": 7,
                "title": "Track 7 for The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for The Dark Side of the Moon go here...",
                "interpretation": "This track exploring the depths of Track 7 for The Dark Side of the Moon's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for The Dark Side of the Moon",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_41_8",
                "track": 8,
                "title": "Track 8 for The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for The Dark Side of the Moon go here...",
                "interpretation": "This track exploring the depths of Track 8 for The Dark Side of the Moon's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for The Dark Side of the Moon",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_41_9",
                "track": 9,
                "title": "Track 9 for The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for The Dark Side of the Moon go here...",
                "interpretation": "This track exploring the depths of Track 9 for The Dark Side of the Moon's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for The Dark Side of the Moon",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_41_10",
                "track": 10,
                "title": "Track 10 for The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for The Dark Side of the Moon go here...",
                "interpretation": "This track exploring the depths of Track 10 for The Dark Side of the Moon's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for The Dark Side of the Moon",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_41_11",
                "track": 11,
                "title": "Track 11 for The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for The Dark Side of the Moon go here...",
                "interpretation": "This track exploring the depths of Track 11 for The Dark Side of the Moon's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for The Dark Side of the Moon",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_41_12",
                "track": 12,
                "title": "Track 12 for The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for The Dark Side of the Moon go here...",
                "interpretation": "This track exploring the depths of Track 12 for The Dark Side of the Moon's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for The Dark Side of the Moon",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_42",
        "title": "Nevermind",
        "artist": "Nirvana",
        "year": "1991",
        "genre": "Rock",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_42_1",
                "track": 1,
                "title": "Track 1 for Nevermind",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Nevermind go here...",
                "interpretation": "This track exploring the depths of Track 1 for Nevermind's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Nevermind",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_42_2",
                "track": 2,
                "title": "Track 2 for Nevermind",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Nevermind go here...",
                "interpretation": "This track exploring the depths of Track 2 for Nevermind's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Nevermind",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_42_3",
                "track": 3,
                "title": "Track 3 for Nevermind",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Nevermind go here...",
                "interpretation": "This track exploring the depths of Track 3 for Nevermind's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Nevermind",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_42_4",
                "track": 4,
                "title": "Track 4 for Nevermind",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Nevermind go here...",
                "interpretation": "This track exploring the depths of Track 4 for Nevermind's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Nevermind",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_42_5",
                "track": 5,
                "title": "Track 5 for Nevermind",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Nevermind go here...",
                "interpretation": "This track exploring the depths of Track 5 for Nevermind's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Nevermind",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_42_6",
                "track": 6,
                "title": "Track 6 for Nevermind",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Nevermind go here...",
                "interpretation": "This track exploring the depths of Track 6 for Nevermind's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Nevermind",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_42_7",
                "track": 7,
                "title": "Track 7 for Nevermind",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Nevermind go here...",
                "interpretation": "This track exploring the depths of Track 7 for Nevermind's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Nevermind",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_42_8",
                "track": 8,
                "title": "Track 8 for Nevermind",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Nevermind go here...",
                "interpretation": "This track exploring the depths of Track 8 for Nevermind's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Nevermind",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_42_9",
                "track": 9,
                "title": "Track 9 for Nevermind",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Nevermind go here...",
                "interpretation": "This track exploring the depths of Track 9 for Nevermind's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Nevermind",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_42_10",
                "track": 10,
                "title": "Track 10 for Nevermind",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Nevermind go here...",
                "interpretation": "This track exploring the depths of Track 10 for Nevermind's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Nevermind",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_42_11",
                "track": 11,
                "title": "Track 11 for Nevermind",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Nevermind go here...",
                "interpretation": "This track exploring the depths of Track 11 for Nevermind's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Nevermind",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_42_12",
                "track": 12,
                "title": "Track 12 for Nevermind",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Nevermind go here...",
                "interpretation": "This track exploring the depths of Track 12 for Nevermind's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Nevermind",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_43",
        "title": "Discovery",
        "artist": "Daft Punk",
        "year": "2001",
        "genre": "Electronic",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_43_1",
                "track": 1,
                "title": "Track 1 for Discovery",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Discovery go here...",
                "interpretation": "This track exploring the depths of Track 1 for Discovery's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Discovery",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_43_2",
                "track": 2,
                "title": "Track 2 for Discovery",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Discovery go here...",
                "interpretation": "This track exploring the depths of Track 2 for Discovery's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Discovery",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_43_3",
                "track": 3,
                "title": "Track 3 for Discovery",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Discovery go here...",
                "interpretation": "This track exploring the depths of Track 3 for Discovery's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Discovery",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_43_4",
                "track": 4,
                "title": "Track 4 for Discovery",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Discovery go here...",
                "interpretation": "This track exploring the depths of Track 4 for Discovery's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Discovery",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_43_5",
                "track": 5,
                "title": "Track 5 for Discovery",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Discovery go here...",
                "interpretation": "This track exploring the depths of Track 5 for Discovery's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Discovery",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_43_6",
                "track": 6,
                "title": "Track 6 for Discovery",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Discovery go here...",
                "interpretation": "This track exploring the depths of Track 6 for Discovery's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Discovery",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_43_7",
                "track": 7,
                "title": "Track 7 for Discovery",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Discovery go here...",
                "interpretation": "This track exploring the depths of Track 7 for Discovery's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Discovery",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_43_8",
                "track": 8,
                "title": "Track 8 for Discovery",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Discovery go here...",
                "interpretation": "This track exploring the depths of Track 8 for Discovery's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Discovery",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_43_9",
                "track": 9,
                "title": "Track 9 for Discovery",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Discovery go here...",
                "interpretation": "This track exploring the depths of Track 9 for Discovery's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Discovery",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_43_10",
                "track": 10,
                "title": "Track 10 for Discovery",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Discovery go here...",
                "interpretation": "This track exploring the depths of Track 10 for Discovery's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Discovery",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_43_11",
                "track": 11,
                "title": "Track 11 for Discovery",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Discovery go here...",
                "interpretation": "This track exploring the depths of Track 11 for Discovery's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Discovery",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_43_12",
                "track": 12,
                "title": "Track 12 for Discovery",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Discovery go here...",
                "interpretation": "This track exploring the depths of Track 12 for Discovery's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Discovery",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_44",
        "title": "Random Access Memories",
        "artist": "Daft Punk",
        "year": "2013",
        "genre": "Electronic",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_44_1",
                "track": 1,
                "title": "Track 1 for Random Access Memories",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Random Access Memories go here...",
                "interpretation": "This track exploring the depths of Track 1 for Random Access Memories's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Random Access Memories",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_44_2",
                "track": 2,
                "title": "Track 2 for Random Access Memories",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Random Access Memories go here...",
                "interpretation": "This track exploring the depths of Track 2 for Random Access Memories's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Random Access Memories",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_44_3",
                "track": 3,
                "title": "Track 3 for Random Access Memories",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Random Access Memories go here...",
                "interpretation": "This track exploring the depths of Track 3 for Random Access Memories's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Random Access Memories",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_44_4",
                "track": 4,
                "title": "Track 4 for Random Access Memories",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Random Access Memories go here...",
                "interpretation": "This track exploring the depths of Track 4 for Random Access Memories's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Random Access Memories",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_44_5",
                "track": 5,
                "title": "Track 5 for Random Access Memories",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Random Access Memories go here...",
                "interpretation": "This track exploring the depths of Track 5 for Random Access Memories's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Random Access Memories",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_44_6",
                "track": 6,
                "title": "Track 6 for Random Access Memories",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Random Access Memories go here...",
                "interpretation": "This track exploring the depths of Track 6 for Random Access Memories's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Random Access Memories",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_44_7",
                "track": 7,
                "title": "Track 7 for Random Access Memories",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Random Access Memories go here...",
                "interpretation": "This track exploring the depths of Track 7 for Random Access Memories's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Random Access Memories",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_44_8",
                "track": 8,
                "title": "Track 8 for Random Access Memories",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Random Access Memories go here...",
                "interpretation": "This track exploring the depths of Track 8 for Random Access Memories's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Random Access Memories",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_44_9",
                "track": 9,
                "title": "Track 9 for Random Access Memories",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Random Access Memories go here...",
                "interpretation": "This track exploring the depths of Track 9 for Random Access Memories's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Random Access Memories",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_44_10",
                "track": 10,
                "title": "Track 10 for Random Access Memories",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Random Access Memories go here...",
                "interpretation": "This track exploring the depths of Track 10 for Random Access Memories's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Random Access Memories",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_44_11",
                "track": 11,
                "title": "Track 11 for Random Access Memories",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Random Access Memories go here...",
                "interpretation": "This track exploring the depths of Track 11 for Random Access Memories's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Random Access Memories",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_44_12",
                "track": 12,
                "title": "Track 12 for Random Access Memories",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Random Access Memories go here...",
                "interpretation": "This track exploring the depths of Track 12 for Random Access Memories's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Random Access Memories",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_45",
        "title": "Demon Days",
        "artist": "Gorillaz",
        "year": "2005",
        "genre": "Electronic",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_45_1",
                "track": 1,
                "title": "Track 1 for Demon Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Demon Days go here...",
                "interpretation": "This track exploring the depths of Track 1 for Demon Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Demon Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_45_2",
                "track": 2,
                "title": "Track 2 for Demon Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Demon Days go here...",
                "interpretation": "This track exploring the depths of Track 2 for Demon Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Demon Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_45_3",
                "track": 3,
                "title": "Track 3 for Demon Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Demon Days go here...",
                "interpretation": "This track exploring the depths of Track 3 for Demon Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Demon Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_45_4",
                "track": 4,
                "title": "Track 4 for Demon Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Demon Days go here...",
                "interpretation": "This track exploring the depths of Track 4 for Demon Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Demon Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_45_5",
                "track": 5,
                "title": "Track 5 for Demon Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Demon Days go here...",
                "interpretation": "This track exploring the depths of Track 5 for Demon Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Demon Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_45_6",
                "track": 6,
                "title": "Track 6 for Demon Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Demon Days go here...",
                "interpretation": "This track exploring the depths of Track 6 for Demon Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Demon Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_45_7",
                "track": 7,
                "title": "Track 7 for Demon Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Demon Days go here...",
                "interpretation": "This track exploring the depths of Track 7 for Demon Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Demon Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_45_8",
                "track": 8,
                "title": "Track 8 for Demon Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Demon Days go here...",
                "interpretation": "This track exploring the depths of Track 8 for Demon Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Demon Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_45_9",
                "track": 9,
                "title": "Track 9 for Demon Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Demon Days go here...",
                "interpretation": "This track exploring the depths of Track 9 for Demon Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Demon Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_45_10",
                "track": 10,
                "title": "Track 10 for Demon Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Demon Days go here...",
                "interpretation": "This track exploring the depths of Track 10 for Demon Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Demon Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_45_11",
                "track": 11,
                "title": "Track 11 for Demon Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Demon Days go here...",
                "interpretation": "This track exploring the depths of Track 11 for Demon Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Demon Days",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_45_12",
                "track": 12,
                "title": "Track 12 for Demon Days",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Demon Days go here...",
                "interpretation": "This track exploring the depths of Track 12 for Demon Days's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Demon Days",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_46",
        "title": "Plastic Beach",
        "artist": "Gorillaz",
        "year": "2010",
        "genre": "Electronic",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_46_1",
                "track": 1,
                "title": "Track 1 for Plastic Beach",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Plastic Beach go here...",
                "interpretation": "This track exploring the depths of Track 1 for Plastic Beach's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Plastic Beach",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_46_2",
                "track": 2,
                "title": "Track 2 for Plastic Beach",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Plastic Beach go here...",
                "interpretation": "This track exploring the depths of Track 2 for Plastic Beach's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Plastic Beach",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_46_3",
                "track": 3,
                "title": "Track 3 for Plastic Beach",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Plastic Beach go here...",
                "interpretation": "This track exploring the depths of Track 3 for Plastic Beach's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Plastic Beach",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_46_4",
                "track": 4,
                "title": "Track 4 for Plastic Beach",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Plastic Beach go here...",
                "interpretation": "This track exploring the depths of Track 4 for Plastic Beach's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Plastic Beach",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_46_5",
                "track": 5,
                "title": "Track 5 for Plastic Beach",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Plastic Beach go here...",
                "interpretation": "This track exploring the depths of Track 5 for Plastic Beach's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Plastic Beach",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_46_6",
                "track": 6,
                "title": "Track 6 for Plastic Beach",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Plastic Beach go here...",
                "interpretation": "This track exploring the depths of Track 6 for Plastic Beach's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Plastic Beach",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_46_7",
                "track": 7,
                "title": "Track 7 for Plastic Beach",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Plastic Beach go here...",
                "interpretation": "This track exploring the depths of Track 7 for Plastic Beach's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Plastic Beach",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_46_8",
                "track": 8,
                "title": "Track 8 for Plastic Beach",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Plastic Beach go here...",
                "interpretation": "This track exploring the depths of Track 8 for Plastic Beach's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Plastic Beach",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_46_9",
                "track": 9,
                "title": "Track 9 for Plastic Beach",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Plastic Beach go here...",
                "interpretation": "This track exploring the depths of Track 9 for Plastic Beach's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Plastic Beach",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_46_10",
                "track": 10,
                "title": "Track 10 for Plastic Beach",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Plastic Beach go here...",
                "interpretation": "This track exploring the depths of Track 10 for Plastic Beach's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Plastic Beach",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_46_11",
                "track": 11,
                "title": "Track 11 for Plastic Beach",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Plastic Beach go here...",
                "interpretation": "This track exploring the depths of Track 11 for Plastic Beach's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Plastic Beach",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_46_12",
                "track": 12,
                "title": "Track 12 for Plastic Beach",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Plastic Beach go here...",
                "interpretation": "This track exploring the depths of Track 12 for Plastic Beach's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Plastic Beach",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_47",
        "title": "Wasteland",
        "artist": "Brent Faiyaz",
        "year": "2022",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_47_1",
                "track": 1,
                "title": "Track 1 for Wasteland",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Wasteland go here...",
                "interpretation": "This track exploring the depths of Track 1 for Wasteland's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Wasteland",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_47_2",
                "track": 2,
                "title": "Track 2 for Wasteland",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Wasteland go here...",
                "interpretation": "This track exploring the depths of Track 2 for Wasteland's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Wasteland",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_47_3",
                "track": 3,
                "title": "Track 3 for Wasteland",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Wasteland go here...",
                "interpretation": "This track exploring the depths of Track 3 for Wasteland's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Wasteland",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_47_4",
                "track": 4,
                "title": "Track 4 for Wasteland",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Wasteland go here...",
                "interpretation": "This track exploring the depths of Track 4 for Wasteland's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Wasteland",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_47_5",
                "track": 5,
                "title": "Track 5 for Wasteland",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Wasteland go here...",
                "interpretation": "This track exploring the depths of Track 5 for Wasteland's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Wasteland",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_47_6",
                "track": 6,
                "title": "Track 6 for Wasteland",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Wasteland go here...",
                "interpretation": "This track exploring the depths of Track 6 for Wasteland's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Wasteland",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_47_7",
                "track": 7,
                "title": "Track 7 for Wasteland",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Wasteland go here...",
                "interpretation": "This track exploring the depths of Track 7 for Wasteland's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Wasteland",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_47_8",
                "track": 8,
                "title": "Track 8 for Wasteland",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Wasteland go here...",
                "interpretation": "This track exploring the depths of Track 8 for Wasteland's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Wasteland",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_47_9",
                "track": 9,
                "title": "Track 9 for Wasteland",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Wasteland go here...",
                "interpretation": "This track exploring the depths of Track 9 for Wasteland's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Wasteland",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_47_10",
                "track": 10,
                "title": "Track 10 for Wasteland",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Wasteland go here...",
                "interpretation": "This track exploring the depths of Track 10 for Wasteland's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Wasteland",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_47_11",
                "track": 11,
                "title": "Track 11 for Wasteland",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Wasteland go here...",
                "interpretation": "This track exploring the depths of Track 11 for Wasteland's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Wasteland",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_47_12",
                "track": 12,
                "title": "Track 12 for Wasteland",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Wasteland go here...",
                "interpretation": "This track exploring the depths of Track 12 for Wasteland's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Wasteland",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_48",
        "title": "Sonder Son",
        "artist": "Brent Faiyaz",
        "year": "2017",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_48_1",
                "track": 1,
                "title": "Track 1 for Sonder Son",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for Sonder Son go here...",
                "interpretation": "This track exploring the depths of Track 1 for Sonder Son's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for Sonder Son",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_48_2",
                "track": 2,
                "title": "Track 2 for Sonder Son",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for Sonder Son go here...",
                "interpretation": "This track exploring the depths of Track 2 for Sonder Son's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for Sonder Son",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_48_3",
                "track": 3,
                "title": "Track 3 for Sonder Son",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for Sonder Son go here...",
                "interpretation": "This track exploring the depths of Track 3 for Sonder Son's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for Sonder Son",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_48_4",
                "track": 4,
                "title": "Track 4 for Sonder Son",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for Sonder Son go here...",
                "interpretation": "This track exploring the depths of Track 4 for Sonder Son's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for Sonder Son",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_48_5",
                "track": 5,
                "title": "Track 5 for Sonder Son",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for Sonder Son go here...",
                "interpretation": "This track exploring the depths of Track 5 for Sonder Son's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for Sonder Son",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_48_6",
                "track": 6,
                "title": "Track 6 for Sonder Son",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for Sonder Son go here...",
                "interpretation": "This track exploring the depths of Track 6 for Sonder Son's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for Sonder Son",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_48_7",
                "track": 7,
                "title": "Track 7 for Sonder Son",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for Sonder Son go here...",
                "interpretation": "This track exploring the depths of Track 7 for Sonder Son's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for Sonder Son",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_48_8",
                "track": 8,
                "title": "Track 8 for Sonder Son",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for Sonder Son go here...",
                "interpretation": "This track exploring the depths of Track 8 for Sonder Son's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for Sonder Son",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_48_9",
                "track": 9,
                "title": "Track 9 for Sonder Son",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for Sonder Son go here...",
                "interpretation": "This track exploring the depths of Track 9 for Sonder Son's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for Sonder Son",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_48_10",
                "track": 10,
                "title": "Track 10 for Sonder Son",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for Sonder Son go here...",
                "interpretation": "This track exploring the depths of Track 10 for Sonder Son's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for Sonder Son",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_48_11",
                "track": 11,
                "title": "Track 11 for Sonder Son",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for Sonder Son go here...",
                "interpretation": "This track exploring the depths of Track 11 for Sonder Son's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for Sonder Son",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_48_12",
                "track": 12,
                "title": "Track 12 for Sonder Son",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for Sonder Son go here...",
                "interpretation": "This track exploring the depths of Track 12 for Sonder Son's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for Sonder Son",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_49",
        "title": "T R A P S O U L",
        "artist": "Bryson Tiller",
        "year": "2015",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_49_1",
                "track": 1,
                "title": "Track 1 for T R A P S O U L",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for T R A P S O U L go here...",
                "interpretation": "This track exploring the depths of Track 1 for T R A P S O U L's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for T R A P S O U L",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_49_2",
                "track": 2,
                "title": "Track 2 for T R A P S O U L",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for T R A P S O U L go here...",
                "interpretation": "This track exploring the depths of Track 2 for T R A P S O U L's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for T R A P S O U L",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_49_3",
                "track": 3,
                "title": "Track 3 for T R A P S O U L",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for T R A P S O U L go here...",
                "interpretation": "This track exploring the depths of Track 3 for T R A P S O U L's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for T R A P S O U L",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_49_4",
                "track": 4,
                "title": "Track 4 for T R A P S O U L",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for T R A P S O U L go here...",
                "interpretation": "This track exploring the depths of Track 4 for T R A P S O U L's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for T R A P S O U L",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_49_5",
                "track": 5,
                "title": "Track 5 for T R A P S O U L",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for T R A P S O U L go here...",
                "interpretation": "This track exploring the depths of Track 5 for T R A P S O U L's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for T R A P S O U L",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_49_6",
                "track": 6,
                "title": "Track 6 for T R A P S O U L",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for T R A P S O U L go here...",
                "interpretation": "This track exploring the depths of Track 6 for T R A P S O U L's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for T R A P S O U L",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_49_7",
                "track": 7,
                "title": "Track 7 for T R A P S O U L",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for T R A P S O U L go here...",
                "interpretation": "This track exploring the depths of Track 7 for T R A P S O U L's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for T R A P S O U L",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_49_8",
                "track": 8,
                "title": "Track 8 for T R A P S O U L",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for T R A P S O U L go here...",
                "interpretation": "This track exploring the depths of Track 8 for T R A P S O U L's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for T R A P S O U L",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_49_9",
                "track": 9,
                "title": "Track 9 for T R A P S O U L",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for T R A P S O U L go here...",
                "interpretation": "This track exploring the depths of Track 9 for T R A P S O U L's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for T R A P S O U L",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_49_10",
                "track": 10,
                "title": "Track 10 for T R A P S O U L",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for T R A P S O U L go here...",
                "interpretation": "This track exploring the depths of Track 10 for T R A P S O U L's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for T R A P S O U L",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_49_11",
                "track": 11,
                "title": "Track 11 for T R A P S O U L",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for T R A P S O U L go here...",
                "interpretation": "This track exploring the depths of Track 11 for T R A P S O U L's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for T R A P S O U L",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_49_12",
                "track": 12,
                "title": "Track 12 for T R A P S O U L",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for T R A P S O U L go here...",
                "interpretation": "This track exploring the depths of Track 12 for T R A P S O U L's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for T R A P S O U L",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_50",
        "title": "ASTROWORLD",
        "artist": "Travis Scott",
        "year": "2018",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alb_50_1",
                "track": 1,
                "title": "Track 1 for ASTROWORLD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 1 for ASTROWORLD go here...",
                "interpretation": "This track exploring the depths of Track 1 for ASTROWORLD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 1 for ASTROWORLD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_50_2",
                "track": 2,
                "title": "Track 2 for ASTROWORLD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 2 for ASTROWORLD go here...",
                "interpretation": "This track exploring the depths of Track 2 for ASTROWORLD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 2 for ASTROWORLD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_50_3",
                "track": 3,
                "title": "Track 3 for ASTROWORLD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 3 for ASTROWORLD go here...",
                "interpretation": "This track exploring the depths of Track 3 for ASTROWORLD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 3 for ASTROWORLD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_50_4",
                "track": 4,
                "title": "Track 4 for ASTROWORLD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 4 for ASTROWORLD go here...",
                "interpretation": "This track exploring the depths of Track 4 for ASTROWORLD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 4 for ASTROWORLD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_50_5",
                "track": 5,
                "title": "Track 5 for ASTROWORLD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 5 for ASTROWORLD go here...",
                "interpretation": "This track exploring the depths of Track 5 for ASTROWORLD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 5 for ASTROWORLD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_50_6",
                "track": 6,
                "title": "Track 6 for ASTROWORLD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 6 for ASTROWORLD go here...",
                "interpretation": "This track exploring the depths of Track 6 for ASTROWORLD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 6 for ASTROWORLD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_50_7",
                "track": 7,
                "title": "Track 7 for ASTROWORLD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 7 for ASTROWORLD go here...",
                "interpretation": "This track exploring the depths of Track 7 for ASTROWORLD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 7 for ASTROWORLD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_50_8",
                "track": 8,
                "title": "Track 8 for ASTROWORLD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 8 for ASTROWORLD go here...",
                "interpretation": "This track exploring the depths of Track 8 for ASTROWORLD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 8 for ASTROWORLD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_50_9",
                "track": 9,
                "title": "Track 9 for ASTROWORLD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 9 for ASTROWORLD go here...",
                "interpretation": "This track exploring the depths of Track 9 for ASTROWORLD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 9 for ASTROWORLD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_50_10",
                "track": 10,
                "title": "Track 10 for ASTROWORLD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 10 for ASTROWORLD go here...",
                "interpretation": "This track exploring the depths of Track 10 for ASTROWORLD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 10 for ASTROWORLD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_50_11",
                "track": 11,
                "title": "Track 11 for ASTROWORLD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 11 for ASTROWORLD go here...",
                "interpretation": "This track exploring the depths of Track 11 for ASTROWORLD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 11 for ASTROWORLD",
                        "explanation": "Deep meaning."
                    }
                ]
            },
            {
                "id": "s_alb_50_12",
                "track": 12,
                "title": "Track 12 for ASTROWORLD",
                "duration": "3:30",
                "lyrics": "Lyrics for Track 12 for ASTROWORLD go here...",
                "interpretation": "This track exploring the depths of Track 12 for ASTROWORLD's message.",
                "themes": [
                    "Life",
                    "Music"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Sample line from Track 12 for ASTROWORLD",
                        "explanation": "Deep meaning."
                    }
                ]
            }
        ]
    }
];

const Storage = {
    init() {
        if (!localStorage.getItem(STORAGE_KEYS.STARTER_INITIALIZED)) {
            // Initialize empty stores
            localStorage.setItem(STORAGE_KEYS.REVIEWS_ALBUMS, JSON.stringify([]));
            localStorage.setItem(STORAGE_KEYS.REVIEWS_SONGS, JSON.stringify([]));
            localStorage.setItem(STORAGE_KEYS.FAVORITES_ALBUMS, JSON.stringify([]));
            localStorage.setItem(STORAGE_KEYS.FAVORITES_SONGS, JSON.stringify([]));
            localStorage.setItem(STORAGE_KEYS.STARTER_INITIALIZED, 'true');
        }
    },

    // --- Reviews ---
    getAlbumReviews() {
        const reviews = localStorage.getItem(STORAGE_KEYS.REVIEWS_ALBUMS);
        return reviews ? JSON.parse(reviews) : [];
    },

    getSongReviews() {
        const reviews = localStorage.getItem(STORAGE_KEYS.REVIEWS_SONGS);
        return reviews ? JSON.parse(reviews) : [];
    },

    saveAlbumReview(review) {
        const reviews = this.getAlbumReviews();
        const index = reviews.findIndex(r => r.id === review.id);
        const data = { ...review, date: new Date().toISOString() };
        if (index !== -1) reviews[index] = data;
        else reviews.push(data);
        localStorage.setItem(STORAGE_KEYS.REVIEWS_ALBUMS, JSON.stringify(reviews));
    },

    saveSongReview(review) {
        // review: { songId, albumId, rating, comment, title, artist }
        const reviews = this.getSongReviews();
        const index = reviews.findIndex(r => r.songId === review.songId);
        const data = { ...review, date: new Date().toISOString() };
        if (index !== -1) reviews[index] = data;
        else reviews.push(data);
        localStorage.setItem(STORAGE_KEYS.REVIEWS_SONGS, JSON.stringify(reviews));
    },

    // --- Favorites ---
    getFavorites(type = 'albums') {
        const key = type === 'albums' ? STORAGE_KEYS.FAVORITES_ALBUMS : STORAGE_KEYS.FAVORITES_SONGS;
        const favs = localStorage.getItem(key);
        return favs ? JSON.parse(favs) : [];
    },

    toggleFavorite(id, type = 'albums') {
        const key = type === 'albums' ? STORAGE_KEYS.FAVORITES_ALBUMS : STORAGE_KEYS.FAVORITES_SONGS;
        let favs = this.getFavorites(type);
        if (favs.includes(id)) {
            favs = favs.filter(fid => fid !== id);
        } else {
            favs.push(id);
        }
        localStorage.setItem(key, JSON.stringify(favs));
        return favs.includes(id);
    },

    isFavorite(id, type = 'albums') {
        return this.getFavorites(type).includes(id);
    },

    // --- Record of the Day ---
    getRecordOfTheDay() {
        const today = new Date().toDateString();
        const savedDate = localStorage.getItem(STORAGE_KEYS.ROT_DATE);

        if (savedDate === today) {
            const savedAlbum = localStorage.getItem(STORAGE_KEYS.ROT_ALBUM);
            if (savedAlbum) return JSON.parse(savedAlbum);
        }

        const pool = [...STARTER_ALBUMS];
        if (pool.length === 0) return null;
        const randomAlbum = pool[Math.floor(Math.random() * pool.length)];

        localStorage.setItem(STORAGE_KEYS.ROT_DATE, today);
        localStorage.setItem(STORAGE_KEYS.ROT_ALBUM, JSON.stringify(randomAlbum));

        return randomAlbum;
    }
};

Storage.init();
