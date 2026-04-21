const STORAGE_KEYS = {
    REVIEWS_ALBUMS: 'sonic_critique_reviews_albums',
    REVIEWS_SONGS: 'sonic_critique_reviews_songs',
    FAVORITES_ALBUMS: 'sonic_critique_favorites_albums',
    FAVORITES_SONGS: 'sonic_critique_favorites_songs',
    STARTER_INITIALIZED: 'sonic_critique_initialized_v3',
    ROT_DATE: 'sonic_critique_rot_date',
    ROT_ALBUM: 'sonic_critique_rot_album'
};

const STARTER_ALBUMS = [
    {
        "id": "alb_1",
        "title": "After Hours",
        "artist": "The Weeknd",
        "year": "2020",
        "genre": "R&B/Pop",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alone_again",
                "track": 1,
                "title": "Alone Again",
                "duration": "3:10",
                "lyrics": "Take off my disguise\nI'm living someone else's life\nSuppressing who I was inside\nSo I can tell her I'm fine\nI'm living a lie",
                "interpretation": "A heavy opener about the identity crisis that comes with fame.",
                "themes": [
                    "Identity",
                    "Isolation"
                ],
                "mood": [
                    "Dark",
                    "Cinematic"
                ],
                "key_lines": [
                    {
                        "line": "Take off my disguise",
                        "explanation": "The Weeknd acknowledging his stage persona vs Abel."
                    }
                ]
            },
            {
                "id": "s_blinding_lights",
                "track": 9,
                "title": "Blinding Lights",
                "duration": "3:20",
                "lyrics": "I've been on my own for long enough\nMaybe you can show me how to love, maybe\nI'm going through withdrawals\nYou don't even have to do too much\nYou can turn me on with just a touch, baby\n\nI look around and Sin City's cold and empty\nNo one's around to judge me\nI can't see clearly when you're gone",
                "interpretation": "An 80s-inspired anthem about the rush and dependency of a high-speed relationship.",
                "themes": [
                    "Obsession",
                    "Escapism"
                ],
                "mood": [
                    "Hype",
                    "Nostalgic"
                ],
                "key_lines": [
                    {
                        "line": "Sin City's cold and empty",
                        "explanation": "Refers to the superficiality and loneliness of Las Vegas nightlife."
                    }
                ]
            },
            {
                "id": "s_after_hours",
                "track": 13,
                "title": "After Hours",
                "duration": "6:01",
                "lyrics": "Thought I almost died in my dream again\nFightin' for my life, I couldn't breathe again\nI'm fallin' into a deep state\nCan't get you out of my mind\nI'm fallin' into a deep state\nCan't get you out of my mind",
                "interpretation": "The title track explores themes of regret and the desire for reconciliation in the early hours of the morning.",
                "themes": [
                    "Regret",
                    "Longing"
                ],
                "mood": [
                    "Melancholic",
                    "Dark"
                ],
                "key_lines": [
                    {
                        "line": "Thought I almost died in my dream again",
                        "explanation": "A recurring theme of near-death experiences and existential dread."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_2",
        "title": "IGOR",
        "artist": "Tyler, The Creator",
        "year": "2019",
        "genre": "Alternative Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_earfquake",
                "track": 4,
                "title": "EARFQUAKE",
                "duration": "3:10",
                "lyrics": "For real, for real this time\nBitch, I'm for real, for real this time\nYou make my earth quake\nOh, you make my earth quake\nDon't leave, it's my fault\n'Cause when it all comes to a halt\nI don't want tonight to end",
                "interpretation": "A vulnerable confession of love and dependency, featuring an iconic uncredited guest verse from Playboi Carti.",
                "themes": [
                    "Love",
                    "Dependency"
                ],
                "mood": [
                    "Chill",
                    "Vulnerable"
                ],
                "key_lines": [
                    {
                        "line": "You make my earth quake",
                        "explanation": "A metaphor for the destabilizing power of love."
                    }
                ]
            },
            {
                "id": "s_new_magic_wand",
                "track": 6,
                "title": "NEW MAGIC WAND",
                "duration": "3:15",
                "lyrics": "Sometimes you gotta close a door to open a window\nI saw a photo, you looked joyous\nMy eyes are green I'm eating veggies\nI need to get her out the picture\nShe's really messing up my frame",
                "interpretation": "A frantic track about jealousy and the desire to eliminate anyone coming between Tyler and his partner.",
                "themes": [
                    "Jealousy",
                    "Chaos"
                ],
                "mood": [
                    "Aggressive",
                    "Hype"
                ],
                "key_lines": [
                    {
                        "line": "She's really messing up my frame",
                        "explanation": "The 'frame' represents his perfect vision of the relationship."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_3",
        "title": "Blonde",
        "artist": "Frank Ocean",
        "year": "2016",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_nikes",
                "track": 1,
                "title": "Nikes",
                "duration": "5:14",
                "lyrics": "These bitches want Nikes...",
                "interpretation": "Critique of materialism.",
                "themes": [
                    "Materialism"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": []
            }
        ]
    },
    {
        "id": "alb_4",
        "title": "To Pimp a Butterfly",
        "artist": "Kendrick Lamar",
        "year": "2015",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_alright",
                "track": 7,
                "title": "Alright",
                "duration": "3:39",
                "lyrics": "Alls my life I has to fight...",
                "interpretation": "A message of hope.",
                "themes": [
                    "Hope",
                    "Resilience"
                ],
                "mood": [
                    "Hype"
                ],
                "key_lines": []
            }
        ]
    },
    {
        "id": "alb_5",
        "title": "Currents",
        "artist": "Tame Impala",
        "year": "2015",
        "genre": "Psych-Pop",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_let_it_happen",
                "track": 1,
                "title": "Let It Happen",
                "duration": "7:46",
                "lyrics": "It's getting closer...",
                "interpretation": "Accepting change.",
                "themes": [
                    "Change"
                ],
                "mood": [
                    "Hypnotic"
                ],
                "key_lines": []
            }
        ]
    },
    {
        "id": "alb_6",
        "title": "ASTROWORLD",
        "artist": "Travis Scott",
        "year": "2018",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_sicko_mode",
                "track": 3,
                "title": "SICKO MODE",
                "duration": "5:12",
                "lyrics": "Sun is down, freezin' cold...",
                "interpretation": "Multi-part anthem.",
                "themes": [
                    "Success"
                ],
                "mood": [
                    "Hype"
                ],
                "key_lines": []
            }
        ]
    },
    {
        "id": "alb_7",
        "title": "Ctrl",
        "artist": "SZA",
        "year": "2017",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_drew_barrymore",
                "track": 2,
                "title": "Drew Barrymore",
                "duration": "3:51",
                "lyrics": "Why is it so hard...",
                "interpretation": "Self-doubt.",
                "themes": [
                    "Insecurity"
                ],
                "mood": [
                    "Sad"
                ],
                "key_lines": []
            }
        ]
    },
    {
        "id": "alb_8",
        "title": "Graduation",
        "artist": "Kanye West",
        "year": "2007",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_stronger",
                "track": 3,
                "title": "Stronger",
                "duration": "5:12",
                "lyrics": "Work it, make it...",
                "interpretation": "Triumph.",
                "themes": [
                    "Success"
                ],
                "mood": [
                    "Hype"
                ],
                "key_lines": []
            }
        ]
    },
    {
        "id": "alb_9",
        "title": "AM",
        "artist": "Arctic Monkeys",
        "year": "2013",
        "genre": "Rock",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_do_i_wanna_know?",
                "track": 1,
                "title": "Do I Wanna Know?",
                "duration": "4:32",
                "lyrics": "Have you got colour in your cheeks?",
                "interpretation": "Romantic yearning.",
                "themes": [
                    "Love"
                ],
                "mood": [
                    "Dark"
                ],
                "key_lines": []
            }
        ]
    },
    {
        "id": "alb_10",
        "title": "Melodrama",
        "artist": "Lorde",
        "year": "2017",
        "genre": "Pop",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_green_light",
                "track": 1,
                "title": "Green Light",
                "duration": "3:54",
                "lyrics": "I do my makeup in somebody else's car...",
                "interpretation": "Post-breakup energy.",
                "themes": [
                    "Heartbreak"
                ],
                "mood": [
                    "Hype"
                ],
                "key_lines": []
            }
        ]
    },
    {
        "id": "alb_11",
        "title": "Utopia",
        "artist": "Travis Scott",
        "year": "2023",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_utopia",
                "track": 1,
                "title": "Song 1 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_utopia",
                "track": 2,
                "title": "Song 2 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_utopia",
                "track": 3,
                "title": "Song 3 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_utopia",
                "track": 4,
                "title": "Song 4 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_utopia",
                "track": 5,
                "title": "Song 5 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_utopia",
                "track": 6,
                "title": "Song 6 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_utopia",
                "track": 7,
                "title": "Song 7 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_utopia",
                "track": 8,
                "title": "Song 8 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_utopia",
                "track": 9,
                "title": "Song 9 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_utopia",
                "track": 10,
                "title": "Song 10 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_12",
        "title": "SOS",
        "artist": "SZA",
        "year": "2022",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_sos",
                "track": 1,
                "title": "Song 1 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_sos",
                "track": 2,
                "title": "Song 2 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_sos",
                "track": 3,
                "title": "Song 3 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_sos",
                "track": 4,
                "title": "Song 4 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_sos",
                "track": 5,
                "title": "Song 5 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_sos",
                "track": 6,
                "title": "Song 6 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_sos",
                "track": 7,
                "title": "Song 7 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_sos",
                "track": 8,
                "title": "Song 8 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_sos",
                "track": 9,
                "title": "Song 9 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_sos",
                "track": 10,
                "title": "Song 10 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_13",
        "title": "Renaissance",
        "artist": "Beyonc\u00e9",
        "year": "2022",
        "genre": "Dance",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_renaissance",
                "track": 1,
                "title": "Song 1 from Renaissance",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Renaissance by Beyonc\u00e9 go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_renaissance",
                "track": 2,
                "title": "Song 2 from Renaissance",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Renaissance by Beyonc\u00e9 go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_renaissance",
                "track": 3,
                "title": "Song 3 from Renaissance",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Renaissance by Beyonc\u00e9 go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_renaissance",
                "track": 4,
                "title": "Song 4 from Renaissance",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Renaissance by Beyonc\u00e9 go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_renaissance",
                "track": 5,
                "title": "Song 5 from Renaissance",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Renaissance by Beyonc\u00e9 go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_renaissance",
                "track": 6,
                "title": "Song 6 from Renaissance",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Renaissance by Beyonc\u00e9 go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_renaissance",
                "track": 7,
                "title": "Song 7 from Renaissance",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Renaissance by Beyonc\u00e9 go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_renaissance",
                "track": 8,
                "title": "Song 8 from Renaissance",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Renaissance by Beyonc\u00e9 go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_renaissance",
                "track": 9,
                "title": "Song 9 from Renaissance",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Renaissance by Beyonc\u00e9 go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_renaissance",
                "track": 10,
                "title": "Song 10 from Renaissance",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Renaissance by Beyonc\u00e9 go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_14",
        "title": "Midnights",
        "artist": "Taylor Swift",
        "year": "2022",
        "genre": "Pop",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_midnights",
                "track": 1,
                "title": "Song 1 from Midnights",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Midnights by Taylor Swift go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_midnights",
                "track": 2,
                "title": "Song 2 from Midnights",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Midnights by Taylor Swift go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_midnights",
                "track": 3,
                "title": "Song 3 from Midnights",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Midnights by Taylor Swift go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_midnights",
                "track": 4,
                "title": "Song 4 from Midnights",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Midnights by Taylor Swift go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_midnights",
                "track": 5,
                "title": "Song 5 from Midnights",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Midnights by Taylor Swift go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_midnights",
                "track": 6,
                "title": "Song 6 from Midnights",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Midnights by Taylor Swift go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_midnights",
                "track": 7,
                "title": "Song 7 from Midnights",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Midnights by Taylor Swift go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_midnights",
                "track": 8,
                "title": "Song 8 from Midnights",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Midnights by Taylor Swift go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_midnights",
                "track": 9,
                "title": "Song 9 from Midnights",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Midnights by Taylor Swift go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_midnights",
                "track": 10,
                "title": "Song 10 from Midnights",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Midnights by Taylor Swift go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
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
                "id": "s_song_1_from_mr._morale_&_the_big_steppers",
                "track": 1,
                "title": "Song 1 from Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Mr. Morale & The Big Steppers by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_mr._morale_&_the_big_steppers",
                "track": 2,
                "title": "Song 2 from Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Mr. Morale & The Big Steppers by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_mr._morale_&_the_big_steppers",
                "track": 3,
                "title": "Song 3 from Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Mr. Morale & The Big Steppers by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_mr._morale_&_the_big_steppers",
                "track": 4,
                "title": "Song 4 from Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Mr. Morale & The Big Steppers by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_mr._morale_&_the_big_steppers",
                "track": 5,
                "title": "Song 5 from Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Mr. Morale & The Big Steppers by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_mr._morale_&_the_big_steppers",
                "track": 6,
                "title": "Song 6 from Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Mr. Morale & The Big Steppers by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_mr._morale_&_the_big_steppers",
                "track": 7,
                "title": "Song 7 from Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Mr. Morale & The Big Steppers by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_mr._morale_&_the_big_steppers",
                "track": 8,
                "title": "Song 8 from Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Mr. Morale & The Big Steppers by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_mr._morale_&_the_big_steppers",
                "track": 9,
                "title": "Song 9 from Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Mr. Morale & The Big Steppers by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_mr._morale_&_the_big_steppers",
                "track": 10,
                "title": "Song 10 from Mr. Morale & The Big Steppers",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Mr. Morale & The Big Steppers by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_16",
        "title": "Dawn FM",
        "artist": "The Weeknd",
        "year": "2022",
        "genre": "Synth-Pop",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_dawn_fm",
                "track": 1,
                "title": "Song 1 from Dawn FM",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Dawn FM by The Weeknd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_dawn_fm",
                "track": 2,
                "title": "Song 2 from Dawn FM",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Dawn FM by The Weeknd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_dawn_fm",
                "track": 3,
                "title": "Song 3 from Dawn FM",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Dawn FM by The Weeknd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_dawn_fm",
                "track": 4,
                "title": "Song 4 from Dawn FM",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Dawn FM by The Weeknd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_dawn_fm",
                "track": 5,
                "title": "Song 5 from Dawn FM",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Dawn FM by The Weeknd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_dawn_fm",
                "track": 6,
                "title": "Song 6 from Dawn FM",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Dawn FM by The Weeknd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_dawn_fm",
                "track": 7,
                "title": "Song 7 from Dawn FM",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Dawn FM by The Weeknd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_dawn_fm",
                "track": 8,
                "title": "Song 8 from Dawn FM",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Dawn FM by The Weeknd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_dawn_fm",
                "track": 9,
                "title": "Song 9 from Dawn FM",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Dawn FM by The Weeknd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_dawn_fm",
                "track": 10,
                "title": "Song 10 from Dawn FM",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Dawn FM by The Weeknd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_17",
        "title": "Harry's House",
        "artist": "Harry Styles",
        "year": "2022",
        "genre": "Pop",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_harry's_house",
                "track": 1,
                "title": "Song 1 from Harry's House",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Harry's House by Harry Styles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_harry's_house",
                "track": 2,
                "title": "Song 2 from Harry's House",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Harry's House by Harry Styles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_harry's_house",
                "track": 3,
                "title": "Song 3 from Harry's House",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Harry's House by Harry Styles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_harry's_house",
                "track": 4,
                "title": "Song 4 from Harry's House",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Harry's House by Harry Styles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_harry's_house",
                "track": 5,
                "title": "Song 5 from Harry's House",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Harry's House by Harry Styles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_harry's_house",
                "track": 6,
                "title": "Song 6 from Harry's House",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Harry's House by Harry Styles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_harry's_house",
                "track": 7,
                "title": "Song 7 from Harry's House",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Harry's House by Harry Styles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_harry's_house",
                "track": 8,
                "title": "Song 8 from Harry's House",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Harry's House by Harry Styles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_harry's_house",
                "track": 9,
                "title": "Song 9 from Harry's House",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Harry's House by Harry Styles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_harry's_house",
                "track": 10,
                "title": "Song 10 from Harry's House",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Harry's House by Harry Styles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_18",
        "title": "The Forever Story",
        "artist": "JID",
        "year": "2022",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_the_forever_story",
                "track": 1,
                "title": "Song 1 from The Forever Story",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of The Forever Story by JID go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_the_forever_story",
                "track": 2,
                "title": "Song 2 from The Forever Story",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of The Forever Story by JID go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_the_forever_story",
                "track": 3,
                "title": "Song 3 from The Forever Story",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of The Forever Story by JID go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_the_forever_story",
                "track": 4,
                "title": "Song 4 from The Forever Story",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of The Forever Story by JID go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_the_forever_story",
                "track": 5,
                "title": "Song 5 from The Forever Story",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of The Forever Story by JID go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_the_forever_story",
                "track": 6,
                "title": "Song 6 from The Forever Story",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of The Forever Story by JID go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_the_forever_story",
                "track": 7,
                "title": "Song 7 from The Forever Story",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of The Forever Story by JID go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_the_forever_story",
                "track": 8,
                "title": "Song 8 from The Forever Story",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of The Forever Story by JID go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_the_forever_story",
                "track": 9,
                "title": "Song 9 from The Forever Story",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of The Forever Story by JID go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_the_forever_story",
                "track": 10,
                "title": "Song 10 from The Forever Story",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of The Forever Story by JID go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_19",
        "title": "GUTS",
        "artist": "Olivia Rodrigo",
        "year": "2023",
        "genre": "Pop",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_guts",
                "track": 1,
                "title": "Song 1 from GUTS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of GUTS by Olivia Rodrigo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_guts",
                "track": 2,
                "title": "Song 2 from GUTS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of GUTS by Olivia Rodrigo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_guts",
                "track": 3,
                "title": "Song 3 from GUTS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of GUTS by Olivia Rodrigo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_guts",
                "track": 4,
                "title": "Song 4 from GUTS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of GUTS by Olivia Rodrigo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_guts",
                "track": 5,
                "title": "Song 5 from GUTS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of GUTS by Olivia Rodrigo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_guts",
                "track": 6,
                "title": "Song 6 from GUTS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of GUTS by Olivia Rodrigo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_guts",
                "track": 7,
                "title": "Song 7 from GUTS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of GUTS by Olivia Rodrigo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_guts",
                "track": 8,
                "title": "Song 8 from GUTS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of GUTS by Olivia Rodrigo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_guts",
                "track": 9,
                "title": "Song 9 from GUTS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of GUTS by Olivia Rodrigo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_guts",
                "track": 10,
                "title": "Song 10 from GUTS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of GUTS by Olivia Rodrigo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_20",
        "title": "HOSONO HOUSE",
        "artist": "Haruomi Hosono",
        "year": "1973",
        "genre": "Pop",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_hosono_house",
                "track": 1,
                "title": "Song 1 from HOSONO HOUSE",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of HOSONO HOUSE by Haruomi Hosono go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_hosono_house",
                "track": 2,
                "title": "Song 2 from HOSONO HOUSE",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of HOSONO HOUSE by Haruomi Hosono go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_hosono_house",
                "track": 3,
                "title": "Song 3 from HOSONO HOUSE",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of HOSONO HOUSE by Haruomi Hosono go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_hosono_house",
                "track": 4,
                "title": "Song 4 from HOSONO HOUSE",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of HOSONO HOUSE by Haruomi Hosono go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_hosono_house",
                "track": 5,
                "title": "Song 5 from HOSONO HOUSE",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of HOSONO HOUSE by Haruomi Hosono go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_hosono_house",
                "track": 6,
                "title": "Song 6 from HOSONO HOUSE",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of HOSONO HOUSE by Haruomi Hosono go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_hosono_house",
                "track": 7,
                "title": "Song 7 from HOSONO HOUSE",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of HOSONO HOUSE by Haruomi Hosono go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_hosono_house",
                "track": 8,
                "title": "Song 8 from HOSONO HOUSE",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of HOSONO HOUSE by Haruomi Hosono go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_hosono_house",
                "track": 9,
                "title": "Song 9 from HOSONO HOUSE",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of HOSONO HOUSE by Haruomi Hosono go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_hosono_house",
                "track": 10,
                "title": "Song 10 from HOSONO HOUSE",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of HOSONO HOUSE by Haruomi Hosono go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_21",
        "title": "Plastic Beach",
        "artist": "Gorillaz",
        "year": "2010",
        "genre": "Electronic",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_plastic_beach",
                "track": 1,
                "title": "Song 1 from Plastic Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Plastic Beach by Gorillaz go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_plastic_beach",
                "track": 2,
                "title": "Song 2 from Plastic Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Plastic Beach by Gorillaz go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_plastic_beach",
                "track": 3,
                "title": "Song 3 from Plastic Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Plastic Beach by Gorillaz go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_plastic_beach",
                "track": 4,
                "title": "Song 4 from Plastic Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Plastic Beach by Gorillaz go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_plastic_beach",
                "track": 5,
                "title": "Song 5 from Plastic Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Plastic Beach by Gorillaz go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_plastic_beach",
                "track": 6,
                "title": "Song 6 from Plastic Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Plastic Beach by Gorillaz go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_plastic_beach",
                "track": 7,
                "title": "Song 7 from Plastic Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Plastic Beach by Gorillaz go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_plastic_beach",
                "track": 8,
                "title": "Song 8 from Plastic Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Plastic Beach by Gorillaz go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_plastic_beach",
                "track": 9,
                "title": "Song 9 from Plastic Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Plastic Beach by Gorillaz go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_plastic_beach",
                "track": 10,
                "title": "Song 10 from Plastic Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Plastic Beach by Gorillaz go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_22",
        "title": "Discovery",
        "artist": "Daft Punk",
        "year": "2001",
        "genre": "Electronic",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_discovery",
                "track": 1,
                "title": "Song 1 from Discovery",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Discovery by Daft Punk go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_discovery",
                "track": 2,
                "title": "Song 2 from Discovery",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Discovery by Daft Punk go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_discovery",
                "track": 3,
                "title": "Song 3 from Discovery",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Discovery by Daft Punk go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_discovery",
                "track": 4,
                "title": "Song 4 from Discovery",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Discovery by Daft Punk go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_discovery",
                "track": 5,
                "title": "Song 5 from Discovery",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Discovery by Daft Punk go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_discovery",
                "track": 6,
                "title": "Song 6 from Discovery",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Discovery by Daft Punk go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_discovery",
                "track": 7,
                "title": "Song 7 from Discovery",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Discovery by Daft Punk go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_discovery",
                "track": 8,
                "title": "Song 8 from Discovery",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Discovery by Daft Punk go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_discovery",
                "track": 9,
                "title": "Song 9 from Discovery",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Discovery by Daft Punk go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_discovery",
                "track": 10,
                "title": "Song 10 from Discovery",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Discovery by Daft Punk go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_23",
        "title": "Nevermind",
        "artist": "Nirvana",
        "year": "1991",
        "genre": "Grunge",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_nevermind",
                "track": 1,
                "title": "Song 1 from Nevermind",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Nevermind by Nirvana go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_nevermind",
                "track": 2,
                "title": "Song 2 from Nevermind",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Nevermind by Nirvana go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_nevermind",
                "track": 3,
                "title": "Song 3 from Nevermind",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Nevermind by Nirvana go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_nevermind",
                "track": 4,
                "title": "Song 4 from Nevermind",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Nevermind by Nirvana go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_nevermind",
                "track": 5,
                "title": "Song 5 from Nevermind",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Nevermind by Nirvana go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_nevermind",
                "track": 6,
                "title": "Song 6 from Nevermind",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Nevermind by Nirvana go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_nevermind",
                "track": 7,
                "title": "Song 7 from Nevermind",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Nevermind by Nirvana go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_nevermind",
                "track": 8,
                "title": "Song 8 from Nevermind",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Nevermind by Nirvana go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_nevermind",
                "track": 9,
                "title": "Song 9 from Nevermind",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Nevermind by Nirvana go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_nevermind",
                "track": 10,
                "title": "Song 10 from Nevermind",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Nevermind by Nirvana go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_24",
        "title": "The Dark Side of the Moon",
        "artist": "Pink Floyd",
        "year": "1973",
        "genre": "Prog Rock",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_the_dark_side_of_the_moon",
                "track": 1,
                "title": "Song 1 from The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of The Dark Side of the Moon by Pink Floyd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_the_dark_side_of_the_moon",
                "track": 2,
                "title": "Song 2 from The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of The Dark Side of the Moon by Pink Floyd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_the_dark_side_of_the_moon",
                "track": 3,
                "title": "Song 3 from The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of The Dark Side of the Moon by Pink Floyd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_the_dark_side_of_the_moon",
                "track": 4,
                "title": "Song 4 from The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of The Dark Side of the Moon by Pink Floyd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_the_dark_side_of_the_moon",
                "track": 5,
                "title": "Song 5 from The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of The Dark Side of the Moon by Pink Floyd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_the_dark_side_of_the_moon",
                "track": 6,
                "title": "Song 6 from The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of The Dark Side of the Moon by Pink Floyd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_the_dark_side_of_the_moon",
                "track": 7,
                "title": "Song 7 from The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of The Dark Side of the Moon by Pink Floyd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_the_dark_side_of_the_moon",
                "track": 8,
                "title": "Song 8 from The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of The Dark Side of the Moon by Pink Floyd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_the_dark_side_of_the_moon",
                "track": 9,
                "title": "Song 9 from The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of The Dark Side of the Moon by Pink Floyd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_the_dark_side_of_the_moon",
                "track": 10,
                "title": "Song 10 from The Dark Side of the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of The Dark Side of the Moon by Pink Floyd go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_25",
        "title": "OK Computer",
        "artist": "Radiohead",
        "year": "1997",
        "genre": "Alt Rock",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_ok_computer",
                "track": 1,
                "title": "Song 1 from OK Computer",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of OK Computer by Radiohead go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_ok_computer",
                "track": 2,
                "title": "Song 2 from OK Computer",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of OK Computer by Radiohead go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_ok_computer",
                "track": 3,
                "title": "Song 3 from OK Computer",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of OK Computer by Radiohead go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_ok_computer",
                "track": 4,
                "title": "Song 4 from OK Computer",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of OK Computer by Radiohead go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_ok_computer",
                "track": 5,
                "title": "Song 5 from OK Computer",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of OK Computer by Radiohead go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_ok_computer",
                "track": 6,
                "title": "Song 6 from OK Computer",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of OK Computer by Radiohead go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_ok_computer",
                "track": 7,
                "title": "Song 7 from OK Computer",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of OK Computer by Radiohead go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_ok_computer",
                "track": 8,
                "title": "Song 8 from OK Computer",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of OK Computer by Radiohead go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_ok_computer",
                "track": 9,
                "title": "Song 9 from OK Computer",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of OK Computer by Radiohead go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_ok_computer",
                "track": 10,
                "title": "Song 10 from OK Computer",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of OK Computer by Radiohead go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_26",
        "title": "Born to Die",
        "artist": "Lana Del Rey",
        "year": "2012",
        "genre": "Pop",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_born_to_die",
                "track": 1,
                "title": "Song 1 from Born to Die",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Born to Die by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_born_to_die",
                "track": 2,
                "title": "Song 2 from Born to Die",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Born to Die by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_born_to_die",
                "track": 3,
                "title": "Song 3 from Born to Die",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Born to Die by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_born_to_die",
                "track": 4,
                "title": "Song 4 from Born to Die",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Born to Die by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_born_to_die",
                "track": 5,
                "title": "Song 5 from Born to Die",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Born to Die by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_born_to_die",
                "track": 6,
                "title": "Song 6 from Born to Die",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Born to Die by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_born_to_die",
                "track": 7,
                "title": "Song 7 from Born to Die",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Born to Die by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_born_to_die",
                "track": 8,
                "title": "Song 8 from Born to Die",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Born to Die by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_born_to_die",
                "track": 9,
                "title": "Song 9 from Born to Die",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Born to Die by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_born_to_die",
                "track": 10,
                "title": "Song 10 from Born to Die",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Born to Die by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_27",
        "title": "Channel Orange",
        "artist": "Frank Ocean",
        "year": "2012",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_channel_orange",
                "track": 1,
                "title": "Song 1 from Channel Orange",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Channel Orange by Frank Ocean go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_channel_orange",
                "track": 2,
                "title": "Song 2 from Channel Orange",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Channel Orange by Frank Ocean go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_channel_orange",
                "track": 3,
                "title": "Song 3 from Channel Orange",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Channel Orange by Frank Ocean go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_channel_orange",
                "track": 4,
                "title": "Song 4 from Channel Orange",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Channel Orange by Frank Ocean go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_channel_orange",
                "track": 5,
                "title": "Song 5 from Channel Orange",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Channel Orange by Frank Ocean go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_channel_orange",
                "track": 6,
                "title": "Song 6 from Channel Orange",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Channel Orange by Frank Ocean go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_channel_orange",
                "track": 7,
                "title": "Song 7 from Channel Orange",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Channel Orange by Frank Ocean go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_channel_orange",
                "track": 8,
                "title": "Song 8 from Channel Orange",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Channel Orange by Frank Ocean go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_channel_orange",
                "track": 9,
                "title": "Song 9 from Channel Orange",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Channel Orange by Frank Ocean go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_channel_orange",
                "track": 10,
                "title": "Song 10 from Channel Orange",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Channel Orange by Frank Ocean go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_28",
        "title": "The College Dropout",
        "artist": "Kanye West",
        "year": "2004",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_the_college_dropout",
                "track": 1,
                "title": "Song 1 from The College Dropout",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of The College Dropout by Kanye West go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_the_college_dropout",
                "track": 2,
                "title": "Song 2 from The College Dropout",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of The College Dropout by Kanye West go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_the_college_dropout",
                "track": 3,
                "title": "Song 3 from The College Dropout",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of The College Dropout by Kanye West go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_the_college_dropout",
                "track": 4,
                "title": "Song 4 from The College Dropout",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of The College Dropout by Kanye West go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_the_college_dropout",
                "track": 5,
                "title": "Song 5 from The College Dropout",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of The College Dropout by Kanye West go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_the_college_dropout",
                "track": 6,
                "title": "Song 6 from The College Dropout",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of The College Dropout by Kanye West go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_the_college_dropout",
                "track": 7,
                "title": "Song 7 from The College Dropout",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of The College Dropout by Kanye West go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_the_college_dropout",
                "track": 8,
                "title": "Song 8 from The College Dropout",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of The College Dropout by Kanye West go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_the_college_dropout",
                "track": 9,
                "title": "Song 9 from The College Dropout",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of The College Dropout by Kanye West go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_the_college_dropout",
                "track": 10,
                "title": "Song 10 from The College Dropout",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of The College Dropout by Kanye West go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_29",
        "title": "2014 Forest Hills Drive",
        "artist": "J. Cole",
        "year": "2014",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_2014_forest_hills_drive",
                "track": 1,
                "title": "Song 1 from 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of 2014 Forest Hills Drive by J. Cole go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_2014_forest_hills_drive",
                "track": 2,
                "title": "Song 2 from 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of 2014 Forest Hills Drive by J. Cole go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_2014_forest_hills_drive",
                "track": 3,
                "title": "Song 3 from 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of 2014 Forest Hills Drive by J. Cole go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_2014_forest_hills_drive",
                "track": 4,
                "title": "Song 4 from 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of 2014 Forest Hills Drive by J. Cole go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_2014_forest_hills_drive",
                "track": 5,
                "title": "Song 5 from 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of 2014 Forest Hills Drive by J. Cole go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_2014_forest_hills_drive",
                "track": 6,
                "title": "Song 6 from 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of 2014 Forest Hills Drive by J. Cole go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_2014_forest_hills_drive",
                "track": 7,
                "title": "Song 7 from 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of 2014 Forest Hills Drive by J. Cole go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_2014_forest_hills_drive",
                "track": 8,
                "title": "Song 8 from 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of 2014 Forest Hills Drive by J. Cole go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_2014_forest_hills_drive",
                "track": 9,
                "title": "Song 9 from 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of 2014 Forest Hills Drive by J. Cole go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_2014_forest_hills_drive",
                "track": 10,
                "title": "Song 10 from 2014 Forest Hills Drive",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of 2014 Forest Hills Drive by J. Cole go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_30",
        "title": "good kid, m.A.A.d city",
        "artist": "Kendrick Lamar",
        "year": "2012",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_good_kid,_m.a.a.d_city",
                "track": 1,
                "title": "Song 1 from good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of good kid, m.A.A.d city by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_good_kid,_m.a.a.d_city",
                "track": 2,
                "title": "Song 2 from good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of good kid, m.A.A.d city by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_good_kid,_m.a.a.d_city",
                "track": 3,
                "title": "Song 3 from good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of good kid, m.A.A.d city by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_good_kid,_m.a.a.d_city",
                "track": 4,
                "title": "Song 4 from good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of good kid, m.A.A.d city by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_good_kid,_m.a.a.d_city",
                "track": 5,
                "title": "Song 5 from good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of good kid, m.A.A.d city by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_good_kid,_m.a.a.d_city",
                "track": 6,
                "title": "Song 6 from good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of good kid, m.A.A.d city by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_good_kid,_m.a.a.d_city",
                "track": 7,
                "title": "Song 7 from good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of good kid, m.A.A.d city by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_good_kid,_m.a.a.d_city",
                "track": 8,
                "title": "Song 8 from good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of good kid, m.A.A.d city by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_good_kid,_m.a.a.d_city",
                "track": 9,
                "title": "Song 9 from good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of good kid, m.A.A.d city by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_good_kid,_m.a.a.d_city",
                "track": 10,
                "title": "Song 10 from good kid, m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of good kid, m.A.A.d city by Kendrick Lamar go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_31",
        "title": "French Exit",
        "artist": "TV Girl",
        "year": "2014",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_french_exit",
                "track": 1,
                "title": "Song 1 from French Exit",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of French Exit by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_french_exit",
                "track": 2,
                "title": "Song 2 from French Exit",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of French Exit by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_french_exit",
                "track": 3,
                "title": "Song 3 from French Exit",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of French Exit by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_french_exit",
                "track": 4,
                "title": "Song 4 from French Exit",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of French Exit by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_french_exit",
                "track": 5,
                "title": "Song 5 from French Exit",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of French Exit by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_french_exit",
                "track": 6,
                "title": "Song 6 from French Exit",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of French Exit by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_french_exit",
                "track": 7,
                "title": "Song 7 from French Exit",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of French Exit by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_french_exit",
                "track": 8,
                "title": "Song 8 from French Exit",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of French Exit by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_french_exit",
                "track": 9,
                "title": "Song 9 from French Exit",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of French Exit by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_french_exit",
                "track": 10,
                "title": "Song 10 from French Exit",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of French Exit by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_32",
        "title": "Who Really Cares",
        "artist": "TV Girl",
        "year": "2016",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_who_really_cares",
                "track": 1,
                "title": "Song 1 from Who Really Cares",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Who Really Cares by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_who_really_cares",
                "track": 2,
                "title": "Song 2 from Who Really Cares",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Who Really Cares by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_who_really_cares",
                "track": 3,
                "title": "Song 3 from Who Really Cares",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Who Really Cares by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_who_really_cares",
                "track": 4,
                "title": "Song 4 from Who Really Cares",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Who Really Cares by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_who_really_cares",
                "track": 5,
                "title": "Song 5 from Who Really Cares",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Who Really Cares by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_who_really_cares",
                "track": 6,
                "title": "Song 6 from Who Really Cares",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Who Really Cares by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_who_really_cares",
                "track": 7,
                "title": "Song 7 from Who Really Cares",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Who Really Cares by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_who_really_cares",
                "track": 8,
                "title": "Song 8 from Who Really Cares",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Who Really Cares by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_who_really_cares",
                "track": 9,
                "title": "Song 9 from Who Really Cares",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Who Really Cares by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_who_really_cares",
                "track": 10,
                "title": "Song 10 from Who Really Cares",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Who Really Cares by TV Girl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_33",
        "title": "Salad Days",
        "artist": "Mac DeMarco",
        "year": "2014",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_salad_days",
                "track": 1,
                "title": "Song 1 from Salad Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Salad Days by Mac DeMarco go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_salad_days",
                "track": 2,
                "title": "Song 2 from Salad Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Salad Days by Mac DeMarco go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_salad_days",
                "track": 3,
                "title": "Song 3 from Salad Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Salad Days by Mac DeMarco go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_salad_days",
                "track": 4,
                "title": "Song 4 from Salad Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Salad Days by Mac DeMarco go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_salad_days",
                "track": 5,
                "title": "Song 5 from Salad Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Salad Days by Mac DeMarco go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_salad_days",
                "track": 6,
                "title": "Song 6 from Salad Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Salad Days by Mac DeMarco go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_salad_days",
                "track": 7,
                "title": "Song 7 from Salad Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Salad Days by Mac DeMarco go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_salad_days",
                "track": 8,
                "title": "Song 8 from Salad Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Salad Days by Mac DeMarco go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_salad_days",
                "track": 9,
                "title": "Song 9 from Salad Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Salad Days by Mac DeMarco go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_salad_days",
                "track": 10,
                "title": "Song 10 from Salad Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Salad Days by Mac DeMarco go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_34",
        "title": "The Slow Rush",
        "artist": "Tame Impala",
        "year": "2020",
        "genre": "Indie",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_the_slow_rush",
                "track": 1,
                "title": "Song 1 from The Slow Rush",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of The Slow Rush by Tame Impala go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_the_slow_rush",
                "track": 2,
                "title": "Song 2 from The Slow Rush",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of The Slow Rush by Tame Impala go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_the_slow_rush",
                "track": 3,
                "title": "Song 3 from The Slow Rush",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of The Slow Rush by Tame Impala go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_the_slow_rush",
                "track": 4,
                "title": "Song 4 from The Slow Rush",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of The Slow Rush by Tame Impala go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_the_slow_rush",
                "track": 5,
                "title": "Song 5 from The Slow Rush",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of The Slow Rush by Tame Impala go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_the_slow_rush",
                "track": 6,
                "title": "Song 6 from The Slow Rush",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of The Slow Rush by Tame Impala go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_the_slow_rush",
                "track": 7,
                "title": "Song 7 from The Slow Rush",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of The Slow Rush by Tame Impala go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_the_slow_rush",
                "track": 8,
                "title": "Song 8 from The Slow Rush",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of The Slow Rush by Tame Impala go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_the_slow_rush",
                "track": 9,
                "title": "Song 9 from The Slow Rush",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of The Slow Rush by Tame Impala go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_the_slow_rush",
                "track": 10,
                "title": "Song 10 from The Slow Rush",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of The Slow Rush by Tame Impala go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_35",
        "title": "SOS",
        "artist": "SZA",
        "year": "2022",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_sos",
                "track": 1,
                "title": "Song 1 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_sos",
                "track": 2,
                "title": "Song 2 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_sos",
                "track": 3,
                "title": "Song 3 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_sos",
                "track": 4,
                "title": "Song 4 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_sos",
                "track": 5,
                "title": "Song 5 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_sos",
                "track": 6,
                "title": "Song 6 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_sos",
                "track": 7,
                "title": "Song 7 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_sos",
                "track": 8,
                "title": "Song 8 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_sos",
                "track": 9,
                "title": "Song 9 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_sos",
                "track": 10,
                "title": "Song 10 from SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of SOS by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_36",
        "title": "Ctrl",
        "artist": "SZA",
        "year": "2017",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_ctrl",
                "track": 1,
                "title": "Song 1 from Ctrl",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Ctrl by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_ctrl",
                "track": 2,
                "title": "Song 2 from Ctrl",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Ctrl by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_ctrl",
                "track": 3,
                "title": "Song 3 from Ctrl",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Ctrl by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_ctrl",
                "track": 4,
                "title": "Song 4 from Ctrl",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Ctrl by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_ctrl",
                "track": 5,
                "title": "Song 5 from Ctrl",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Ctrl by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_ctrl",
                "track": 6,
                "title": "Song 6 from Ctrl",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Ctrl by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_ctrl",
                "track": 7,
                "title": "Song 7 from Ctrl",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Ctrl by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_ctrl",
                "track": 8,
                "title": "Song 8 from Ctrl",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Ctrl by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_ctrl",
                "track": 9,
                "title": "Song 9 from Ctrl",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Ctrl by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_ctrl",
                "track": 10,
                "title": "Song 10 from Ctrl",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Ctrl by SZA go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_37",
        "title": "Take Care",
        "artist": "Drake",
        "year": "2011",
        "genre": "R&B/Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_take_care",
                "track": 1,
                "title": "Song 1 from Take Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Take Care by Drake go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_take_care",
                "track": 2,
                "title": "Song 2 from Take Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Take Care by Drake go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_take_care",
                "track": 3,
                "title": "Song 3 from Take Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Take Care by Drake go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_take_care",
                "track": 4,
                "title": "Song 4 from Take Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Take Care by Drake go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_take_care",
                "track": 5,
                "title": "Song 5 from Take Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Take Care by Drake go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_take_care",
                "track": 6,
                "title": "Song 6 from Take Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Take Care by Drake go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_take_care",
                "track": 7,
                "title": "Song 7 from Take Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Take Care by Drake go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_take_care",
                "track": 8,
                "title": "Song 8 from Take Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Take Care by Drake go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_take_care",
                "track": 9,
                "title": "Song 9 from Take Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Take Care by Drake go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_take_care",
                "track": 10,
                "title": "Song 10 from Take Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Take Care by Drake go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_38",
        "title": "Rodeo",
        "artist": "Travis Scott",
        "year": "2015",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_rodeo",
                "track": 1,
                "title": "Song 1 from Rodeo",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Rodeo by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_rodeo",
                "track": 2,
                "title": "Song 2 from Rodeo",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Rodeo by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_rodeo",
                "track": 3,
                "title": "Song 3 from Rodeo",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Rodeo by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_rodeo",
                "track": 4,
                "title": "Song 4 from Rodeo",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Rodeo by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_rodeo",
                "track": 5,
                "title": "Song 5 from Rodeo",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Rodeo by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_rodeo",
                "track": 6,
                "title": "Song 6 from Rodeo",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Rodeo by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_rodeo",
                "track": 7,
                "title": "Song 7 from Rodeo",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Rodeo by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_rodeo",
                "track": 8,
                "title": "Song 8 from Rodeo",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Rodeo by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_rodeo",
                "track": 9,
                "title": "Song 9 from Rodeo",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Rodeo by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_rodeo",
                "track": 10,
                "title": "Song 10 from Rodeo",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Rodeo by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_39",
        "title": "Utopia",
        "artist": "Travis Scott",
        "year": "2023",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_utopia",
                "track": 1,
                "title": "Song 1 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_utopia",
                "track": 2,
                "title": "Song 2 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_utopia",
                "track": 3,
                "title": "Song 3 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_utopia",
                "track": 4,
                "title": "Song 4 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_utopia",
                "track": 5,
                "title": "Song 5 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_utopia",
                "track": 6,
                "title": "Song 6 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_utopia",
                "track": 7,
                "title": "Song 7 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_utopia",
                "track": 8,
                "title": "Song 8 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_utopia",
                "track": 9,
                "title": "Song 9 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_utopia",
                "track": 10,
                "title": "Song 10 from Utopia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Utopia by Travis Scott go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_40",
        "title": "Norman Fucking Rockwell!",
        "artist": "Lana Del Rey",
        "year": "2019",
        "genre": "Pop",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_norman_fucking_rockwell!",
                "track": 1,
                "title": "Song 1 from Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Norman Fucking Rockwell! by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_norman_fucking_rockwell!",
                "track": 2,
                "title": "Song 2 from Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Norman Fucking Rockwell! by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_norman_fucking_rockwell!",
                "track": 3,
                "title": "Song 3 from Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Norman Fucking Rockwell! by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_norman_fucking_rockwell!",
                "track": 4,
                "title": "Song 4 from Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Norman Fucking Rockwell! by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_norman_fucking_rockwell!",
                "track": 5,
                "title": "Song 5 from Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Norman Fucking Rockwell! by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_norman_fucking_rockwell!",
                "track": 6,
                "title": "Song 6 from Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Norman Fucking Rockwell! by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_norman_fucking_rockwell!",
                "track": 7,
                "title": "Song 7 from Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Norman Fucking Rockwell! by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_norman_fucking_rockwell!",
                "track": 8,
                "title": "Song 8 from Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Norman Fucking Rockwell! by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_norman_fucking_rockwell!",
                "track": 9,
                "title": "Song 9 from Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Norman Fucking Rockwell! by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_norman_fucking_rockwell!",
                "track": 10,
                "title": "Song 10 from Norman Fucking Rockwell!",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Norman Fucking Rockwell! by Lana Del Rey go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_41",
        "title": "Future Nostalgia",
        "artist": "Dua Lipa",
        "year": "2020",
        "genre": "Disco-Pop",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_future_nostalgia",
                "track": 1,
                "title": "Song 1 from Future Nostalgia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Future Nostalgia by Dua Lipa go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_future_nostalgia",
                "track": 2,
                "title": "Song 2 from Future Nostalgia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Future Nostalgia by Dua Lipa go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_future_nostalgia",
                "track": 3,
                "title": "Song 3 from Future Nostalgia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Future Nostalgia by Dua Lipa go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_future_nostalgia",
                "track": 4,
                "title": "Song 4 from Future Nostalgia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Future Nostalgia by Dua Lipa go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_future_nostalgia",
                "track": 5,
                "title": "Song 5 from Future Nostalgia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Future Nostalgia by Dua Lipa go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_future_nostalgia",
                "track": 6,
                "title": "Song 6 from Future Nostalgia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Future Nostalgia by Dua Lipa go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_future_nostalgia",
                "track": 7,
                "title": "Song 7 from Future Nostalgia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Future Nostalgia by Dua Lipa go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_future_nostalgia",
                "track": 8,
                "title": "Song 8 from Future Nostalgia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Future Nostalgia by Dua Lipa go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_future_nostalgia",
                "track": 9,
                "title": "Song 9 from Future Nostalgia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Future Nostalgia by Dua Lipa go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_future_nostalgia",
                "track": 10,
                "title": "Song 10 from Future Nostalgia",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Future Nostalgia by Dua Lipa go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_42",
        "title": "Anti",
        "artist": "Rihanna",
        "year": "2016",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_anti",
                "track": 1,
                "title": "Song 1 from Anti",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Anti by Rihanna go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_anti",
                "track": 2,
                "title": "Song 2 from Anti",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Anti by Rihanna go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_anti",
                "track": 3,
                "title": "Song 3 from Anti",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Anti by Rihanna go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_anti",
                "track": 4,
                "title": "Song 4 from Anti",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Anti by Rihanna go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_anti",
                "track": 5,
                "title": "Song 5 from Anti",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Anti by Rihanna go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_anti",
                "track": 6,
                "title": "Song 6 from Anti",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Anti by Rihanna go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_anti",
                "track": 7,
                "title": "Song 7 from Anti",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Anti by Rihanna go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_anti",
                "track": 8,
                "title": "Song 8 from Anti",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Anti by Rihanna go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_anti",
                "track": 9,
                "title": "Song 9 from Anti",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Anti by Rihanna go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_anti",
                "track": 10,
                "title": "Song 10 from Anti",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Anti by Rihanna go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_43",
        "title": "Man on the Moon",
        "artist": "Kid Cudi",
        "year": "2009",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_man_on_the_moon",
                "track": 1,
                "title": "Song 1 from Man on the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Man on the Moon by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_man_on_the_moon",
                "track": 2,
                "title": "Song 2 from Man on the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Man on the Moon by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_man_on_the_moon",
                "track": 3,
                "title": "Song 3 from Man on the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Man on the Moon by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_man_on_the_moon",
                "track": 4,
                "title": "Song 4 from Man on the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Man on the Moon by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_man_on_the_moon",
                "track": 5,
                "title": "Song 5 from Man on the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Man on the Moon by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_man_on_the_moon",
                "track": 6,
                "title": "Song 6 from Man on the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Man on the Moon by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_man_on_the_moon",
                "track": 7,
                "title": "Song 7 from Man on the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Man on the Moon by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_man_on_the_moon",
                "track": 8,
                "title": "Song 8 from Man on the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Man on the Moon by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_man_on_the_moon",
                "track": 9,
                "title": "Song 9 from Man on the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Man on the Moon by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_man_on_the_moon",
                "track": 10,
                "title": "Song 10 from Man on the Moon",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Man on the Moon by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_44",
        "title": "Circles",
        "artist": "Mac Miller",
        "year": "2020",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_circles",
                "track": 1,
                "title": "Song 1 from Circles",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Circles by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_circles",
                "track": 2,
                "title": "Song 2 from Circles",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Circles by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_circles",
                "track": 3,
                "title": "Song 3 from Circles",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Circles by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_circles",
                "track": 4,
                "title": "Song 4 from Circles",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Circles by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_circles",
                "track": 5,
                "title": "Song 5 from Circles",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Circles by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_circles",
                "track": 6,
                "title": "Song 6 from Circles",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Circles by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_circles",
                "track": 7,
                "title": "Song 7 from Circles",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Circles by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_circles",
                "track": 8,
                "title": "Song 8 from Circles",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Circles by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_circles",
                "track": 9,
                "title": "Song 9 from Circles",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Circles by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_circles",
                "track": 10,
                "title": "Song 10 from Circles",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Circles by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_45",
        "title": "Swimming",
        "artist": "Mac Miller",
        "year": "2018",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_swimming",
                "track": 1,
                "title": "Song 1 from Swimming",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Swimming by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_swimming",
                "track": 2,
                "title": "Song 2 from Swimming",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Swimming by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_swimming",
                "track": 3,
                "title": "Song 3 from Swimming",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Swimming by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_swimming",
                "track": 4,
                "title": "Song 4 from Swimming",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Swimming by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_swimming",
                "track": 5,
                "title": "Song 5 from Swimming",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Swimming by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_swimming",
                "track": 6,
                "title": "Song 6 from Swimming",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Swimming by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_swimming",
                "track": 7,
                "title": "Song 7 from Swimming",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Swimming by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_swimming",
                "track": 8,
                "title": "Song 8 from Swimming",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Swimming by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_swimming",
                "track": 9,
                "title": "Song 9 from Swimming",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Swimming by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_swimming",
                "track": 10,
                "title": "Song 10 from Swimming",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Swimming by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_46",
        "title": "Man On The Moon III",
        "artist": "Kid Cudi",
        "year": "2020",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_man_on_the_moon_iii",
                "track": 1,
                "title": "Song 1 from Man On The Moon III",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Man On The Moon III by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_man_on_the_moon_iii",
                "track": 2,
                "title": "Song 2 from Man On The Moon III",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Man On The Moon III by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_man_on_the_moon_iii",
                "track": 3,
                "title": "Song 3 from Man On The Moon III",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Man On The Moon III by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_man_on_the_moon_iii",
                "track": 4,
                "title": "Song 4 from Man On The Moon III",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Man On The Moon III by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_man_on_the_moon_iii",
                "track": 5,
                "title": "Song 5 from Man On The Moon III",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Man On The Moon III by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_man_on_the_moon_iii",
                "track": 6,
                "title": "Song 6 from Man On The Moon III",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Man On The Moon III by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_man_on_the_moon_iii",
                "track": 7,
                "title": "Song 7 from Man On The Moon III",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Man On The Moon III by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_man_on_the_moon_iii",
                "track": 8,
                "title": "Song 8 from Man On The Moon III",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Man On The Moon III by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_man_on_the_moon_iii",
                "track": 9,
                "title": "Song 9 from Man On The Moon III",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Man On The Moon III by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_man_on_the_moon_iii",
                "track": 10,
                "title": "Song 10 from Man On The Moon III",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Man On The Moon III by Kid Cudi go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_47",
        "title": "Heroes & Villains",
        "artist": "Metro Boomin",
        "year": "2022",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1459749411177-042180ceea72?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_heroes_&_villains",
                "track": 1,
                "title": "Song 1 from Heroes & Villains",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Heroes & Villains by Metro Boomin go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_heroes_&_villains",
                "track": 2,
                "title": "Song 2 from Heroes & Villains",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Heroes & Villains by Metro Boomin go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_heroes_&_villains",
                "track": 3,
                "title": "Song 3 from Heroes & Villains",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Heroes & Villains by Metro Boomin go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_heroes_&_villains",
                "track": 4,
                "title": "Song 4 from Heroes & Villains",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Heroes & Villains by Metro Boomin go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_heroes_&_villains",
                "track": 5,
                "title": "Song 5 from Heroes & Villains",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Heroes & Villains by Metro Boomin go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_heroes_&_villains",
                "track": 6,
                "title": "Song 6 from Heroes & Villains",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Heroes & Villains by Metro Boomin go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_heroes_&_villains",
                "track": 7,
                "title": "Song 7 from Heroes & Villains",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Heroes & Villains by Metro Boomin go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_heroes_&_villains",
                "track": 8,
                "title": "Song 8 from Heroes & Villains",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Heroes & Villains by Metro Boomin go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_heroes_&_villains",
                "track": 9,
                "title": "Song 9 from Heroes & Villains",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Heroes & Villains by Metro Boomin go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_heroes_&_villains",
                "track": 10,
                "title": "Song 10 from Heroes & Villains",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Heroes & Villains by Metro Boomin go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_48",
        "title": "Savage Mode II",
        "artist": "21 Savage",
        "year": "2020",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1514525253361-bee8718a300c?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_savage_mode_ii",
                "track": 1,
                "title": "Song 1 from Savage Mode II",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Savage Mode II by 21 Savage go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_savage_mode_ii",
                "track": 2,
                "title": "Song 2 from Savage Mode II",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Savage Mode II by 21 Savage go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_savage_mode_ii",
                "track": 3,
                "title": "Song 3 from Savage Mode II",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Savage Mode II by 21 Savage go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_savage_mode_ii",
                "track": 4,
                "title": "Song 4 from Savage Mode II",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Savage Mode II by 21 Savage go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_savage_mode_ii",
                "track": 5,
                "title": "Song 5 from Savage Mode II",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Savage Mode II by 21 Savage go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_savage_mode_ii",
                "track": 6,
                "title": "Song 6 from Savage Mode II",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Savage Mode II by 21 Savage go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_savage_mode_ii",
                "track": 7,
                "title": "Song 7 from Savage Mode II",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Savage Mode II by 21 Savage go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_savage_mode_ii",
                "track": 8,
                "title": "Song 8 from Savage Mode II",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Savage Mode II by 21 Savage go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_savage_mode_ii",
                "track": 9,
                "title": "Song 9 from Savage Mode II",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Savage Mode II by 21 Savage go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_savage_mode_ii",
                "track": 10,
                "title": "Song 10 from Savage Mode II",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Savage Mode II by 21 Savage go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_49",
        "title": "The Divine Feminine",
        "artist": "Mac Miller",
        "year": "2016",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_the_divine_feminine",
                "track": 1,
                "title": "Song 1 from The Divine Feminine",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of The Divine Feminine by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_the_divine_feminine",
                "track": 2,
                "title": "Song 2 from The Divine Feminine",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of The Divine Feminine by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_the_divine_feminine",
                "track": 3,
                "title": "Song 3 from The Divine Feminine",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of The Divine Feminine by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_the_divine_feminine",
                "track": 4,
                "title": "Song 4 from The Divine Feminine",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of The Divine Feminine by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_the_divine_feminine",
                "track": 5,
                "title": "Song 5 from The Divine Feminine",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of The Divine Feminine by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_the_divine_feminine",
                "track": 6,
                "title": "Song 6 from The Divine Feminine",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of The Divine Feminine by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_the_divine_feminine",
                "track": 7,
                "title": "Song 7 from The Divine Feminine",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of The Divine Feminine by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_the_divine_feminine",
                "track": 8,
                "title": "Song 8 from The Divine Feminine",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of The Divine Feminine by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_the_divine_feminine",
                "track": 9,
                "title": "Song 9 from The Divine Feminine",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of The Divine Feminine by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_the_divine_feminine",
                "track": 10,
                "title": "Song 10 from The Divine Feminine",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of The Divine Feminine by Mac Miller go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_50",
        "title": "Free 6LACK",
        "artist": "6LACK",
        "year": "2016",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_song_1_from_free_6lack",
                "track": 1,
                "title": "Song 1 from Free 6LACK",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 1 of Free 6LACK by 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 1.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 1",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_2_from_free_6lack",
                "track": 2,
                "title": "Song 2 from Free 6LACK",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 2 of Free 6LACK by 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 2.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 2",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_3_from_free_6lack",
                "track": 3,
                "title": "Song 3 from Free 6LACK",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 3 of Free 6LACK by 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 3.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 3",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_4_from_free_6lack",
                "track": 4,
                "title": "Song 4 from Free 6LACK",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 4 of Free 6LACK by 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 4.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 4",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_5_from_free_6lack",
                "track": 5,
                "title": "Song 5 from Free 6LACK",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 5 of Free 6LACK by 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 5.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 5",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_6_from_free_6lack",
                "track": 6,
                "title": "Song 6 from Free 6LACK",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 6 of Free 6LACK by 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 6.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 6",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_7_from_free_6lack",
                "track": 7,
                "title": "Song 7 from Free 6LACK",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 7 of Free 6LACK by 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 7.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 7",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_8_from_free_6lack",
                "track": 8,
                "title": "Song 8 from Free 6LACK",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 8 of Free 6LACK by 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 8.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 8",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_9_from_free_6lack",
                "track": 9,
                "title": "Song 9 from Free 6LACK",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 9 of Free 6LACK by 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 9.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 9",
                        "explanation": "A key thematic opening."
                    }
                ]
            },
            {
                "id": "s_song_10_from_free_6lack",
                "track": 10,
                "title": "Song 10 from Free 6LACK",
                "duration": "3:30",
                "lyrics": "Full lyrics for track 10 of Free 6LACK by 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into track 10.",
                "themes": [
                    "Theme"
                ],
                "mood": [
                    "Chill"
                ],
                "key_lines": [
                    {
                        "line": "Full lyrics for track 10",
                        "explanation": "A key thematic opening."
                    }
                ]
            }
        ]
    }
];

const Storage = {
    init() {
        if (!localStorage.getItem(STORAGE_KEYS.STARTER_INITIALIZED)) {
            localStorage.setItem(STORAGE_KEYS.REVIEWS_ALBUMS, JSON.stringify([]));
            localStorage.setItem(STORAGE_KEYS.REVIEWS_SONGS, JSON.stringify([]));
            localStorage.setItem(STORAGE_KEYS.FAVORITES_ALBUMS, JSON.stringify([]));
            localStorage.setItem(STORAGE_KEYS.FAVORITES_SONGS, JSON.stringify([]));
            localStorage.setItem(STORAGE_KEYS.STARTER_INITIALIZED, 'true');
        }
    },

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
        const reviews = this.getSongReviews();
        const index = reviews.findIndex(r => r.songId === review.songId);
        const data = { ...review, date: new Date().toISOString() };
        if (index !== -1) reviews[index] = data;
        else reviews.push(data);
        localStorage.setItem(STORAGE_KEYS.REVIEWS_SONGS, JSON.stringify(reviews));
    },

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
