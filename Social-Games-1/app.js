// Game dataset with closely related word pairs
const WORD_DATASET = {
    Anime: [
        { word1: "Naruto Uzumaki", word2: "Sasuke Uchiha" },
        { word1: "Monkey D. Luffy", word2: "Roronoa Zoro" },
        { word1: "Ichigo Kurosaki", word2: "Uryu Ishida" },
        { word1: "Asta", word2: "Yuno" },
        { word1: "Izuku Midoriya", word2: "Katsuki Bakugo" },
        { word1: "Rasengan", word2: "Chidori" },
        { word1: "Gum-Gum Pistol", word2: "Oni Giri" },
        { word1: "Getsuga Tensho", word2: "Licht Regen" },
        { word1: "Detroit Smash", word2: "Howitzer Impact" },
        { word1: "Black Meteorite", word2: "Spirit Storm" },
        { word1: "Kakashi Hatake", word2: "Might Guy" },
        { word1: "Portgas D. Ace", word2: "Sabo" },
        { word1: "Rukia Kuchiki", word2: "Renji Abarai" },
        { word1: "Yami Sukehiro", word2: "William Vangeance" },
        { word1: "Shoto Todoroki", word2: "Eijiro Kirishima" },
        { word1: "Lightning Blade", word2: "Night Guy" },
        { word1: "Fire Fist", word2: "Flame Dragon King" },
        { word1: "Sode no Shirayuki", word2: "Zabimaru" },
        { word1: "Dark Cloaked Avidya Slash", "word2": "Magic Castle" },
        { word1: "Flashing Fist Heat", word2: "Red Counter" },
        { word1: "Jiraiya", word2: "Orochimaru" },
        { word1: "Sanji", word2: "Vinsmoke Judge" },
        { word1: "Sosuke Aizen", word2: "Kisuke Urahara" },
        { word1: "Noelle Silva", word2: "Mimosa Vermillion" },
        { word1: "All Might", word2: "Endeavor" },
        { word1: "Massive Rasengan", word2: "Eight Branches Technique" },
        { word1: "Diable Jambe", word2: "Poison Pink" },
        { word1: "Kyoka Suigetsu", word2: "Benihime" },
        { word1: "Sea Dragon's Roar", word2: "Flower Cannon" },
        { word1: "United States of Smash", word2: "Prominence Burn" },
        { word1: "Minato Namikaze", word2: "Tobirama Senju" },
        { word1: "Shanks", word2: "Dracule Mihawk" },
        { word1: "Byakuya Kuchiki", word2: "Kenpachi Zaraki" },
        { word1: "Fuegoleon Vermillion", word2: "Nozel Silva" },
        { word1: "Tomura Shigaraki", word2: "All For One" },
        { word1: "Flying Raijin", word2: "Water Dragon Bullet" },
        { word1: "Divine Departure", word2: "Black Blade Slash" },
        { word1: "Senbonzakura Kageyoshi", word2: "Nozarashi" },
        { word1: "Leo Rugiens", word2: "Silver Rain" },
        { word1: "Decay", word2: "Impact Recoil" },
        { word1: "Hashirama Senju", word2: "Madara Uchiha" },
        { word1: "Gol D. Roger", word2: "Whitebeard" },
        { word1: "Toshiro Hitsugaya", word2: "Rangiku Matsumoto" },
        { word1: "Mereoleona Vermillion", word2: "Rhya" },
        { word1: "Mirio Togata", word2: "Tamaki Amajiki" },
        { word1: "Wood Dragon Technique", word2: "Shattered Heaven" },
        { word1: "Kamusari", word2: "Sea Quake" },
        { word1: "Hyorinmaru", word2: "Haineko" },
        { word1: "Calidus Brachium", word2: "Copy Magic" },
        { word1: "Phantom Menace", word2: "Vast Hybrid" },
        { word1: "Gaara", "word2": "Rock Lee" },
        { word1: "Trafalgar Law", word2: "Eustass Kid" },
        { word1: "Grimmjow Jaegerjaquez", word2: "Ulquiorra Cifer" },
        { word1: "Magna Swing", word2: "Luck Voltia" },
        { word1: "Ochaco Uraraka", word2: "Tsuyu Asui" },
        { word1: "Sand Tsunami", word2: "Hidden Lotus" },
        { word1: "Gamma Knife", word2: "Punk Gibson" },
        { word1: "Desgarron", word2: "Lanza del Relampago" },
        { word1: "Soul Chain Death Match", word2: "Thunderclap Crumble" },
        { word1: "Meteor Frive", "word2": "Meteor Squall" },
        { word1: "Itachi Uchiha", word2: "Kisame Hoshigaki" },
        { word1: "Nico Robin", word2: "Tony Tony Chopper" },
        { word1: "Shunsui Kyoraku", word2: "Jushiro Ukitake" },
        { word1: "Julius Novachrono", word2: "Patolli" },
        { word1: "Dabi", "word2": "Himiko Toga" },
        { word1: "Amaterasu", word2: "Water Shark Shot" },
        { word1: "Mil Fleur", word2: "Monster Point" },
        { word1: "Katen Kyokotsu", word2: "Sogyo no Kotowari" },
        { word1: "Chrono Anastasis", word2: "Light Swords of Judgment" },
        { word1: "Flashfire Fist", word2: "Sadistic Blade" },
        { word1: "Shikamaru Nara", word2: "Choji Akimichi" },
        { word1: "Brook", "word2": "Franky" },
        { word1: "Yoruichi Shihoin", word2: "Soi Fon" },
        { word1: "Zora Ideale", word2: "Nacht Faust" },
        { word1: "Stain", "word2": "Tenya Iida" },
        { word1: "Shadow Possession", word2: "Human Bullet Tank" },
        { word1: "Hanauta Sancho", word2: "Radical Beam" },
        { word1: "Shunko", "word2": "Suzumebachi" },
        { word1: "Ash Magic Trap", word2: "Shadow Invitation" },
        { word1: "Bloodcurdle", "word2": "Recipro Burst" },
        { word1: "Obito Uchiha", word2: "Kakashi Hatake" },
        { word1: "Donquixote Doflamingo", "word2": "Crocodile" },
        { word1: "Genryusai Shigekuni Yamamoto", "word2": "Shunsui Kyoraku" },
        { word1: "Charmy Pappitson", "word2": "Gordon Agrippa" },
        { word1: "Mina Ashido", "word2": "Fumikage Tokoyami" },
        { word1: "Kamui", "word2": "Purple Lightning" },
        { word1: "God Thread", "word2": "Desert Spada" },
        { word1: "Ryujin Jakka", "word2": "Kageoni" },
        { word1: "Sheep Fluff Cushion", "word2": "Curse-Worker Magic" },
        { word1: "Acid Lay", "word2": "Ragnarok" },
        { word1: "Pain", "word2": "Konan" },
        { word1: "Jinbe", "word2": "Arlong" },
        { word1: "Shinji Hirako", "word2": "Hiyori Sarugaki" },
        { word1: "Finral Roulacase", "word2": "Langris Vaude" },
        { word1: "Overhaul", "word2": "Eri" },
        { word1: "Almighty Push", "word2": "Paper Blizzard" },
        { word1: "Fish-Man Jujutsu", "word2": "Shark Arrows" },
        { word1: "Sakanade", "word2": "Kubikiri Orochi" },
        { word1: "Fallen Angel Flapping", "word2": "Archangel Crash" },
        { word1: "Chrono-Stasis", "word2": "Rewind" }
    ],
   {
    "Movies": [
        { "word1": "Titanic", "word2": "Avatar" },
        { "word1": "Inception", "word2": "Interstellar" },
        { "word1": "Harry Potter", "word2": "Lord of the Rings" },
        { "word1": "Star Wars", "word2": "Star Trek" },
        { "word1": "The Dark Knight", "word2": "Joker" },
        { "word1": "Toy Story", "word2": "Finding Nemo" },
        { "word1": "Jurassic Park", "word2": "King Kong" },
        { "word1": "The Matrix", "word2": "Terminator" },
        { "word1": "Gladiator", "word2": "Braveheart" },
        { "word1": "Pulp Fiction", "word2": "Fight Club" },
        { "word1": "Goodfellas", "word2": "The Godfather" },
        { "word1": "The Lion King", "word2": "Aladdin" },
        { "word1": "Shrek", "word2": "Monsters, Inc." },
        { "word1": "The Avengers", "word2": "Justice League" },
        { "word1": "Iron Man", "word2": "Captain America" },
        { "word1": "Spider-Man", "word2": "Batman Begins" },
        { "word1": "Forrest Gump", "word2": "The Shawshank Redemption" },
        { "word1": "Saving Private Ryan", "word2": "Black Hawk Down" },
        { "word1": "Alien", "word2": "Predator" },
        { "word1": "The Shining", "word2": "Psycho" },
        { "word1": "Halloween", "word2": "Friday the 13th" },
        { "word1": "A Nightmare on Elm Street", "word2": "The Texas Chain Saw Massacre" },
        { "word1": "Scream", "word2": "I Know What You Did Last Summer" },
        { "word1": "The Conjuring", "word2": "Insidious" },
        { "word1": "Hereditary", "word2": "Midsommar" },
        { "word1": "Get Out", "word2": "Us" },
        { "word1": "The Silence of the Lambs", "word2": "Se7en" },
        { "word1": "The Departed", "word2": "Shutter Island" },
        { "word1": "The Prestige", "word2": "The Illusionist" },
        { "word1": "Whiplash", "word2": "La La Land" },
        { "word1": "Barbie", "word2": "Oppenheimer" },
        { "word1": "Dune", "word2": "Blade Runner 2049" },
        { "word1": "Mad Max: Fury Road", "word2": "The Book of Eli" },
        { "word1": "Baby Driver", "word2": "Drive" },
        { "word1": "John Wick", "word2": "Nobody" },
        { "word1": "Die Hard", "word2": "Lethal Weapon" },
        { "word1": "Speed", "word2": "The Rock" },
        { "word1": "Mission: Impossible", "word2": "Jason Bourne" },
        { "word1": "Skyfall", "word2": "Casino Royale" },
        { "word1": "Kingsman: The Secret Service", "word2": "Kick-Ass" },
        { "word1": "Deadpool", "word2": "Logan" },
        { "word1": "Guardians of the Galaxy", "word2": "Thor: Ragnarok" },
        { "word1": "Black Panther", "word2": "Aquaman" },
        { "word1": "Wonder Woman", "word2": "Captain Marvel" },
        { "word1": "Man of Steel", "word2": "Batman v Superman" },
        { "word1": "The Incredibles", "word2": "Despicable Me" },
        { "word1": "Up", "word2": "Wall-E" },
        { "word1": "Coco", "word2": "Soul" },
        { "word1": "Frozen", "word2": "Tangled" },
        { "word1": "Moana", "word2": "Encanto" },
        { "word1": "Ratatouille", "word2": "Cars" },
        { "word1": "Kung Fu Panda", "word2": "How to Train Your Dragon" },
        { "word1": "Madagascar", "word2": "Ice Age" },
        { "word1": "The Nightmare Before Christmas", "word2": "Coraline" },
        { "word1": "The Truman Show", "word2": "Eternal Sunshine of the Spotless Mind" },
        { "word1": "The Wolf of Wall Street", "word2": "The Big Short" },
        { "word1": "Social Network", "word2": "Steve Jobs" },
        { "word1": "Zodiac", "word2": "Prisoners" },
        { "word1": "Sicario", "word2": "Hell or High Water" },
        { "word1": "No Country for Old Men", "word2": "There Will Be Blood" },
        { "word1": "Fargo", "word2": "The Big Lebowski" },
        { "word1": "Back to the Future", "word2": "Ghostbusters" },
        { "word1": "Indiana Jones", "word2": "The Mummy" },
        { "word1": "Jaws", "word2": "The Birds" },
        { "word1": "E.T. the Extra-Terrestrial", "word2": "Close Encounters of the Third Kind" },
        { "word1": "Schindler's List", "word2": "The Pianist" },
        { "word1": "Good Will Hunting", "word2": "Dead Poets Society" },
        { "word1": "The Green Mile", "word2": "The Shawshank Redemption" },
        { "word1": "The Sixth Sense", "word2": "Unbreakable" },
        { "word1": "Signs", "word2": "The Village" },
        { "word1": "Ex Machina", "word2": "Her" },
        { "word1": "Arrival", "word2": "Annihilation" },
        { "word1": "Gravity", "word2": "The Martian" },
        { "word1": "The Revenant", "word2": "The Hateful Eight" },
        { "word1": "Django Unchained", "word2": "Inglourious Basterds" },
        { "word1": "Kill Bill: Vol. 1", "word2": "Kill Bill: Vol. 2" },
        { "word1": "Reservoir Dogs", "word2": "True Romance" },
        { "word1": "Scarface", "word2": "Carlito's Way" },
        { "word1": "Casino", "word2": "Heat" },
        { "word1": "Snatch", "word2": "Lock, Stock and Two Smoking Barrels" },
        { "word1": "Trainspotting", "word2": "Requiem for a Dream" },
        { "word1": "Black Swan", "word2": "The Wrestler" },
        { "word1": "The Grand Budapest Hotel", "word2": "Moonrise Kingdom" },
        { "word1": "Parasite", "word2": "Squid Game" },
        { "word1": "Knives Out", "word2": "Glass Onion" },
        { "word1": "Everything Everywhere All at Once", "word2": "Spider-Man: Into the Spider-Verse" },
        { "word1": "Superbad", "word2": "Pineapple Express" },
        { "word1": "The Hangover", "word2": "21 Jump Street" },
        { "word1": "Step Brothers", "word2": "Anchorman" },
        { "word1": "Zoolander", "word2": "Tropic Thunder" },
        { "word1": "Shaun of the Dead", "word2": "Hot Fuzz" },
        { "word1": "Zombieland", "word2": "28 Days Later" },
        { "word1": "World War Z", "word2": "I Am Legend" },
        { "word1": "Cloverfield", "word2": "A Quiet Place" },
        { "word1": "The Babadook", "word2": "It Follows" },
        { "word1": "The Witch", "word2": "The Lighthouse" },
        { "word1": "The Ring", "word2": "The Grudge" },
        { "word1": "Saw", "word2": "Hostel" },
        { "word1": "Final Destination", "word2": "The Purge" },
        { "word1": "Sinister", "word2": "The Purge" },
        { "word1": "Blade Runner", "word2": "Total Recall" },
        { "word1": "RoboCop", "word2": "Predator" },
        { "word1": "Minority Report", "word2": "I, Robot" },
        { "word1": "District 9", "word2": "Chappie" },
        { "word1": "Edge of Tomorrow", "word2": "Oblivion" },
        { "word1": "Looper", "word2": "Source Code" },
        { "word1": "Tenet", "word2": "Memento" },
        { "word1": "The Batman", "word2": "Zack Snyder's Justice League" },
        { "word1": "Watchmen", "word2": "V for Vendetta" },
        { "word1": "Sin City", "word2": "300" },
        { "word1": "Troy", "word2": "Kingdom of Heaven" },
        { "word1": "The Last Samurai", "word2": "Master and Commander" },
        { "word1": "Apollo 13", "word2": "First Man" },
        { "word1": "Pearl Harbor", "word2": "Midway" },
        { "word1": "Dunkirk", "word2": "1917" },
        { "word1": "Hacksaw Ridge", "word2": "Fury" },
        { "word1": "American Sniper", "word2": "Lone Survivor" },
        { "word1": "The Hurt Locker", "word2": "Zero Dark Thirty" },
        { "word1": "Sicario: Day of the Soldado", "word2": "Triple Frontier" },
        { "word1": "The Equalizer", "word2": "Taken" },
        { "word1": "Man on Fire", "word2": "The Book of Eli" },
        { "word1": "Glengarry Glen Ross", "word2": "Boiler Room" },
        { "word1": "Wall Street", "word2": "Margin Call" },
        { "word1": "American Psycho", "word2": "Nightcrawler" },
        { "word1": "Taxi Driver", "word2": "Raging Bull" },
        { "word1": "Citizen Kane", "word2": "Casablanca" },
        { "word1": "Gone with the Wind", "word2": "The Wizard of Oz" },
        { "word1": "Singin' in the Rain", "word2": "The Sound of Music" },
        { "word1": "West Side Story", "word2": "In the Heights" },
        { "word1": "Grease", "word2": "Hairspray" },
        { "word1": "Moulin Rouge!", "word2": "Chicago" },
        { "word1": "Les Misérables", "word2": "The Phantom of the Opera" },
        { "word1": "Bohemian Rhapsody", "word2": "Rocketman" },
        { "word1": "A Star Is Born", "word2": "La La Land" },
        { "word1": "Elvis", "word2": "Walk the Line" },
        { "word1": "The Great Gatsby", "word2": "The Curious Case of Benjamin Button" },
        { "word1": "Midnight in Paris", "word2": "Amélie" },
        { "word1": "The Terminal", "word2": "Cast Away" },
        { "word1": "Life of Pi", "word2": "Slumdog Millionaire" },
        { "word1": "Lion", "word2": "Green Book" },
        { "word1": "Spotlight", "word2": "The Post" },
        { "word1": "Argo", "word2": "Bridge of Spies" },
        { "word1": "Lincoln", "word2": "Darkest Hour" },
        { "word1": "The King's Speech", "word2": "The Queen" },
        { "word1": "The Imitation Game", "word2": "The Theory of Everything" },
        { "word1": "Beautiful Mind", "word2": "Good Will Hunting" },
        { "word1": "Rain Man", "word2": "Awakenings" },
        { "word1": "Philadelphia", "word2": "Dallas Buyers Club" },
        { "word1": "Brokeback Mountain", "word2": "Call Me by Your Name" },
        { "word1": "Moonlight", "word2": "Manchester by the Sea" },
        { "word1": "Roma", "word2": "Cold War" },
        { "word1": "The Irishmen", "word2": "Once Upon a Time in Hollywood" },
        { "word1": "The Frenchman", "word2": "Le Samouraï" },
        { "word1": "Seven Samurai", "word2": "Yojimbo" },
        { "word1": "Crouching Tiger, Hidden Dragon", "word2": "Hero" },
        { "word1": "House of Flying Daggers", "word2": "Curse of the Golden Flower" },
        { "word1": "Ip Man", "word2": "The Grandmaster" },
        { "word1": "The Raid", "word2": "The Raid 2" },
        { "word1": "Oldboy", "word2": "The Handmaiden" },
        { "word1": "Memories of Murder", "word2": "The Chaser" },
        { "word1": "Train to Busan", "word2": "All of Us Are Dead" },
        { "word1": "Godzilla", "word2": "Shin Godzilla" },
        { "word1": "Pacific Rim", "word2": "Transformers" },
        { "word1": "Real Steel", "word2": "Chappie" },
        { "word1": "Tron: Legacy", "word2": "Ready Player One" },
        { "word1": "Free Guy", "word2": "Pixels" },
        { "word1": "Wreck-It Ralph", "word2": "The Lego Movie" },
        { "word1": "Spider-Man: Across the Spider-Verse", "word2": "Teenage Mutant Ninja Turtles: Mutant Mayhem" },
        { "word1": "Sonic the Hedgehog", "word2": "Detective Pikachu" },
        { "word1": "The Super Mario Bros. Movie", "word2": "Minions" },
        { "word1": "Despicable Me 2", "word2": "Megamind" },
        { "word1": "Monsters vs. Aliens", "word2": "The Croods" },
        { "word1": "Bolt", "word2": "Big Hero 6" },
        { "word1": "Zootopia", "word2": "Sing" },
        { "word1": "The Secret Life of Pets", "word2": "The Angry Birds Movie" },
        { "word1": "Hotel Transylvania", "word2": "Cloudy with a Chance of Meatballs" },
        { "word1": "Rango", "word2": "Arthur Christmas" },
        { "word1": "Paddington", "word2": "Paddington 2" },
        { "word1": "Christopher Robin", "word2": "Mary Poppins Returns" },
        { "word1": "Enchanted", "word2": "Disenchanted" },
        { "word1": "Maleficent", "word2": "Cinderella" },
        { "word1": "Beauty and the Beast", "word2": "The Jungle Book" },
        { "word1": "The Little Mermaid", "word2": "Aladdin" },
        { "word1": "Mulan", "word2": "Cruella" },
        { "word1": "The Chronicles of Narnia", "word2": "The Golden Compass" },
        { "word1": "Percy Jackson & the Olympians", "word2": "The Hunger Games" },
        { "word1": "Catching Fire", "word2": "Mockingjay" },
        { "word1": "Divergent", "word2": "The Maze Runner" },
        { "word1": "The Fault in Our Stars", "word2": "Paper Towns" },
        { "word1": "Perks of Being a Wallflower", "word2": "Lady Bird" },
        { "word1": "Little Women", "word2": "Emma." },
        { "word1": "Pride and Prejudice", "word2": "Sense and Sensibility" },
        { "word1": "Jane Eyre", "word2": "Wuthering Heights" },
        { "word1": "The Notebook", "word2": "A Walk to Remember" },
        { "word1": "About Time", "word2": "The Time Traveler's Wife" },
        { "word1": "500 Days of Summer", "word2": "Eternal Sunshine of the Spotless Mind" },
        { "word1": "Crazy Rich Asians", "word2": "Always Be My Maybe" },
        { "word1": "The Proposal", "word2": "27 Dresses" },
        { "word1": "How to Lose a Guy in 10 Days", "word2": "10 Things I Hate About You" },
        { "word1": "Clueless", "word2": "Mean Girls" },
        { "word1": "Legally Blonde", "word2": "Miss Congeniality" },
        { "word1": "The Devil Wears Prada", "word2": "The Intern" },
        { "word1": "The Holiday", "word2": "Love Actually" },
        { "word1": "Notting Hill", "word2": "Four Weddings and a Funeral" },
        { "word1": "Pretty Woman", "word2": "Runaway Bride" },
        { "word1": "Ghost", "word2": "Dirty Dancing" },
        { "word1": "Footloose", "word2": "Flashdance" },
        { "word1": "Top Gun", "word2": "Top Gun: Maverick" },
        { "word1": "Days of Thunder", "word2": "Ford v Ferrari" },
        { "word1": "Rush", "word2": "Senna" },
        { "word1": "Moneyball", "word2": "Jerry Maguire" },
        { "word1": "The Blind Side", "word2": "Remember the Titans" },
        { "word1": "Coach Carter", "word2": "Glory Road" },
        { "word1": "Rocky", "word2": "Creed" },
        { "word1": "The Karate Kid", "word2": "Cobra Kai" },
        { "word1": "Bloodsport", "word2": "Kickboxer" },
        { "word1": "Enter the Dragon", "word2": "Way of the Dragon" },
        { "word1": "Fist of Legend", "word2": "Police Story" },
        { "word1": "Rush Hour", "word2": "Lethal Weapon" },
        { "word1": "Bad Boys", "word2": "Men in Black" },
        { "word1": "Independence Day", "word2": "Armageddon" },
        { "word1": "Deep Impact", "word2": "The Core" },
        { "word1": "2012", "word2": "The Day After Tomorrow" },
        { "word1": "San Andreas", "word2": "Rampage" },
        { "word1": "Godzilla vs. Kong", "word2": "Pacific Rim" },
        { "word1": "Cloverfield Paradox", "word2": "10 Cloverfield Lane" },
        { "word1": "Super 8", "word2": "Stranger Things" },
        { "word1": "It", "word2": "It Chapter Two" },
        { "word1": "The Mist", "word2": "1408" },
        { "word1": "Misery", "word2": "Stand by Me" },
        { "word1": "The Green Mile", "word2": "The Shawshank Redemption" },
        { "word1": "Cast Away", "word2": "The Terminal" },
        { "word1": "Captain Phillips", "word2": "Sully" },
        { "word1": "Flight", "word2": "The Equalizer" },
        { "word1": "Training Day", "word2": "Man on Fire" },
        { "word1": "American Gangster", "word2": "Blow" },
        { "word1": "Casino", "word2": "Goodfellas" },
        { "word1": "The Godfather Part II", "word2": "The Godfather Part III" },
        { "word1": "Scarface", "word2": "Carlito's Way" },
        { "word1": "Heat", "word2": "Miami Vice" },
        { "word1": "Collateral", "word2": "The Insider" },
        { "word1": "The Game", "word2": "Panic Room" },
        { "word1": "Fight Club", "word2": "Seven" },
        { "word1": "Gone Girl", "word2": "The Girl with the Dragon Tattoo" },
        { "word1": "Primal Fear", "word2": "Fracture" },
        { "word1": "The Lincoln Lawyer", "word2": "A Time to Kill" },
        { "word1": "The Firm", "word2": "The Pelican Brief" },
        { "word1": "A Few Good Men", "word2": "Rules of Engagement" },
        { "word1": "Crimson Tide", "word2": "The Hunt for Red October" },
        { "word1": "U-571", "word2": "K-19: The Widowmaker" },
        { "word1": "Das Boot", "word2": "Downfall" },
        { "word1": "Valkyrie", "word2": "Inglourious Basterds" },
        { "word1": "Platoon", "word2": "Full Metal Jacket" },
        { "word1": "Apocalypse Now", "word2": "The Deer Hunter" },
        { "word1": "Born on the Fourth of July", "word2": "Heaven & Earth" },
        { "word1": "We Were Soldiers", "word2": "Black Hawk Down" },
        { "word1": "Tears of the Sun", "word2": "Behind Enemy Lines" },
        { "word1": "Lone Survivor", "word2": "13 Hours" },
        { "word1": "American Sniper", "word2": "The Hurt Locker" },
        { "word1": "Zero Dark Thirty", "word2": "Argo" },
        { "word1": "Sicario", "word2": "Wind River" },
        { "word1": "No Country for Old Men", "word2": "Hell or High Water" },
        { "word1": "Fargo", "word2": "Blood Simple" },
        { "word1": "The Big Lebowski", "word2": "O Brother, Where Art Thou?" },
        { "word1": "True Grit", "word2": "3:10 to Yuma" },
        { "word1": "Unforgiven", "word2": "The Outlaw Josey Wales" },
        { "word1": "The Good, the Bad and the Ugly", "word2": "Once Upon a Time in the West" },
        { "word1": "A Fistful of Dollars", "word2": "For a Few Dollars More" },
        { "word1": "The Magnificent Seven", "word2": "The Dirty Dozen" },
        { "word1": "The Great Escape", "word2": "Bridge on the River Kwai" },
        { "word1": "Lawrence of Arabia", "word2": "Doctor Zhivago" },
        { "word1": "Ben-Hur", "word2": "The Ten Commandments" },
        { "word1": "Spartacus", "word2": "Cleopatra" },
        { "word1": "Julius Caesar", "word2": "Macbeth" },
        { "word1": "Hamlet", "word2": "Romeo and Juliet" },
        { "word1": "Shakespeare in Love", "word2": "Elizabeth" },
        { "word1": "The King's Speech", "word2": "The Queen" },
        { "word1": "The Favourite", "word2": "Mary Queen of Scots" },
        { "word1": "Spencer", "word2": "Jackie" },
        { "word1": "First Man", "word2": "Hidden Figures" },
        { "word1": "Apollo 11", "word2": "Apollo 13" },
        { "word1": "The Right Stuff", "word2": "October Sky" },
        { "word1": "Contact", "word2": "Interstellar" },
        { "word1": "Coherence", "word2": "Primer" },
        { "word1": "The Endless", "word2": "Resolution" },
        { "word1": "Triangle", "word2": "Timecrimes" },
        { "word1": "Predestination", "word2": "Looper" },
        { "word1": "Source Code", "word2": "Edge of Tomorrow" },
        { "word1": "Minority Report", "word2": "Paycheck" },
        { "word1": "The Island", "word2": "Gattaca" },
        { "word1": "Snowpiercer", "word2": "Elysium" },
        { "word1": "Oblivion", "word2": "Tron: Legacy" },
        { "word1": "Ad Astra", "word2": "High Life" },
        { "word1": "Sunshine", "word2": "Event Horizon" },
        { "word1": "Pandorum", "word2": "The Abyss" },
        { "word1": "Deep Blue Sea", "word2": "The Meg" },
        { "word1": "The Shallows", "word2": "Crawl" },
        { "word1": "Open Water", "word2": "47 Meters Down" },
        { "word1": "Frozen (2010)", "word2": "The Grey" },
        { "word1": "The Edge", "word2": "Revenant" },
        { "word1": "Into the Wild", "word2": "Wild" },
        { "word1": "127 Hours", "word2": "Buried" },
        { "word1": "Captain Fantastic", "word2": "The Peanut Butter Falcon" },
        { "word1": "Little Miss Sunshine", "word2": "Juno" },
        { "word1": "Lady Bird", "word2": "Booksmart" },
        { "word1": "Superbad", "word2": "Project X" },
        { "word1": "The Hangover", "word2": "Due Date" },
        { "word1": "Old School", "word2": "Wedding Crashers" }
    ],
    "Real Persons": [
        { "word1": "Elon Musk", "word2": "Jeff Bezos" },
        { "word1": "Cristiano Ronaldo", "word2": "Lionel Messi" },
        { "word1": "Taylor Swift", "word2": "Beyoncé" },
        { "word1": "Bill Gates", "word2": "Steve Jobs" },
        { "word1": "Albert Einstein", "word2": "Isaac Newton" },
        { "word1": "Barack Obama", "word2": "Donald Trump" },
        { "word1": "Mark Zuckerberg", "word2": "Jack Dorsey" },
        { "word1": "LeBron James", "word2": "Michael Jordan" },
        { "word1": "Kobe Bryant", "word2": "Shaquille O'Neal" },
        { "word1": "Magic Johnson", "word2": "Larry Bird" },
        { "word1": "Stephen Curry", "word2": "Kevin Durant" },
        { "word1": "Tom Brady", "word2": "Peyton Manning" },
        { "word1": "Patrick Mahomes", "word2": "Josh Allen" },
        { "word1": "Lewis Hamilton", "word2": "Max Verstappen" },
        { "word1": "Michael Schumacher", "word2": "Ayrton Senna" },
        { "word1": "Roger Federer", "word2": "Rafael Nadal" },
        { "word1": "Novak Djokovic", "word2": "Andy Murray" },
        { "word1": "Serena Williams", "word2": "Venus Williams" },
        { "word1": "Tiger Woods", "word2": "Phil Mickelson" },
        { "word1": "Muhammad Ali", "word2": "Joe Frazier" },
        { "word1": "Mike Tyson", "word2": "Evander Holyfield" },
        { "word1": "Conor McGregor", "word2": "Khabib Nurmagomedov" },
        { "word1": "Usain Bolt", "word2": "Justin Gatlin" },
        { "word1": "Michael Phelps", "word2": "Ryan Lochte" },
        { "word1": "Tony Hawk", "word2": "Shaun White" },
        { "word1": "Joe Biden", "word2": "Kamala Harris" },
        { "word1": "Hillary Clinton", "word2": "Bill Clinton" },
        { "word1": "George W. Bush", "word2": "Dick Cheney" },
        { "word1": "Ronald Reagan", "word2": "Margaret Thatcher" },
        { "word1": "John F. Kennedy", "word2": "Richard Nixon" },
        { "word1": "Winston Churchill", "word2": "Franklin D. Roosevelt" },
        { "word1": "Abraham Lincoln", "word2": "George Washington" },
        { "word1": "Queen Elizabeth II", "word2": "King Charles III" },
        { "word1": "Prince William", "word2": "Prince Harry" },
        { "word1": "Kate Middleton", "word2": "Meghan Markle" },
        { "word1": "Pope Francis", "word2": "Pope Benedict XVI" },
        { "word1": "Dalai Lama", "word2": "Desmond Tutu" },
        { "word1": "Mahatma Gandhi", "word2": "Nelson Mandela" },
        { "word1": "Martin Luther King Jr.", "word2": "Malcolm X" },
        { "word1": "Rosa Parks", "word2": "Harriet Tubman" },
        { "word1": "Marie Curie", "word2": "Rosalind Franklin" },
        { "word1": "Charles Darwin", "word2": "Gregor Mendel" },
        { "word1": "Nikola Tesla", "word2": "Thomas Edison" },
        { "word1": "Alexander Graham Bell", "word2": "Elisha Gray" },
        { "word1": "Wright Brothers", "word2": "Santos-Dumont" },
        { "word1": "Galileo Galilei", "word2": "Nicolaus Copernicus" },
        { "word1": "Stephen Hawking", "word2": "Carl Sagan" },
        { "word1": "Neil deGrasse Tyson", "word2": "Bill Nye" },
        { "word1": "Richard Feynman", "word2": "Robert Oppenheimer" },
        { "word1": "Alan Turing", "word2": "John von Neumann" },
        { "word1": "Tim Berners-Lee", "word2": "Vint Cerf" },
        { "word1": "Satya Nadella", "word2": "Sundar Pichai" },
        { "word1": "Sam Altman", "word2": "Demis Hassabis" },
        { "word1": "Jensen Huang", "word2": "Lisa Su" },
        { "word1": "Warren Buffett", "word2": "Charlie Munger" },
        { "word1": "George Soros", "word2": "Ray Dalio" },
        { "word1": "Bernard Arnault", "word2": "Larry Ellison" },
        { "word1": "Oprah Winfrey", "word2": "Ellen DeGeneres" },
        { "word1": "Steven Spielberg", "word2": "Martin Scorsese" },
        { "word1": "Christopher Nolan", "word2": "Quentin Tarantino" },
        { "word1": "James Cameron", "word2": "Ridley Scott" },
        { "word1": "Peter Jackson", "word2": "George Lucas" },
        { "word1": "Leonardo DiCaprio", "word2": "Brad Pitt" },
        { "word1": "Tom Cruise", "word2": "Will Smith" },
        { "word1": "Johnny Depp", "word2": "Robert Downey Jr." },
        { "word1": "Dwayne Johnson", "word2": "John Cena" },
        { "word1": "Ryan Reynolds", "word2": "Hugh Jackman" },
        { "word1": "Matt Damon", "word2": "Ben Affleck" },
        { "word1": "Meryl Streep", "word2": "Cate Blanchett" },
        { "word1": "Scarlett Johansson", "word2": "Margot Robbie" },
        { "word1": "Zendaya", "word2": "Tom Holland" },
        { "word1": "Lady Gaga", "word2": "Madonna" },
        { "word1": "Rihanna", "word2": "Nicki Minaj" },
        { "word1": "Ariana Grande", "word2": "Selena Gomez" },
        { "word1": "Justin Bieber", "word2": "Shawn Mendes" },
        { "word1": "Drake", "word2": "Kendrick Lamar" },
        { "word1": "Eminem", "word2": "Jay-Z" },
        { "word1": "Kanye West", "word2": "Kim Kardashian" },
        { "word1": "Kylie Jenner", "word2": "Kendall Jenner" },
        { "word1": "Michael Jackson", "word2": "Prince" },
        { "word1": "Freddie Mercury", "word2": "David Bowie" },
        { "word1": "Paul McCartney", "word2": "John Lennon" },
        { "word1": "Mick Jagger", "word2": "Keith Richards" },
        { "word1": "Bob Dylan", "word2": "Bruce Springsteen" },
        { "word1": "Elvis Presley", "word2": "Chuck Berry" },
        { "word1": "Frank Sinatra", "word2": "Dean Martin" },
        { "word1": "Louis Armstrong", "word2": "Miles Davis" },
        { "word1": "Gordon Ramsay", "word2": "Jamie Oliver" },
        { "word1": "Bobby Flay", "word2": "Gordon Ramsay" },
        { "word1": "Anthony Bourdain", "word2": "David Chang" },
        { "word1": "Jimmy Fallon", "word2": "Jimmy Kimmel" },
        { "word1": "Stephen Colbert", "word2": "John Oliver" },
        { "word1": "Joe Rogan", "word2": "Lex Fridman" },
        { "word1": "MrBeast", "word2": "PewDiePie" },
        { "word1": "Markiplier", "word2": "Jacksepticeye" },
        { "word1": "Casey Neistat", "word2": "Peter McKinnon" },
        { "word1": "David Attenborough", "word2": "Bear Grylls" },
        { "word1": "Stephen King", "word2": "George R.R. Martin" },
        { "word1": "J.K. Rowling", "word2": "J.R.R. Tolkien" },
        { "word1": "Ernest Hemingway", "word2": "F. Scott Fitzgerald" },
        { "word1": "William Shakespeare", "word2": "Christopher Marlowe" },
        { "word1": "Vincent van Gogh", "word2": "Pablo Picasso" },
        { "word1": "Leonardo da Vinci", "word2": "Michelangelo" },
        { "word1": "Claude Monet", "word2": "Pierre-Auguste Renoir" },
        { "word1": "Andy Warhol", "word2": "Jean-Michel Basquiat" },
        { "word1": "Banksy", "word2": "Shepard Fairey" },
        { "word1": "Socrates", "word2": "Plato" },
        { "word1": "Aristotle", "word2": "Alexander the Great" },
        { "word1": "Julius Caesar", "word2": "Mark Antony" },
        { "word1": "Cleopatra", "word2": "Nefertiti" },
        { "word1": "Napoleon Bonaparte", "word2": "Duke of Wellington" },
        { "word1": "Joan of Arc", "word2": "King Charles VII" },
        { "word1": "Christopher Columbus", "word2": "Vasco da Gama" },
        { "word1": "Marco Polo", "word2": "Ibn Battuta" },
        { "word1": "Genghis Khan", "word2": "Kublai Khan" },
        { "word1": "Sun Tzu", "word2": "Confucius" },
        { "word1": "Sigmund Freud", "word2": "Carl Jung" },
        { "word1": "Karl Marx", "word2": "Friedrich Engels" },
        { "word1": "Adam Smith", "word2": "John Maynard Keynes" },
        { "word1": "Milton Friedman", "word2": "Thomas Sowell" },
        { "word1": "Nate Silver", "word2": "Gidyon Marcus" },
        { "word1": "Garry Kasparov", "word2": "Anatoly Karpov" },
        { "word1": "Magnus Carlsen", "word2": "Hikaru Nakamura" },
        { "word1": "Simone Biles", "word2": "Sunisa Lee" },
        { "word1": "Nadia Comaneci", "word2": "Olga Korbut" },
        { "word1": "Jackie Robinson", "word2": "Babe Ruth" },
        { "word1": "Shohei Ohtani", "word2": "Mike Trout" },
        { "word1": "Wayne Gretzky", "word2": "Mario Lemieux" },
        { "word1": "Connor McDavid", "word2": "Sidney Crosby" },
        { "word1": "Alex Ovechkin", "word2": "Sidney Crosby" },
        { "word1": "Tom Cruise", "word2": "John Travolta" },
        { "word1": "Harrison Ford", "word2": "Mark Hamill" },
        { "word1": "Carrie Fisher", "word2": "Natalie Portman" },
        { "word1": "Keanu Reeves", "word2": "Laurence Fishburne" },
        { "word1": "Arnold Schwarzenegger", "word2": "Sylvester Stallone" },
        { "word1": "Jean-Claude Van Damme", "word2": "Steven Seagal" },
        { "word1": "Jackie Chan", "word2": "Jet Li" },
        { "word1": "Bruce Lee", "word2": "Chuck Norris" },
        { "word1": "Jason Statham", "word2": "Vin Diesel" },
        { "word1": "Paul Walker", "word2": "Vin Diesel" },
        { "word1": "Christian Bale", "word2": "Heath Ledger" },
        { "word1": "Joaquin Phoenix", "word2": "Robert De Niro" },
        { "word1": "Al Pacino", "word2": "Robert De Niro" },
        { "word1": "Marlon Brando", "word2": "James Dean" },
        { "word1": "Audrey Hepburn", "word2": "Marilyn Monroe" },
        { "word1": "Grace Kelly", "word2": "Elizabeth Taylor" },
        { "word1": "Judy Garland", "word2": "Shirley Temple" },
        { "word1": "Walt Disney", "word2": "Roy O. Disney" },
        { "word1": "Stan Lee", "word2": "Jack Kirby" },
        { "word1": "Steve Ditko", "word2": "Stan Lee" },
        { "word1": "Shigeru Miyamoto", "word2": "Hideo Kojima" },
        { "word1": "Gabe Newell", "word2": "John Carmack" },
        { "word1": "Linus Torvalds", "word2": "Richard Stallman" },
        { "word1": "Edward Snowden", "word2": "Julian Assange" },
        { "word1": "Malala Yousafzai", "word2": "Greta Thunberg" },
        { "word1": "David Hogg", "word2": "Emma González" },
        { "word1": "Colin Kaepernick", "word2": "Megan Rapinoe" },
        { "word1": "Leandro Lo", "word2": "Gordon Ryan" },
        { "word1": "Jon Jones", "word2": "Daniel Cormier" },
        { "word1": "Anderson Silva", "word2": "Georges St-Pierre" },
        { "word1": "Ronda Rousey", "word2": "Amanda Nunes" },
        { "word1": "Kamaru Usman", "word2": "Colby Covington" },
        { "word1": "Israel Adesanya", "word2": "Alex Pereira" },
        { "word1": "Tyson Fury", "word2": "Oleksandr Usyk" },
        { "word1": "Anthony Joshua", "word2": "Deontay Wilder" },
        { "word1": "Canelo Alvarez", "word2": "Gennady Golovkin" },
        { "word1": "Floyd Mayweather", "word2": "Manny Pacquiao" },
        { "word1": "Oscar De La Hoya", "word2": "Felix Trinidad" },
        { "word1": "Sugar Ray Leonard", "word2": "Roberto Duran" },
        { "word1": "Joe Louis", "word2": "Rocky Marciano" },
        { "word1": "Jack Dempsey", "word2": "Gene Tunney" },
        { "word1": "Zinedine Zidane", "word2": "Thierry Henry" },
        { "word1": "Ronaldinho", "word2": "Ronaldo Nazario" },
        { "word1": "Pelé", "word2": "Diego Maradona" },
        { "word1": "Johan Cruyff", "word2": "Franz Beckenbauer" },
        { "word1": "Michel Platini", "word2": "Karl-Heinz Rummenigge" },
        { "word1": "David Beckham", "word2": "Ryan Giggs" },
        { "word1": "Wayne Rooney", "word2": "Steven Gerrard" },
        { "word1": "Frank Lampard", "word2": "Steven Gerrard" },
        { "word1": "Thierry Henry", "word2": "Patrick Vieira" },
        { "word1": "Kylian Mbappé", "word2": "Erling Haaland" },
        { "word1": "Neymar Jr.", "word2": "Luis Suárez" },
        { "word1": "Luka Modric", "word2": "Toni Kroos" },
        { "word1": "Karim Benzema", "word2": "Robert Lewandowski" },
        { "word1": "Manuel Neuer", "word2": "Gianluigi Buffon" },
        { "word1": "Iker Casillas", "word2": "Gianluigi Buffon" },
        { "word1": "Sergio Ramos", "word2": "Gerard Piqué" },
        { "word1": "Carles Puyol", "word2": "Sergio Ramos" },
        { "word1": "Pep Guardiola", "word2": "Jürgen Klopp" },
        { "word1": "Jose Mourinho", "word2": "Sir Alex Ferguson" },
        { "word1": "Arsène Wenger", "word2": "Sir Alex Ferguson" },
        { "word1": "Bill Belichick", "word2": "Tom Brady" },
        { "word1": "Andy Reid", "word2": "Patrick Mahomes" },
        { "word1": "Aaron Rodgers", "word2": "Brett Favre" },
        { "word1": "Drew Brees", "word2": "Eli Manning" },
        { "word1": "Ben Roethlisberger", "word2": "Philip Rivers" },
        { "word1": "Jerry Rice", "word2": "Randy Moss" },
        { "word1": "Lawrence Taylor", "word2": "Reggie White" },
        { "word1": "Deion Sanders", "word2": "Bo Jackson" },
        { "word1": "Michael Irvin", "word2": "Emmitt Smith" },
        { "word1": "Troy Aikman", "word2": "Steve Young" },
        { "word1": "Dan Marino", "word2": "John Elway" },
        { "word1": "Joe Montana", "word2": "Dan Marino" },
        { "word1": "Terry Bradshaw", "word2": "Fran Tarkenton" },
        { "word1": "Johnny Unitas", "word2": "Joe Namath" },
        { "word1": "Vince Lombardi", "word2": "Tom Landry" },
        { "word1": "Bill Russell", "word2": "Wilt Chamberlain" },
        { "word1": "Kareem Abdul-Jabbar", "word2": "Julius Erving" },
        { "word1": "Larry Bird", "word2": "Kevin McHale" },
        { "word1": "Isiah Thomas", "word2": "Joe Dumars" },
        { "word1": "Scottie Pippen", "word2": "Michael Jordan" },
        { "word1": "Charles Barkley", "word2": "Karl Malone" },
        { "word1": "Hakeem Olajuwon", "word2": "David Robinson" },
        { "word1": "Patrick Ewing", "word2": "Alonzo Mourning" },
        { "word1": "Reggie Miller", "word2": "Ray Allen" },
        { "word1": "Allen Iverson", "word2": "Tracy McGrady" },
        { "word1": "Vince Carter", "word2": "Tracy McGrady" },
        { "word1": "Tim Duncan", "word2": "Kevin Garnett" },
        { "word1": "Dirk Nowitzki", "word2": "Paul Pierce" },
        { "word1": "Dwyane Wade", "word2": "Chris Bosh" },
        { "word1": "Carmelo Anthony", "word2": "LeBron James" },
        { "word1": "Chris Paul", "word2": "Deron Williams" },
        { "word1": "James Harden", "word2": "Russell Westbrook" },
        { "word1": "Giannis Antetokounmpo", "word2": "Nikola Jokic" },
        { "word1": "Joel Embiid", "word2": "Nikola Jokic" },
        { "word1": "Luka Doncic", "word2": "Trae Young" },
        { "word1": "Jayson Tatum", "word2": "Jaylen Brown" },
        { "word1": "Jimmy Butler", "word2": "Bam Adebayo" },
        { "word1": "Anthony Davis", "word2": "LeBron James" },
        { "word1": "Kyrie Irving", "word2": "Kevin Durant" },
        { "word1": "Damian Lillard", "word2": "CJ McCollum" },
        { "word1": "Kawhi Leonard", "word2": "Paul George" },
        { "word1": "Klay Thompson", "word2": "Stephen Curry" },
        { "word1": "Draymond Green", "word2": "Klay Thompson" },
        { "word1": "Steve Kerr", "word2": "Gregg Popovich" },
        { "word1": "Phil Jackson", "word2": "Pat Riley" },
        { "word1": "Red Auerbach", "word2": "Phil Jackson" },
        { "word1": "John Wooden", "word2": "Mike Krzyzewski" },
        { "word1": "Nick Saban", "word2": "Urban Meyer" },
        { "word1": "Bill Shankly", "word2": "Bob Paisley" },
        { "word1": "Brian Clough", "word2": "Don Revie" },
        { "word1": "Bobby Moore", "word2": "Sir Bobby Charlton" },
        { "word1": "George Best", "word2": "Denis Law" },
        { "word1": "Gary Lineker", "word2": "Alan Shearer" },
        { "word1": "Michael Owen", "word2": "David Beckham" },
        { "word1": "Harry Kane", "word2": "Son Heung-min" },
        { "word1": "Mohamed Salah", "word2": "Sadio Mané" },
        { "word1": "Kevin De Bruyne", "word2": "Eden Hazard" },
        { "word1": "Romelu Lukaku", "word2": "Lautaro Martínez" },
        { "word1": "Zlatan Ibrahimovic", "word2": "Edinson Cavani" },
        { "word1": "Angel Di Maria", "word2": "Mesut Özil" },
        { "word1": "Alexis Sánchez", "word2": "Mesut Özil" },
        { "word1": "Cesc Fàbregas", "word2": "Robin van Persie" },
        { "word1": "Andrea Pirlo", "word2": "Gennaro Gattuso" },
        { "word1": "Alessandro Del Piero", "word2": "Francesco Totti" },
        { "word1": "Roberto Baggio", "word2": "Paolo Maldini" },
        { "word1": "Franco Baresi", "word2": "Paolo Maldini" },
        { "word1": "Fabio Cannavaro", "word2": "Alessandro Nesta" },
        { "word1": "Lilian Thuram", "word2": "Marcel Desailly" },
        { "word1": "Patrick Vieira", "word2": "Roy Keane" },
        { "word1": "Paul Scholes", "word2": "Ryan Giggs" },
        { "word1": "Rio Ferdinand", "word2": "Nemanja Vidic" },
        { "word1": "John Terry", "word2": "Ricardo Carvalho" },
        { "word1": "Ashley Cole", "word2": "Patrice Evra" },
        { "word1": "Gary Neville", "word2": "Jamie Carragher" }
    ],
    "Objects": [
        { "word1": "Laptop", "word2": "Tablet" },
        { "word1": "Pen", "word2": "Pencil" },
        { "word1": "Coffee", "word2": "Tea" },
        { "word1": "Bicycle", "word2": "Scooter" },
        { "word1": "Book", "word2": "Notebook" },
        { "word1": "Headphones", "word2": "Earbuds" },
        { "word1": "Wristwatch", "word2": "Smartwatch" },
        { "word1": "Camera", "word2": "Smartphone" },
        { "word1": "Monitor", "word2": "Television" },
        { "word1": "Keyboard", "word2": "Mouse" },
        { "word1": "Printer", "word2": "Scanner" },
        { "word1": "Desk", "word2": "Chair" },
        { "word1": "Sofa", "word2": "Armchair" },
        { "word1": "Bed", "word2": "Mattress" },
        { "word1": "Pillow", "word2": "Blanket" },
        { "word1": "Curtain", "word2": "Blind" },
        { "word1": "Lamp", "word2": "Lantern" },
        { "word1": "Flashlight", "word2": "Candle" },
        { "word1": "Matchbox", "word2": "Lighter" },
        { "word1": "Cigarette", "word2": "Vape" },
        { "word1": "Pipe", "word2": "Cigar" },
        { "word1": "Wallet", "word2": "Purse" },
        { "word1": "Backpack", "word2": "Briefcase" },
        { "word1": "Suitcase", "word2": "Duffel Bag" },
        { "word1": "Umbrella", "word2": "Raincoat" },
        { "word1": "Coat", "word2": "Jacket" },
        { "word1": "Sweater", "word2": "Hoodie" },
        { "word1": "Shirt", "word2": "T-shirt" },
        { "word1": "Pants", "word2": "Jeans" },
        { "word1": "Shorts", "word2": "Trousers" },
        { "word1": "Skirt", "word2": "Dress" },
        { "word1": "Socks", "word2": "Shoes" },
        { "word1": "Boots", "word2": "Sneakers" },
        { "word1": "Sandals", "word2": "Slippers" },
        { "word1": "Hat", "word2": "Cap" },
        { "word1": "Gloves", "word2": "Mittens" },
        { "word1": "Scarf", "word2": "Beanie" },
        { "word1": "Belt", "word2": "Suspenders" },
        { "word1": "Tie", "word2": "Bowtie" },
        { "word1": "Glasses", "word2": "Sunglasses" },
        { "word1": "Ring", "word2": "Bracelet" },
        { "word1": "Necklace", "word2": "Earrings" },
        { "word1": "Perfume", "word2": "Cologne" },
        { "word1": "Soap", "word2": "Shampoo" },
        { "word1": "Toothbrush", "word2": "Toothpaste" },
        { "word1": "Razor", "word2": "Shaving Cream" },
        { "word1": "Towel", "word2": "Bathrobe" },
        { "word1": "Comb", "word2": "Hairbrush" },
        { "word1": "Mirror", "word2": "Compact" },
        { "word1": "Scissors", "word2": "Shears" },
        { "word1": "Knife", "word2": "Fork" },
        { "word1": "Spoon", "word2": "Chopsticks" },
        { "word1": "Plate", "word2": "Bowl" },
        { "word1": "Cup", "word2": "Mug" },
        { "word1": "Glass", "word2": "Bottle" },
        { "word1": "Thermos", "word2": "Flask" },
        { "word1": "Pan", "word2": "Pot" },
        { "word1": "Kettle", "word2": "Teapot" },
        { "word1": "Toaster", "word2": "Microwave" },
        { "word1": "Oven", "word2": "Stove" },
        { "word1": "Refrigerator", "word2": "Freezer" },
        { "word1": "Blender", "word2": "Juicer" },
        { "word1": "Mixer", "word2": "Whisk" },
        { "word1": "Cutting Board", "word2": "Rolling Pin" },
        { "word1": "Colander", "word2": "Sieve" },
        { "word1": "Spatula", "word2": "Ladle" },
        { "word1": "Tongs", "word2": "Peeler" },
        { "word1": "Can Opener", "word2": "Corkscrew" },
        { "word1": "Broom", "word2": "Dustpan" },
        { "word1": "Mop", "word2": "Bucket" },
        { "word1": "Vacuum Cleaner", "word2": "Rug Doctor" },
        { "word1": "Trash Can", "word2": "Garbage Bag" },
        { "word1": "Washing Machine", "word2": "Clothes Dryer" },
        { "word1": "Iron", "word2": "Ironing Board" },
        { "word1": "Hanger", "word2": "Wardrobe" },
        { "word1": "Clock", "word2": "Alarm Clock" },
        { "word1": "Calendar", "word2": "Planner" },
        { "word1": "Marker", "word2": "Highlighter" },
        { "word1": "Eraser", "word2": "White-Out" },
        { "word1": "Ruler", "word2": "Tape Measure" },
        { "word1": "Glue", "word2": "Tape" },
        { "word1": "Stapler", "word2": "Paperclip" },
        { "word1": "Folder", "word2": "Binder" },
        { "word1": "Envelope", "word2": "Stamp" },
        { "word1": "Calculator", "word2": "Abacus" },
        { "word1": "Microphone", "word2": "Speaker" },
        { "word1": "Projector", "word2": "Screen" },
        { "word1": "Router", "word2": "Modem" },
        { "word1": "Cable", "word2": "Adapter" },
        { "word1": "Battery", "word2": "Charger" },
        { "word1": "Power Strip", "word2": "Extension Cord" },
        { "word1": "Hard Drive", "word2": "Flash Drive" },
        { "word1": "SD Card", "word2": "Memory Card" },
        { "word1": "CD", "word2": "DVD" },
        { "word1": "Cassette", "word2": "Vinyl Record" },
        { "word1": "Guitar", "word2": "Bass" },
        { "word1": "Piano", "word2": "Keyboard (Music)" },
        { "word1": "Drums", "word2": "Cymbals" },
        { "word1": "Violin", "word2": "Cello" },
        { "word1": "Flute", "word2": "Clarinet" },
        { "word1": "Trumpet", "word2": "Trombone" },
        { "word1": "Saxophone", "word2": "Harmonica" },
        { "word1": "Hammer", "word2": "Mallet" },
        { "word1": "Screwdriver", "word2": "Wrench" },
        { "word1": "Pliers", "word2": "Wire Cutter" },
        { "word1": "Saw (Tool)", "word2": "Axe" },
        { "word1": "Drill", "word2": "Sander" },
        { "word1": "Nail", "word2": "Screw" },
        { "word1": "Bolt (Hardware)", "word2": "Nut" },
        { "word1": "Ladder", "word2": "Step Stool" },
        { "word1": "Wheelbarrow", "word2": "Hand Truck" },
        { "word1": "Hose", "word2": "Sprinkler" },
        { "word1": "Lawnmower", "word2": "Trimmer" },
        { "word1": "Shovel", "word2": "Rake" },
        { "word1": "Hoe", "word2": "Trowel" },
        { "word1": "Flowerpot", "word2": "Vase" },
        { "word1": "Key", "word2": "Lock" },
        { "word1": "Padlock", "word2": "Chain" },
        { "word1": "Safe", "word2": "Vault" },
        { "word1": "Coin", "word2": "Banknote" },
        { "word1": "Token", "word2": "Ticket" },
        { "word1": "Passport", "word2": "ID Card" },
        { "word1": "License", "word2": "Permit" },
        { "word1": "Map", "word2": "Compass" },
        { "word1": "Globe", "word2": "Atlas" },
        { "word1": "Telescope", "word2": "Binoculars" },
        { "word1": "Microscope", "word2": "Magnifying Glass" },
        { "word1": "Thermometer", "word2": "Barometer" },
        { "word1": "Scale", "word2": "Balance" },
        { "word1": "Stethoscope", "word2": "Syringe" },
        { "word1": "Bandage", "word2": "Gauze" },
        { "word1": "Pill", "word2": "Capsule" },
        { "word1": "Inhaler", "word2": "Nebulizer" },
        { "word1": "Crutches", "word2": "Wheelchair" },
        { "word1": "Cane", "word2": "Walker" },
        { "word1": "Stretcher", "word2": "Gurney" },
        { "word1": "Helmet", "word2": "Goggles" },
        { "word1": "Mask", "word2": "Shield" },
        { "word1": "Vest", "word2": "Armor" },
        { "word1": "Rope", "word2": "Cord" },
        { "word1": "String", "word2": "Thread" },
        { "word1": "Yarn", "word2": "Needle" },
        { "word1": "Button", "word2": "Zipper" },
        { "word1": "Velcro", "word2": "Snap" },
        { "word1": "Ribbon", "word2": "Lace" },
        { "word1": "Fabric", "word2": "Leather" },
        { "word1": "Canvas", "word2": "Easel" },
        { "word1": "Paintbrush", "word2": "Palette" },
        { "word1": "Paint", "word2": "Ink" },
        { "word1": "Chalk", "word2": "Blackboard" },
        { "word1": "Whiteboard", "word2": "Marker (Dry-Erase)" },
        { "word1": "Crayon", "word2": "Sketchbook" },
        { "word1": "Clay", "word2": "Pottery Wheel" },
        { "word1": "Sticker", "word2": "Decal" },
        { "word1": "Magnet", "word2": "Compass Needle" },
        { "word1": "Balloon", "word2": "Streamer" },
        { "word1": "Confetti", "word2": "Glitter" },
        { "word1": "Candle (Birthday)", "word2": "Cake Stand" },
        { "word1": "Gift", "word2": "Wrapping Paper" },
        { "word1": "Card", "word2": "Invitation" },
        { "word1": "Banner", "word2": "Flag" },
        { "word1": "Badge", "word2": "Medal" },
        { "word1": "Trophy", "word2": "Ribbon (Award)" },
        { "word1": "Crown", "word2": "Tiara" },
        { "word1": "Scepter", "word2": "Throne" },
        { "word1": "Sword", "word2": "Shield (Weapon)" },
        { "word1": "Spear", "word2": "Lance" },
        { "word1": "Bow", "word2": "Arrow" },
        { "word1": "Crossbow", "word2": "Quiver" },
        { "word1": "Rifle", "word2": "Shotgun" },
        { "word1": "Pistol", "word2": "Revolver" },
        { "word1": "Bullet", "word2": "Cartridge" },
        { "word1": "Grenade", "word2": "Mine" },
        { "word1": "Cannon", "word2": "Catapult" },
        { "word1": "Bunker", "word2": "Trench" },
        { "word1": "Tent", "word2": "Sleeping Bag" },
        { "word1": "Campfire", "word2": "Stove (Camp)" },
        { "word1": "Canteen", "word2": "Water Filter" },
        { "word1": "Compass (Hiking)", "word2": "GPS Device" },
        { "word1": "Fishing Rod", "word2": "Reel" },
        { "word1": "Hook", "word2": "Lure" },
        { "word1": "Net", "word2": "Trap" },
        { "word1": "Cage", "word2": "Leash" },
        { "word1": "Collar", "word2": "Harness" },
        { "word1": "Muzzle", "word2": "Whistle" },
        { "word1": "Saddle", "word2": "Bridle" },
        { "word1": "Whip", "word2": "Spurs" },
        { "word1": "Horseshoe", "word2": "Nail (Horse)" },
        { "word1": "Tractor", "word2": "Plow" },
        { "word1": "Harvester", "word2": "Silo" },
        { "word1": "Barn", "word2": "Coop" },
        { "word1": "Fence", "word2": "Gate" },
        { "word1": "Brick", "word2": "Mortar" },
        { "word1": "Cinderblock", "word2": "Stone" },
        { "word1": "Tile", "word2": "Grout" },
        { "word1": "Plank", "word2": "Beam" },
        { "word1": "Plywood", "word2": "Drywall" },
        { "word1": "Insulation", "word2": "Siding" },
        { "word1": "Shingle", "word2": "Gutter" },
        { "word1": "Pipe (Plumbing)", "word2": "Valve" },
        { "word1": "Faucet", "word2": "Drain" },
        { "word1": "Sink", "word2": "Basin" },
        { "word1": "Toilet", "word2": "Bidet" },
        { "word1": "Shower", "word2": "Bathtub" },
        { "word1": "Mat", "word2": "Rug" },
        { "word1": "Carpet", "word2": "Linoleum" },
        { "word1": "Wallpaper", "word2": "Paint (Wall)" },
        { "word1": "Window", "word2": "Door" },
        { "word1": "Knob", "word2": "Hinge" },
        { "word1": "Lockset", "word2": "Deadbolt" },
        { "word1": "Keypad", "word2": "Scanner (Biometric)" },
        { "word1": "Intercom", "word2": "Doorbell" },
        { "word1": "Camera (Security)", "word2": "Sensor" },
        { "word1": "Alarm", "word2": "Siren" },
        { "word1": "Extinguisher", "word2": "Sprinkler (Fire)" },
        { "word1": "Hydrant", "word2": "Hose (Fire)" },
        { "word1": "Axe (Fire)", "word2": "Hook (Fire)" },
        { "word1": "Engine (Car)", "word2": "Transmission" },
        { "word1": "Battery (Car)", "word2": "Alternator" },
        { "word1": "Radiator", "word2": "Fan" },
        { "word1": "Muffler", "word2": "Exhaust Pipe" },
        { "word1": "Tire", "word2": "Wheel" },
        { "word1": "Brake", "word2": "Rotor" },
        { "word1": "Piston", "word2": "Cylinder" },
        { "word1": "Spark Plug", "word2": "Ignition" },
        { "word1": "Carburetor", "word2": "Fuel Injector" },
        { "word1": "Filter (Oil)", "word2": "Filter (Air)" },
        { "word1": "Dipstick", "word2": "Gauge" },
        { "word1": "Steering Wheel", "word2": "Dashboard" },
        { "word1": "Windshield", "word2": "Wiper" },
        { "word1": "Mirror (Side)", "word2": "Mirror (Rearview)" },
        { "word1": "Headlight", "word2": "Taillight" },
        { "word1": "Bumper", "word2": "Grille" },
        { "word1": "Hood", "word2": "Trunk" },
        { "word1": "Seat", "word2": "Seatbelt" },
        { "word1": "Airbag", "word2": "Dashboard (Car)" },
        { "word1": "Radio", "word2": "Speaker (Car)" },
        { "word1": "Antenna", "word2": "Receiver" },
        { "word1": "Amplifier", "word2": "Subwoofer" },
        { "word1": "Equalizer", "word2": "Mixer (Audio)" },
        { "word1": "Turntable", "word2": "Stylus" },
        { "word1": "Tone Arm", "word2": "Platter" },
        { "word1": "Slipmat", "word2": "Weights" },
        { "word1": "Dumbbell", "word2": "Barbell" },
        { "word1": "Kettlebell", "word2": "Medicine Ball" },
        { "word1": "Treadmill", "word2": "Elliptical" },
        { "word1": "Rowing Machine", "word2": "Stationary Bike" },
        { "word1": "Yoga Mat", "word2": "Foam Roller" },
        { "word1": "Jump Rope", "word2": "Resistance Band" },
        { "word1": "Punching Bag", "word2": "Gloves (Boxing)" },
        { "word1": "Speed Bag", "word2": "Mouthguard" },
        { "word1": "Shin Guards", "word2": "Headgear" },
        { "word1": "Jersey", "word2": "Shorts (Sport)" },
        { "word1": "Cleats", "word2": "Sneakers (Sport)" },
        { "word1": "Ball", "word2": "Bat" },
        { "word1": "Glove (Baseball)", "word2": "Mitt" },
        { "word1": "Helmet (Baseball)", "word2": "Cap (Baseball)" },
        { "word1": "Racket", "word2": "Shuttlecock" },
        { "word1": "Paddle", "word2": "Ping Pong Ball" },
        { "word1": "Golf Club", "word2": "Golf Ball" },
        { "word1": "Tee", "word2": "Marker (Golf)" },
        { "word1": "Pool Cue", "word2": "Billiard Ball" },
        { "word1": "Chalk (Cue)", "word2": "Rack" },
        { "word1": "Dart", "word2": "Dartboard" },
        { "word1": "Bowling Ball", "word2": "Bowling Pin" },
        { "word1": "Skateboard", "word2": "Rollerblades" },
        { "word1": "Ice Skates", "word2": "Sled" },
        { "word1": "Ski", "word2": "Snowboard" },
        { "word1": "Pole (Ski)", "word2": "Goggles (Ski)" },
        { "word1": "Surfboard", "word2": "Paddleboard" },
        { "word1": "Kayak", "word2": "Canoe" },
        { "word1": "Paddle (Boat)", "word2": "Oar" },
        { "word1": "Life Vest", "word2": "Anchor" },
        { "word1": "Sail", "word2": "Mast" },
        { "word1": "Rudder", "word2": "Hull" },
        { "word1": "Propeller", "word2": "Engine (Boat)" },
        { "word1": "Compass (Marine)", "word2": "Sonar" },
        { "word1": "Radar (Marine)", "word2": "Radio (VHF)" },
        { "word1": "Kite", "word2": "Drone" },
        { "word1": "Controller", "word2": "Console" },
        { "word1": "Joystick", "word2": "Gamepad" },
        { "word1": "Headset", "word2": "VR Goggles" },
        { "word1": "Sim Rig", "word2": "Steering Wheel (Gaming)" }
    ]
};

// Rapid Fire random prompts dataset
const RAPIDFIRE_CATEGORIES = {
    Anime: [
        "Naruto Characters", "One Piece Characters", "Anime Series Names", 
        "Anime Superpowers/Abilities", "Anime Weapons", "Studio Ghibli Movies",
        "Protagonists", "Antagonists", "School Anime Settings", "Dragon Ball Characters"
    ],
    Movies: [
        "Action Movie Titles", "Famous Actors/Actresses", "Sci-Fi Movies", 
        "Marvel Characters", "DC Characters", "Disney Movies", "Oscar-Winning Movies",
        "Movie Directors", "Horror Movies", "Comedy Movies"
    ],
    "Real Persons": [
        "Billionaires", "US Presidents", "Famous Football/Soccer Players", 
        "Pop Stars", "Historical Scientists", "Actors", "Tech Founders",
        "Famous Youtubers", "Basketball Players", "Queens or Kings"
    ],
    Objects: [
        "Kitchen Tools", "Brands of Cars", "Types of Fruit", "Things in a Bedroom",
        "Things that are Red", "Items in a School Bag", "Electronic Gadgets",
        "Animals starting with C", "Brands of Clothes", "Soft Drinks / Beverages"
    ]
};

// Game Rules texts for dynamic pages loading
const GAME_RULES = {
    imposter: {
        title: "Imposter",
        desc: "A social deduction game where everyone knows the secret word except the impostors, who must blend in while trying to figure it out.",
        badges: ["3-11 players", "10 min", "#Deception"],
        steps: [
            { title: "Draw Roles", desc: "Everyone draws a role. Most players see the secret word, but impostors see nothing" },
            { title: "Give Clues", desc: "Players take turns giving hints about the secret word (impostors must fake it without knowing the word)" },
            { title: "Unmask Impostors", desc: "The group discusses and tries to identify who doesn't actually know the word" },
            { title: "Vote & Win", desc: "If the group finds all impostors, they win. If impostors stay hidden or guess the word, impostors win!" },
            { title: "Game Modes", desc: "You can play either Mode A (Classic Blind Imposter) or Mode B (Undercover / Related Word Mode) to test your deception skills." }
        ]
    },
    undercover: {
        title: "Undercover",
        desc: "A deduction game of related words. Citizens have the same word, the Undercover has a related word, and Mr. White gets nothing!",
        badges: ["3-11 players", "8 min", "#Deduction"],
        steps: [
            { title: "Draw Roles", desc: "Each player receives a role. Citizens get the normal word, Undercover gets a related word, Mr. White gets nothing." },
            { title: "Describe Word", desc: "Each player gives a one-word description of their secret word. Mr. White must invent one to blend in!" },
            { title: "Discuss & Vote", desc: "After description, discuss and vote out the suspect. You want to eliminate the Undercover and Mr. White." },
            { title: "Mr. White Guess", desc: "If Mr. White is voted out, they can try to guess the Citizens' word. If they guess correctly, they win!" },
            { title: "Win Condition", desc: "Citizens win if all Undercovers & Mr. White are eliminated. Undercover/Mr. White win if they survive." }
        ]
    },
    wordwolf: {
        title: "Word Wolf",
        desc: "A fast conversation game. Most players are Majority and get Word A, while the Minority get Word B. You must figure out who has the odd word!",
        badges: ["3-11 players", "5 min", "#Conversation"],
        steps: [
            { title: "Draw Roles", desc: "Draw roles secretly. You'll get Word A (Majority) or Word B (Minority). You won't know which side you are on!" },
            { title: "Give Clues", desc: "Go around and give subtle clues about your word, trying to see if someone else has a different word." },
            { title: "Locate Minority", desc: "Discuss who seems to have a slightly different word concept." },
            { title: "Vote Out Wolf", desc: "Vote on who is the Word Wolf (Minority). If you find them, Majority wins!" },
            { title: "Wolf Escape", desc: "If Minority survives or guesses Majority's word, Minority wins!" }
        ]
    },
    rapidfire: {
        title: "Rapid Fire",
        desc: "A fast-paced group party game. A ticking bomb is passed around. Name an item matching the category and pass it before it explodes!",
        badges: ["2-11 players", "3 min", "#FastAction"],
        steps: [
            { title: "Select Category", desc: "Select a word category. The game engine generates a random sub-category prompt." },
            { title: "Hold Bomb", desc: "The current player holds the bomb. The timer counts down as a ticking sound plays." },
            { title: "Name Item", desc: "Say a word matching the category out loud (e.g., Category: Car Brands -> 'Toyota')." },
            { title: "Pass Bomb", desc: "Tap 'PASS THE BOMB' to pass it to the next player. The bomb fuse burns faster!" },
            { title: "Explosion", desc: "When the bomb explodes, the player holding the device is eliminated. Last player standing wins!" }
        ]
    }
};

// Web Audio API Synth Engine for premium sound effects
const synthAudio = {
    ctx: null,
    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },
    playClick() {
        try {
            this.init();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.frequency.setValueAtTime(600, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.08);
            
            gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
            
            osc.start();
            osc.stop(this.ctx.currentTime + 0.08);
        } catch (e) { console.warn(e); }
    },
    playTick(isFast = false) {
        try {
            this.init();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(isFast ? 1200 : 800, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
            
            osc.start();
            osc.stop(this.ctx.currentTime + 0.05);
        } catch (e) { console.warn(e); }
    },
    playReveal() {
        try {
            this.init();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(250, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(550, this.ctx.currentTime + 0.25);
            
            gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
            
            osc.start();
            osc.stop(this.ctx.currentTime + 0.25);
        } catch (e) { console.warn(e); }
    },
    playWin() {
        try {
            this.init();
            const now = this.ctx.currentTime;
            const playNote = (freq, start, duration) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, start);
                gain.gain.setValueAtTime(0.08, start);
                gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
                osc.start(start);
                osc.stop(start + duration);
            };
            playNote(523.25, now, 0.12);
            playNote(659.25, now + 0.12, 0.12);
            playNote(783.99, now + 0.24, 0.12);
            playNote(1046.50, now + 0.36, 0.35);
        } catch (e) { console.warn(e); }
    },
    playLose() {
        try {
            this.init();
            const now = this.ctx.currentTime;
            const playNote = (freq, start, duration) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, start);
                gain.gain.setValueAtTime(0.08, start);
                gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
                osc.start(start);
                osc.stop(start + duration);
            };
            playNote(220.00, now, 0.2);
            playNote(207.65, now + 0.2, 0.2);
            playNote(196.00, now + 0.4, 0.45);
        } catch (e) { console.warn(e); }
    },
    playExplosion() {
        try {
            this.init();
            const now = this.ctx.currentTime;
            // Deep rumble synth
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(100, now);
            osc.frequency.exponentialRampToValueAtTime(30, now + 0.8);
            
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
            osc.start(now);
            osc.stop(now + 0.8);
        } catch (e) { console.warn(e); }
    }
};

// Application State
const appState = {
    gameType: 'imposter', // 'imposter' | 'undercover' | 'wordwolf' | 'rapidfire'
    currentScreen: 'home',
    players: ['Player 1', 'Player 2', 'Player 3'],
    category: 'Objects',
    mode: 'ModeA', // ModeA: Blind, ModeB: Undercover (used only in Imposter)
    gameWordPair: null,
    normalWord: '',
    imposterWord: '',
    roles: [], // Array of role objects: { name: string, role: string, isImposter: boolean, word: string, desc: string }
    distributionIndex: 0,
    distributionRevealed: false,
    votes: {}, // voterName: votedPlayerIndex
    winner: null,
    votedPlayerIndex: null,
    isMuted: false,
    
    // Rapid Fire states
    rapidfireActiveIndex: 0,
    rapidfireTimer: 20,
    rapidfireInterval: null,
    rapidfireCategory: '',
    rapidfireSubcategory: '',
    rapidfirePlayerOut: ''
};

// Screen Management
function changeScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    const targetScreen = document.getElementById(`screen-${screenId}`);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
        appState.currentScreen = screenId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Set Game Type from Home Screen and configure Rules
function setGameType(type) {
    appState.gameType = type;
    renderRulesScreen();
    changeScreen('rules');
}

// Render dynamic rules screen contents
function renderRulesScreen() {
    const rules = GAME_RULES[appState.gameType];
    if (!rules) return;

    document.getElementById('rules-title').innerText = rules.title;
    document.getElementById('rules-desc').innerText = rules.desc;

    // Badges
    document.getElementById('rules-badge-players').innerText = rules.badges[0];
    document.getElementById('rules-badge-time').innerText = rules.badges[1];
    document.getElementById('rules-badge-tag').innerText = rules.badges[2];

    // Dynamic steps container
    const container = document.getElementById('rules-steps-container');
    container.innerHTML = '';

    rules.steps.forEach((step, idx) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'flex flex-col items-center animate-scale-up';
        stepDiv.style.animationDelay = `${idx * 0.05}s`;
        stepDiv.innerHTML = `
            <span class="text-3xl font-extrabold text-[#E65100] mb-2">${idx + 1}</span>
            <div class="w-full bg-[#FFEBE1] rounded-[24px] p-5 shadow-sm border border-[#FFD8B3]/35">
                <h4 class="text-lg font-bold text-[#3E2723]">${escapeHTML(step.title)}</h4>
                <p class="text-sm text-[#5D4037] mt-1.5 leading-relaxed">${escapeHTML(step.desc)}</p>
            </div>
        `;
        container.appendChild(stepDiv);
    });
}

// Sound toggles
function toggleMute() {
    appState.isMuted = !appState.isMuted;
    const muteIcons = document.querySelectorAll('.mute-icon');
    muteIcons.forEach(icon => {
        if (appState.isMuted) {
            icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />`;
        } else {
            icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />`;
        }
    });
}

function playSound(type) {
    if (appState.isMuted) return;
    if (type === 'click') synthAudio.playClick();
    if (type === 'reveal') synthAudio.playReveal();
    if (type === 'win') synthAudio.playWin();
    if (type === 'lose') synthAudio.playLose();
    if (type === 'explosion') synthAudio.playExplosion();
}

// Confetti Effect for Victories
function launchConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > end) return clearInterval(interval);

        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = ['#FF7043', '#FFB74D', '#FF8A65', '#E65100', '#FFCC80'][Math.floor(Math.random() * 5)];
        confetti.style.transform = `scale(${Math.random() * 0.6 + 0.6})`;
        
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }, 50);
}

// Initial Setup & DOM Loading
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    renderPlayerSetupList();
});

function initApp() {
    // Intercept click on document to unlock audio context smoothly
    document.addEventListener('click', () => {
        synthAudio.init();
    }, { once: true });

    // Mute button registration
    document.querySelectorAll('.btn-mute').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMute();
        });
    });

    // Home screen interactive items
    document.getElementById('card-imposter').addEventListener('click', () => {
        playSound('click');
        setGameType('imposter');
    });

    document.getElementById('card-undercover').addEventListener('click', () => {
        playSound('click');
        setGameType('undercover');
    });

    document.getElementById('card-wordwolf').addEventListener('click', () => {
        playSound('click');
        setGameType('wordwolf');
    });

    document.getElementById('card-rapidfire').addEventListener('click', () => {
        playSound('click');
        setGameType('rapidfire');
    });

    // Navigation buttons
    document.getElementById('btn-rules-back').addEventListener('click', () => {
        playSound('click');
        changeScreen('home');
    });

    document.getElementById('btn-rules-next').addEventListener('click', () => {
        playSound('click');
        
        // Show/hide Mode setting container based on chosen game
        const modeContainer = document.getElementById('setup-mode-container');
        if (appState.gameType === 'imposter') {
            modeContainer.classList.remove('hidden');
        } else {
            modeContainer.classList.add('hidden');
        }
        
        changeScreen('setup');
    });

    document.getElementById('btn-setup-back').addEventListener('click', () => {
        playSound('click');
        changeScreen('rules');
    });

    // Setup Category Cards Selection
    document.querySelectorAll('.card-category').forEach(card => {
        card.addEventListener('click', () => {
            playSound('click');
            document.querySelectorAll('.card-category').forEach(c => c.classList.remove('selected', 'ring-2', 'ring-[#E65100]'));
            card.classList.add('selected', 'ring-2', 'ring-[#E65100]');
            appState.category = card.dataset.category;
        });
    });

    // Setup Game Mode Toggle
    document.querySelectorAll('.card-mode').forEach(card => {
        card.addEventListener('click', () => {
            playSound('click');
            document.querySelectorAll('.card-mode').forEach(c => {
                c.classList.remove('selected', 'ring-2', 'ring-[#E65100]');
                const radioOuter = c.querySelector('.rounded-full.border-2');
                const radioDot = c.querySelector('.mode-radio-dot');
                if (radioOuter) {
                    radioOuter.classList.remove('border-[#E65100]');
                    radioOuter.classList.add('border-orange-400');
                }
                if (radioDot) {
                    radioDot.classList.remove('bg-[#E65100]');
                    radioDot.classList.add('bg-transparent');
                }
            });
            
            card.classList.add('selected', 'ring-2', 'ring-[#E65100]');
            const radioOuter = card.querySelector('.rounded-full.border-2');
            const radioDot = card.querySelector('.mode-radio-dot');
            if (radioOuter) {
                radioOuter.classList.remove('border-orange-400');
                radioOuter.classList.add('border-[#E65100]');
            }
            if (radioDot) {
                radioDot.classList.remove('bg-transparent');
                radioDot.classList.add('bg-[#E65100]');
            }
            appState.mode = card.dataset.mode;
        });
    });

    // Player inputs
    const playerInput = document.getElementById('player-name-input');
    const addPlayerBtn = document.getElementById('btn-add-player');

    const handleAddPlayer = () => {
        const name = playerInput.value.trim();
        if (name) {
            if (appState.players.length >= 11) {
                alert("Maximum 11 players allowed.");
                return;
            }
            if (appState.players.includes(name)) {
                alert("Player name already exists.");
                return;
            }
            appState.players.push(name);
            playerInput.value = '';
            playSound('click');
            renderPlayerSetupList();
        }
    };

    addPlayerBtn.addEventListener('click', handleAddPlayer);
    playerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddPlayer();
    });

    // Start Game logic
    document.getElementById('btn-start-game').addEventListener('click', () => {
        playSound('click');
        
        // Rapid Fire requires at least 2 players, other deduction games require at least 3 players
        const minPlayers = (appState.gameType === 'rapidfire') ? 2 : 3;
        if (appState.players.length < minPlayers) {
            alert(`A minimum of ${minPlayers} players are required to play.`);
            return;
        }
        setupNewGame();
    });

    // Distribution actions
    document.getElementById('btn-tap-reveal').addEventListener('click', () => {
        playSound('reveal');
        revealRoleCard();
    });

    document.getElementById('btn-role-confirm').addEventListener('click', () => {
        playSound('click');
        confirmAndNextRole();
    });

    // Gameplay Screen Action
    document.getElementById('btn-go-to-vote').addEventListener('click', () => {
        playSound('click');
        setupVotingScreen();
    });

    // Voting screen action
    document.getElementById('btn-confirm-vote').addEventListener('click', () => {
        playSound('click');
        tallyVotesAndProcess();
    });

    // Play again or home
    document.getElementById('btn-play-again').addEventListener('click', () => {
        playSound('click');
        setupNewGame();
    });

    document.getElementById('btn-home-end').addEventListener('click', () => {
        playSound('click');
        changeScreen('home');
    });

    // Rapid Fire pass button listener
    document.getElementById('btn-rapidfire-pass').addEventListener('click', () => {
        playSound('click');
        // Advance player index
        appState.rapidfireActiveIndex = (appState.rapidfireActiveIndex + 1) % appState.players.length;
        document.getElementById('rapidfire-current-player').innerText = appState.players[appState.rapidfireActiveIndex];
    });
}

// Render player setup chips
function renderPlayerSetupList() {
    const listContainer = document.getElementById('player-list-container');
    listContainer.innerHTML = '';

    appState.players.forEach((player, index) => {
        const chip = document.createElement('div');
        chip.className = 'flex items-center gap-2 bg-[#FFEBE1] text-[#3E2723] px-4 py-2 rounded-full border border-[#FFD8B3] animate-scale-up font-medium';
        chip.innerHTML = `
            <span>${escapeHTML(player)}</span>
            <button class="text-orange-700 hover:text-orange-950 font-bold focus:outline-none" onclick="removePlayer(${index})">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        `;
        listContainer.appendChild(chip);
    });

    // Update player counter count
    document.getElementById('player-count-indicator').innerText = `${appState.players.length} Players`;
}

// Remove player helper (globally accessible)
window.removePlayer = function(index) {
    const minPlayers = (appState.gameType === 'rapidfire') ? 2 : 3;
    if (appState.players.length <= minPlayers) {
        alert(`A minimum of ${minPlayers} players are required to play.`);
        return;
    }
    appState.players.splice(index, 1);
    playSound('click');
    renderPlayerSetupList();
};

// Set up the game state, choose roles and words based on game type
function setupNewGame() {
    // Clear any active Rapid Fire intervals
    if (appState.rapidfireInterval) {
        clearInterval(appState.rapidfireInterval);
        appState.rapidfireInterval = null;
    }

    if (appState.gameType === 'rapidfire') {
        setupRapidFireGame();
    } else if (appState.gameType === 'undercover') {
        setupUndercoverGame();
    } else if (appState.gameType === 'wordwolf') {
        setupWordWolfGame();
    } else {
        setupImposterGame();
    }
}

// 1. Imposter Game Setup
function setupImposterGame() {
    const categoryPairs = WORD_DATASET[appState.category] || WORD_DATASET["Objects"];
    const randomPair = categoryPairs[Math.floor(Math.random() * categoryPairs.length)];
    appState.gameWordPair = randomPair;

    appState.imposterIndex = Math.floor(Math.random() * appState.players.length);

    const assignModeBSwapped = Math.random() < 0.5;
    const word1 = assignModeBSwapped ? randomPair.word2 : randomPair.word1;
    const word2 = assignModeBSwapped ? randomPair.word1 : randomPair.word2;

    appState.normalWord = word1;
    appState.imposterWord = word2;

    appState.roles = appState.players.map((player, index) => {
        const isImposter = (index === appState.imposterIndex);
        let secretContent = '';
        let roleName = 'Investigator';
        let desc = 'Describe your word. Avoid giving away too much, as the Imposter is listening!';

        if (isImposter) {
            roleName = 'Imposter';
            if (appState.mode === 'ModeA') {
                secretContent = '???';
                desc = 'You are the Imposter! Blend in and try to guess the secret word.';
            } else {
                secretContent = word2;
                desc = 'Describe your word. One of the players has a related word. You might be the undercover!';
            }
        } else {
            secretContent = word1;
        }

        return {
            name: player,
            role: roleName,
            isImposter: isImposter,
            word: secretContent,
            desc: desc
        };
    });

    resetDistributionAndDraw();
}

// 2. Undercover Game Setup
function setupUndercoverGame() {
    const categoryPairs = WORD_DATASET[appState.category] || WORD_DATASET["Objects"];
    const randomPair = categoryPairs[Math.floor(Math.random() * categoryPairs.length)];
    appState.gameWordPair = randomPair;

    const assignSwapped = Math.random() < 0.5;
    const citizenWord = assignSwapped ? randomPair.word2 : randomPair.word1;
    const undercoverWord = assignSwapped ? randomPair.word1 : randomPair.word2;

    appState.normalWord = citizenWord;
    appState.imposterWord = undercoverWord;

    // Pick 1 Undercover
    const tempIndices = [...Array(appState.players.length).keys()];
    const undercoverIdx = tempIndices.splice(Math.floor(Math.random() * tempIndices.length), 1)[0];
    
    // Pick Mr White if players >= 5
    let whiteIdx = -1;
    if (appState.players.length >= 5) {
        whiteIdx = tempIndices.splice(Math.floor(Math.random() * tempIndices.length), 1)[0];
    }

    appState.roles = appState.players.map((player, index) => {
        let roleName = 'Citizen';
        let secretContent = citizenWord;
        let isImposter = false;
        let desc = 'Describe your word. Find the Undercover with the related word, and watch out for Mr. White!';

        if (index === undercoverIdx) {
            roleName = 'Undercover';
            secretContent = undercoverWord;
            isImposter = true;
            desc = 'Describe your word. You have the related word. Citizens have a different word. Blend in!';
        } else if (index === whiteIdx) {
            roleName = 'Mr. White';
            secretContent = '???';
            isImposter = true;
            desc = 'You are Mr. White! You have no word. Listen to others, blend in, and try to guess the secret word!';
        }

        return {
            name: player,
            role: roleName,
            isImposter: isImposter,
            word: secretContent,
            desc: desc
        };
    });

    resetDistributionAndDraw();
}

// 3. Word Wolf Game Setup
function setupWordWolfGame() {
    const categoryPairs = WORD_DATASET[appState.category] || WORD_DATASET["Objects"];
    const randomPair = categoryPairs[Math.floor(Math.random() * categoryPairs.length)];
    appState.gameWordPair = randomPair;

    const assignSwapped = Math.random() < 0.5;
    const majorityWord = assignSwapped ? randomPair.word2 : randomPair.word1;
    const minorityWord = assignSwapped ? randomPair.word1 : randomPair.word2;

    appState.normalWord = majorityWord;
    appState.imposterWord = minorityWord;

    // Pick Word Wolves (1 if players < 6, 2 if players >= 6)
    const wolfCount = (appState.players.length >= 6) ? 2 : 1;
    const wolfIndices = [];
    const tempIndices = [...Array(appState.players.length).keys()];
    for (let i = 0; i < wolfCount; i++) {
        const picked = tempIndices.splice(Math.floor(Math.random() * tempIndices.length), 1)[0];
        wolfIndices.push(picked);
    }

    appState.roles = appState.players.map((player, index) => {
        const isWolf = wolfIndices.includes(index);
        let roleName = 'Majority';
        let secretContent = majorityWord;
        let desc = 'Describe your word. Identify who holds the related Minority word!';

        if (isWolf) {
            roleName = 'Word Wolf';
            secretContent = minorityWord;
            desc = 'Describe your word. You have the minority word! Partner with any wolves to blend in.';
        }

        return {
            name: player,
            role: roleName,
            isImposter: isWolf,
            word: secretContent,
            desc: desc
        };
    });

    resetDistributionAndDraw();
}

// Reset distribution common function
function resetDistributionAndDraw() {
    appState.distributionIndex = 0;
    appState.distributionRevealed = false;
    appState.votes = {};
    appState.votedPlayerIndex = null;
    appState.winner = null;

    prepareDistributionScreen();
    changeScreen('distribution');
}

// 4. Rapid Fire Game Setup (Bypasses distribution screen entirely)
function setupRapidFireGame() {
    const categoryList = RAPIDFIRE_CATEGORIES[appState.category] || RAPIDFIRE_CATEGORIES["Objects"];
    const randomSub = categoryList[Math.floor(Math.random() * categoryList.length)];
    
    appState.rapidfireCategory = appState.category;
    appState.rapidfireSubcategory = randomSub;
    appState.rapidfireActiveIndex = 0;
    appState.rapidfirePlayerOut = '';
    
    // Choose random overall bomb timer (e.g. between 18 and 28 seconds)
    appState.rapidfireTimer = Math.floor(Math.random() * 11) + 18;

    // Set UI labels
    document.getElementById('rapidfire-category').innerText = appState.rapidfireCategory;
    document.getElementById('rapidfire-subcategory').innerText = `Category Topic: "${randomSub}"`;
    document.getElementById('rapidfire-current-player').innerText = appState.players[0];
    document.getElementById('rapidfire-timer-text').innerText = appState.rapidfireTimer;

    // Reset bomb style classes
    const bombElement = document.getElementById('rapidfire-bomb');
    bombElement.className = 'w-36 h-36 rounded-full bg-[#3E2723] relative flex items-center justify-center border-4 border-orange-950 transition-all duration-300';

    // Start ticking loop
    appState.rapidfireInterval = setInterval(() => {
        appState.rapidfireTimer--;
        document.getElementById('rapidfire-timer-text').innerText = appState.rapidfireTimer;

        // Play ticking sounds (low speed initially, fast speed for last 5 seconds)
        const isFast = (appState.rapidfireTimer <= 5);
        synthAudio.playTick(isFast);

        // Visual alert animation
        const bombElement = document.getElementById('rapidfire-bomb');
        if (appState.rapidfireTimer <= 5) {
            bombElement.classList.add('bg-red-600', 'border-red-950');
            // Shake effect
            bombElement.classList.add('scale-105');
            setTimeout(() => bombElement.classList.remove('scale-105'), 150);
        }

        if (appState.rapidfireTimer <= 0) {
            // BOOM!
            clearInterval(appState.rapidfireInterval);
            appState.rapidfireInterval = null;
            appState.rapidfirePlayerOut = appState.players[appState.rapidfireActiveIndex];
            
            playSound('explosion');
            tallyRapidFireResults();
        }
    }, 1000);

    changeScreen('rapidfire-gameplay');
}

// Build role distribution screen state
function prepareDistributionScreen() {
    const currentPlayer = appState.roles[appState.distributionIndex];
    
    // Set prompt: Pass the device to [Player Name]
    document.getElementById('distribution-prompt-player').innerText = currentPlayer.name;
    document.getElementById('distribution-device-holder').innerText = currentPlayer.name;

    // Show initial secure mode: "Tap to Reveal" button is visible, content container is hidden
    document.getElementById('role-hidden-state').classList.remove('hidden');
    document.getElementById('role-revealed-state').classList.add('hidden');
}

// Reveal role card
function revealRoleCard() {
    const currentPlayer = appState.roles[appState.distributionIndex];
    const targetElement = document.getElementById('role-word-display');
    const descElement = document.getElementById('role-desc-display');
    const badgeElement = document.getElementById('role-badge-display');
    const cardContent = document.getElementById('role-reveal-card');

    targetElement.innerText = currentPlayer.word;
    descElement.innerText = currentPlayer.desc;

    // Color coordination based on drawing role
    if (currentPlayer.role === 'Imposter' || currentPlayer.role === 'Undercover' || currentPlayer.role === 'Word Wolf') {
        badgeElement.innerText = currentPlayer.role;
        badgeElement.className = "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-red-100 text-red-700 border border-red-200 uppercase";
        cardContent.className = "bg-rose-50 border-2 border-red-300 rounded-3xl p-8 text-center shadow-lg animate-scale-up";
    } else if (currentPlayer.role === 'Mr. White') {
        badgeElement.innerText = "MR. WHITE";
        badgeElement.className = "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-amber-100 text-amber-700 border border-amber-200 uppercase";
        cardContent.className = "bg-amber-50 border-2 border-amber-300 rounded-3xl p-8 text-center shadow-lg animate-scale-up";
    } else {
        // Normal Investigators or Citizens
        badgeElement.innerText = currentPlayer.role;
        badgeElement.className = "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-emerald-100 text-emerald-700 border border-emerald-200 uppercase";
        cardContent.className = "bg-emerald-50/70 border border-emerald-100 rounded-3xl p-8 text-center shadow-lg animate-scale-up";
    }

    // Toggle view
    document.getElementById('role-hidden-state').classList.add('hidden');
    document.getElementById('role-revealed-state').classList.remove('hidden');
    appState.distributionRevealed = true;
}

function confirmAndNextRole() {
    appState.distributionIndex++;

    if (appState.distributionIndex < appState.roles.length) {
        prepareDistributionScreen();
    } else {
        // Finished handover. Transition to Gameplay Screen
        setupGameplayScreen();
        changeScreen('gameplay');
    }
}

// Configure Gameplay Screen
function setupGameplayScreen() {
    const listContainer = document.getElementById('gameplay-player-list');
    listContainer.innerHTML = '';

    appState.roles.forEach((playerObj, idx) => {
        const item = document.createElement('div');
        item.className = 'flex items-center justify-between p-4 bg-[#FFEBE1] rounded-2xl border border-[#FFD8B3] transition-all hover:bg-orange-50';
        item.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="flex items-center justify-center w-8 h-8 rounded-full bg-[#E65100] text-white font-bold text-sm">
                    ${idx + 1}
                </span>
                <span class="font-semibold text-[#3E2723] text-lg">${escapeHTML(playerObj.name)}</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="inline-block px-3 py-1 bg-orange-100 border border-orange-200 text-orange-800 text-xs rounded-full font-medium">Ready</span>
            </div>
        `;
        listContainer.appendChild(item);
    });

    // Game modes labels
    let modeText = 'Blind Imposter';
    if (appState.gameType === 'imposter' && appState.mode === 'ModeB') {
        modeText = 'Undercover Word';
    } else if (appState.gameType === 'undercover') {
        modeText = 'Undercover Deduction';
    } else if (appState.gameType === 'wordwolf') {
        modeText = 'Word Wolf Game';
    }

    document.getElementById('gameplay-mode-pill').innerText = modeText;
    document.getElementById('gameplay-category-pill').innerText = appState.category;
}

// Configure Voting Screen suspects layout
function setupVotingScreen() {
    const gridContainer = document.getElementById('voting-grid-container');
    gridContainer.innerHTML = '';
    
    appState.votedPlayerIndex = null;
    document.getElementById('btn-confirm-vote').disabled = true;
    document.getElementById('btn-confirm-vote').classList.add('opacity-50', 'cursor-not-allowed');

    appState.roles.forEach((playerObj, idx) => {
        const card = document.createElement('div');
        card.className = 'card-interactive rounded-2xl p-5 flex flex-col items-center justify-center text-center relative border border-transparent shadow-sm hover:shadow-md';
        card.dataset.index = idx;
        card.innerHTML = `
            <div class="w-12 h-12 rounded-full bg-[#E65100]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#E65100]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
            <span class="font-bold text-[#3E2723] text-lg block truncate max-w-full">${escapeHTML(playerObj.name)}</span>
            <span class="text-xs text-orange-800/60 mt-1 font-medium">Suspect</span>
        `;

        card.addEventListener('click', () => {
            playSound('click');
            document.querySelectorAll('#voting-grid-container .card-interactive').forEach(c => {
                c.classList.remove('selected', 'ring-2', 'ring-[#E65100]');
            });
            card.classList.add('selected', 'ring-2', 'ring-[#E65100]');
            appState.votedPlayerIndex = idx;
            
            const confirmBtn = document.getElementById('btn-confirm-vote');
            confirmBtn.disabled = false;
            confirmBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        });

        gridContainer.appendChild(card);
    });

    changeScreen('voting');
}

// Final Game Tallying and Results calculation
function tallyVotesAndProcess() {
    const votedIdx = appState.votedPlayerIndex;
    const votedPlayer = appState.roles[votedIdx];

    let outcomeTitle = '';
    let outcomeSub = '';
    let isWin = false;

    if (appState.gameType === 'imposter') {
        const isImposterCaught = (votedIdx === appState.imposterIndex);
        if (isImposterCaught) {
            appState.winner = 'investigators';
            outcomeTitle = "Investigators Win!";
            outcomeSub = `You successfully caught the Imposter: ${votedPlayer.name}!`;
            isWin = true;
        } else {
            appState.winner = 'imposter';
            const imposterPlayer = appState.roles[appState.imposterIndex];
            outcomeTitle = "Imposter Wins!";
            outcomeSub = `The Imposter (${imposterPlayer.name}) tricked everyone! You voted out ${votedPlayer.name}.`;
        }
    } else if (appState.gameType === 'undercover') {
        // Undercover wins if voters picked a Citizen. Citizens win if they picked an undercover role (Undercover or Mr White).
        const isBadGuyVoted = (votedPlayer.role === 'Undercover' || votedPlayer.role === 'Mr. White');
        if (isBadGuyVoted) {
            appState.winner = 'investigators';
            outcomeTitle = "Citizens Win!";
            outcomeSub = `You successfully eliminated the spy: ${votedPlayer.name} (${votedPlayer.role})!`;
            isWin = true;
        } else {
            appState.winner = 'imposter';
            outcomeTitle = "Spy Team Wins!";
            outcomeSub = `You eliminated a Citizen: ${votedPlayer.name}. The spies succeeded!`;
        }
    } else if (appState.gameType === 'wordwolf') {
        // Word Wolf wins if voters picked a Majority member. Majority wins if they picked a Wolf (Minority).
        if (votedPlayer.role === 'Word Wolf') {
            appState.winner = 'investigators';
            outcomeTitle = "Majority Wins!";
            outcomeSub = `You successfully spotted the Word Wolf: ${votedPlayer.name}!`;
            isWin = true;
        } else {
            appState.winner = 'imposter';
            outcomeTitle = "Word Wolves Win!";
            outcomeSub = `You eliminated Majority member: ${votedPlayer.name}. The Wolves escaped detection!`;
        }
    }

    if (isWin) {
        playSound('win');
        launchConfetti();
    } else {
        playSound('lose');
    }

    // Results Header detail
    document.getElementById('results-outcome-title').innerText = outcomeTitle;
    document.getElementById('results-outcome-title').className = isWin 
        ? "text-4xl font-extrabold text-emerald-700 tracking-tight animate-scale-up"
        : "text-4xl font-extrabold text-red-700 tracking-tight animate-scale-up";
    document.getElementById('results-outcome-sub').innerText = outcomeSub;

    document.getElementById('results-category').innerText = appState.category;
    document.getElementById('results-mode').innerText = getGameModeLabel();

    // Display comparison words
    const wordInfoDiv = document.getElementById('results-words-detail');
    const labelA = (appState.gameType === 'wordwolf') ? 'Majority Word' : 'Secret Word';
    const labelB = (appState.gameType === 'wordwolf') ? 'Wolf Word' : 'Imposter Word';
    const valB = (appState.gameType === 'imposter' && appState.mode === 'ModeA') ? '??? (Blind)' : appState.imposterWord;

    wordInfoDiv.innerHTML = `
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                <span class="text-xs text-emerald-800/60 font-semibold uppercase tracking-wider block mb-1">${labelA}</span>
                <span class="text-xl font-bold text-emerald-800">${escapeHTML(appState.normalWord)}</span>
            </div>
            <div class="bg-rose-50 p-4 rounded-2xl border border-rose-100">
                <span class="text-xs text-rose-800/60 font-semibold uppercase tracking-wider block mb-1">${labelB}</span>
                <span class="text-xl font-bold text-rose-800">${escapeHTML(valB)}</span>
            </div>
        </div>
    `;

    // Reveal entire roles list
    const cardsContainer = document.getElementById('results-roles-reveal');
    cardsContainer.innerHTML = '';

    appState.roles.forEach((playerObj, idx) => {
        const item = document.createElement('div');
        
        let cardBg = 'bg-[#FFEBE1] border-[#FFD8B3]';
        let badgeHTML = '';

        if (playerObj.isImposter) {
            cardBg = 'bg-rose-100/90 border-rose-300 ring-2 ring-rose-300';
            badgeHTML = `<span class="px-2 py-0.5 bg-red-600 text-white font-bold text-[10px] rounded uppercase tracking-wider">${playerObj.role}</span>`;
        } else if (idx === votedIdx) {
            cardBg = 'bg-amber-100 border-amber-300 ring-1 ring-amber-200';
            badgeHTML = `<span class="px-2 py-0.5 bg-amber-600 text-white font-bold text-[10px] rounded uppercase tracking-wider">Voted Out</span>`;
        }

        item.className = `flex items-center justify-between p-4 rounded-2xl border ${cardBg} transition-all`;
        item.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="font-bold text-[#3E2723] text-lg">${escapeHTML(playerObj.name)}</span>
                ${badgeHTML}
            </div>
            <div class="text-right">
                <span class="text-xs text-orange-950/60 block font-semibold uppercase tracking-wider">Role Word</span>
                <span class="font-bold text-[#3E2723]">${escapeHTML(playerObj.word)}</span>
            </div>
        `;
        cardsContainer.appendChild(item);
    });

    changeScreen('results');
}

// Tally and render results for Rapid Fire Explosion
function tallyRapidFireResults() {
    playSound('lose');
    
    const outcomeTitle = document.getElementById('results-outcome-title');
    outcomeTitle.innerText = "BOOM! Exploded!";
    outcomeTitle.className = "text-4xl font-extrabold text-red-700 tracking-tight animate-scale-up animate-pulse";
    
    document.getElementById('results-outcome-sub').innerText = `The ticking bomb exploded on: ${appState.rapidfirePlayerOut}!`;
    document.getElementById('results-category').innerText = appState.rapidfireCategory;
    document.getElementById('results-mode').innerText = "Rapid Fire Mode";

    // Sub-category label info
    const wordInfoDiv = document.getElementById('results-words-detail');
    wordInfoDiv.innerHTML = `
        <div class="bg-amber-50 p-4 rounded-2xl border border-amber-100 text-center">
            <span class="text-xs text-amber-800/60 font-semibold uppercase tracking-wider block mb-1">Topic Selected</span>
            <span class="text-2xl font-black text-amber-950">"${appState.rapidfireSubcategory}"</span>
        </div>
    `;

    // Reveal final list of players showing who survived and who exploded
    const cardsContainer = document.getElementById('results-roles-reveal');
    cardsContainer.innerHTML = '';

    appState.players.forEach((player, idx) => {
        const item = document.createElement('div');
        const isLoser = (player === appState.rapidfirePlayerOut);
        
        let cardBg = 'bg-emerald-50 border-emerald-200';
        let badgeHTML = `<span class="px-2 py-0.5 bg-emerald-600 text-white font-bold text-[10px] rounded uppercase tracking-wider">Survived</span>`;

        if (isLoser) {
            cardBg = 'bg-red-100 border-red-300 ring-2 ring-red-300';
            badgeHTML = `<span class="px-2 py-0.5 bg-red-600 text-white font-bold text-[10px] rounded uppercase tracking-wider">ELIMINATED</span>`;
        }

        item.className = `flex items-center justify-between p-4 rounded-2xl border ${cardBg} transition-all`;
        item.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="font-bold text-[#3E2723] text-lg">${escapeHTML(player)}</span>
                ${badgeHTML}
            </div>
            <div class="text-right">
                <span class="text-xs text-orange-950/60 block font-semibold uppercase tracking-wider">Status</span>
                <span class="font-bold text-[#3E2723]">${isLoser ? 'BOOM 💥' : 'Safe 🛡️'}</span>
            </div>
        `;
        cardsContainer.appendChild(item);
    });

    changeScreen('results');
}

// Helpers
function getGameModeLabel() {
    if (appState.gameType === 'imposter') {
        return appState.mode === 'ModeA' ? 'Blind Imposter' : 'Undercover Mode';
    } else if (appState.gameType === 'undercover') {
        return 'Undercover Deduction';
    } else if (appState.gameType === 'wordwolf') {
        return 'Word Wolf Game';
    }
    return 'Classic Mode';
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
