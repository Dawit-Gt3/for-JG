const STORAGE_KEYS = {
    REVIEWS_ALBUMS: 'sonic_critique_reviews_albums',
    REVIEWS_SONGS: 'sonic_critique_reviews_songs',
    FAVORITES_ALBUMS: 'sonic_critique_favorites_albums',
    FAVORITES_SONGS: 'sonic_critique_favorites_songs',
    STARTER_INITIALIZED: 'sonic_critique_initialized_v5',
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
        "cover": "https://images.unsplash.com/photo-1600000000000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_after_hours_1",
                "track": 1,
                "title": "Alone Again",
                "duration": "3:30",
                "lyrics": "Take off my disguise\nI'm living someone else's life\nSuppressing who I was inside\nSo I can tell her I'm fine\nI'm living a lie",
                "interpretation": "A heavy opener about the identity crisis that comes with fame.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Take off my disguise",
                        "explanation": "The Weeknd acknowledging his stage persona vs Abel."
                    }
                ]
            },
            {
                "id": "s_after_hours_2",
                "track": 2,
                "title": "Too Late",
                "duration": "3:30",
                "lyrics": "Full lyrics for Too Late by The Weeknd from the album After Hours go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Too Late.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Too Late",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_after_hours_3",
                "track": 3,
                "title": "Hardest To Love",
                "duration": "3:30",
                "lyrics": "Full lyrics for Hardest To Love by The Weeknd from the album After Hours go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Hardest To Love.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Hardest To Love",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_after_hours_4",
                "track": 4,
                "title": "Scared To Live",
                "duration": "3:30",
                "lyrics": "Full lyrics for Scared To Live by The Weeknd from the album After Hours go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Scared To Live.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Scared To Live",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_after_hours_5",
                "track": 5,
                "title": "Snowchild",
                "duration": "3:30",
                "lyrics": "Full lyrics for Snowchild by The Weeknd from the album After Hours go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Snowchild.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Snowchild",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_after_hours_6",
                "track": 6,
                "title": "Escape From LA",
                "duration": "3:30",
                "lyrics": "Full lyrics for Escape From LA by The Weeknd from the album After Hours go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Escape From LA.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Escape From LA",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_after_hours_7",
                "track": 7,
                "title": "Heartless",
                "duration": "3:30",
                "lyrics": "Full lyrics for Heartless by The Weeknd from the album After Hours go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Heartless.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Heartless",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_after_hours_8",
                "track": 8,
                "title": "Faith",
                "duration": "3:30",
                "lyrics": "Full lyrics for Faith by The Weeknd from the album After Hours go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Faith.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Faith",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_after_hours_9",
                "track": 9,
                "title": "Blinding Lights",
                "duration": "3:30",
                "lyrics": "I've been on my own for long enough\nMaybe you can show me how to love, maybe\nI'm going through withdrawals\nYou don't even have to do too much\nYou can turn me on with just a touch, baby\n\nI look around and Sin City's cold and empty\nNo one's around to judge me\nI can't see clearly when you're gone",
                "interpretation": "An 80s-inspired anthem about the rush and dependency of a high-speed relationship.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Blinding Lights",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_after_hours_10",
                "track": 10,
                "title": "In Your Eyes",
                "duration": "3:30",
                "lyrics": "Full lyrics for In Your Eyes by The Weeknd from the album After Hours go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of In Your Eyes.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from In Your Eyes",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_after_hours_11",
                "track": 11,
                "title": "Save Your Tears",
                "duration": "3:30",
                "lyrics": "Full lyrics for Save Your Tears by The Weeknd from the album After Hours go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Save Your Tears.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Save Your Tears",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_after_hours_12",
                "track": 12,
                "title": "Repeat After Me (Interlude)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Repeat After Me (Interlude) by The Weeknd from the album After Hours go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Repeat After Me (Interlude).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Repeat After Me (Interlude)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_after_hours_13",
                "track": 13,
                "title": "After Hours",
                "duration": "3:30",
                "lyrics": "Full lyrics for After Hours by The Weeknd from the album After Hours go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of After Hours.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from After Hours",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_after_hours_14",
                "track": 14,
                "title": "Until I Bleed Out",
                "duration": "3:30",
                "lyrics": "Full lyrics for Until I Bleed Out by The Weeknd from the album After Hours go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Until I Bleed Out.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Until I Bleed Out",
                        "explanation": "Analysis of the theme."
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
        "genre": "Hip-Hop/Soul",
        "cover": "https://images.unsplash.com/photo-1600000100000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_igor_1",
                "track": 1,
                "title": "IGOR'S THEME",
                "duration": "3:30",
                "lyrics": "Full lyrics for IGOR'S THEME by Tyler, The Creator from the album IGOR go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of IGOR'S THEME.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from IGOR'S THEME",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_igor_2",
                "track": 2,
                "title": "EARFQUAKE",
                "duration": "3:30",
                "lyrics": "Full lyrics for EARFQUAKE by Tyler, The Creator from the album IGOR go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of EARFQUAKE.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from EARFQUAKE",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_igor_3",
                "track": 3,
                "title": "I THINK",
                "duration": "3:30",
                "lyrics": "Full lyrics for I THINK by Tyler, The Creator from the album IGOR go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I THINK.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I THINK",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_igor_4",
                "track": 4,
                "title": "EXACTLY WHAT YOU RUN FROM YOU END UP CHASING",
                "duration": "3:30",
                "lyrics": "Full lyrics for EXACTLY WHAT YOU RUN FROM YOU END UP CHASING by Tyler, The Creator from the album IGOR go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of EXACTLY WHAT YOU RUN FROM YOU END UP CHASING.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from EXACTLY WHAT YOU RUN FROM YOU END UP CHASING",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_igor_5",
                "track": 5,
                "title": "RUNNING OUT OF TIME",
                "duration": "3:30",
                "lyrics": "Full lyrics for RUNNING OUT OF TIME by Tyler, The Creator from the album IGOR go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of RUNNING OUT OF TIME.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from RUNNING OUT OF TIME",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_igor_6",
                "track": 6,
                "title": "NEW MAGIC WAND",
                "duration": "3:30",
                "lyrics": "Full lyrics for NEW MAGIC WAND by Tyler, The Creator from the album IGOR go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of NEW MAGIC WAND.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from NEW MAGIC WAND",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_igor_7",
                "track": 7,
                "title": "A BOY IS A GUN*",
                "duration": "3:30",
                "lyrics": "Full lyrics for A BOY IS A GUN* by Tyler, The Creator from the album IGOR go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of A BOY IS A GUN*.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from A BOY IS A GUN*",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_igor_8",
                "track": 8,
                "title": "PUPPET",
                "duration": "3:30",
                "lyrics": "Full lyrics for PUPPET by Tyler, The Creator from the album IGOR go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of PUPPET.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from PUPPET",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_igor_9",
                "track": 9,
                "title": "WHAT'S GOOD",
                "duration": "3:30",
                "lyrics": "Full lyrics for WHAT'S GOOD by Tyler, The Creator from the album IGOR go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of WHAT'S GOOD.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from WHAT'S GOOD",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_igor_10",
                "track": 10,
                "title": "GONE, GONE / THANK YOU",
                "duration": "3:30",
                "lyrics": "Full lyrics for GONE, GONE / THANK YOU by Tyler, The Creator from the album IGOR go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of GONE, GONE / THANK YOU.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from GONE, GONE / THANK YOU",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_igor_11",
                "track": 11,
                "title": "I DON'T LOVE YOU ANYMORE",
                "duration": "3:30",
                "lyrics": "Full lyrics for I DON'T LOVE YOU ANYMORE by Tyler, The Creator from the album IGOR go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I DON'T LOVE YOU ANYMORE.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I DON'T LOVE YOU ANYMORE",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_igor_12",
                "track": 12,
                "title": "ARE WE STILL FRIENDS?",
                "duration": "3:30",
                "lyrics": "Full lyrics for ARE WE STILL FRIENDS? by Tyler, The Creator from the album IGOR go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of ARE WE STILL FRIENDS?.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from ARE WE STILL FRIENDS?",
                        "explanation": "Analysis of the theme."
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
        "genre": "R&B/Experimental",
        "cover": "https://images.unsplash.com/photo-1600000200000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_blonde_1",
                "track": 1,
                "title": "Nikes",
                "duration": "3:30",
                "lyrics": "Full lyrics for Nikes by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Nikes.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Nikes",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_2",
                "track": 2,
                "title": "Ivy",
                "duration": "3:30",
                "lyrics": "Full lyrics for Ivy by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Ivy.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Ivy",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_3",
                "track": 3,
                "title": "Pink + White",
                "duration": "3:30",
                "lyrics": "Full lyrics for Pink + White by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Pink + White.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Pink + White",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_4",
                "track": 4,
                "title": "Be Yourself",
                "duration": "3:30",
                "lyrics": "Full lyrics for Be Yourself by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Be Yourself.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Be Yourself",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_5",
                "track": 5,
                "title": "Solo",
                "duration": "3:30",
                "lyrics": "Full lyrics for Solo by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Solo.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Solo",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_6",
                "track": 6,
                "title": "Skyline To",
                "duration": "3:30",
                "lyrics": "Full lyrics for Skyline To by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Skyline To.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Skyline To",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_7",
                "track": 7,
                "title": "Self Control",
                "duration": "3:30",
                "lyrics": "Full lyrics for Self Control by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Self Control.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Self Control",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_8",
                "track": 8,
                "title": "Good Guy",
                "duration": "3:30",
                "lyrics": "Full lyrics for Good Guy by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Good Guy.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Good Guy",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_9",
                "track": 9,
                "title": "Night.s",
                "duration": "3:30",
                "lyrics": "Full lyrics for Night.s by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Night.s.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Night.s",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_10",
                "track": 10,
                "title": "Solo (Reprise)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Solo (Reprise) by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Solo (Reprise).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Solo (Reprise)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_11",
                "track": 11,
                "title": "Pretty Sweet",
                "duration": "3:30",
                "lyrics": "Full lyrics for Pretty Sweet by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Pretty Sweet.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Pretty Sweet",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_12",
                "track": 12,
                "title": "Facebook Story",
                "duration": "3:30",
                "lyrics": "Full lyrics for Facebook Story by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Facebook Story.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Facebook Story",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_13",
                "track": 13,
                "title": "Close to You",
                "duration": "3:30",
                "lyrics": "Full lyrics for Close to You by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Close to You.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Close to You",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_14",
                "track": 14,
                "title": "White Ferrari",
                "duration": "3:30",
                "lyrics": "Full lyrics for White Ferrari by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of White Ferrari.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from White Ferrari",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_15",
                "track": 15,
                "title": "Seigfried",
                "duration": "3:30",
                "lyrics": "Full lyrics for Seigfried by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Seigfried.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Seigfried",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_16",
                "track": 16,
                "title": "Godspeed",
                "duration": "3:30",
                "lyrics": "Full lyrics for Godspeed by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Godspeed.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Godspeed",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_blonde_17",
                "track": 17,
                "title": "Futura Free",
                "duration": "3:30",
                "lyrics": "Full lyrics for Futura Free by Frank Ocean from the album Blonde go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Futura Free.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Futura Free",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_4",
        "title": "To Pimp a Butterfly",
        "artist": "Kendrick Lamar",
        "year": "2015",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1600000300000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_to_pimp_a_butterfly_1",
                "track": 1,
                "title": "Wesley's Theory",
                "duration": "3:30",
                "lyrics": "Full lyrics for Wesley's Theory by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Wesley's Theory.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Wesley's Theory",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_2",
                "track": 2,
                "title": "For Free? (Interlude)",
                "duration": "3:30",
                "lyrics": "Full lyrics for For Free? (Interlude) by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of For Free? (Interlude).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from For Free? (Interlude)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_3",
                "track": 3,
                "title": "King Kunta",
                "duration": "3:30",
                "lyrics": "Full lyrics for King Kunta by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of King Kunta.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from King Kunta",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_4",
                "track": 4,
                "title": "Institutionalized",
                "duration": "3:30",
                "lyrics": "Full lyrics for Institutionalized by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Institutionalized.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Institutionalized",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_5",
                "track": 5,
                "title": "These Walls",
                "duration": "3:30",
                "lyrics": "Full lyrics for These Walls by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of These Walls.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from These Walls",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_6",
                "track": 6,
                "title": "u",
                "duration": "3:30",
                "lyrics": "Full lyrics for u by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of u.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from u",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_7",
                "track": 7,
                "title": "Alright",
                "duration": "3:30",
                "lyrics": "Full lyrics for Alright by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Alright.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Alright",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_8",
                "track": 8,
                "title": "For Sale? (Interlude)",
                "duration": "3:30",
                "lyrics": "Full lyrics for For Sale? (Interlude) by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of For Sale? (Interlude).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from For Sale? (Interlude)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_9",
                "track": 9,
                "title": "Momma",
                "duration": "3:30",
                "lyrics": "Full lyrics for Momma by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Momma.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Momma",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_10",
                "track": 10,
                "title": "Hood Politics",
                "duration": "3:30",
                "lyrics": "Full lyrics for Hood Politics by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Hood Politics.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Hood Politics",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_11",
                "track": 11,
                "title": "How Much a Dollar Cost",
                "duration": "3:30",
                "lyrics": "Full lyrics for How Much a Dollar Cost by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of How Much a Dollar Cost.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from How Much a Dollar Cost",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_12",
                "track": 12,
                "title": "Complexion (A Zulu Love)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Complexion (A Zulu Love) by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Complexion (A Zulu Love).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Complexion (A Zulu Love)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_13",
                "track": 13,
                "title": "The Blacker the Berry",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Blacker the Berry by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Blacker the Berry.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Blacker the Berry",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_14",
                "track": 14,
                "title": "You Ain't Gotta Lie (Momma Said)",
                "duration": "3:30",
                "lyrics": "Full lyrics for You Ain't Gotta Lie (Momma Said) by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of You Ain't Gotta Lie (Momma Said).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from You Ain't Gotta Lie (Momma Said)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_15",
                "track": 15,
                "title": "i",
                "duration": "3:30",
                "lyrics": "Full lyrics for i by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of i.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from i",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_to_pimp_a_butterfly_16",
                "track": 16,
                "title": "Mortal Man",
                "duration": "3:30",
                "lyrics": "Full lyrics for Mortal Man by Kendrick Lamar from the album To Pimp a Butterfly go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Mortal Man.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Mortal Man",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_5",
        "title": "Currents",
        "artist": "Tame Impala",
        "year": "2015",
        "genre": "Psychedelic Pop",
        "cover": "https://images.unsplash.com/photo-1600000400000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_currents_1",
                "track": 1,
                "title": "Let It Happen",
                "duration": "3:30",
                "lyrics": "Full lyrics for Let It Happen by Tame Impala from the album Currents go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Let It Happen.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Let It Happen",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_currents_2",
                "track": 2,
                "title": "Nags",
                "duration": "3:30",
                "lyrics": "Full lyrics for Nags by Tame Impala from the album Currents go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Nags.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Nags",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_currents_3",
                "track": 3,
                "title": "The Less I Know the Better",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Less I Know the Better by Tame Impala from the album Currents go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Less I Know the Better.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Less I Know the Better",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_currents_4",
                "track": 4,
                "title": "Past Life",
                "duration": "3:30",
                "lyrics": "Full lyrics for Past Life by Tame Impala from the album Currents go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Past Life.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Past Life",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_currents_5",
                "track": 5,
                "title": "Disciples",
                "duration": "3:30",
                "lyrics": "Full lyrics for Disciples by Tame Impala from the album Currents go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Disciples.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Disciples",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_currents_6",
                "track": 6,
                "title": "Cause I'm a Man",
                "duration": "3:30",
                "lyrics": "Full lyrics for Cause I'm a Man by Tame Impala from the album Currents go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Cause I'm a Man.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Cause I'm a Man",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_currents_7",
                "track": 7,
                "title": "Reality in Motion",
                "duration": "3:30",
                "lyrics": "Full lyrics for Reality in Motion by Tame Impala from the album Currents go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Reality in Motion.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Reality in Motion",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_currents_8",
                "track": 8,
                "title": "Love/Paranoia",
                "duration": "3:30",
                "lyrics": "Full lyrics for Love/Paranoia by Tame Impala from the album Currents go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Love/Paranoia.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Love/Paranoia",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_currents_9",
                "track": 9,
                "title": "New Person, Same Old Mistakes",
                "duration": "3:30",
                "lyrics": "Full lyrics for New Person, Same Old Mistakes by Tame Impala from the album Currents go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of New Person, Same Old Mistakes.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from New Person, Same Old Mistakes",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_6",
        "title": "ASTROWORLD",
        "artist": "Travis Scott",
        "year": "2018",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1600000500000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_astroworld_1",
                "track": 1,
                "title": "STARGAZING",
                "duration": "3:30",
                "lyrics": "Full lyrics for STARGAZING by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of STARGAZING.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from STARGAZING",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_2",
                "track": 2,
                "title": "CAROUSEL",
                "duration": "3:30",
                "lyrics": "Full lyrics for CAROUSEL by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of CAROUSEL.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from CAROUSEL",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_3",
                "track": 3,
                "title": "SICKO MODE",
                "duration": "3:30",
                "lyrics": "Full lyrics for SICKO MODE by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of SICKO MODE.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from SICKO MODE",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_4",
                "track": 4,
                "title": "R.I.P. SCREW",
                "duration": "3:30",
                "lyrics": "Full lyrics for R.I.P. SCREW by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of R.I.P. SCREW.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from R.I.P. SCREW",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_5",
                "track": 5,
                "title": "STOP TRYING TO BE GOD",
                "duration": "3:30",
                "lyrics": "Full lyrics for STOP TRYING TO BE GOD by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of STOP TRYING TO BE GOD.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from STOP TRYING TO BE GOD",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_6",
                "track": 6,
                "title": "NO BYSTANDERS",
                "duration": "3:30",
                "lyrics": "Full lyrics for NO BYSTANDERS by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of NO BYSTANDERS.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from NO BYSTANDERS",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_7",
                "track": 7,
                "title": "SKELETONS",
                "duration": "3:30",
                "lyrics": "Full lyrics for SKELETONS by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of SKELETONS.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from SKELETONS",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_8",
                "track": 8,
                "title": "WAKE UP",
                "duration": "3:30",
                "lyrics": "Full lyrics for WAKE UP by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of WAKE UP.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from WAKE UP",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_9",
                "track": 9,
                "title": "5% TINT",
                "duration": "3:30",
                "lyrics": "Full lyrics for 5% TINT by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of 5% TINT.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from 5% TINT",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_10",
                "track": 10,
                "title": "NC-17",
                "duration": "3:30",
                "lyrics": "Full lyrics for NC-17 by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of NC-17.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from NC-17",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_11",
                "track": 11,
                "title": "ASTROTHUNDER",
                "duration": "3:30",
                "lyrics": "Full lyrics for ASTROTHUNDER by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of ASTROTHUNDER.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from ASTROTHUNDER",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_12",
                "track": 12,
                "title": "YOSEMITE",
                "duration": "3:30",
                "lyrics": "Full lyrics for YOSEMITE by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of YOSEMITE.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from YOSEMITE",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_13",
                "track": 13,
                "title": "CAN'T SAY",
                "duration": "3:30",
                "lyrics": "Full lyrics for CAN'T SAY by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of CAN'T SAY.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from CAN'T SAY",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_14",
                "track": 14,
                "title": "WHO? WHAT!",
                "duration": "3:30",
                "lyrics": "Full lyrics for WHO? WHAT! by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of WHO? WHAT!.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from WHO? WHAT!",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_15",
                "track": 15,
                "title": "BUTTERFLY EFFECT",
                "duration": "3:30",
                "lyrics": "Full lyrics for BUTTERFLY EFFECT by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of BUTTERFLY EFFECT.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from BUTTERFLY EFFECT",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_16",
                "track": 16,
                "title": "HOUSTONFORNICATION",
                "duration": "3:30",
                "lyrics": "Full lyrics for HOUSTONFORNICATION by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of HOUSTONFORNICATION.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from HOUSTONFORNICATION",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_astroworld_17",
                "track": 17,
                "title": "COFFEE BEAN",
                "duration": "3:30",
                "lyrics": "Full lyrics for COFFEE BEAN by Travis Scott from the album ASTROWORLD go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of COFFEE BEAN.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from COFFEE BEAN",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_7",
        "title": "Ctrl",
        "artist": "SZA",
        "year": "2017",
        "genre": "R&B",
        "cover": "https://images.unsplash.com/photo-1600000600000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_ctrl_1",
                "track": 1,
                "title": "Supermodel",
                "duration": "3:30",
                "lyrics": "Full lyrics for Supermodel by SZA from the album Ctrl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Supermodel.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Supermodel",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ctrl_2",
                "track": 2,
                "title": "Love Galore",
                "duration": "3:30",
                "lyrics": "Full lyrics for Love Galore by SZA from the album Ctrl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Love Galore.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Love Galore",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ctrl_3",
                "track": 3,
                "title": "Doves in the Wind",
                "duration": "3:30",
                "lyrics": "Full lyrics for Doves in the Wind by SZA from the album Ctrl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Doves in the Wind.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Doves in the Wind",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ctrl_4",
                "track": 4,
                "title": "Drew Barrymore",
                "duration": "3:30",
                "lyrics": "Full lyrics for Drew Barrymore by SZA from the album Ctrl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Drew Barrymore.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Drew Barrymore",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ctrl_5",
                "track": 5,
                "title": "Promenade",
                "duration": "3:30",
                "lyrics": "Full lyrics for Promenade by SZA from the album Ctrl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Promenade.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Promenade",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ctrl_6",
                "track": 6,
                "title": "Garden (Say It Like Dat)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Garden (Say It Like Dat) by SZA from the album Ctrl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Garden (Say It Like Dat).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Garden (Say It Like Dat)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ctrl_7",
                "track": 7,
                "title": "Warm Winds",
                "duration": "3:30",
                "lyrics": "Full lyrics for Warm Winds by SZA from the album Ctrl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Warm Winds.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Warm Winds",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ctrl_8",
                "track": 8,
                "title": "20 Something",
                "duration": "3:30",
                "lyrics": "Full lyrics for 20 Something by SZA from the album Ctrl go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of 20 Something.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from 20 Something",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_8",
        "title": "Graduation",
        "artist": "Kanye West",
        "year": "2007",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1600000700000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_graduation_1",
                "track": 1,
                "title": "Good Morning",
                "duration": "3:30",
                "lyrics": "Full lyrics for Good Morning by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Good Morning.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Good Morning",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_graduation_2",
                "track": 2,
                "title": "Champion",
                "duration": "3:30",
                "lyrics": "Full lyrics for Champion by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Champion.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Champion",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_graduation_3",
                "track": 3,
                "title": "Stronger",
                "duration": "3:30",
                "lyrics": "Full lyrics for Stronger by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Stronger.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Stronger",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_graduation_4",
                "track": 4,
                "title": "I Wonder",
                "duration": "3:30",
                "lyrics": "Full lyrics for I Wonder by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I Wonder.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I Wonder",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_graduation_5",
                "track": 5,
                "title": "Good Life",
                "duration": "3:30",
                "lyrics": "Full lyrics for Good Life by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Good Life.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Good Life",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_graduation_6",
                "track": 6,
                "title": "Can't Tell Me Nothing",
                "duration": "3:30",
                "lyrics": "Full lyrics for Can't Tell Me Nothing by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Can't Tell Me Nothing.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Can't Tell Me Nothing",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_graduation_7",
                "track": 7,
                "title": "Barry Bonds",
                "duration": "3:30",
                "lyrics": "Full lyrics for Barry Bonds by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Barry Bonds.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Barry Bonds",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_graduation_8",
                "track": 8,
                "title": "Flashing Lights",
                "duration": "3:30",
                "lyrics": "Full lyrics for Flashing Lights by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Flashing Lights.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Flashing Lights",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_graduation_9",
                "track": 9,
                "title": "Everything I Am",
                "duration": "3:30",
                "lyrics": "Full lyrics for Everything I Am by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Everything I Am.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Everything I Am",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_graduation_10",
                "track": 10,
                "title": "The Glory",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Glory by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Glory.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Glory",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_graduation_11",
                "track": 11,
                "title": "Homecoming",
                "duration": "3:30",
                "lyrics": "Full lyrics for Homecoming by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Homecoming.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Homecoming",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_graduation_12",
                "track": 12,
                "title": "Big Brother",
                "duration": "3:30",
                "lyrics": "Full lyrics for Big Brother by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Big Brother.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Big Brother",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_graduation_13",
                "track": 13,
                "title": "Good Night",
                "duration": "3:30",
                "lyrics": "Full lyrics for Good Night by Kanye West from the album Graduation go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Good Night.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Good Night",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_9",
        "title": "AM",
        "artist": "Arctic Monkeys",
        "year": "2013",
        "genre": "Indie Rock",
        "cover": "https://images.unsplash.com/photo-1600000800000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_am_1",
                "track": 1,
                "title": "Do I Wanna Know?",
                "duration": "3:30",
                "lyrics": "Full lyrics for Do I Wanna Know? by Arctic Monkeys from the album AM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Do I Wanna Know?.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Do I Wanna Know?",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_am_2",
                "track": 2,
                "title": "R U Mine?",
                "duration": "3:30",
                "lyrics": "Full lyrics for R U Mine? by Arctic Monkeys from the album AM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of R U Mine?.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from R U Mine?",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_am_3",
                "track": 3,
                "title": "One for the Road",
                "duration": "3:30",
                "lyrics": "Full lyrics for One for the Road by Arctic Monkeys from the album AM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of One for the Road.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from One for the Road",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_am_4",
                "track": 4,
                "title": "Arabella",
                "duration": "3:30",
                "lyrics": "Full lyrics for Arabella by Arctic Monkeys from the album AM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Arabella.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Arabella",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_am_5",
                "track": 5,
                "title": "I Want It All",
                "duration": "3:30",
                "lyrics": "Full lyrics for I Want It All by Arctic Monkeys from the album AM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I Want It All.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I Want It All",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_am_6",
                "track": 6,
                "title": "No.1 Party Anthem",
                "duration": "3:30",
                "lyrics": "Full lyrics for No.1 Party Anthem by Arctic Monkeys from the album AM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of No.1 Party Anthem.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from No.1 Party Anthem",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_am_7",
                "track": 7,
                "title": "Mad Sounds",
                "duration": "3:30",
                "lyrics": "Full lyrics for Mad Sounds by Arctic Monkeys from the album AM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Mad Sounds.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Mad Sounds",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_am_8",
                "track": 8,
                "title": "Fireside",
                "duration": "3:30",
                "lyrics": "Full lyrics for Fireside by Arctic Monkeys from the album AM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Fireside.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Fireside",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_am_9",
                "track": 9,
                "title": "Why'd You Only Call Me When You're High?",
                "duration": "3:30",
                "lyrics": "Full lyrics for Why'd You Only Call Me When You're High? by Arctic Monkeys from the album AM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Why'd You Only Call Me When You're High?.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Why'd You Only Call Me When You're High?",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_am_10",
                "track": 10,
                "title": "Snap Out of It",
                "duration": "3:30",
                "lyrics": "Full lyrics for Snap Out of It by Arctic Monkeys from the album AM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Snap Out of It.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Snap Out of It",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_am_11",
                "track": 11,
                "title": "Knee Socks",
                "duration": "3:30",
                "lyrics": "Full lyrics for Knee Socks by Arctic Monkeys from the album AM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Knee Socks.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Knee Socks",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_am_12",
                "track": 12,
                "title": "I Wanna Be Yours",
                "duration": "3:30",
                "lyrics": "Full lyrics for I Wanna Be Yours by Arctic Monkeys from the album AM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I Wanna Be Yours.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I Wanna Be Yours",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_10",
        "title": "Melodrama",
        "artist": "Lorde",
        "year": "2017",
        "genre": "Art Pop",
        "cover": "https://images.unsplash.com/photo-1600000900000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_melodrama_1",
                "track": 1,
                "title": "Green Light",
                "duration": "3:30",
                "lyrics": "Full lyrics for Green Light by Lorde from the album Melodrama go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Green Light.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Green Light",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_melodrama_2",
                "track": 2,
                "title": "Sober",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sober by Lorde from the album Melodrama go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sober.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sober",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_melodrama_3",
                "track": 3,
                "title": "Homemade Dynamite",
                "duration": "3:30",
                "lyrics": "Full lyrics for Homemade Dynamite by Lorde from the album Melodrama go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Homemade Dynamite.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Homemade Dynamite",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_melodrama_4",
                "track": 4,
                "title": "The Louvre",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Louvre by Lorde from the album Melodrama go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Louvre.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Louvre",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_melodrama_5",
                "track": 5,
                "title": "Liability",
                "duration": "3:30",
                "lyrics": "Full lyrics for Liability by Lorde from the album Melodrama go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Liability.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Liability",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_melodrama_6",
                "track": 6,
                "title": "Hard Feelings/Loveless",
                "duration": "3:30",
                "lyrics": "Full lyrics for Hard Feelings/Loveless by Lorde from the album Melodrama go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Hard Feelings/Loveless.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Hard Feelings/Loveless",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_melodrama_7",
                "track": 7,
                "title": "Sober II (Melodrama)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sober II (Melodrama) by Lorde from the album Melodrama go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sober II (Melodrama).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sober II (Melodrama)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_melodrama_8",
                "track": 8,
                "title": "Writer in the Dark",
                "duration": "3:30",
                "lyrics": "Full lyrics for Writer in the Dark by Lorde from the album Melodrama go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Writer in the Dark.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Writer in the Dark",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_melodrama_9",
                "track": 9,
                "title": "Supercut",
                "duration": "3:30",
                "lyrics": "Full lyrics for Supercut by Lorde from the album Melodrama go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Supercut.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Supercut",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_melodrama_10",
                "track": 10,
                "title": "Liability (Reprise)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Liability (Reprise) by Lorde from the album Melodrama go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Liability (Reprise).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Liability (Reprise)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_melodrama_11",
                "track": 11,
                "title": "Perfect Places",
                "duration": "3:30",
                "lyrics": "Full lyrics for Perfect Places by Lorde from the album Melodrama go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Perfect Places.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Perfect Places",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_11",
        "title": "Utopia",
        "artist": "Travis Scott",
        "year": "2023",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1600001000000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_utopia_1",
                "track": 1,
                "title": "HYAENA",
                "duration": "3:30",
                "lyrics": "Full lyrics for HYAENA by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of HYAENA.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from HYAENA",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_2",
                "track": 2,
                "title": "THANK GOD",
                "duration": "3:30",
                "lyrics": "Full lyrics for THANK GOD by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of THANK GOD.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from THANK GOD",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_3",
                "track": 3,
                "title": "MODERN JAM",
                "duration": "3:30",
                "lyrics": "Full lyrics for MODERN JAM by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of MODERN JAM.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from MODERN JAM",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_4",
                "track": 4,
                "title": "MY EYES",
                "duration": "3:30",
                "lyrics": "Full lyrics for MY EYES by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of MY EYES.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from MY EYES",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_5",
                "track": 5,
                "title": "GOD'S COUNTRY",
                "duration": "3:30",
                "lyrics": "Full lyrics for GOD'S COUNTRY by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of GOD'S COUNTRY.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from GOD'S COUNTRY",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_6",
                "track": 6,
                "title": "SIRENS",
                "duration": "3:30",
                "lyrics": "Full lyrics for SIRENS by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of SIRENS.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from SIRENS",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_7",
                "track": 7,
                "title": "MELTDOWN",
                "duration": "3:30",
                "lyrics": "Full lyrics for MELTDOWN by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of MELTDOWN.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from MELTDOWN",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_8",
                "track": 8,
                "title": "FE!N",
                "duration": "3:30",
                "lyrics": "Full lyrics for FE!N by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of FE!N.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from FE!N",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_9",
                "track": 9,
                "title": "DELRESTO (ECHOES)",
                "duration": "3:30",
                "lyrics": "Full lyrics for DELRESTO (ECHOES) by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of DELRESTO (ECHOES).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from DELRESTO (ECHOES)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_10",
                "track": 10,
                "title": "I KNOW ?",
                "duration": "3:30",
                "lyrics": "Full lyrics for I KNOW ? by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I KNOW ?.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I KNOW ?",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_11",
                "track": 11,
                "title": "TOPIA TWINS",
                "duration": "3:30",
                "lyrics": "Full lyrics for TOPIA TWINS by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of TOPIA TWINS.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from TOPIA TWINS",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_12",
                "track": 12,
                "title": "CIRCUS MAXIMUS",
                "duration": "3:30",
                "lyrics": "Full lyrics for CIRCUS MAXIMUS by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of CIRCUS MAXIMUS.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from CIRCUS MAXIMUS",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_13",
                "track": 13,
                "title": "PARASAIL",
                "duration": "3:30",
                "lyrics": "Full lyrics for PARASAIL by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of PARASAIL.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from PARASAIL",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_14",
                "track": 14,
                "title": "SKITZO",
                "duration": "3:30",
                "lyrics": "Full lyrics for SKITZO by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of SKITZO.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from SKITZO",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_15",
                "track": 15,
                "title": "LOST FOREVER",
                "duration": "3:30",
                "lyrics": "Full lyrics for LOST FOREVER by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of LOST FOREVER.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from LOST FOREVER",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_16",
                "track": 16,
                "title": "LOOOVE",
                "duration": "3:30",
                "lyrics": "Full lyrics for LOOOVE by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of LOOOVE.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from LOOOVE",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_17",
                "track": 17,
                "title": "K-POP",
                "duration": "3:30",
                "lyrics": "Full lyrics for K-POP by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of K-POP.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from K-POP",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_18",
                "track": 18,
                "title": "TELEKINESIS",
                "duration": "3:30",
                "lyrics": "Full lyrics for TELEKINESIS by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of TELEKINESIS.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from TELEKINESIS",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_utopia_19",
                "track": 19,
                "title": "TIL FURTHER NOTICE",
                "duration": "3:30",
                "lyrics": "Full lyrics for TIL FURTHER NOTICE by Travis Scott from the album Utopia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of TIL FURTHER NOTICE.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from TIL FURTHER NOTICE",
                        "explanation": "Analysis of the theme."
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
        "cover": "https://images.unsplash.com/photo-1600001100000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_sos_1",
                "track": 1,
                "title": "SOS",
                "duration": "3:30",
                "lyrics": "Full lyrics for SOS by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of SOS.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from SOS",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_2",
                "track": 2,
                "title": "Kill Bill",
                "duration": "3:30",
                "lyrics": "Full lyrics for Kill Bill by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Kill Bill.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Kill Bill",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_3",
                "track": 3,
                "title": "Seek & Destroy",
                "duration": "3:30",
                "lyrics": "Full lyrics for Seek & Destroy by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Seek & Destroy.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Seek & Destroy",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_4",
                "track": 4,
                "title": "Low",
                "duration": "3:30",
                "lyrics": "Full lyrics for Low by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Low.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Low",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_5",
                "track": 5,
                "title": "Love Language",
                "duration": "3:30",
                "lyrics": "Full lyrics for Love Language by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Love Language.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Love Language",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_6",
                "track": 6,
                "title": "Blind",
                "duration": "3:30",
                "lyrics": "Full lyrics for Blind by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Blind.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Blind",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_7",
                "track": 7,
                "title": "Used",
                "duration": "3:30",
                "lyrics": "Full lyrics for Used by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Used.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Used",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_8",
                "track": 8,
                "title": "Snooze",
                "duration": "3:30",
                "lyrics": "Full lyrics for Snooze by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Snooze.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Snooze",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_9",
                "track": 9,
                "title": "Notice Me",
                "duration": "3:30",
                "lyrics": "Full lyrics for Notice Me by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Notice Me.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Notice Me",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_10",
                "track": 10,
                "title": "Gone Girl",
                "duration": "3:30",
                "lyrics": "Full lyrics for Gone Girl by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Gone Girl.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Gone Girl",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_11",
                "track": 11,
                "title": "Smoking on my Ex Pack",
                "duration": "3:30",
                "lyrics": "Full lyrics for Smoking on my Ex Pack by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Smoking on my Ex Pack.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Smoking on my Ex Pack",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_12",
                "track": 12,
                "title": "Ghost in the Machine",
                "duration": "3:30",
                "lyrics": "Full lyrics for Ghost in the Machine by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Ghost in the Machine.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Ghost in the Machine",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_13",
                "track": 13,
                "title": "F2F",
                "duration": "3:30",
                "lyrics": "Full lyrics for F2F by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of F2F.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from F2F",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_14",
                "track": 14,
                "title": "Nobody Gets Me",
                "duration": "3:30",
                "lyrics": "Full lyrics for Nobody Gets Me by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Nobody Gets Me.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Nobody Gets Me",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_15",
                "track": 15,
                "title": "Conceited",
                "duration": "3:30",
                "lyrics": "Full lyrics for Conceited by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Conceited.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Conceited",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_16",
                "track": 16,
                "title": "Special",
                "duration": "3:30",
                "lyrics": "Full lyrics for Special by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Special.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Special",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_17",
                "track": 17,
                "title": "Too Late",
                "duration": "3:30",
                "lyrics": "Full lyrics for Too Late by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Too Late.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Too Late",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_18",
                "track": 18,
                "title": "Far",
                "duration": "3:30",
                "lyrics": "Full lyrics for Far by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Far.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Far",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_19",
                "track": 19,
                "title": "Shirt",
                "duration": "3:30",
                "lyrics": "Full lyrics for Shirt by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Shirt.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Shirt",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_20",
                "track": 20,
                "title": "Open Arms",
                "duration": "3:30",
                "lyrics": "Full lyrics for Open Arms by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Open Arms.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Open Arms",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_21",
                "track": 21,
                "title": "I Hate U",
                "duration": "3:30",
                "lyrics": "Full lyrics for I Hate U by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I Hate U.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I Hate U",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_22",
                "track": 22,
                "title": "Roark",
                "duration": "3:30",
                "lyrics": "Full lyrics for Roark by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Roark.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Roark",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_23",
                "track": 23,
                "title": "Good Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for Good Days by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Good Days.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Good Days",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_sos_24",
                "track": 24,
                "title": "Forgiveless",
                "duration": "3:30",
                "lyrics": "Full lyrics for Forgiveless by SZA from the album SOS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Forgiveless.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Forgiveless",
                        "explanation": "Analysis of the theme."
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
        "genre": "Dance/Electronic",
        "cover": "https://images.unsplash.com/photo-1600001200000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_renaissance_1",
                "track": 1,
                "title": "I'M THAT GIRL",
                "duration": "3:30",
                "lyrics": "Full lyrics for I'M THAT GIRL by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I'M THAT GIRL.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I'M THAT GIRL",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_2",
                "track": 2,
                "title": "COZY",
                "duration": "3:30",
                "lyrics": "Full lyrics for COZY by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of COZY.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from COZY",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_3",
                "track": 3,
                "title": "ALIEN SUPERSTAR",
                "duration": "3:30",
                "lyrics": "Full lyrics for ALIEN SUPERSTAR by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of ALIEN SUPERSTAR.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from ALIEN SUPERSTAR",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_4",
                "track": 4,
                "title": "CUFF IT",
                "duration": "3:30",
                "lyrics": "Full lyrics for CUFF IT by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of CUFF IT.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from CUFF IT",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_5",
                "track": 5,
                "title": "ENERGY",
                "duration": "3:30",
                "lyrics": "Full lyrics for ENERGY by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of ENERGY.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from ENERGY",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_6",
                "track": 6,
                "title": "BREAK MY SOUL",
                "duration": "3:30",
                "lyrics": "Full lyrics for BREAK MY SOUL by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of BREAK MY SOUL.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from BREAK MY SOUL",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_7",
                "track": 7,
                "title": "CHURCH GIRL",
                "duration": "3:30",
                "lyrics": "Full lyrics for CHURCH GIRL by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of CHURCH GIRL.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from CHURCH GIRL",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_8",
                "track": 8,
                "title": "PLASTIC OFF THE SOFA",
                "duration": "3:30",
                "lyrics": "Full lyrics for PLASTIC OFF THE SOFA by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of PLASTIC OFF THE SOFA.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from PLASTIC OFF THE SOFA",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_9",
                "track": 9,
                "title": "VIRGO'S GROOVE",
                "duration": "3:30",
                "lyrics": "Full lyrics for VIRGO'S GROOVE by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of VIRGO'S GROOVE.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from VIRGO'S GROOVE",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_10",
                "track": 10,
                "title": "MOVE",
                "duration": "3:30",
                "lyrics": "Full lyrics for MOVE by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of MOVE.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from MOVE",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_11",
                "track": 11,
                "title": "HEATED",
                "duration": "3:30",
                "lyrics": "Full lyrics for HEATED by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of HEATED.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from HEATED",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_12",
                "track": 12,
                "title": "THIQUE",
                "duration": "3:30",
                "lyrics": "Full lyrics for THIQUE by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of THIQUE.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from THIQUE",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_13",
                "track": 13,
                "title": "ALL UP IN YOUR MIND",
                "duration": "3:30",
                "lyrics": "Full lyrics for ALL UP IN YOUR MIND by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of ALL UP IN YOUR MIND.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from ALL UP IN YOUR MIND",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_14",
                "track": 14,
                "title": "AMERICA HAS A PROBLEM",
                "duration": "3:30",
                "lyrics": "Full lyrics for AMERICA HAS A PROBLEM by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of AMERICA HAS A PROBLEM.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from AMERICA HAS A PROBLEM",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_15",
                "track": 15,
                "title": "PURE/HONEY",
                "duration": "3:30",
                "lyrics": "Full lyrics for PURE/HONEY by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of PURE/HONEY.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from PURE/HONEY",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_renaissance_16",
                "track": 16,
                "title": "SUMMER RENAISSANCE",
                "duration": "3:30",
                "lyrics": "Full lyrics for SUMMER RENAISSANCE by Beyonc\u00e9 from the album Renaissance go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of SUMMER RENAISSANCE.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from SUMMER RENAISSANCE",
                        "explanation": "Analysis of the theme."
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
        "cover": "https://images.unsplash.com/photo-1600001300000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_midnights_1",
                "track": 1,
                "title": "Lavender Haze",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lavender Haze by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lavender Haze.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lavender Haze",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_midnights_2",
                "track": 2,
                "title": "Maroon",
                "duration": "3:30",
                "lyrics": "Full lyrics for Maroon by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Maroon.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Maroon",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_midnights_3",
                "track": 3,
                "title": "Anti-Hero",
                "duration": "3:30",
                "lyrics": "Full lyrics for Anti-Hero by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Anti-Hero.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Anti-Hero",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_midnights_4",
                "track": 4,
                "title": "Snow on the Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for Snow on the Beach by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Snow on the Beach.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Snow on the Beach",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_midnights_5",
                "track": 5,
                "title": "You're on Your Own, Kid",
                "duration": "3:30",
                "lyrics": "Full lyrics for You're on Your Own, Kid by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of You're on Your Own, Kid.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from You're on Your Own, Kid",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_midnights_6",
                "track": 6,
                "title": "Midnight Rain",
                "duration": "3:30",
                "lyrics": "Full lyrics for Midnight Rain by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Midnight Rain.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Midnight Rain",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_midnights_7",
                "track": 7,
                "title": "Question...?",
                "duration": "3:30",
                "lyrics": "Full lyrics for Question...? by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Question...?.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Question...?",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_midnights_8",
                "track": 8,
                "title": "Vigilante Shit",
                "duration": "3:30",
                "lyrics": "Full lyrics for Vigilante Shit by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Vigilante Shit.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Vigilante Shit",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_midnights_9",
                "track": 9,
                "title": "Bejeweled",
                "duration": "3:30",
                "lyrics": "Full lyrics for Bejeweled by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Bejeweled.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Bejeweled",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_midnights_10",
                "track": 10,
                "title": "Labyrinth",
                "duration": "3:30",
                "lyrics": "Full lyrics for Labyrinth by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Labyrinth.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Labyrinth",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_midnights_11",
                "track": 11,
                "title": "Karma",
                "duration": "3:30",
                "lyrics": "Full lyrics for Karma by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Karma.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Karma",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_midnights_12",
                "track": 12,
                "title": "Sweet Nothing",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sweet Nothing by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sweet Nothing.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sweet Nothing",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_midnights_13",
                "track": 13,
                "title": "Mastermind",
                "duration": "3:30",
                "lyrics": "Full lyrics for Mastermind by Taylor Swift from the album Midnights go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Mastermind.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Mastermind",
                        "explanation": "Analysis of the theme."
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
        "cover": "https://images.unsplash.com/photo-1600001400000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_mr._morale_&_the_big_steppers_1",
                "track": 1,
                "title": "United in Grief",
                "duration": "3:30",
                "lyrics": "Full lyrics for United in Grief by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of United in Grief.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from United in Grief",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_2",
                "track": 2,
                "title": "N95",
                "duration": "3:30",
                "lyrics": "Full lyrics for N95 by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of N95.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from N95",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_3",
                "track": 3,
                "title": "Worldwide Steppers",
                "duration": "3:30",
                "lyrics": "Full lyrics for Worldwide Steppers by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Worldwide Steppers.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Worldwide Steppers",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_4",
                "track": 4,
                "title": "Die Hard",
                "duration": "3:30",
                "lyrics": "Full lyrics for Die Hard by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Die Hard.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Die Hard",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_5",
                "track": 5,
                "title": "Father Time",
                "duration": "3:30",
                "lyrics": "Full lyrics for Father Time by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Father Time.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Father Time",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_6",
                "track": 6,
                "title": "Rich (Interlude)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Rich (Interlude) by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Rich (Interlude).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Rich (Interlude)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_7",
                "track": 7,
                "title": "Rich Spirit",
                "duration": "3:30",
                "lyrics": "Full lyrics for Rich Spirit by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Rich Spirit.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Rich Spirit",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_8",
                "track": 8,
                "title": "We Cry Together",
                "duration": "3:30",
                "lyrics": "Full lyrics for We Cry Together by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of We Cry Together.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from We Cry Together",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_9",
                "track": 9,
                "title": "Purple Hearts",
                "duration": "3:30",
                "lyrics": "Full lyrics for Purple Hearts by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Purple Hearts.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Purple Hearts",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_10",
                "track": 10,
                "title": "Count Me Out",
                "duration": "3:30",
                "lyrics": "Full lyrics for Count Me Out by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Count Me Out.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Count Me Out",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_11",
                "track": 11,
                "title": "Crown",
                "duration": "3:30",
                "lyrics": "Full lyrics for Crown by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Crown.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Crown",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_12",
                "track": 12,
                "title": "Silent Hill",
                "duration": "3:30",
                "lyrics": "Full lyrics for Silent Hill by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Silent Hill.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Silent Hill",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_13",
                "track": 13,
                "title": "Savior (Interlude)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Savior (Interlude) by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Savior (Interlude).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Savior (Interlude)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_14",
                "track": 14,
                "title": "Savior",
                "duration": "3:30",
                "lyrics": "Full lyrics for Savior by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Savior.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Savior",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_15",
                "track": 15,
                "title": "Auntie Diaries",
                "duration": "3:30",
                "lyrics": "Full lyrics for Auntie Diaries by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Auntie Diaries.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Auntie Diaries",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_16",
                "track": 16,
                "title": "Mr. Morale",
                "duration": "3:30",
                "lyrics": "Full lyrics for Mr. Morale by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Mr. Morale.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Mr. Morale",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_17",
                "track": 17,
                "title": "Mother I Sober",
                "duration": "3:30",
                "lyrics": "Full lyrics for Mother I Sober by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Mother I Sober.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Mother I Sober",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_mr._morale_&_the_big_steppers_18",
                "track": 18,
                "title": "Mirror",
                "duration": "3:30",
                "lyrics": "Full lyrics for Mirror by Kendrick Lamar from the album Mr. Morale & The Big Steppers go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Mirror.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Mirror",
                        "explanation": "Analysis of the theme."
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
        "genre": "Synth-pop",
        "cover": "https://images.unsplash.com/photo-1600001500000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_dawn_fm_1",
                "track": 1,
                "title": "Dawn FM",
                "duration": "3:30",
                "lyrics": "Full lyrics for Dawn FM by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Dawn FM.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Dawn FM",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_2",
                "track": 2,
                "title": "Gasoline",
                "duration": "3:30",
                "lyrics": "Full lyrics for Gasoline by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Gasoline.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Gasoline",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_3",
                "track": 3,
                "title": "How Do I Make You Love Me?",
                "duration": "3:30",
                "lyrics": "Full lyrics for How Do I Make You Love Me? by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of How Do I Make You Love Me?.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from How Do I Make You Love Me?",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_4",
                "track": 4,
                "title": "Take My Breath",
                "duration": "3:30",
                "lyrics": "Full lyrics for Take My Breath by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Take My Breath.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Take My Breath",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_5",
                "track": 5,
                "title": "Sacrifice",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sacrifice by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sacrifice.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sacrifice",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_6",
                "track": 6,
                "title": "A Tale by Quincy",
                "duration": "3:30",
                "lyrics": "Full lyrics for A Tale by Quincy by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of A Tale by Quincy.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from A Tale by Quincy",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_7",
                "track": 7,
                "title": "Out of Time",
                "duration": "3:30",
                "lyrics": "Full lyrics for Out of Time by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Out of Time.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Out of Time",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_8",
                "track": 8,
                "title": "Here We Go... Again",
                "duration": "3:30",
                "lyrics": "Full lyrics for Here We Go... Again by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Here We Go... Again.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Here We Go... Again",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_9",
                "track": 9,
                "title": "Best Friends",
                "duration": "3:30",
                "lyrics": "Full lyrics for Best Friends by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Best Friends.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Best Friends",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_10",
                "track": 10,
                "title": "Is There Someone Else?",
                "duration": "3:30",
                "lyrics": "Full lyrics for Is There Someone Else? by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Is There Someone Else?.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Is There Someone Else?",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_11",
                "track": 11,
                "title": "Starry Eyes",
                "duration": "3:30",
                "lyrics": "Full lyrics for Starry Eyes by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Starry Eyes.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Starry Eyes",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_12",
                "track": 12,
                "title": "Every Angel Is Terrifying",
                "duration": "3:30",
                "lyrics": "Full lyrics for Every Angel Is Terrifying by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Every Angel Is Terrifying.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Every Angel Is Terrifying",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_13",
                "track": 13,
                "title": "Don't Break My Heart",
                "duration": "3:30",
                "lyrics": "Full lyrics for Don't Break My Heart by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Don't Break My Heart.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Don't Break My Heart",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_14",
                "track": 14,
                "title": "I Heard You're Married",
                "duration": "3:30",
                "lyrics": "Full lyrics for I Heard You're Married by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I Heard You're Married.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I Heard You're Married",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_15",
                "track": 15,
                "title": "Less Than Zero",
                "duration": "3:30",
                "lyrics": "Full lyrics for Less Than Zero by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Less Than Zero.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Less Than Zero",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_dawn_fm_16",
                "track": 16,
                "title": "Phantom Regret by Jim",
                "duration": "3:30",
                "lyrics": "Full lyrics for Phantom Regret by Jim by The Weeknd from the album Dawn FM go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Phantom Regret by Jim.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Phantom Regret by Jim",
                        "explanation": "Analysis of the theme."
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
        "cover": "https://images.unsplash.com/photo-1600001600000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_harry's_house_1",
                "track": 1,
                "title": "Music for a Sushi Restaurant",
                "duration": "3:30",
                "lyrics": "Full lyrics for Music for a Sushi Restaurant by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Music for a Sushi Restaurant.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Music for a Sushi Restaurant",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_harry's_house_2",
                "track": 2,
                "title": "Late Night Talking",
                "duration": "3:30",
                "lyrics": "Full lyrics for Late Night Talking by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Late Night Talking.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Late Night Talking",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_harry's_house_3",
                "track": 3,
                "title": "Grapejuice",
                "duration": "3:30",
                "lyrics": "Full lyrics for Grapejuice by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Grapejuice.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Grapejuice",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_harry's_house_4",
                "track": 4,
                "title": "As It Was",
                "duration": "3:30",
                "lyrics": "Full lyrics for As It Was by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of As It Was.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from As It Was",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_harry's_house_5",
                "track": 5,
                "title": "Daylight",
                "duration": "3:30",
                "lyrics": "Full lyrics for Daylight by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Daylight.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Daylight",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_harry's_house_6",
                "track": 6,
                "title": "Little Freak",
                "duration": "3:30",
                "lyrics": "Full lyrics for Little Freak by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Little Freak.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Little Freak",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_harry's_house_7",
                "track": 7,
                "title": "Matilda",
                "duration": "3:30",
                "lyrics": "Full lyrics for Matilda by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Matilda.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Matilda",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_harry's_house_8",
                "track": 8,
                "title": "Cinema",
                "duration": "3:30",
                "lyrics": "Full lyrics for Cinema by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Cinema.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Cinema",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_harry's_house_9",
                "track": 9,
                "title": "Daydreaming",
                "duration": "3:30",
                "lyrics": "Full lyrics for Daydreaming by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Daydreaming.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Daydreaming",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_harry's_house_10",
                "track": 10,
                "title": "Keep Driving",
                "duration": "3:30",
                "lyrics": "Full lyrics for Keep Driving by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Keep Driving.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Keep Driving",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_harry's_house_11",
                "track": 11,
                "title": "Satellite",
                "duration": "3:30",
                "lyrics": "Full lyrics for Satellite by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Satellite.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Satellite",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_harry's_house_12",
                "track": 12,
                "title": "Boyfriends",
                "duration": "3:30",
                "lyrics": "Full lyrics for Boyfriends by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Boyfriends.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Boyfriends",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_harry's_house_13",
                "track": 13,
                "title": "Love of My Life",
                "duration": "3:30",
                "lyrics": "Full lyrics for Love of My Life by Harry Styles from the album Harry's House go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Love of My Life.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Love of My Life",
                        "explanation": "Analysis of the theme."
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
        "cover": "https://images.unsplash.com/photo-1600001700000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_the_forever_story_1",
                "track": 1,
                "title": "Galaxy",
                "duration": "3:30",
                "lyrics": "Full lyrics for Galaxy by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Galaxy.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Galaxy",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_2",
                "track": 2,
                "title": "Raydar",
                "duration": "3:30",
                "lyrics": "Full lyrics for Raydar by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Raydar.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Raydar",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_3",
                "track": 3,
                "title": "Dance Now",
                "duration": "3:30",
                "lyrics": "Full lyrics for Dance Now by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Dance Now.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Dance Now",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_4",
                "track": 4,
                "title": "Crack Sandwich",
                "duration": "3:30",
                "lyrics": "Full lyrics for Crack Sandwich by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Crack Sandwich.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Crack Sandwich",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_5",
                "track": 5,
                "title": "Can't Punk Me",
                "duration": "3:30",
                "lyrics": "Full lyrics for Can't Punk Me by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Can't Punk Me.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Can't Punk Me",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_6",
                "track": 6,
                "title": "Surround Sound",
                "duration": "3:30",
                "lyrics": "Full lyrics for Surround Sound by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Surround Sound.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Surround Sound",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_7",
                "track": 7,
                "title": "Kody Blu 31",
                "duration": "3:30",
                "lyrics": "Full lyrics for Kody Blu 31 by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Kody Blu 31.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Kody Blu 31",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_8",
                "track": 8,
                "title": "Bruddanem",
                "duration": "3:30",
                "lyrics": "Full lyrics for Bruddanem by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Bruddanem.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Bruddanem",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_9",
                "track": 9,
                "title": "Sistanem",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sistanem by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sistanem.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sistanem",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_10",
                "track": 10,
                "title": "Can't Make U Change",
                "duration": "3:30",
                "lyrics": "Full lyrics for Can't Make U Change by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Can't Make U Change.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Can't Make U Change",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_11",
                "track": 11,
                "title": "Stars",
                "duration": "3:30",
                "lyrics": "Full lyrics for Stars by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Stars.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Stars",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_12",
                "track": 12,
                "title": "Just in Time",
                "duration": "3:30",
                "lyrics": "Full lyrics for Just in Time by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Just in Time.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Just in Time",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_13",
                "track": 13,
                "title": "Money",
                "duration": "3:30",
                "lyrics": "Full lyrics for Money by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Money.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Money",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_14",
                "track": 14,
                "title": "Better Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for Better Days by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Better Days.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Better Days",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_15",
                "track": 15,
                "title": "Laudromat",
                "duration": "3:30",
                "lyrics": "Full lyrics for Laudromat by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Laudromat.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Laudromat",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_forever_story_16",
                "track": 16,
                "title": "2007",
                "duration": "3:30",
                "lyrics": "Full lyrics for 2007 by JID from the album The Forever Story go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of 2007.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from 2007",
                        "explanation": "Analysis of the theme."
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
        "genre": "Pop Rock",
        "cover": "https://images.unsplash.com/photo-1600001800000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_guts_1",
                "track": 1,
                "title": "all-american bitch",
                "duration": "3:30",
                "lyrics": "Full lyrics for all-american bitch by Olivia Rodrigo from the album GUTS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of all-american bitch.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from all-american bitch",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_guts_2",
                "track": 2,
                "title": "bad idea right?",
                "duration": "3:30",
                "lyrics": "Full lyrics for bad idea right? by Olivia Rodrigo from the album GUTS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of bad idea right?.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from bad idea right?",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_guts_3",
                "track": 3,
                "title": "vampires",
                "duration": "3:30",
                "lyrics": "Full lyrics for vampires by Olivia Rodrigo from the album GUTS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of vampires.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from vampires",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_guts_4",
                "track": 4,
                "title": "lacy",
                "duration": "3:30",
                "lyrics": "Full lyrics for lacy by Olivia Rodrigo from the album GUTS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of lacy.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from lacy",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_guts_5",
                "track": 5,
                "title": "ballad of a homeschooled girl",
                "duration": "3:30",
                "lyrics": "Full lyrics for ballad of a homeschooled girl by Olivia Rodrigo from the album GUTS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of ballad of a homeschooled girl.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from ballad of a homeschooled girl",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_guts_6",
                "track": 6,
                "title": "making the bed",
                "duration": "3:30",
                "lyrics": "Full lyrics for making the bed by Olivia Rodrigo from the album GUTS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of making the bed.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from making the bed",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_guts_7",
                "track": 7,
                "title": "logical",
                "duration": "3:30",
                "lyrics": "Full lyrics for logical by Olivia Rodrigo from the album GUTS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of logical.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from logical",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_guts_8",
                "track": 8,
                "title": "get him back!",
                "duration": "3:30",
                "lyrics": "Full lyrics for get him back! by Olivia Rodrigo from the album GUTS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of get him back!.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from get him back!",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_guts_9",
                "track": 9,
                "title": "love is embarrassing",
                "duration": "3:30",
                "lyrics": "Full lyrics for love is embarrassing by Olivia Rodrigo from the album GUTS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of love is embarrassing.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from love is embarrassing",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_guts_10",
                "track": 10,
                "title": "the grudge",
                "duration": "3:30",
                "lyrics": "Full lyrics for the grudge by Olivia Rodrigo from the album GUTS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of the grudge.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from the grudge",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_guts_11",
                "track": 11,
                "title": "pretty isn't pretty",
                "duration": "3:30",
                "lyrics": "Full lyrics for pretty isn't pretty by Olivia Rodrigo from the album GUTS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of pretty isn't pretty.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from pretty isn't pretty",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_guts_12",
                "track": 12,
                "title": "teenage dream",
                "duration": "3:30",
                "lyrics": "Full lyrics for teenage dream by Olivia Rodrigo from the album GUTS go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of teenage dream.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from teenage dream",
                        "explanation": "Analysis of the theme."
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
        "genre": "City Pop",
        "cover": "https://images.unsplash.com/photo-1600001900000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_hosono_house_1",
                "track": 1,
                "title": "Rock-a-Bye My Baby",
                "duration": "3:30",
                "lyrics": "Full lyrics for Rock-a-Bye My Baby by Haruomi Hosono from the album HOSONO HOUSE go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Rock-a-Bye My Baby.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Rock-a-Bye My Baby",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_hosono_house_2",
                "track": 2,
                "title": "Boku Wa Chotto",
                "duration": "3:30",
                "lyrics": "Full lyrics for Boku Wa Chotto by Haruomi Hosono from the album HOSONO HOUSE go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Boku Wa Chotto.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Boku Wa Chotto",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_hosono_house_3",
                "track": 3,
                "title": "Choo Choo Gatalago",
                "duration": "3:30",
                "lyrics": "Full lyrics for Choo Choo Gatalago by Haruomi Hosono from the album HOSONO HOUSE go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Choo Choo Gatalago.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Choo Choo Gatalago",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_hosono_house_4",
                "track": 4,
                "title": "Owari No Kisetsu",
                "duration": "3:30",
                "lyrics": "Full lyrics for Owari No Kisetsu by Haruomi Hosono from the album HOSONO HOUSE go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Owari No Kisetsu.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Owari No Kisetsu",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_hosono_house_5",
                "track": 5,
                "title": "Fuyu Goe",
                "duration": "3:30",
                "lyrics": "Full lyrics for Fuyu Goe by Haruomi Hosono from the album HOSONO HOUSE go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Fuyu Goe.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Fuyu Goe",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_hosono_house_6",
                "track": 6,
                "title": "Party",
                "duration": "3:30",
                "lyrics": "Full lyrics for Party by Haruomi Hosono from the album HOSONO HOUSE go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Party.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Party",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_hosono_house_7",
                "track": 7,
                "title": "Fuku Wa Uchi Oni Wa Soto",
                "duration": "3:30",
                "lyrics": "Full lyrics for Fuku Wa Uchi Oni Wa Soto by Haruomi Hosono from the album HOSONO HOUSE go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Fuku Wa Uchi Oni Wa Soto.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Fuku Wa Uchi Oni Wa Soto",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_hosono_house_8",
                "track": 8,
                "title": "J\u016bsho Futei Mushoku Teishuny\u016b",
                "duration": "3:30",
                "lyrics": "Full lyrics for J\u016bsho Futei Mushoku Teishuny\u016b by Haruomi Hosono from the album HOSONO HOUSE go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of J\u016bsho Futei Mushoku Teishuny\u016b.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from J\u016bsho Futei Mushoku Teishuny\u016b",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_hosono_house_9",
                "track": 9,
                "title": "Koi Wa Momoiro",
                "duration": "3:30",
                "lyrics": "Full lyrics for Koi Wa Momoiro by Haruomi Hosono from the album HOSONO HOUSE go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Koi Wa Momoiro.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Koi Wa Momoiro",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_hosono_house_10",
                "track": 10,
                "title": "Bara To Yaju",
                "duration": "3:30",
                "lyrics": "Full lyrics for Bara To Yaju by Haruomi Hosono from the album HOSONO HOUSE go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Bara To Yaju.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Bara To Yaju",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_hosono_house_11",
                "track": 11,
                "title": "Sayonara America Sayonara Nippon",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sayonara America Sayonara Nippon by Haruomi Hosono from the album HOSONO HOUSE go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sayonara America Sayonara Nippon.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sayonara America Sayonara Nippon",
                        "explanation": "Analysis of the theme."
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
        "genre": "Alternative",
        "cover": "https://images.unsplash.com/photo-1600002000000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_plastic_beach_1",
                "track": 1,
                "title": "Orchestral Intro",
                "duration": "3:30",
                "lyrics": "Full lyrics for Orchestral Intro by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Orchestral Intro.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Orchestral Intro",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_2",
                "track": 2,
                "title": "Welcome to the World of the Plastic Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for Welcome to the World of the Plastic Beach by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Welcome to the World of the Plastic Beach.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Welcome to the World of the Plastic Beach",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_3",
                "track": 3,
                "title": "White Flag",
                "duration": "3:30",
                "lyrics": "Full lyrics for White Flag by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of White Flag.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from White Flag",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_4",
                "track": 4,
                "title": "Rhinestone Eyes",
                "duration": "3:30",
                "lyrics": "Full lyrics for Rhinestone Eyes by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Rhinestone Eyes.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Rhinestone Eyes",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_5",
                "track": 5,
                "title": "Stylo",
                "duration": "3:30",
                "lyrics": "Full lyrics for Stylo by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Stylo.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Stylo",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_6",
                "track": 6,
                "title": "Superfast Jellyfish",
                "duration": "3:30",
                "lyrics": "Full lyrics for Superfast Jellyfish by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Superfast Jellyfish.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Superfast Jellyfish",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_7",
                "track": 7,
                "title": "Empire Ants",
                "duration": "3:30",
                "lyrics": "Full lyrics for Empire Ants by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Empire Ants.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Empire Ants",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_8",
                "track": 8,
                "title": "Glitter Freeze",
                "duration": "3:30",
                "lyrics": "Full lyrics for Glitter Freeze by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Glitter Freeze.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Glitter Freeze",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_9",
                "track": 9,
                "title": "Some Kind of Nature",
                "duration": "3:30",
                "lyrics": "Full lyrics for Some Kind of Nature by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Some Kind of Nature.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Some Kind of Nature",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_10",
                "track": 10,
                "title": "On Melancholy Hill",
                "duration": "3:30",
                "lyrics": "Full lyrics for On Melancholy Hill by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of On Melancholy Hill.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from On Melancholy Hill",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_11",
                "track": 11,
                "title": "Broken",
                "duration": "3:30",
                "lyrics": "Full lyrics for Broken by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Broken.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Broken",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_12",
                "track": 12,
                "title": "Sweepstakes",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sweepstakes by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sweepstakes.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sweepstakes",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_13",
                "track": 13,
                "title": "Plastic Beach",
                "duration": "3:30",
                "lyrics": "Full lyrics for Plastic Beach by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Plastic Beach.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Plastic Beach",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_14",
                "track": 14,
                "title": "To Binge",
                "duration": "3:30",
                "lyrics": "Full lyrics for To Binge by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of To Binge.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from To Binge",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_15",
                "track": 15,
                "title": "Cloud of Unknowing",
                "duration": "3:30",
                "lyrics": "Full lyrics for Cloud of Unknowing by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Cloud of Unknowing.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Cloud of Unknowing",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_plastic_beach_16",
                "track": 16,
                "title": "Pirate Jet",
                "duration": "3:30",
                "lyrics": "Full lyrics for Pirate Jet by Gorillaz from the album Plastic Beach go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Pirate Jet.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Pirate Jet",
                        "explanation": "Analysis of the theme."
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
        "cover": "https://images.unsplash.com/photo-1600002100000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_discovery_1",
                "track": 1,
                "title": "One More Time",
                "duration": "3:30",
                "lyrics": "Full lyrics for One More Time by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of One More Time.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from One More Time",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_2",
                "track": 2,
                "title": "Aerodynamic",
                "duration": "3:30",
                "lyrics": "Full lyrics for Aerodynamic by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Aerodynamic.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Aerodynamic",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_3",
                "track": 3,
                "title": "Digital Love",
                "duration": "3:30",
                "lyrics": "Full lyrics for Digital Love by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Digital Love.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Digital Love",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_4",
                "track": 4,
                "title": "Harder Better Faster Stronger",
                "duration": "3:30",
                "lyrics": "Full lyrics for Harder Better Faster Stronger by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Harder Better Faster Stronger.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Harder Better Faster Stronger",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_5",
                "track": 5,
                "title": "Crescendolls",
                "duration": "3:30",
                "lyrics": "Full lyrics for Crescendolls by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Crescendolls.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Crescendolls",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_6",
                "track": 6,
                "title": "Nightvision",
                "duration": "3:30",
                "lyrics": "Full lyrics for Nightvision by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Nightvision.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Nightvision",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_7",
                "track": 7,
                "title": "Superheroes",
                "duration": "3:30",
                "lyrics": "Full lyrics for Superheroes by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Superheroes.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Superheroes",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_8",
                "track": 8,
                "title": "High Life",
                "duration": "3:30",
                "lyrics": "Full lyrics for High Life by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of High Life.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from High Life",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_9",
                "track": 9,
                "title": "Something About Us",
                "duration": "3:30",
                "lyrics": "Full lyrics for Something About Us by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Something About Us.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Something About Us",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_10",
                "track": 10,
                "title": "Voyager",
                "duration": "3:30",
                "lyrics": "Full lyrics for Voyager by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Voyager.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Voyager",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_11",
                "track": 11,
                "title": "Veridis Quo",
                "duration": "3:30",
                "lyrics": "Full lyrics for Veridis Quo by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Veridis Quo.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Veridis Quo",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_12",
                "track": 12,
                "title": "Short Circuit",
                "duration": "3:30",
                "lyrics": "Full lyrics for Short Circuit by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Short Circuit.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Short Circuit",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_13",
                "track": 13,
                "title": "Face to Face",
                "duration": "3:30",
                "lyrics": "Full lyrics for Face to Face by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Face to Face.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Face to Face",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_discovery_14",
                "track": 14,
                "title": "Too Long",
                "duration": "3:30",
                "lyrics": "Full lyrics for Too Long by Daft Punk from the album Discovery go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Too Long.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Too Long",
                        "explanation": "Analysis of the theme."
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
        "cover": "https://images.unsplash.com/photo-1600002200000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_nevermind_1",
                "track": 1,
                "title": "Smells Like Teen Spirit",
                "duration": "3:30",
                "lyrics": "Full lyrics for Smells Like Teen Spirit by Nirvana from the album Nevermind go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Smells Like Teen Spirit.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Smells Like Teen Spirit",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_nevermind_2",
                "track": 2,
                "title": "In Bloom",
                "duration": "3:30",
                "lyrics": "Full lyrics for In Bloom by Nirvana from the album Nevermind go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of In Bloom.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from In Bloom",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_nevermind_3",
                "track": 3,
                "title": "Come as You Are",
                "duration": "3:30",
                "lyrics": "Full lyrics for Come as You Are by Nirvana from the album Nevermind go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Come as You Are.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Come as You Are",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_nevermind_4",
                "track": 4,
                "title": "Breed",
                "duration": "3:30",
                "lyrics": "Full lyrics for Breed by Nirvana from the album Nevermind go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Breed.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Breed",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_nevermind_5",
                "track": 5,
                "title": "Lithium",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lithium by Nirvana from the album Nevermind go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lithium.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lithium",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_nevermind_6",
                "track": 6,
                "title": "Polly",
                "duration": "3:30",
                "lyrics": "Full lyrics for Polly by Nirvana from the album Nevermind go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Polly.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Polly",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_nevermind_7",
                "track": 7,
                "title": "Territorial Pissings",
                "duration": "3:30",
                "lyrics": "Full lyrics for Territorial Pissings by Nirvana from the album Nevermind go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Territorial Pissings.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Territorial Pissings",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_nevermind_8",
                "track": 8,
                "title": "Drain You",
                "duration": "3:30",
                "lyrics": "Full lyrics for Drain You by Nirvana from the album Nevermind go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Drain You.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Drain You",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_nevermind_9",
                "track": 9,
                "title": "Lounge Act",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lounge Act by Nirvana from the album Nevermind go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lounge Act.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lounge Act",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_nevermind_10",
                "track": 10,
                "title": "Stay Away",
                "duration": "3:30",
                "lyrics": "Full lyrics for Stay Away by Nirvana from the album Nevermind go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Stay Away.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Stay Away",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_nevermind_11",
                "track": 11,
                "title": "On a Plain",
                "duration": "3:30",
                "lyrics": "Full lyrics for On a Plain by Nirvana from the album Nevermind go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of On a Plain.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from On a Plain",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_nevermind_12",
                "track": 12,
                "title": "Something in the Way",
                "duration": "3:30",
                "lyrics": "Full lyrics for Something in the Way by Nirvana from the album Nevermind go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Something in the Way.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Something in the Way",
                        "explanation": "Analysis of the theme."
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
        "genre": "Progressive Rock",
        "cover": "https://images.unsplash.com/photo-1600002300000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_the_dark_side_of_the_moon_1",
                "track": 1,
                "title": "Speak to Me",
                "duration": "3:30",
                "lyrics": "Full lyrics for Speak to Me by Pink Floyd from the album The Dark Side of the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Speak to Me.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Speak to Me",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_dark_side_of_the_moon_2",
                "track": 2,
                "title": "Breathe (In the Air)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Breathe (In the Air) by Pink Floyd from the album The Dark Side of the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Breathe (In the Air).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Breathe (In the Air)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_dark_side_of_the_moon_3",
                "track": 3,
                "title": "On the Run",
                "duration": "3:30",
                "lyrics": "Full lyrics for On the Run by Pink Floyd from the album The Dark Side of the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of On the Run.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from On the Run",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_dark_side_of_the_moon_4",
                "track": 4,
                "title": "Time",
                "duration": "3:30",
                "lyrics": "Full lyrics for Time by Pink Floyd from the album The Dark Side of the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Time.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Time",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_dark_side_of_the_moon_5",
                "track": 5,
                "title": "The Great Gig in the Sky",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Great Gig in the Sky by Pink Floyd from the album The Dark Side of the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Great Gig in the Sky.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Great Gig in the Sky",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_dark_side_of_the_moon_6",
                "track": 6,
                "title": "Money",
                "duration": "3:30",
                "lyrics": "Full lyrics for Money by Pink Floyd from the album The Dark Side of the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Money.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Money",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_dark_side_of_the_moon_7",
                "track": 7,
                "title": "Us and Them",
                "duration": "3:30",
                "lyrics": "Full lyrics for Us and Them by Pink Floyd from the album The Dark Side of the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Us and Them.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Us and Them",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_dark_side_of_the_moon_8",
                "track": 8,
                "title": "Any Colour You Like",
                "duration": "3:30",
                "lyrics": "Full lyrics for Any Colour You Like by Pink Floyd from the album The Dark Side of the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Any Colour You Like.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Any Colour You Like",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_dark_side_of_the_moon_9",
                "track": 9,
                "title": "Brain Damage",
                "duration": "3:30",
                "lyrics": "Full lyrics for Brain Damage by Pink Floyd from the album The Dark Side of the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Brain Damage.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Brain Damage",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_dark_side_of_the_moon_10",
                "track": 10,
                "title": "Eclipse",
                "duration": "3:30",
                "lyrics": "Full lyrics for Eclipse by Pink Floyd from the album The Dark Side of the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Eclipse.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Eclipse",
                        "explanation": "Analysis of the theme."
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
        "genre": "Alternative Rock",
        "cover": "https://images.unsplash.com/photo-1600002400000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_ok_computer_1",
                "track": 1,
                "title": "Airbag",
                "duration": "3:30",
                "lyrics": "Full lyrics for Airbag by Radiohead from the album OK Computer go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Airbag.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Airbag",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ok_computer_2",
                "track": 2,
                "title": "Paranoid Android",
                "duration": "3:30",
                "lyrics": "Full lyrics for Paranoid Android by Radiohead from the album OK Computer go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Paranoid Android.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Paranoid Android",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ok_computer_3",
                "track": 3,
                "title": "Subterranean Homesick Alien",
                "duration": "3:30",
                "lyrics": "Full lyrics for Subterranean Homesick Alien by Radiohead from the album OK Computer go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Subterranean Homesick Alien.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Subterranean Homesick Alien",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ok_computer_4",
                "track": 4,
                "title": "Exit Music (For a Film)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Exit Music (For a Film) by Radiohead from the album OK Computer go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Exit Music (For a Film).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Exit Music (For a Film)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ok_computer_5",
                "track": 5,
                "title": "Let Down",
                "duration": "3:30",
                "lyrics": "Full lyrics for Let Down by Radiohead from the album OK Computer go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Let Down.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Let Down",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ok_computer_6",
                "track": 6,
                "title": "Karma Police",
                "duration": "3:30",
                "lyrics": "Full lyrics for Karma Police by Radiohead from the album OK Computer go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Karma Police.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Karma Police",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ok_computer_7",
                "track": 7,
                "title": "Fitter Happier",
                "duration": "3:30",
                "lyrics": "Full lyrics for Fitter Happier by Radiohead from the album OK Computer go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Fitter Happier.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Fitter Happier",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ok_computer_8",
                "track": 8,
                "title": "Electioneering",
                "duration": "3:30",
                "lyrics": "Full lyrics for Electioneering by Radiohead from the album OK Computer go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Electioneering.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Electioneering",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ok_computer_9",
                "track": 9,
                "title": "Climbing Up the Walls",
                "duration": "3:30",
                "lyrics": "Full lyrics for Climbing Up the Walls by Radiohead from the album OK Computer go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Climbing Up the Walls.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Climbing Up the Walls",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ok_computer_10",
                "track": 10,
                "title": "No Surprises",
                "duration": "3:30",
                "lyrics": "Full lyrics for No Surprises by Radiohead from the album OK Computer go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of No Surprises.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from No Surprises",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ok_computer_11",
                "track": 11,
                "title": "Lucky",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lucky by Radiohead from the album OK Computer go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lucky.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lucky",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_ok_computer_12",
                "track": 12,
                "title": "The Tourist",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Tourist by Radiohead from the album OK Computer go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Tourist.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Tourist",
                        "explanation": "Analysis of the theme."
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
        "genre": "Dream Pop",
        "cover": "https://images.unsplash.com/photo-1600002500000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_born_to_die_1",
                "track": 1,
                "title": "Born to Die",
                "duration": "3:30",
                "lyrics": "Full lyrics for Born to Die by Lana Del Rey from the album Born to Die go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Born to Die.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Born to Die",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_born_to_die_2",
                "track": 2,
                "title": "Off to the Races",
                "duration": "3:30",
                "lyrics": "Full lyrics for Off to the Races by Lana Del Rey from the album Born to Die go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Off to the Races.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Off to the Races",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_born_to_die_3",
                "track": 3,
                "title": "Blue Jeans",
                "duration": "3:30",
                "lyrics": "Full lyrics for Blue Jeans by Lana Del Rey from the album Born to Die go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Blue Jeans.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Blue Jeans",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_born_to_die_4",
                "track": 4,
                "title": "Video Games",
                "duration": "3:30",
                "lyrics": "Full lyrics for Video Games by Lana Del Rey from the album Born to Die go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Video Games.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Video Games",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_born_to_die_5",
                "track": 5,
                "title": "Diet Mountain Dew",
                "duration": "3:30",
                "lyrics": "Full lyrics for Diet Mountain Dew by Lana Del Rey from the album Born to Die go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Diet Mountain Dew.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Diet Mountain Dew",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_born_to_die_6",
                "track": 6,
                "title": "National Anthem",
                "duration": "3:30",
                "lyrics": "Full lyrics for National Anthem by Lana Del Rey from the album Born to Die go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of National Anthem.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from National Anthem",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_born_to_die_7",
                "track": 7,
                "title": "Dark Paradise",
                "duration": "3:30",
                "lyrics": "Full lyrics for Dark Paradise by Lana Del Rey from the album Born to Die go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Dark Paradise.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Dark Paradise",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_born_to_die_8",
                "track": 8,
                "title": "Radio",
                "duration": "3:30",
                "lyrics": "Full lyrics for Radio by Lana Del Rey from the album Born to Die go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Radio.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Radio",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_born_to_die_9",
                "track": 9,
                "title": "Carmen",
                "duration": "3:30",
                "lyrics": "Full lyrics for Carmen by Lana Del Rey from the album Born to Die go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Carmen.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Carmen",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_born_to_die_10",
                "track": 10,
                "title": "Million Dollar Man",
                "duration": "3:30",
                "lyrics": "Full lyrics for Million Dollar Man by Lana Del Rey from the album Born to Die go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Million Dollar Man.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Million Dollar Man",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_born_to_die_11",
                "track": 11,
                "title": "Summertime Sadness",
                "duration": "3:30",
                "lyrics": "Full lyrics for Summertime Sadness by Lana Del Rey from the album Born to Die go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Summertime Sadness.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Summertime Sadness",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_born_to_die_12",
                "track": 12,
                "title": "This Is What Makes Us Girls",
                "duration": "3:30",
                "lyrics": "Full lyrics for This Is What Makes Us Girls by Lana Del Rey from the album Born to Die go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of This Is What Makes Us Girls.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from This Is What Makes Us Girls",
                        "explanation": "Analysis of the theme."
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
        "cover": "https://images.unsplash.com/photo-1600002600000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_channel_orange_1",
                "track": 1,
                "title": "Start",
                "duration": "3:30",
                "lyrics": "Full lyrics for Start by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Start.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Start",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_2",
                "track": 2,
                "title": "Thinkin Bout You",
                "duration": "3:30",
                "lyrics": "Full lyrics for Thinkin Bout You by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Thinkin Bout You.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Thinkin Bout You",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_3",
                "track": 3,
                "title": "Fertilizer",
                "duration": "3:30",
                "lyrics": "Full lyrics for Fertilizer by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Fertilizer.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Fertilizer",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_4",
                "track": 4,
                "title": "Sierra Leone",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sierra Leone by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sierra Leone.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sierra Leone",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_5",
                "track": 5,
                "title": "Sweet Life",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sweet Life by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sweet Life.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sweet Life",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_6",
                "track": 6,
                "title": "Not Just Money",
                "duration": "3:30",
                "lyrics": "Full lyrics for Not Just Money by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Not Just Money.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Not Just Money",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_7",
                "track": 7,
                "title": "Super Rich Kids",
                "duration": "3:30",
                "lyrics": "Full lyrics for Super Rich Kids by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Super Rich Kids.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Super Rich Kids",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_8",
                "track": 8,
                "title": "Pilot Jones",
                "duration": "3:30",
                "lyrics": "Full lyrics for Pilot Jones by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Pilot Jones.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Pilot Jones",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_9",
                "track": 9,
                "title": "Crack Rock",
                "duration": "3:30",
                "lyrics": "Full lyrics for Crack Rock by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Crack Rock.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Crack Rock",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_10",
                "track": 10,
                "title": "Pyramids",
                "duration": "3:30",
                "lyrics": "Full lyrics for Pyramids by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Pyramids.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Pyramids",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_11",
                "track": 11,
                "title": "Lost",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lost by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lost.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lost",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_12",
                "track": 12,
                "title": "White",
                "duration": "3:30",
                "lyrics": "Full lyrics for White by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of White.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from White",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_13",
                "track": 13,
                "title": "Monks",
                "duration": "3:30",
                "lyrics": "Full lyrics for Monks by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Monks.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Monks",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_14",
                "track": 14,
                "title": "Bad Religion",
                "duration": "3:30",
                "lyrics": "Full lyrics for Bad Religion by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Bad Religion.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Bad Religion",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_15",
                "track": 15,
                "title": "Pink Matter",
                "duration": "3:30",
                "lyrics": "Full lyrics for Pink Matter by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Pink Matter.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Pink Matter",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_16",
                "track": 16,
                "title": "Forrest Gump",
                "duration": "3:30",
                "lyrics": "Full lyrics for Forrest Gump by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Forrest Gump.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Forrest Gump",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_channel_orange_17",
                "track": 17,
                "title": "End",
                "duration": "3:30",
                "lyrics": "Full lyrics for End by Frank Ocean from the album Channel Orange go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of End.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from End",
                        "explanation": "Analysis of the theme."
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
        "cover": "https://images.unsplash.com/photo-1600002700000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_the_college_dropout_1",
                "track": 1,
                "title": "Intro",
                "duration": "3:30",
                "lyrics": "Full lyrics for Intro by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Intro.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Intro",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_2",
                "track": 2,
                "title": "We Don't Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for We Don't Care by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of We Don't Care.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from We Don't Care",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_3",
                "track": 3,
                "title": "Graduation Day",
                "duration": "3:30",
                "lyrics": "Full lyrics for Graduation Day by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Graduation Day.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Graduation Day",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_4",
                "track": 4,
                "title": "All Falls Down",
                "duration": "3:30",
                "lyrics": "Full lyrics for All Falls Down by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of All Falls Down.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from All Falls Down",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_5",
                "track": 5,
                "title": "I'll Fly Away",
                "duration": "3:30",
                "lyrics": "Full lyrics for I'll Fly Away by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I'll Fly Away.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I'll Fly Away",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_6",
                "track": 6,
                "title": "Spaceship",
                "duration": "3:30",
                "lyrics": "Full lyrics for Spaceship by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Spaceship.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Spaceship",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_7",
                "track": 7,
                "title": "Jesus Walks",
                "duration": "3:30",
                "lyrics": "Full lyrics for Jesus Walks by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Jesus Walks.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Jesus Walks",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_8",
                "track": 8,
                "title": "Never Let Me Down",
                "duration": "3:30",
                "lyrics": "Full lyrics for Never Let Me Down by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Never Let Me Down.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Never Let Me Down",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_9",
                "track": 9,
                "title": "Get Em High",
                "duration": "3:30",
                "lyrics": "Full lyrics for Get Em High by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Get Em High.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Get Em High",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_10",
                "track": 10,
                "title": "Workout Plan",
                "duration": "3:30",
                "lyrics": "Full lyrics for Workout Plan by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Workout Plan.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Workout Plan",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_11",
                "track": 11,
                "title": "The New Workout Plan",
                "duration": "3:30",
                "lyrics": "Full lyrics for The New Workout Plan by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The New Workout Plan.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The New Workout Plan",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_12",
                "track": 12,
                "title": "Slow Jamz",
                "duration": "3:30",
                "lyrics": "Full lyrics for Slow Jamz by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Slow Jamz.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Slow Jamz",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_13",
                "track": 13,
                "title": "Breathe In Breathe Out",
                "duration": "3:30",
                "lyrics": "Full lyrics for Breathe In Breathe Out by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Breathe In Breathe Out.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Breathe In Breathe Out",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_14",
                "track": 14,
                "title": "School Spirit Skit 1",
                "duration": "3:30",
                "lyrics": "Full lyrics for School Spirit Skit 1 by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of School Spirit Skit 1.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from School Spirit Skit 1",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_15",
                "track": 15,
                "title": "School Spirit",
                "duration": "3:30",
                "lyrics": "Full lyrics for School Spirit by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of School Spirit.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from School Spirit",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_16",
                "track": 16,
                "title": "School Spirit Skit 2",
                "duration": "3:30",
                "lyrics": "Full lyrics for School Spirit Skit 2 by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of School Spirit Skit 2.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from School Spirit Skit 2",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_17",
                "track": 17,
                "title": "Lil Jimmy Skit",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lil Jimmy Skit by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lil Jimmy Skit.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lil Jimmy Skit",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_18",
                "track": 18,
                "title": "Two Words",
                "duration": "3:30",
                "lyrics": "Full lyrics for Two Words by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Two Words.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Two Words",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_19",
                "track": 19,
                "title": "Through the Wire",
                "duration": "3:30",
                "lyrics": "Full lyrics for Through the Wire by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Through the Wire.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Through the Wire",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_20",
                "track": 20,
                "title": "Family Business",
                "duration": "3:30",
                "lyrics": "Full lyrics for Family Business by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Family Business.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Family Business",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_college_dropout_21",
                "track": 21,
                "title": "Last Call",
                "duration": "3:30",
                "lyrics": "Full lyrics for Last Call by Kanye West from the album The College Dropout go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Last Call.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Last Call",
                        "explanation": "Analysis of the theme."
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
        "cover": "https://images.unsplash.com/photo-1600002800000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_2014_forest_hills_drive_1",
                "track": 1,
                "title": "Intro",
                "duration": "3:30",
                "lyrics": "Full lyrics for Intro by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Intro.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Intro",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_2014_forest_hills_drive_2",
                "track": 2,
                "title": "January 28th",
                "duration": "3:30",
                "lyrics": "Full lyrics for January 28th by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of January 28th.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from January 28th",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_2014_forest_hills_drive_3",
                "track": 3,
                "title": "Wet Dreamz",
                "duration": "3:30",
                "lyrics": "Full lyrics for Wet Dreamz by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Wet Dreamz.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Wet Dreamz",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_2014_forest_hills_drive_4",
                "track": 4,
                "title": "03' Adolescence",
                "duration": "3:30",
                "lyrics": "Full lyrics for 03' Adolescence by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of 03' Adolescence.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from 03' Adolescence",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_2014_forest_hills_drive_5",
                "track": 5,
                "title": "A Tale of 2 Citiez",
                "duration": "3:30",
                "lyrics": "Full lyrics for A Tale of 2 Citiez by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of A Tale of 2 Citiez.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from A Tale of 2 Citiez",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_2014_forest_hills_drive_6",
                "track": 6,
                "title": "Fire Squad",
                "duration": "3:30",
                "lyrics": "Full lyrics for Fire Squad by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Fire Squad.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Fire Squad",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_2014_forest_hills_drive_7",
                "track": 7,
                "title": "St. Tropez",
                "duration": "3:30",
                "lyrics": "Full lyrics for St. Tropez by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of St. Tropez.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from St. Tropez",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_2014_forest_hills_drive_8",
                "track": 8,
                "title": "G.O.M.D.",
                "duration": "3:30",
                "lyrics": "Full lyrics for G.O.M.D. by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of G.O.M.D..",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from G.O.M.D.",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_2014_forest_hills_drive_9",
                "track": 9,
                "title": "No Role Modelz",
                "duration": "3:30",
                "lyrics": "Full lyrics for No Role Modelz by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of No Role Modelz.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from No Role Modelz",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_2014_forest_hills_drive_10",
                "track": 10,
                "title": "Hello",
                "duration": "3:30",
                "lyrics": "Full lyrics for Hello by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Hello.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Hello",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_2014_forest_hills_drive_11",
                "track": 11,
                "title": "Apparently",
                "duration": "3:30",
                "lyrics": "Full lyrics for Apparently by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Apparently.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Apparently",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_2014_forest_hills_drive_12",
                "track": 12,
                "title": "Love Yourz",
                "duration": "3:30",
                "lyrics": "Full lyrics for Love Yourz by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Love Yourz.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Love Yourz",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_2014_forest_hills_drive_13",
                "track": 13,
                "title": "Note to Self",
                "duration": "3:30",
                "lyrics": "Full lyrics for Note to Self by J. Cole from the album 2014 Forest Hills Drive go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Note to Self.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Note to Self",
                        "explanation": "Analysis of the theme."
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
        "cover": "https://images.unsplash.com/photo-1600002900000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_good_kid_m.a.a.d_city_1",
                "track": 1,
                "title": "Sherane a.k.a Master Splinter's Daughter",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sherane a.k.a Master Splinter's Daughter by Kendrick Lamar from the album good kid, m.A.A.d city go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sherane a.k.a Master Splinter's Daughter.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sherane a.k.a Master Splinter's Daughter",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_good_kid_m.a.a.d_city_2",
                "track": 2,
                "title": "Bitch Don't Kill My Vibe",
                "duration": "3:30",
                "lyrics": "Full lyrics for Bitch Don't Kill My Vibe by Kendrick Lamar from the album good kid, m.A.A.d city go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Bitch Don't Kill My Vibe.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Bitch Don't Kill My Vibe",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_good_kid_m.a.a.d_city_3",
                "track": 3,
                "title": "Backseat Freestyle",
                "duration": "3:30",
                "lyrics": "Full lyrics for Backseat Freestyle by Kendrick Lamar from the album good kid, m.A.A.d city go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Backseat Freestyle.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Backseat Freestyle",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_good_kid_m.a.a.d_city_4",
                "track": 4,
                "title": "The Art of Peer Pressure",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Art of Peer Pressure by Kendrick Lamar from the album good kid, m.A.A.d city go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Art of Peer Pressure.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Art of Peer Pressure",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_good_kid_m.a.a.d_city_5",
                "track": 5,
                "title": "Money Trees",
                "duration": "3:30",
                "lyrics": "Full lyrics for Money Trees by Kendrick Lamar from the album good kid, m.A.A.d city go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Money Trees.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Money Trees",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_good_kid_m.a.a.d_city_6",
                "track": 6,
                "title": "Poetic Justice",
                "duration": "3:30",
                "lyrics": "Full lyrics for Poetic Justice by Kendrick Lamar from the album good kid, m.A.A.d city go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Poetic Justice.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Poetic Justice",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_good_kid_m.a.a.d_city_7",
                "track": 7,
                "title": "good kid",
                "duration": "3:30",
                "lyrics": "Full lyrics for good kid by Kendrick Lamar from the album good kid, m.A.A.d city go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of good kid.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from good kid",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_good_kid_m.a.a.d_city_8",
                "track": 8,
                "title": "m.A.A.d city",
                "duration": "3:30",
                "lyrics": "Full lyrics for m.A.A.d city by Kendrick Lamar from the album good kid, m.A.A.d city go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of m.A.A.d city.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from m.A.A.d city",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_good_kid_m.a.a.d_city_9",
                "track": 9,
                "title": "Swimming Pools (Drank)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Swimming Pools (Drank) by Kendrick Lamar from the album good kid, m.A.A.d city go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Swimming Pools (Drank).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Swimming Pools (Drank)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_good_kid_m.a.a.d_city_10",
                "track": 10,
                "title": "Sing About Me I'm Dying of Thirst",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sing About Me I'm Dying of Thirst by Kendrick Lamar from the album good kid, m.A.A.d city go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sing About Me I'm Dying of Thirst.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sing About Me I'm Dying of Thirst",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_good_kid_m.a.a.d_city_11",
                "track": 11,
                "title": "Real",
                "duration": "3:30",
                "lyrics": "Full lyrics for Real by Kendrick Lamar from the album good kid, m.A.A.d city go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Real.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Real",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_good_kid_m.a.a.d_city_12",
                "track": 12,
                "title": "Compton",
                "duration": "3:30",
                "lyrics": "Full lyrics for Compton by Kendrick Lamar from the album good kid, m.A.A.d city go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Compton.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Compton",
                        "explanation": "Analysis of the theme."
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
        "genre": "Indie Pop",
        "cover": "https://images.unsplash.com/photo-1600003000000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_french_exit_1",
                "track": 1,
                "title": "Pantyhose",
                "duration": "3:30",
                "lyrics": "Full lyrics for Pantyhose by TV Girl from the album French Exit go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Pantyhose.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Pantyhose",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_french_exit_2",
                "track": 2,
                "title": "Birds Dont Sing",
                "duration": "3:30",
                "lyrics": "Full lyrics for Birds Dont Sing by TV Girl from the album French Exit go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Birds Dont Sing.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Birds Dont Sing",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_french_exit_3",
                "track": 3,
                "title": "Louise",
                "duration": "3:30",
                "lyrics": "Full lyrics for Louise by TV Girl from the album French Exit go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Louise.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Louise",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_french_exit_4",
                "track": 4,
                "title": "Hate Yourself",
                "duration": "3:30",
                "lyrics": "Full lyrics for Hate Yourself by TV Girl from the album French Exit go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Hate Yourself.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Hate Yourself",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_french_exit_5",
                "track": 5,
                "title": "The Getaway",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Getaway by TV Girl from the album French Exit go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Getaway.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Getaway",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_french_exit_6",
                "track": 6,
                "title": "Talk to Strangers",
                "duration": "3:30",
                "lyrics": "Full lyrics for Talk to Strangers by TV Girl from the album French Exit go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Talk to Strangers.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Talk to Strangers",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_french_exit_7",
                "track": 7,
                "title": "Daughter of a Cop",
                "duration": "3:30",
                "lyrics": "Full lyrics for Daughter of a Cop by TV Girl from the album French Exit go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Daughter of a Cop.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Daughter of a Cop",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_french_exit_8",
                "track": 8,
                "title": "Lovers Rock",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lovers Rock by TV Girl from the album French Exit go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lovers Rock.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lovers Rock",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_french_exit_9",
                "track": 9,
                "title": "Her and Her Friend",
                "duration": "3:30",
                "lyrics": "Full lyrics for Her and Her Friend by TV Girl from the album French Exit go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Her and Her Friend.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Her and Her Friend",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_french_exit_10",
                "track": 10,
                "title": "Come When You Call",
                "duration": "3:30",
                "lyrics": "Full lyrics for Come When You Call by TV Girl from the album French Exit go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Come When You Call.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Come When You Call",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_french_exit_11",
                "track": 11,
                "title": "Anjela",
                "duration": "3:30",
                "lyrics": "Full lyrics for Anjela by TV Girl from the album French Exit go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Anjela.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Anjela",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_french_exit_12",
                "track": 12,
                "title": "The Mirror",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Mirror by TV Girl from the album French Exit go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Mirror.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Mirror",
                        "explanation": "Analysis of the theme."
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
        "genre": "Indie Pop",
        "cover": "https://images.unsplash.com/photo-1600003100000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_who_really_cares_1",
                "track": 1,
                "title": "Taking What's Not Yours",
                "duration": "3:30",
                "lyrics": "Full lyrics for Taking What's Not Yours by TV Girl from the album Who Really Cares go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Taking What's Not Yours.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Taking What's Not Yours",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_who_really_cares_2",
                "track": 2,
                "title": "Song About Me",
                "duration": "3:30",
                "lyrics": "Full lyrics for Song About Me by TV Girl from the album Who Really Cares go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Song About Me.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Song About Me",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_who_really_cares_3",
                "track": 3,
                "title": "Cigarettes out the Window",
                "duration": "3:30",
                "lyrics": "Full lyrics for Cigarettes out the Window by TV Girl from the album Who Really Cares go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Cigarettes out the Window.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Cigarettes out the Window",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_who_really_cares_4",
                "track": 4,
                "title": "Till You Tell Me to Leave",
                "duration": "3:30",
                "lyrics": "Full lyrics for Till You Tell Me to Leave by TV Girl from the album Who Really Cares go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Till You Tell Me to Leave.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Till You Tell Me to Leave",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_who_really_cares_5",
                "track": 5,
                "title": "Not Allowed",
                "duration": "3:30",
                "lyrics": "Full lyrics for Not Allowed by TV Girl from the album Who Really Cares go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Not Allowed.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Not Allowed",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_who_really_cares_6",
                "track": 6,
                "title": "(Do The) Act Like You Never Met Me",
                "duration": "3:30",
                "lyrics": "Full lyrics for (Do The) Act Like You Never Met Me by TV Girl from the album Who Really Cares go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of (Do The) Act Like You Never Met Me.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from (Do The) Act Like You Never Met Me",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_who_really_cares_7",
                "track": 7,
                "title": "Safeword",
                "duration": "3:30",
                "lyrics": "Full lyrics for Safeword by TV Girl from the album Who Really Cares go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Safeword.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Safeword",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_who_really_cares_8",
                "track": 8,
                "title": "For You",
                "duration": "3:30",
                "lyrics": "Full lyrics for For You by TV Girl from the album Who Really Cares go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of For You.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from For You",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_who_really_cares_9",
                "track": 9,
                "title": "Loving Machine",
                "duration": "3:30",
                "lyrics": "Full lyrics for Loving Machine by TV Girl from the album Who Really Cares go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Loving Machine.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Loving Machine",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_who_really_cares_10",
                "track": 10,
                "title": "Heaven Is a Bedroom",
                "duration": "3:30",
                "lyrics": "Full lyrics for Heaven Is a Bedroom by TV Girl from the album Who Really Cares go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Heaven Is a Bedroom.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Heaven Is a Bedroom",
                        "explanation": "Analysis of the theme."
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
        "genre": "Indie Rock",
        "cover": "https://images.unsplash.com/photo-1600003200000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_salad_days_1",
                "track": 1,
                "title": "Salad Days",
                "duration": "3:30",
                "lyrics": "Full lyrics for Salad Days by Mac DeMarco from the album Salad Days go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Salad Days.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Salad Days",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_salad_days_2",
                "track": 2,
                "title": "Blue Boy",
                "duration": "3:30",
                "lyrics": "Full lyrics for Blue Boy by Mac DeMarco from the album Salad Days go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Blue Boy.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Blue Boy",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_salad_days_3",
                "track": 3,
                "title": "Brother",
                "duration": "3:30",
                "lyrics": "Full lyrics for Brother by Mac DeMarco from the album Salad Days go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Brother.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Brother",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_salad_days_4",
                "track": 4,
                "title": "Let Her Go",
                "duration": "3:30",
                "lyrics": "Full lyrics for Let Her Go by Mac DeMarco from the album Salad Days go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Let Her Go.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Let Her Go",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_salad_days_5",
                "track": 5,
                "title": "Goodbye Weekend",
                "duration": "3:30",
                "lyrics": "Full lyrics for Goodbye Weekend by Mac DeMarco from the album Salad Days go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Goodbye Weekend.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Goodbye Weekend",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_salad_days_6",
                "track": 6,
                "title": "Let My Baby Stay",
                "duration": "3:30",
                "lyrics": "Full lyrics for Let My Baby Stay by Mac DeMarco from the album Salad Days go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Let My Baby Stay.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Let My Baby Stay",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_salad_days_7",
                "track": 7,
                "title": "Passing Out Pieces",
                "duration": "3:30",
                "lyrics": "Full lyrics for Passing Out Pieces by Mac DeMarco from the album Salad Days go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Passing Out Pieces.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Passing Out Pieces",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_salad_days_8",
                "track": 8,
                "title": "Treat Her Better",
                "duration": "3:30",
                "lyrics": "Full lyrics for Treat Her Better by Mac DeMarco from the album Salad Days go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Treat Her Better.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Treat Her Better",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_salad_days_9",
                "track": 9,
                "title": "Chamber of Reflection",
                "duration": "3:30",
                "lyrics": "Full lyrics for Chamber of Reflection by Mac DeMarco from the album Salad Days go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Chamber of Reflection.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Chamber of Reflection",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_salad_days_10",
                "track": 10,
                "title": "Go Easy",
                "duration": "3:30",
                "lyrics": "Full lyrics for Go Easy by Mac DeMarco from the album Salad Days go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Go Easy.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Go Easy",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_salad_days_11",
                "track": 11,
                "title": "Jonny's Odyssey",
                "duration": "3:30",
                "lyrics": "Full lyrics for Jonny's Odyssey by Mac DeMarco from the album Salad Days go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Jonny's Odyssey.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Jonny's Odyssey",
                        "explanation": "Analysis of the theme."
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
        "genre": "Psychedelic Pop",
        "cover": "https://images.unsplash.com/photo-1600003300000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_the_slow_rush_1",
                "track": 1,
                "title": "One More Year",
                "duration": "3:30",
                "lyrics": "Full lyrics for One More Year by Tame Impala from the album The Slow Rush go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of One More Year.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from One More Year",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_slow_rush_2",
                "track": 2,
                "title": "Instant Destiny",
                "duration": "3:30",
                "lyrics": "Full lyrics for Instant Destiny by Tame Impala from the album The Slow Rush go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Instant Destiny.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Instant Destiny",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_slow_rush_3",
                "track": 3,
                "title": "Borderline",
                "duration": "3:30",
                "lyrics": "Full lyrics for Borderline by Tame Impala from the album The Slow Rush go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Borderline.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Borderline",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_slow_rush_4",
                "track": 4,
                "title": "Posthumous Forgiveness",
                "duration": "3:30",
                "lyrics": "Full lyrics for Posthumous Forgiveness by Tame Impala from the album The Slow Rush go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Posthumous Forgiveness.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Posthumous Forgiveness",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_slow_rush_5",
                "track": 5,
                "title": "Breathe Deeper",
                "duration": "3:30",
                "lyrics": "Full lyrics for Breathe Deeper by Tame Impala from the album The Slow Rush go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Breathe Deeper.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Breathe Deeper",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_slow_rush_6",
                "track": 6,
                "title": "Tomorrow's Dust",
                "duration": "3:30",
                "lyrics": "Full lyrics for Tomorrow's Dust by Tame Impala from the album The Slow Rush go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Tomorrow's Dust.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Tomorrow's Dust",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_slow_rush_7",
                "track": 7,
                "title": "On Track",
                "duration": "3:30",
                "lyrics": "Full lyrics for On Track by Tame Impala from the album The Slow Rush go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of On Track.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from On Track",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_slow_rush_8",
                "track": 8,
                "title": "Lost in Yesterday",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lost in Yesterday by Tame Impala from the album The Slow Rush go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lost in Yesterday.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lost in Yesterday",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_slow_rush_9",
                "track": 9,
                "title": "Is It True",
                "duration": "3:30",
                "lyrics": "Full lyrics for Is It True by Tame Impala from the album The Slow Rush go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Is It True.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Is It True",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_slow_rush_10",
                "track": 10,
                "title": "It Might Be Time",
                "duration": "3:30",
                "lyrics": "Full lyrics for It Might Be Time by Tame Impala from the album The Slow Rush go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of It Might Be Time.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from It Might Be Time",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_slow_rush_11",
                "track": 11,
                "title": "Glimmer",
                "duration": "3:30",
                "lyrics": "Full lyrics for Glimmer by Tame Impala from the album The Slow Rush go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Glimmer.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Glimmer",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_slow_rush_12",
                "track": 12,
                "title": "One More Hour",
                "duration": "3:30",
                "lyrics": "Full lyrics for One More Hour by Tame Impala from the album The Slow Rush go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of One More Hour.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from One More Hour",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_35",
        "title": "Take Care",
        "artist": "Drake",
        "year": "2011",
        "genre": "Hip-Hop/R&B",
        "cover": "https://images.unsplash.com/photo-1600003400000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_take_care_1",
                "track": 1,
                "title": "Over My Dead Body",
                "duration": "3:30",
                "lyrics": "Full lyrics for Over My Dead Body by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Over My Dead Body.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Over My Dead Body",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_2",
                "track": 2,
                "title": "Shot for Me",
                "duration": "3:30",
                "lyrics": "Full lyrics for Shot for Me by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Shot for Me.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Shot for Me",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_3",
                "track": 3,
                "title": "Headlines",
                "duration": "3:30",
                "lyrics": "Full lyrics for Headlines by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Headlines.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Headlines",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_4",
                "track": 4,
                "title": "Crew Love",
                "duration": "3:30",
                "lyrics": "Full lyrics for Crew Love by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Crew Love.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Crew Love",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_5",
                "track": 5,
                "title": "Take Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for Take Care by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Take Care.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Take Care",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_6",
                "track": 6,
                "title": "Marvin's Room",
                "duration": "3:30",
                "lyrics": "Full lyrics for Marvin's Room by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Marvin's Room.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Marvin's Room",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_7",
                "track": 7,
                "title": "Buried Alive Interlude",
                "duration": "3:30",
                "lyrics": "Full lyrics for Buried Alive Interlude by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Buried Alive Interlude.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Buried Alive Interlude",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_8",
                "track": 8,
                "title": "Under Ground Kings",
                "duration": "3:30",
                "lyrics": "Full lyrics for Under Ground Kings by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Under Ground Kings.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Under Ground Kings",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_9",
                "track": 9,
                "title": "We'll Be Fine",
                "duration": "3:30",
                "lyrics": "Full lyrics for We'll Be Fine by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of We'll Be Fine.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from We'll Be Fine",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_10",
                "track": 10,
                "title": "Make Me Proud",
                "duration": "3:30",
                "lyrics": "Full lyrics for Make Me Proud by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Make Me Proud.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Make Me Proud",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_11",
                "track": 11,
                "title": "Lord Knows",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lord Knows by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lord Knows.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lord Knows",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_12",
                "track": 12,
                "title": "Cameras / Good Ones Go Interlude",
                "duration": "3:30",
                "lyrics": "Full lyrics for Cameras / Good Ones Go Interlude by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Cameras / Good Ones Go Interlude.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Cameras / Good Ones Go Interlude",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_13",
                "track": 13,
                "title": "Doing It Wrong",
                "duration": "3:30",
                "lyrics": "Full lyrics for Doing It Wrong by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Doing It Wrong.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Doing It Wrong",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_14",
                "track": 14,
                "title": "The Real Her",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Real Her by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Real Her.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Real Her",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_15",
                "track": 15,
                "title": "Look What You've Done",
                "duration": "3:30",
                "lyrics": "Full lyrics for Look What You've Done by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Look What You've Done.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Look What You've Done",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_16",
                "track": 16,
                "title": "HYFR",
                "duration": "3:30",
                "lyrics": "Full lyrics for HYFR by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of HYFR.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from HYFR",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_17",
                "track": 17,
                "title": "Practice",
                "duration": "3:30",
                "lyrics": "Full lyrics for Practice by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Practice.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Practice",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_take_care_18",
                "track": 18,
                "title": "The Ride",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Ride by Drake from the album Take Care go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Ride.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Ride",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_36",
        "title": "Rodeo",
        "artist": "Travis Scott",
        "year": "2015",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1600003500000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_rodeo_1",
                "track": 1,
                "title": "Pornography",
                "duration": "3:30",
                "lyrics": "Full lyrics for Pornography by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Pornography.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Pornography",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_2",
                "track": 2,
                "title": "Oh My Dis Side",
                "duration": "3:30",
                "lyrics": "Full lyrics for Oh My Dis Side by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Oh My Dis Side.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Oh My Dis Side",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_3",
                "track": 3,
                "title": "3500",
                "duration": "3:30",
                "lyrics": "Full lyrics for 3500 by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of 3500.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from 3500",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_4",
                "track": 4,
                "title": "Wasted",
                "duration": "3:30",
                "lyrics": "Full lyrics for Wasted by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Wasted.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Wasted",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_5",
                "track": 5,
                "title": "90210",
                "duration": "3:30",
                "lyrics": "Full lyrics for 90210 by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of 90210.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from 90210",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_6",
                "track": 6,
                "title": "Pray 4 Love",
                "duration": "3:30",
                "lyrics": "Full lyrics for Pray 4 Love by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Pray 4 Love.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Pray 4 Love",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_7",
                "track": 7,
                "title": "Nightcrawler",
                "duration": "3:30",
                "lyrics": "Full lyrics for Nightcrawler by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Nightcrawler.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Nightcrawler",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_8",
                "track": 8,
                "title": "Piss On Your Grave",
                "duration": "3:30",
                "lyrics": "Full lyrics for Piss On Your Grave by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Piss On Your Grave.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Piss On Your Grave",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_9",
                "track": 9,
                "title": "Antidote",
                "duration": "3:30",
                "lyrics": "Full lyrics for Antidote by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Antidote.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Antidote",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_10",
                "track": 10,
                "title": "Impossible",
                "duration": "3:30",
                "lyrics": "Full lyrics for Impossible by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Impossible.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Impossible",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_11",
                "track": 11,
                "title": "Maria I'm Drunk",
                "duration": "3:30",
                "lyrics": "Full lyrics for Maria I'm Drunk by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Maria I'm Drunk.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Maria I'm Drunk",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_12",
                "track": 12,
                "title": "Flying High",
                "duration": "3:30",
                "lyrics": "Full lyrics for Flying High by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Flying High.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Flying High",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_13",
                "track": 13,
                "title": "I Can Tell",
                "duration": "3:30",
                "lyrics": "Full lyrics for I Can Tell by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I Can Tell.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I Can Tell",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_rodeo_14",
                "track": 14,
                "title": "Apple Pie",
                "duration": "3:30",
                "lyrics": "Full lyrics for Apple Pie by Travis Scott from the album Rodeo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Apple Pie.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Apple Pie",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_37",
        "title": "Norman Fucking Rockwell!",
        "artist": "Lana Del Rey",
        "year": "2019",
        "genre": "Pop",
        "cover": "https://images.unsplash.com/photo-1600003600000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_norman_fucking_rockwell!_1",
                "track": 1,
                "title": "Norman fucking Rockwell",
                "duration": "3:30",
                "lyrics": "Full lyrics for Norman fucking Rockwell by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Norman fucking Rockwell.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Norman fucking Rockwell",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_2",
                "track": 2,
                "title": "Mariners Apartment Complex",
                "duration": "3:30",
                "lyrics": "Full lyrics for Mariners Apartment Complex by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Mariners Apartment Complex.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Mariners Apartment Complex",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_3",
                "track": 3,
                "title": "Venice Bitch",
                "duration": "3:30",
                "lyrics": "Full lyrics for Venice Bitch by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Venice Bitch.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Venice Bitch",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_4",
                "track": 4,
                "title": "Fuck it I love you",
                "duration": "3:30",
                "lyrics": "Full lyrics for Fuck it I love you by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Fuck it I love you.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Fuck it I love you",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_5",
                "track": 5,
                "title": "Doin' Time",
                "duration": "3:30",
                "lyrics": "Full lyrics for Doin' Time by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Doin' Time.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Doin' Time",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_6",
                "track": 6,
                "title": "Love song",
                "duration": "3:30",
                "lyrics": "Full lyrics for Love song by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Love song.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Love song",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_7",
                "track": 7,
                "title": "Cinnamon Girl",
                "duration": "3:30",
                "lyrics": "Full lyrics for Cinnamon Girl by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Cinnamon Girl.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Cinnamon Girl",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_8",
                "track": 8,
                "title": "How to disappear",
                "duration": "3:30",
                "lyrics": "Full lyrics for How to disappear by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of How to disappear.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from How to disappear",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_9",
                "track": 9,
                "title": "California",
                "duration": "3:30",
                "lyrics": "Full lyrics for California by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of California.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from California",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_10",
                "track": 10,
                "title": "The Next Best American Record",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Next Best American Record by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Next Best American Record.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Next Best American Record",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_11",
                "track": 11,
                "title": "The Greatest",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Greatest by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Greatest.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Greatest",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_12",
                "track": 12,
                "title": "Bartender",
                "duration": "3:30",
                "lyrics": "Full lyrics for Bartender by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Bartender.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Bartender",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_13",
                "track": 13,
                "title": "Happiness is a butterfly",
                "duration": "3:30",
                "lyrics": "Full lyrics for Happiness is a butterfly by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Happiness is a butterfly.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Happiness is a butterfly",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_norman_fucking_rockwell!_14",
                "track": 14,
                "title": "Hope is a dangerous thing for a woman like me to have - but I have it",
                "duration": "3:30",
                "lyrics": "Full lyrics for Hope is a dangerous thing for a woman like me to have - but I have it by Lana Del Rey from the album Norman Fucking Rockwell! go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Hope is a dangerous thing for a woman like me to have - but I have it.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Hope is a dangerous thing for a woman like me to have - but I have it",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_38",
        "title": "Future Nostalgia",
        "artist": "Dua Lipa",
        "year": "2020",
        "genre": "Pop",
        "cover": "https://images.unsplash.com/photo-1600003700000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_future_nostalgia_1",
                "track": 1,
                "title": "Future Nostalgia",
                "duration": "3:30",
                "lyrics": "Full lyrics for Future Nostalgia by Dua Lipa from the album Future Nostalgia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Future Nostalgia.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Future Nostalgia",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_future_nostalgia_2",
                "track": 2,
                "title": "Don't Start Now",
                "duration": "3:30",
                "lyrics": "Full lyrics for Don't Start Now by Dua Lipa from the album Future Nostalgia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Don't Start Now.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Don't Start Now",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_future_nostalgia_3",
                "track": 3,
                "title": "Cool",
                "duration": "3:30",
                "lyrics": "Full lyrics for Cool by Dua Lipa from the album Future Nostalgia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Cool.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Cool",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_future_nostalgia_4",
                "track": 4,
                "title": "Physical",
                "duration": "3:30",
                "lyrics": "Full lyrics for Physical by Dua Lipa from the album Future Nostalgia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Physical.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Physical",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_future_nostalgia_5",
                "track": 5,
                "title": "Levitating",
                "duration": "3:30",
                "lyrics": "Full lyrics for Levitating by Dua Lipa from the album Future Nostalgia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Levitating.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Levitating",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_future_nostalgia_6",
                "track": 6,
                "title": "Pretty Please",
                "duration": "3:30",
                "lyrics": "Full lyrics for Pretty Please by Dua Lipa from the album Future Nostalgia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Pretty Please.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Pretty Please",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_future_nostalgia_7",
                "track": 7,
                "title": "Hallucinate",
                "duration": "3:30",
                "lyrics": "Full lyrics for Hallucinate by Dua Lipa from the album Future Nostalgia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Hallucinate.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Hallucinate",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_future_nostalgia_8",
                "track": 8,
                "title": "Love Again",
                "duration": "3:30",
                "lyrics": "Full lyrics for Love Again by Dua Lipa from the album Future Nostalgia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Love Again.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Love Again",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_future_nostalgia_9",
                "track": 9,
                "title": "Break My Heart",
                "duration": "3:30",
                "lyrics": "Full lyrics for Break My Heart by Dua Lipa from the album Future Nostalgia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Break My Heart.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Break My Heart",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_future_nostalgia_10",
                "track": 10,
                "title": "Good in Bed",
                "duration": "3:30",
                "lyrics": "Full lyrics for Good in Bed by Dua Lipa from the album Future Nostalgia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Good in Bed.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Good in Bed",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_future_nostalgia_11",
                "track": 11,
                "title": "Boys Will Be Boys",
                "duration": "3:30",
                "lyrics": "Full lyrics for Boys Will Be Boys by Dua Lipa from the album Future Nostalgia go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Boys Will Be Boys.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Boys Will Be Boys",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_39",
        "title": "Anti",
        "artist": "Rihanna",
        "year": "2016",
        "genre": "R&B/Pop",
        "cover": "https://images.unsplash.com/photo-1600003800000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_anti_1",
                "track": 1,
                "title": "Consideration",
                "duration": "3:30",
                "lyrics": "Full lyrics for Consideration by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Consideration.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Consideration",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_anti_2",
                "track": 2,
                "title": "James Joint",
                "duration": "3:30",
                "lyrics": "Full lyrics for James Joint by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of James Joint.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from James Joint",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_anti_3",
                "track": 3,
                "title": "Kiss It Better",
                "duration": "3:30",
                "lyrics": "Full lyrics for Kiss It Better by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Kiss It Better.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Kiss It Better",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_anti_4",
                "track": 4,
                "title": "Work",
                "duration": "3:30",
                "lyrics": "Full lyrics for Work by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Work.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Work",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_anti_5",
                "track": 5,
                "title": "Desperado",
                "duration": "3:30",
                "lyrics": "Full lyrics for Desperado by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Desperado.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Desperado",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_anti_6",
                "track": 6,
                "title": "Woo",
                "duration": "3:30",
                "lyrics": "Full lyrics for Woo by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Woo.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Woo",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_anti_7",
                "track": 7,
                "title": "Needed Me",
                "duration": "3:30",
                "lyrics": "Full lyrics for Needed Me by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Needed Me.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Needed Me",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_anti_8",
                "track": 8,
                "title": "Yeah I Said It",
                "duration": "3:30",
                "lyrics": "Full lyrics for Yeah I Said It by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Yeah I Said It.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Yeah I Said It",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_anti_9",
                "track": 9,
                "title": "Same Ol' Mistakes",
                "duration": "3:30",
                "lyrics": "Full lyrics for Same Ol' Mistakes by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Same Ol' Mistakes.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Same Ol' Mistakes",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_anti_10",
                "track": 10,
                "title": "Never Ending",
                "duration": "3:30",
                "lyrics": "Full lyrics for Never Ending by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Never Ending.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Never Ending",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_anti_11",
                "track": 11,
                "title": "Love on the Brain",
                "duration": "3:30",
                "lyrics": "Full lyrics for Love on the Brain by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Love on the Brain.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Love on the Brain",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_anti_12",
                "track": 12,
                "title": "Higher",
                "duration": "3:30",
                "lyrics": "Full lyrics for Higher by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Higher.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Higher",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_anti_13",
                "track": 13,
                "title": "Close to You",
                "duration": "3:30",
                "lyrics": "Full lyrics for Close to You by Rihanna from the album Anti go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Close to You.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Close to You",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_40",
        "title": "Man on the Moon",
        "artist": "Kid Cudi",
        "year": "2009",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1600003900000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_man_on_the_moon_1",
                "track": 1,
                "title": "In My Dreams",
                "duration": "3:30",
                "lyrics": "Full lyrics for In My Dreams by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of In My Dreams.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from In My Dreams",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_2",
                "track": 2,
                "title": "Soundtrack 2 My Life",
                "duration": "3:30",
                "lyrics": "Full lyrics for Soundtrack 2 My Life by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Soundtrack 2 My Life.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Soundtrack 2 My Life",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_3",
                "track": 3,
                "title": "Simple As...",
                "duration": "3:30",
                "lyrics": "Full lyrics for Simple As... by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Simple As....",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Simple As...",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_4",
                "track": 4,
                "title": "Solo Dolo",
                "duration": "3:30",
                "lyrics": "Full lyrics for Solo Dolo by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Solo Dolo.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Solo Dolo",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_5",
                "track": 5,
                "title": "Heart of a Lion",
                "duration": "3:30",
                "lyrics": "Full lyrics for Heart of a Lion by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Heart of a Lion.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Heart of a Lion",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_6",
                "track": 6,
                "title": "My World",
                "duration": "3:30",
                "lyrics": "Full lyrics for My World by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of My World.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from My World",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_7",
                "track": 7,
                "title": "Day 'n' Nite",
                "duration": "3:30",
                "lyrics": "Full lyrics for Day 'n' Nite by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Day 'n' Nite.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Day 'n' Nite",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_8",
                "track": 8,
                "title": "Sky Might Fall",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sky Might Fall by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sky Might Fall.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sky Might Fall",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_9",
                "track": 9,
                "title": "Enter Galactic",
                "duration": "3:30",
                "lyrics": "Full lyrics for Enter Galactic by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Enter Galactic.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Enter Galactic",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_10",
                "track": 10,
                "title": "Alive",
                "duration": "3:30",
                "lyrics": "Full lyrics for Alive by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Alive.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Alive",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_11",
                "track": 11,
                "title": "Cudi Zone",
                "duration": "3:30",
                "lyrics": "Full lyrics for Cudi Zone by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Cudi Zone.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Cudi Zone",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_12",
                "track": 12,
                "title": "Make Her Say",
                "duration": "3:30",
                "lyrics": "Full lyrics for Make Her Say by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Make Her Say.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Make Her Say",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_13",
                "track": 13,
                "title": "Pursuit of Happiness",
                "duration": "3:30",
                "lyrics": "Full lyrics for Pursuit of Happiness by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Pursuit of Happiness.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Pursuit of Happiness",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_14",
                "track": 14,
                "title": "Hyyerr",
                "duration": "3:30",
                "lyrics": "Full lyrics for Hyyerr by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Hyyerr.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Hyyerr",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_15",
                "track": 15,
                "title": "Up Up & Away",
                "duration": "3:30",
                "lyrics": "Full lyrics for Up Up & Away by Kid Cudi from the album Man on the Moon go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Up Up & Away.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Up Up & Away",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_41",
        "title": "Circles",
        "artist": "Mac Miller",
        "year": "2020",
        "genre": "Hip-Hop/Soul",
        "cover": "https://images.unsplash.com/photo-1600004000000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_circles_1",
                "track": 1,
                "title": "Circles",
                "duration": "3:30",
                "lyrics": "Full lyrics for Circles by Mac Miller from the album Circles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Circles.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Circles",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_circles_2",
                "track": 2,
                "title": "Complicated",
                "duration": "3:30",
                "lyrics": "Full lyrics for Complicated by Mac Miller from the album Circles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Complicated.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Complicated",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_circles_3",
                "track": 3,
                "title": "Blue World",
                "duration": "3:30",
                "lyrics": "Full lyrics for Blue World by Mac Miller from the album Circles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Blue World.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Blue World",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_circles_4",
                "track": 4,
                "title": "Good News",
                "duration": "3:30",
                "lyrics": "Full lyrics for Good News by Mac Miller from the album Circles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Good News.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Good News",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_circles_5",
                "track": 5,
                "title": "I Can See",
                "duration": "3:30",
                "lyrics": "Full lyrics for I Can See by Mac Miller from the album Circles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I Can See.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I Can See",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_circles_6",
                "track": 6,
                "title": "Everybody",
                "duration": "3:30",
                "lyrics": "Full lyrics for Everybody by Mac Miller from the album Circles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Everybody.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Everybody",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_circles_7",
                "track": 7,
                "title": "Woods",
                "duration": "3:30",
                "lyrics": "Full lyrics for Woods by Mac Miller from the album Circles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Woods.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Woods",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_circles_8",
                "track": 8,
                "title": "Hand Me Downs",
                "duration": "3:30",
                "lyrics": "Full lyrics for Hand Me Downs by Mac Miller from the album Circles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Hand Me Downs.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Hand Me Downs",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_circles_9",
                "track": 9,
                "title": "That's on Me",
                "duration": "3:30",
                "lyrics": "Full lyrics for That's on Me by Mac Miller from the album Circles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of That's on Me.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from That's on Me",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_circles_10",
                "track": 10,
                "title": "Hands",
                "duration": "3:30",
                "lyrics": "Full lyrics for Hands by Mac Miller from the album Circles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Hands.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Hands",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_circles_11",
                "track": 11,
                "title": "Surf",
                "duration": "3:30",
                "lyrics": "Full lyrics for Surf by Mac Miller from the album Circles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Surf.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Surf",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_circles_12",
                "track": 12,
                "title": "Once a Day",
                "duration": "3:30",
                "lyrics": "Full lyrics for Once a Day by Mac Miller from the album Circles go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Once a Day.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Once a Day",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_42",
        "title": "Swimming",
        "artist": "Mac Miller",
        "year": "2018",
        "genre": "Hip-Hop/Soul",
        "cover": "https://images.unsplash.com/photo-1600004100000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_swimming_1",
                "track": 1,
                "title": "Come Back to Earth",
                "duration": "3:30",
                "lyrics": "Full lyrics for Come Back to Earth by Mac Miller from the album Swimming go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Come Back to Earth.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Come Back to Earth",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_swimming_2",
                "track": 2,
                "title": "Hurt Feelings",
                "duration": "3:30",
                "lyrics": "Full lyrics for Hurt Feelings by Mac Miller from the album Swimming go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Hurt Feelings.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Hurt Feelings",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_swimming_3",
                "track": 3,
                "title": "What's the Use?",
                "duration": "3:30",
                "lyrics": "Full lyrics for What's the Use? by Mac Miller from the album Swimming go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of What's the Use?.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from What's the Use?",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_swimming_4",
                "track": 4,
                "title": "Perfect Circle / God Speed",
                "duration": "3:30",
                "lyrics": "Full lyrics for Perfect Circle / God Speed by Mac Miller from the album Swimming go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Perfect Circle / God Speed.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Perfect Circle / God Speed",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_swimming_5",
                "track": 5,
                "title": "Small Worlds",
                "duration": "3:30",
                "lyrics": "Full lyrics for Small Worlds by Mac Miller from the album Swimming go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Small Worlds.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Small Worlds",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_swimming_6",
                "track": 6,
                "title": "Self Care",
                "duration": "3:30",
                "lyrics": "Full lyrics for Self Care by Mac Miller from the album Swimming go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Self Care.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Self Care",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_swimming_7",
                "track": 7,
                "title": "Ladders",
                "duration": "3:30",
                "lyrics": "Full lyrics for Ladders by Mac Miller from the album Swimming go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Ladders.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Ladders",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_swimming_8",
                "track": 8,
                "title": "Jet Fuel",
                "duration": "3:30",
                "lyrics": "Full lyrics for Jet Fuel by Mac Miller from the album Swimming go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Jet Fuel.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Jet Fuel",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_swimming_9",
                "track": 9,
                "title": "2009",
                "duration": "3:30",
                "lyrics": "Full lyrics for 2009 by Mac Miller from the album Swimming go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of 2009.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from 2009",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_swimming_10",
                "track": 10,
                "title": "So It Goes",
                "duration": "3:30",
                "lyrics": "Full lyrics for So It Goes by Mac Miller from the album Swimming go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of So It Goes.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from So It Goes",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_43",
        "title": "Man On The Moon III",
        "artist": "Kid Cudi",
        "year": "2020",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1600004200000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_man_on_the_moon_iii_1",
                "track": 1,
                "title": "Beautiful Trip",
                "duration": "3:30",
                "lyrics": "Full lyrics for Beautiful Trip by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Beautiful Trip.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Beautiful Trip",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_2",
                "track": 2,
                "title": "Tequila Shots",
                "duration": "3:30",
                "lyrics": "Full lyrics for Tequila Shots by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Tequila Shots.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Tequila Shots",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_3",
                "track": 3,
                "title": "Another Day",
                "duration": "3:30",
                "lyrics": "Full lyrics for Another Day by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Another Day.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Another Day",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_4",
                "track": 4,
                "title": "She Knows This",
                "duration": "3:30",
                "lyrics": "Full lyrics for She Knows This by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of She Knows This.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from She Knows This",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_5",
                "track": 5,
                "title": "Dive",
                "duration": "3:30",
                "lyrics": "Full lyrics for Dive by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Dive.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Dive",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_6",
                "track": 6,
                "title": "Damaged",
                "duration": "3:30",
                "lyrics": "Full lyrics for Damaged by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Damaged.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Damaged",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_7",
                "track": 7,
                "title": "Heaven on Earth",
                "duration": "3:30",
                "lyrics": "Full lyrics for Heaven on Earth by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Heaven on Earth.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Heaven on Earth",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_8",
                "track": 8,
                "title": "Show Out",
                "duration": "3:30",
                "lyrics": "Full lyrics for Show Out by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Show Out.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Show Out",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_9",
                "track": 9,
                "title": "Solo Dolo Pt. III",
                "duration": "3:30",
                "lyrics": "Full lyrics for Solo Dolo Pt. III by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Solo Dolo Pt. III.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Solo Dolo Pt. III",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_10",
                "track": 10,
                "title": "Sad People",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sad People by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sad People.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sad People",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_11",
                "track": 11,
                "title": "Elsie's Baby Boy",
                "duration": "3:30",
                "lyrics": "Full lyrics for Elsie's Baby Boy by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Elsie's Baby Boy.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Elsie's Baby Boy",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_12",
                "track": 12,
                "title": "Sept. 16",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sept. 16 by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sept. 16.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sept. 16",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_13",
                "track": 13,
                "title": "The Void",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Void by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Void.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Void",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_14",
                "track": 14,
                "title": "Lovin' Me",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lovin' Me by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lovin' Me.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lovin' Me",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_15",
                "track": 15,
                "title": "The Pale Moonlight",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Pale Moonlight by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Pale Moonlight.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Pale Moonlight",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_16",
                "track": 16,
                "title": "Rockstar Knights",
                "duration": "3:30",
                "lyrics": "Full lyrics for Rockstar Knights by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Rockstar Knights.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Rockstar Knights",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_17",
                "track": 17,
                "title": "4 Da Kidz",
                "duration": "3:30",
                "lyrics": "Full lyrics for 4 Da Kidz by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of 4 Da Kidz.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from 4 Da Kidz",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_man_on_the_moon_iii_18",
                "track": 18,
                "title": "Lord I Know",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lord I Know by Kid Cudi from the album Man On The Moon III go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lord I Know.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lord I Know",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_44",
        "title": "Heroes & Villains",
        "artist": "Metro Boomin",
        "year": "2022",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1600004300000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_heroes_&_villains_1",
                "track": 1,
                "title": "On Time",
                "duration": "3:30",
                "lyrics": "Full lyrics for On Time by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of On Time.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from On Time",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_2",
                "track": 2,
                "title": "Superhero",
                "duration": "3:30",
                "lyrics": "Full lyrics for Superhero by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Superhero.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Superhero",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_3",
                "track": 3,
                "title": "Too Many Nights",
                "duration": "3:30",
                "lyrics": "Full lyrics for Too Many Nights by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Too Many Nights.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Too Many Nights",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_4",
                "track": 4,
                "title": "Raindrops",
                "duration": "3:30",
                "lyrics": "Full lyrics for Raindrops by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Raindrops.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Raindrops",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_5",
                "track": 5,
                "title": "Umbrellas",
                "duration": "3:30",
                "lyrics": "Full lyrics for Umbrellas by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Umbrellas.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Umbrellas",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_6",
                "track": 6,
                "title": "Trance",
                "duration": "3:30",
                "lyrics": "Full lyrics for Trance by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Trance.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Trance",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_7",
                "track": 7,
                "title": "Around Me",
                "duration": "3:30",
                "lyrics": "Full lyrics for Around Me by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Around Me.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Around Me",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_8",
                "track": 8,
                "title": "Metro Spider",
                "duration": "3:30",
                "lyrics": "Full lyrics for Metro Spider by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Metro Spider.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Metro Spider",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_9",
                "track": 9,
                "title": "I Can't Save You",
                "duration": "3:30",
                "lyrics": "Full lyrics for I Can't Save You by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I Can't Save You.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I Can't Save You",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_10",
                "track": 10,
                "title": "Creepin'",
                "duration": "3:30",
                "lyrics": "Full lyrics for Creepin' by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Creepin'.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Creepin'",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_11",
                "track": 11,
                "title": "Niagara Falls",
                "duration": "3:30",
                "lyrics": "Full lyrics for Niagara Falls by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Niagara Falls.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Niagara Falls",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_12",
                "track": 12,
                "title": "Walk Em Down",
                "duration": "3:30",
                "lyrics": "Full lyrics for Walk Em Down by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Walk Em Down.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Walk Em Down",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_13",
                "track": 13,
                "title": "Lock on Me",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lock on Me by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lock on Me.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lock on Me",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_heroes_&_villains_14",
                "track": 14,
                "title": "All the Money",
                "duration": "3:30",
                "lyrics": "Full lyrics for All the Money by Metro Boomin from the album Heroes & Villains go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of All the Money.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from All the Money",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_45",
        "title": "Savage Mode II",
        "artist": "21 Savage & Metro Boomin",
        "year": "2020",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1600004400000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_savage_mode_ii_1",
                "track": 1,
                "title": "Intro",
                "duration": "3:30",
                "lyrics": "Full lyrics for Intro by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Intro.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Intro",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_savage_mode_ii_2",
                "track": 2,
                "title": "Runnin",
                "duration": "3:30",
                "lyrics": "Full lyrics for Runnin by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Runnin.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Runnin",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_savage_mode_ii_3",
                "track": 3,
                "title": "Glock in My Lap",
                "duration": "3:30",
                "lyrics": "Full lyrics for Glock in My Lap by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Glock in My Lap.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Glock in My Lap",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_savage_mode_ii_4",
                "track": 4,
                "title": "Mr. Right Now",
                "duration": "3:30",
                "lyrics": "Full lyrics for Mr. Right Now by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Mr. Right Now.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Mr. Right Now",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_savage_mode_ii_5",
                "track": 5,
                "title": "Rich Nigga Shit",
                "duration": "3:30",
                "lyrics": "Full lyrics for Rich Nigga Shit by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Rich Nigga Shit.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Rich Nigga Shit",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_savage_mode_ii_6",
                "track": 6,
                "title": "Slidin",
                "duration": "3:30",
                "lyrics": "Full lyrics for Slidin by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Slidin.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Slidin",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_savage_mode_ii_7",
                "track": 7,
                "title": "Many Men",
                "duration": "3:30",
                "lyrics": "Full lyrics for Many Men by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Many Men.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Many Men",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_savage_mode_ii_8",
                "track": 8,
                "title": "Snitches & Rats",
                "duration": "3:30",
                "lyrics": "Full lyrics for Snitches & Rats by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Snitches & Rats.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Snitches & Rats",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_savage_mode_ii_9",
                "track": 9,
                "title": "Steppin on Niggas",
                "duration": "3:30",
                "lyrics": "Full lyrics for Steppin on Niggas by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Steppin on Niggas.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Steppin on Niggas",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_savage_mode_ii_10",
                "track": 10,
                "title": "Brand New Draco",
                "duration": "3:30",
                "lyrics": "Full lyrics for Brand New Draco by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Brand New Draco.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Brand New Draco",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_savage_mode_ii_11",
                "track": 11,
                "title": "No Opp Left Behind",
                "duration": "3:30",
                "lyrics": "Full lyrics for No Opp Left Behind by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of No Opp Left Behind.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from No Opp Left Behind",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_savage_mode_ii_12",
                "track": 12,
                "title": "RIP Luv",
                "duration": "3:30",
                "lyrics": "Full lyrics for RIP Luv by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of RIP Luv.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from RIP Luv",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_savage_mode_ii_13",
                "track": 13,
                "title": "Said N Done",
                "duration": "3:30",
                "lyrics": "Full lyrics for Said N Done by 21 Savage & Metro Boomin from the album Savage Mode II go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Said N Done.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Said N Done",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_46",
        "title": "The Divine Feminine",
        "artist": "Mac Miller",
        "year": "2016",
        "genre": "Hip-Hop/Jazz",
        "cover": "https://images.unsplash.com/photo-1600004500000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_the_divine_feminine_1",
                "track": 1,
                "title": "Congratulations",
                "duration": "3:30",
                "lyrics": "Full lyrics for Congratulations by Mac Miller from the album The Divine Feminine go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Congratulations.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Congratulations",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_divine_feminine_2",
                "track": 2,
                "title": "Dang!",
                "duration": "3:30",
                "lyrics": "Full lyrics for Dang! by Mac Miller from the album The Divine Feminine go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Dang!.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Dang!",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_divine_feminine_3",
                "track": 3,
                "title": "Stay",
                "duration": "3:30",
                "lyrics": "Full lyrics for Stay by Mac Miller from the album The Divine Feminine go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Stay.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Stay",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_divine_feminine_4",
                "track": 4,
                "title": "Skin",
                "duration": "3:30",
                "lyrics": "Full lyrics for Skin by Mac Miller from the album The Divine Feminine go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Skin.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Skin",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_divine_feminine_5",
                "track": 5,
                "title": "Cinderella",
                "duration": "3:30",
                "lyrics": "Full lyrics for Cinderella by Mac Miller from the album The Divine Feminine go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Cinderella.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Cinderella",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_divine_feminine_6",
                "track": 6,
                "title": "Planet God Damn",
                "duration": "3:30",
                "lyrics": "Full lyrics for Planet God Damn by Mac Miller from the album The Divine Feminine go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Planet God Damn.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Planet God Damn",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_divine_feminine_7",
                "track": 7,
                "title": "Soulmate",
                "duration": "3:30",
                "lyrics": "Full lyrics for Soulmate by Mac Miller from the album The Divine Feminine go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Soulmate.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Soulmate",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_divine_feminine_8",
                "track": 8,
                "title": "We",
                "duration": "3:30",
                "lyrics": "Full lyrics for We by Mac Miller from the album The Divine Feminine go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of We.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from We",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_divine_feminine_9",
                "track": 9,
                "title": "My Favorite Part",
                "duration": "3:30",
                "lyrics": "Full lyrics for My Favorite Part by Mac Miller from the album The Divine Feminine go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of My Favorite Part.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from My Favorite Part",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_divine_feminine_10",
                "track": 10,
                "title": "God Is Fair Sexy Nasty",
                "duration": "3:30",
                "lyrics": "Full lyrics for God Is Fair Sexy Nasty by Mac Miller from the album The Divine Feminine go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of God Is Fair Sexy Nasty.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from God Is Fair Sexy Nasty",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_47",
        "title": "Free 6LACK",
        "artist": "6LACK",
        "year": "2016",
        "genre": "R&B/Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1600004600000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_free_6lack_1",
                "track": 1,
                "title": "Never Know",
                "duration": "3:30",
                "lyrics": "Full lyrics for Never Know by 6LACK from the album Free 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Never Know.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Never Know",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_free_6lack_2",
                "track": 2,
                "title": "Rules",
                "duration": "3:30",
                "lyrics": "Full lyrics for Rules by 6LACK from the album Free 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Rules.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Rules",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_free_6lack_3",
                "track": 3,
                "title": "PRBLMS",
                "duration": "3:30",
                "lyrics": "Full lyrics for PRBLMS by 6LACK from the album Free 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of PRBLMS.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from PRBLMS",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_free_6lack_4",
                "track": 4,
                "title": "Free",
                "duration": "3:30",
                "lyrics": "Full lyrics for Free by 6LACK from the album Free 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Free.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Free",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_free_6lack_5",
                "track": 5,
                "title": "Worst Luck",
                "duration": "3:30",
                "lyrics": "Full lyrics for Worst Luck by 6LACK from the album Free 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Worst Luck.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Worst Luck",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_free_6lack_6",
                "track": 6,
                "title": "Ex Calling",
                "duration": "3:30",
                "lyrics": "Full lyrics for Ex Calling by 6LACK from the album Free 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Ex Calling.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Ex Calling",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_free_6lack_7",
                "track": 7,
                "title": "Alone / EA6",
                "duration": "3:30",
                "lyrics": "Full lyrics for Alone / EA6 by 6LACK from the album Free 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Alone / EA6.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Alone / EA6",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_free_6lack_8",
                "track": 8,
                "title": "MTFU",
                "duration": "3:30",
                "lyrics": "Full lyrics for MTFU by 6LACK from the album Free 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of MTFU.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from MTFU",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_free_6lack_9",
                "track": 9,
                "title": "Luving U",
                "duration": "3:30",
                "lyrics": "Full lyrics for Luving U by 6LACK from the album Free 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Luving U.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Luving U",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_free_6lack_10",
                "track": 10,
                "title": "One Way",
                "duration": "3:30",
                "lyrics": "Full lyrics for One Way by 6LACK from the album Free 6LACK go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of One Way.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from One Way",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_48",
        "title": "The Miseducation of Lauryn Hill",
        "artist": "Lauryn Hill",
        "year": "1998",
        "genre": "R&B/Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1600004700000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_the_miseducation_of_lauryn_hill_1",
                "track": 1,
                "title": "Intro",
                "duration": "3:30",
                "lyrics": "Full lyrics for Intro by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Intro.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Intro",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_2",
                "track": 2,
                "title": "Lost Ones",
                "duration": "3:30",
                "lyrics": "Full lyrics for Lost Ones by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Lost Ones.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Lost Ones",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_3",
                "track": 3,
                "title": "Ex-Factor",
                "duration": "3:30",
                "lyrics": "Full lyrics for Ex-Factor by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Ex-Factor.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Ex-Factor",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_4",
                "track": 4,
                "title": "To Zion",
                "duration": "3:30",
                "lyrics": "Full lyrics for To Zion by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of To Zion.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from To Zion",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_5",
                "track": 5,
                "title": "Doo Wop (That Thing)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Doo Wop (That Thing) by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Doo Wop (That Thing).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Doo Wop (That Thing)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_6",
                "track": 6,
                "title": "Superstar",
                "duration": "3:30",
                "lyrics": "Full lyrics for Superstar by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Superstar.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Superstar",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_7",
                "track": 7,
                "title": "Final Hour",
                "duration": "3:30",
                "lyrics": "Full lyrics for Final Hour by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Final Hour.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Final Hour",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_8",
                "track": 8,
                "title": "When It Hurts So Bad",
                "duration": "3:30",
                "lyrics": "Full lyrics for When It Hurts So Bad by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of When It Hurts So Bad.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from When It Hurts So Bad",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_9",
                "track": 9,
                "title": "I Used to Love Him",
                "duration": "3:30",
                "lyrics": "Full lyrics for I Used to Love Him by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of I Used to Love Him.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from I Used to Love Him",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_10",
                "track": 10,
                "title": "Forgive Them Father",
                "duration": "3:30",
                "lyrics": "Full lyrics for Forgive Them Father by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Forgive Them Father.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Forgive Them Father",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_11",
                "track": 11,
                "title": "Every Ghetto, Every City",
                "duration": "3:30",
                "lyrics": "Full lyrics for Every Ghetto, Every City by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Every Ghetto, Every City.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Every Ghetto, Every City",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_12",
                "track": 12,
                "title": "Nothing Even Matters",
                "duration": "3:30",
                "lyrics": "Full lyrics for Nothing Even Matters by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Nothing Even Matters.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Nothing Even Matters",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_13",
                "track": 13,
                "title": "Everything Is Everything",
                "duration": "3:30",
                "lyrics": "Full lyrics for Everything Is Everything by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Everything Is Everything.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Everything Is Everything",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_the_miseducation_of_lauryn_hill_14",
                "track": 14,
                "title": "The Miseducation of Lauryn Hill",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Miseducation of Lauryn Hill by Lauryn Hill from the album The Miseducation of Lauryn Hill go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Miseducation of Lauryn Hill.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Miseducation of Lauryn Hill",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_49",
        "title": "Voodoo",
        "artist": "D'Angelo",
        "year": "2000",
        "genre": "Neo Soul",
        "cover": "https://images.unsplash.com/photo-1600004800000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_voodoo_1",
                "track": 1,
                "title": "Playa Playa",
                "duration": "3:30",
                "lyrics": "Full lyrics for Playa Playa by D'Angelo from the album Voodoo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Playa Playa.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Playa Playa",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_voodoo_2",
                "track": 2,
                "title": "Feel Like Makin' Love",
                "duration": "3:30",
                "lyrics": "Full lyrics for Feel Like Makin' Love by D'Angelo from the album Voodoo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Feel Like Makin' Love.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Feel Like Makin' Love",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_voodoo_3",
                "track": 3,
                "title": "Chicken Grease",
                "duration": "3:30",
                "lyrics": "Full lyrics for Chicken Grease by D'Angelo from the album Voodoo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Chicken Grease.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Chicken Grease",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_voodoo_4",
                "track": 4,
                "title": "One Mo'Gin",
                "duration": "3:30",
                "lyrics": "Full lyrics for One Mo'Gin by D'Angelo from the album Voodoo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of One Mo'Gin.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from One Mo'Gin",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_voodoo_5",
                "track": 5,
                "title": "The Root",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Root by D'Angelo from the album Voodoo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Root.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Root",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_voodoo_6",
                "track": 6,
                "title": "Spanish Joint",
                "duration": "3:30",
                "lyrics": "Full lyrics for Spanish Joint by D'Angelo from the album Voodoo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Spanish Joint.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Spanish Joint",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_voodoo_7",
                "track": 7,
                "title": "Send It On",
                "duration": "3:30",
                "lyrics": "Full lyrics for Send It On by D'Angelo from the album Voodoo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Send It On.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Send It On",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_voodoo_8",
                "track": 8,
                "title": "Untitled (How Does It Feel)",
                "duration": "3:30",
                "lyrics": "Full lyrics for Untitled (How Does It Feel) by D'Angelo from the album Voodoo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Untitled (How Does It Feel).",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Untitled (How Does It Feel)",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_voodoo_9",
                "track": 9,
                "title": "Africa",
                "duration": "3:30",
                "lyrics": "Full lyrics for Africa by D'Angelo from the album Voodoo go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Africa.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Africa",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    },
    {
        "id": "alb_50",
        "title": "Madvillainy",
        "artist": "Madvillain",
        "year": "2004",
        "genre": "Hip-Hop",
        "cover": "https://images.unsplash.com/photo-1600004900000?w=500&h=500&fit=crop",
        "songs": [
            {
                "id": "s_madvillainy_1",
                "track": 1,
                "title": "The Illest Villains",
                "duration": "3:30",
                "lyrics": "Full lyrics for The Illest Villains by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of The Illest Villains.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from The Illest Villains",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_2",
                "track": 2,
                "title": "Accordion",
                "duration": "3:30",
                "lyrics": "Full lyrics for Accordion by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Accordion.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Accordion",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_3",
                "track": 3,
                "title": "Meat Grinder",
                "duration": "3:30",
                "lyrics": "Full lyrics for Meat Grinder by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Meat Grinder.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Meat Grinder",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_4",
                "track": 4,
                "title": "Bistro",
                "duration": "3:30",
                "lyrics": "Full lyrics for Bistro by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Bistro.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Bistro",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_5",
                "track": 5,
                "title": "Raid",
                "duration": "3:30",
                "lyrics": "Full lyrics for Raid by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Raid.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Raid",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_6",
                "track": 6,
                "title": "America's Most Blunted",
                "duration": "3:30",
                "lyrics": "Full lyrics for America's Most Blunted by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of America's Most Blunted.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from America's Most Blunted",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_7",
                "track": 7,
                "title": "Sickfit",
                "duration": "3:30",
                "lyrics": "Full lyrics for Sickfit by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Sickfit.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Sickfit",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_8",
                "track": 8,
                "title": "Rainbows",
                "duration": "3:30",
                "lyrics": "Full lyrics for Rainbows by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Rainbows.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Rainbows",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_9",
                "track": 9,
                "title": "Curls",
                "duration": "3:30",
                "lyrics": "Full lyrics for Curls by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Curls.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Curls",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_10",
                "track": 10,
                "title": "Do Not Fire!",
                "duration": "3:30",
                "lyrics": "Full lyrics for Do Not Fire! by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Do Not Fire!.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Do Not Fire!",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_11",
                "track": 11,
                "title": "Money Folder",
                "duration": "3:30",
                "lyrics": "Full lyrics for Money Folder by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Money Folder.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Money Folder",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_12",
                "track": 12,
                "title": "Shadows of Tomorrow",
                "duration": "3:30",
                "lyrics": "Full lyrics for Shadows of Tomorrow by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Shadows of Tomorrow.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Shadows of Tomorrow",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_13",
                "track": 13,
                "title": "Operation Lifesaver",
                "duration": "3:30",
                "lyrics": "Full lyrics for Operation Lifesaver by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Operation Lifesaver.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Operation Lifesaver",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_14",
                "track": 14,
                "title": "Figaro",
                "duration": "3:30",
                "lyrics": "Full lyrics for Figaro by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Figaro.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Figaro",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_15",
                "track": 15,
                "title": "Hardcore Hustle",
                "duration": "3:30",
                "lyrics": "Full lyrics for Hardcore Hustle by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Hardcore Hustle.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Hardcore Hustle",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_16",
                "track": 16,
                "title": "Strange Ways",
                "duration": "3:30",
                "lyrics": "Full lyrics for Strange Ways by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Strange Ways.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Strange Ways",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_17",
                "track": 17,
                "title": "Fancy Clown",
                "duration": "3:30",
                "lyrics": "Full lyrics for Fancy Clown by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Fancy Clown.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Fancy Clown",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_18",
                "track": 18,
                "title": "Eye",
                "duration": "3:30",
                "lyrics": "Full lyrics for Eye by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Eye.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Eye",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_19",
                "track": 19,
                "title": "Supervillain Theme",
                "duration": "3:30",
                "lyrics": "Full lyrics for Supervillain Theme by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Supervillain Theme.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Supervillain Theme",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_20",
                "track": 20,
                "title": "All Caps",
                "duration": "3:30",
                "lyrics": "Full lyrics for All Caps by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of All Caps.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from All Caps",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_21",
                "track": 21,
                "title": "Great Day",
                "duration": "3:30",
                "lyrics": "Full lyrics for Great Day by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Great Day.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Great Day",
                        "explanation": "Analysis of the theme."
                    }
                ]
            },
            {
                "id": "s_madvillainy_22",
                "track": 22,
                "title": "Rhinestone Cowboy",
                "duration": "3:30",
                "lyrics": "Full lyrics for Rhinestone Cowboy by Madvillain from the album Madvillainy go here.\nThey are uncut and represent the full artistic expression of the track.\nIt continues for many lines to show depth.\nLine 4\nLine 5\nLine 6...",
                "interpretation": "A deep dive into the meaning and cultural impact of Rhinestone Cowboy.",
                "themes": [
                    "Themes"
                ],
                "mood": [
                    "Mood"
                ],
                "key_lines": [
                    {
                        "line": "Key lyrics from Rhinestone Cowboy",
                        "explanation": "Analysis of the theme."
                    }
                ]
            }
        ]
    }
];

const INITIAL_DATA = {
    albums: STARTER_ALBUMS,
    reviews: {
        albums: [],
        songs: []
    },
    favorites: {
        albums: [],
        songs: []
    }
};
