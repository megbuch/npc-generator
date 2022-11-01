"use strict";

//arrays
const sex = ["female", "male"];

let confirmedSex = "";

let confirmedAlignment = "";

const femaleNames = [
  "Vera",
  "Penelope",
  "Ikara",
  "Saskia",
  "Pantera",
  "Abigail",
  "Ada",
  "Abbie",
  "Abbey",
  "Adaline",
  "Adara",
  "Adelina",
  "Adelice",
  "Adele",
  "Adella",
  "Adena",
  "Adora",
  "Adriana",
  "Adrienne",
  "Aeriel",
  "Agatha",
  "Aggie",
  "Agnes",
  "Ailee",
  "Aileen",
  "Ailene",
  "Aimee",
  "Ainslee",
  "Ainsley",
  "Alaine",
  "Alana",
  "Alberta",
  "Albertine",
  "Alejandra",
  "Alessandra",
  "Alethea",
  "Alex",
  "Alexa",
  "Alexandra",
  "Alexandria",
  "Alexia",
  "Alexis",
  "Alice",
  "Alison",
  "Aline",
  "Alisun",
  "Aliza",
  "Allegra",
  "Alma",
  "Allyson",
  "Alta",
  "Alvina",
  "Alysia",
  "Alyse",
  "Amalee",
  "Alyss",
  "Alyssa",
  "Amalee",
  "Amaleta",
  "Amalie",
  "Amelie",
  "Amara",
  "Amber",
  "Amberly",
  "Amity",
  "Annamaria",
  "Ana",
  "Anabel",
  "Annabelle",
  "Analiese",
  "Analise",
  "Anastasia",
  "Anastassia",
  "Anatola",
  "Andra",
  "Andrea",
  "Anetta",
  "Annette",
  "Angele",
  "Angelia",
  "Angelica",
  "Angelique",
  "Angelina",
  "Anissa",
  "Anne",
  "Annalee",
  "Annette",
  "Annie",
  "Anselma",
  "Ainsley",
  "Antoinette",
  "Antonia",
  "Anatola",
  "Antonina",
  "Anya",
  "Aria",
  "Arya",
  "Arabelle",
  "Arabethe",
  "Arabeth",
  "Artemis",
  "Arlette",
  "Aeris",
  "Aerys",
  "Astra",
  "Astrid",
  "Astrix",
  "Athena",
  "Athene",
  "Aubere",
  "Audie",
  "Audra",
  "Ashil",
  "Augusta",
  "Augustine",
  "Aura",
  "Aurelie",
  "Austine",
  "Aveline",
  "Averyl",
  "Avie",
  "Azusa",
  "Azora",
  "Bambie",
  "Bambi",
  "Bethesda",
  "Breatrix",
  "Beatrice",
  "Beatriz",
  "Basia",
  "Belle",
  "Bellina",
  "Benedetta",
  "Benetta",
  "Benita",
  "Benoitte",
  "Bernadette",
  "Bernice",
  "Berti",
  "Bertina",
  "Berry",
  "Berryessa",
  "Beryl",
  "Bessie",
  "Bethany",
  "Bethanie",
  "Bethina",
  "Bettina",
  "Bettine",
  "Beverly",
  "Bibby",
  "Binni",
  "Binnie",
  "Birdie",
  "Blanche",
  "Blisse",
  "Blithe",
  "Blondette",
  "Blythe",
  "Blaire",
  "Bria",
  "Bridgette",
  "Bridgitte",
  "Brita",
  "Brittania",
  "Brynne",
  "Bunny",
  "Cecilie",
  "Cecile",
  "Cecilia",
  "Cara",
  "Callista",
  "Callida",
  "Callie",
  "Calia",
  "Calypso",
  "Cammie",
  "Camila",
  "Camella",
  "Camilla",
  "Camille",
  "Cammi",
  "Candace",
  "Candice",
  "Coralie",
  "Corinthe",
  "Corinthia",
  "Caresa",
  "Carena",
  "Caprise",
  "Caressa",
  "Caretta",
  "Carlotta",
  "Carmella",
  "Carma",
  "Carmelice",
  "Carmen",
  "Carmina",
  "Carryth",
  "Corynth",
  "Cass",
  "Cassandra",
  "Casandra",
  "Catarina",
  "Catina",
  "Catriona",
  "Cat",
  "Cecelia",
  "Cecilia",
  "Cecilie",
  "Celeste",
  "Celestia",
  "Celestine",
  "Celia",
  "Celie",
  "Celestina",
  "Celina",
  "Celine",
  "Celisse",
  "Charis",
  "Charys",
];

const maleNames = [
  "Gideon",
  "Fabian",
  "Grich",
  "Icarus",
  "Gladeus",
  "Ajax",
  "Pascal",
];

const lastNames = [
  "Stormborn",
  "Emerson",
  "Jensen",
  "Holloway",
  "Ambrose",
  "Amberhide",
  "Shadowhide",
  "Ambers",
  "Alinac",
  "Belmont",
  "Blackmark",
  "Bellevue",
  "Bertillon",
  "Boudreaux",
  "Bordeaux",
  "Cinderhall",
  "Longfellow",
  "Clawroot",
  "Cinderhell",
  "Coldblight",
  "Chauvet",
  "Clearwater",
  "Dawnless",
  "Deepfellow",
  "Featherly",
  "Strider",
  "Havenly",
  "Keenstone",
  "Brightstone",
  "Lightfoot",
  "Deeprider",
  "Wilder",
  "Wiser",
  "Wisekeeper",
  "Warmane",
  "Brightwood",
  "Katz",
  "Laurier",
  "Viotto",
  "Trevino",
  "Whitlock",
  "Boone",
  "Remington",
  "Duke",
  "Pierce",
  "Steel",
  "Steele",
  "Vandenberg",
  "Webb",
  "Ellis",
  "Presley",
  "Damarys",
  "Luza",
  "Godfrey",
  "Greathouse",
  "Knightley",
  "Princely",
  "Prince",
  "King",
  "Gregorios",
  "Coldshore",
  "Gallus",
  "Ratley",
  "Sevenson",
  "Vita",
  "Darcey",
  "Weston",
  "Bradford",
  "Fitzgerald",
  "Stone",
  "Tennsley",
  "Hanover",
  "Ryder",
  "Atwood",
  "Hamilton",
  "Rowe",
  "Wilkes",
  "Bentley",
  "Claymoore",
  "Brighton",
  "Bailey",
  "Harrington",
  "Larson",
  "Holt",
  "Pierson",
  "Evershire",
  "Crawford",
  "Goodfellow",
  "Harper",
  "Sorrowful",
  "Seaborn",
];

const ages = [
  "Young Adult",
  "Young Adult",
  "Adult",
  "Adult",
  "Adult",
  "Adult",
  "Middle-Aged",
  "Middle-Aged",
  "Middle-Aged",
  "Elderly",
];

const races = [
  "Dragonborn",
  "Dwarf",
  "Elf",
  "Gnome",
  "Half-Elf",
  "Halfling",
  "Half-Orc",
  "Human",
  "Tiefling",
  "Orc",
  "Leonin",
  "Satyr",
  "Owlin",
  "Aarakocra",
  "Air Genasi",
  "Bugbear",
  "Centaur",
  "Changeling",
  "Deep Gnome",
  "Duergar",
  "Earth Genasi",
  "Eladrin",
  "Fairy",
  "Firbolg",
  "Fire Genasi",
  "Githyanki",
  "Githzerai",
  "Goblin",
  "Goliath",
  "Harengon",
  "Hobgoblin",
  "Kenku",
  "Kobold",
  "Lizardfolk",
  "Minotaur",
  "Sea Elf",
  "Shadar-kai",
  "Shifter",
  "Tabaxi",
  "Tortle",
  "Triton",
  "Water Genasi",
  "Yuan-ti",
  "Aasimar",
  "Kalashtar",
  "Warforged",
];

const jobs = [
  "Academic",
  "Astrologer",
  "Cartographer",
  "Judge",
  "Merchant",
  "Scribe",
  "Scholar",
  "Student",
  "Writer",
  "Poet",
  "Mercenary",
  "Sell-Sword",
  "Bard",
  "Cleric",
  "Fighter",
  "Monk",
  "Wizard",
  "Aristocrat",
  "Duke/Duchess",
  "Count/Countess",
  "Baron/Baroness",
  "Architect",
  "Builder",
  "Carpenter",
  "Stonemason",
  "Glassblower",
  "Artist",
  "Mason",
  "Acolyte",
  "Priest/Priestess",
  "Shaman",
  "Alchemist",
  "Armorer",
  "Baker",
  "Bookkeeper",
  "Pastry Chef",
  "Blacksmith",
  "Brewer",
  "Butcher",
  "Cobbler",
  "Cook",
  "Chef",
  "Dyer",
  "Engraver",
  "Furniture Maker",
  "Goldsmith",
  "Smelter",
  "Jeweler",
  "Instrument Maker",
  "Leatherworker",
  "Locksmith",
  "Criminal",
  "Assassin",
  "Painter",
  "Potter",
  "Skinner",
  "Tanner",
  "Toymaker",
  "Woodcarver",
  "Woodworker",
  "Lumberjack",
  "Weaponsmith",
  "Ship Builder",
  "Weaver",
  "Bandit",
  "Burglar",
  "Pirate",
  "Pickpocket",
  "Jester",
  "Acrobat",
  "Dancer",
  "Thief",
  "Minstrel",
  "Musical Prodigy",
  "Barback/Barmaid",
  "Prostitute",
  "Storyteller",
  "Actor",
  "Playwright",
  "Farmer",
  "Gatherer",
  "Sheep Herder",
  "Horse Trainer",
  "Veterinarian",
  "Hunter",
  "Banker",
  "Tax Collector",
  "Healer",
  "Herbalist",
  "Witch",
  "Midwife",
  "Brothel Keeper",
  "Innkeeper",
  "Tavern Keeper",
  "Beer Merchant",
  "Sommelier",
  "Bookseller",
  "Caravanner",
  "Dairy Seller",
  "Fisher",
  "Florist",
  "Grain Merchant",
  "Grocer",
  "Haberdasher",
  "Livestock Merchant",
  "Horse Breeder",
  "Spice Merchant",
  "Slaver",
  "Clothier",
  "Wine Merchant",
  "Miller",
  "Bounty Hunter",
  "Guard",
  "Soldier",
  "City Guard",
  "Explorer",
  "Sailor",
  "Trapper",
  "Traveler",
  "Diplomat",
  "Politician",
  "Town Crier",
  "Barber",
  "Carriage Driver",
  "Servant",
  "Gardener",
  "Archaeologist",
  "Art Curator",
  "Historian",
  "Sculptor",
  "Slave",
  "Butler",
  "Candlemaker",
  "Beekeeper",
  "Concubine",
  "Gemcutter",
  "Messenger",
  "Knight",
  "Landlord",
  "Singer",
  "Tracker",
  "Lumberjack",
  "Heir/Heiress",
  "Transporter",
  "Outcast",
  "Squire",
  "Guildmaster",
  "Beggar",
  "Looking For Work",
  "Unemployed",
  "Takes Odd Jobs",
];

const sexualOrientation = [
  "Straight",
  "Straight",
  "Straight",
  "Straight",
  "Straight",
  "Straight",
  "Straight",
  "Straight",
  "Straight",
  "Straight",
  "Straight",
  "Straight",
  "Straight",
  "Straight",
  "Bisexual",
  "Asexual",
  "Gay",
];

const relationshipStatus = [
  "Single",
  "Single",
  "Single",
  "In A Relationship",
  "Married",
];

const children = [
  "None",
  "None",
  "None",
  "None",
  "None",
  "None",
  1,
  1,
  2,
  2,
  3,
  4,
];

const appearanceOverall = [
  "is classically beautiful.",
  "has a rather mysterious look.",
  "looks a bit sad.",
  "seems to be a very smiley person.",
  "is quite pretty.",
  "is rather exotic-looking.",
  "is striking in appearance.",
  "seems very intimidating.",
  "can be a bit shy at first.",
  "might have some self-esteem issues.",
  "looks to be bright and vivacious.",
  "has a warm and inviting demeanor.",
  "is rather clumsy.",
  "is absolutely ravishing.",
  "flirts with everyone.",
  "is annoyed about something.",
  "seems stressed out.",
  "is an unearthly beauty.",
  "is a bit ugly, but that's okay.",
  "seems to have a secret.",
  "is definitely hiding something.",
];

const eyeColor = [
  "dark brown",
  "brown",
  "light brown",
  "hazel",
  "green",
  "olive",
  "emerald",
  "grey",
  "light grey",
  "dark grey",
  "amber",
  "hazel",
  "onyx",
  "sapphire",
  "honey",
];

const hairColor = [
  "jet black",
  "black",
  "indigo",
  "dark brown",
  "honey brown",
  "honey blonde",
  "dirty blonde",
  "platinum blonde",
  "white",
  "greying",
  "thinning",
  "red",
  "auburn",
  "maroon",
  "chocolate brown",
  "golden blonde",
  "coppery",
  "cool blonde",
  "warm blonde",
  "cool brown",
  "warm brown",
  "violet",
  "pink",
  "pastel blue",
  "pastel pink",
];

const hairStyle = [
  "is kept neatly in a bun.",
  "has a slightly wavy texture.",
  "is pulled into an elegant french twist.",
  "has been buzzed.",
  "is short and wildly sticking up.",
  "looks to never have been washed.",
  "is tightly braided.",
  "is styled in cornrows.",
  "is in a half-pony.",
  "is pulled into a high ponytail.",
  "is held in a loose pony.",
  "is cut at the shoulders.",
  "has a pixie cut.",
  "is long and flowing.",
  "is just incredible. Like.. is this hair even real?",
  "is in two tight french braids.",
  "is held loosely in a top-knot.",
  "has not been brushed in weeks.. or years.",
  "is wild and voluminous.",
  "messily thrown together.",
  "smells vaguely of honey",
  "has a blunt, asymmetrical cut.",
  "is hidden by a hood.",
  "looks a tad bit greasy.",
  "smells like roses.",
];

const body = [
  "has a fat build.",
  "is quite petite.",
  "is pretty muscular.",
  "has bulging muscles.",
  "is a bit lanky.",
  "looks like a Greek god.",
  "would beat you in a fight.",
  "would definitely lose to you in a fight.",
  "has poor posture.",
  "has excellent posture.",
  "is really, really tall.",
  "is a bit on the short side.",
  "could probably fit in your pocket.",
  "has great legs.",
  "is slightly overweight.",
  "is a bit chubby.",
  "is curvy with a small waist.",
  "has broad shoulders.",
  "has a bit of a beer belly.",
  "looks delicate and frail.",
];

const alignments = [
  "Lawful Good",
  "Lawful Neutral",
  "Lawful Evil",
  "Neutral Good",
  "True Neutral",
  "Neutral Evil",
  "Chaotic Good",
  "Chaotic Neutral",
  "Chaotic Evil",
];

const skins = ["fair", "light", "tan", "medium", "olive", "deep"];

const undertones = [
  "pinkish",
  "blueish",
  "greenish",
  "reddish",
  "purplish",
  "yellowish",
];

const beliefsLG = [
  "Society has merit, and as a participant I defend it.",
  "My Creed is my word, and my hand its upholder.",
  "Though I may disagree, the wisdom of our elders will prevail.",
  "There's nothing like the satisfaction of a made bed and folded laundry.",
];

const beliefsLN = [
  "If I have to save the world, I will.",
  "I am the sword that enforces the will of the people.",
  "Justice is blind.",
  "A vow is a vow. Nothing in this world is worth more.",
];

const beliefsLE = [
  "Come hell or high water, I will hunt those that defy us.",
  "There is no joy greater than seeing the fear in the eyes of those we bring to their knees.",
  "An eye for an eye? If they take my eye, I'll build a beholder out of them and their kin.",
];

const beliefsNG = [
  "The balance must be preserved.",
  "To act in anger is to betray your own judgment.",
  "Protect those who can't defend themselves above all else, then you can do as you will.",
  "Creation and all its imperfections are divine, perversions of it will not be suffered.",
];

const beliefsNN = [
  "Fuck all this shit, man.",
  "Fate controls all things. Who am I to interfere?",
  "...?",
  "Beauty in all things. Right and wrong, good and evil. Respect your ability to indulge in what you please, and do not forget that others have that same privilege.",
];

const beliefsNE = [
  "Take what you can. The only thing you can rely on is yourself.",
  "Allies are great.. but you can find allies anywhere...",
  "We all die alone. I don't care what prayers you say or what family you have. We. All. Die. Alone.",
];

const beliefsCG = [
  "I don't care what you say. This is wrong, and I won't just accept it!",
  "I follow my heart. It tells me what is right and what must be done.",
  "I dunno about all that... but something tells me it's the right thing to do.",
  "Justice is blind and cannot see where mercy and compassion must be exercised.",
];

const beliefsCN = [
  "I do as I please and as I please changes from one day to the next!",
  "The devil is in the details and I care not for reading the fine print.",
  "I was what you would call 'good' once. I have indulged in what you would call a little 'evil' as well. What matters most is the fun that was had all the while!",
];

const beliefsCE = [
  "One man's loss is another's gain.",
  "I stand defiant of those who claim to 'represent' people. People is a term used for animals who cannot act for themselves.",
  "Greed is good.",
  "If it serves me, that's all I need to know.",
];

const personalityTraits = [
  "values friendship and kinship over all.",
  "is typically the life of the party.",
  "wants to be friends with everyone.",
  "is usually not careful with words.",
  "has a strong work ethic. Hard work builds character.",
  "means well, but can be disloyal at times. ",
  "stutters and breaks eye contact when nervous.. which is all of the time.",
  "is hardened to emotion, and rarely shows any form of expression.",
  "is generally quiet and calculated, speaking only when it is important.",
  "shows some signs of mania.",
  "shows signs of depression.",
  "can be blunt at times.",
  "is a pathological liar.",
  `is always polite, even if it's disingenuous.`,
  "is always gossiping about something.",
  "trusts strangers way too easily. Easy to manipulate.",
  "can be very arrogant.",
  "spends a little too much time at the brothel.",
  "is difficult to please.",
  `can't read or write, but is very sociable.`,
  "can be extremely emotional.",
  "has an affinity for animals of every species",
  "is a bit of a troublemaker, and has arrested once or twice.",
  "enjoys stirring drama amongst the townspeople for no good reason.",
  "is generally nice, but can be confrontational. Be careful with this one.",
  "absolutely loves -lives and breathes- drama.",
  "is always fidgeting around.",
  "is showing signs of an affair.",
  "is loved by family and friends alike.",
  "has many enemies.",
  "has a strong reputation.",
  "has a terrible reputation.",
  "is a conspiracy theorist.",
  "is very religious.",
  "has a soft heart.",
  "may have kleptomaniac tendencies.",
  "is always trying to tell jokes that never land.",
  "is annoyingly sarcastic.",
];

const plotHooks = [
  "stumbled upon a curious note by the docks which featured glyphs of various sizes, and seeks to know the origin.",
  "is having an affair with a town guard.",
  "is cursed with lycanthropy and wants to cure it.",
  "has spotted hooded figures entering the neighbor's house every night.",
  "sells potions of questionable origin at the night market for some extra coin.",
  "seeks to die an honorable death by duel.",
  "is hosting an extravagant Summer soiree for all of the townspeople. You will need an invitation to attend.",
  "has had the same repetitive nightmare for the last month. Could it be more than just a dream?",
  "has heard rumor of a distant land of abundant riches.",
  "desperately wants a spouse.",
];
//function for getting randomized sex
function getRandomSex() {
  confirmedSex = sex[Math.floor(Math.random() * sex.length)];
  return confirmedSex;
}

//function for getting randomized name based on sex
function getRandomName() {
  getRandomSex();
  setRandomSex();
  if (confirmedSex == "female") {
    return `${femaleNames[Math.floor(Math.random() * femaleNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`;
  } else if (confirmedSex == "male") {
    return `${maleNames[Math.floor(Math.random() * maleNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`;
  }
}

function setRandomSex() {
  if (confirmedSex == "female") {
    return (document.getElementById("sex").innerText = "Female");
  } else {
    return (document.getElementById("sex").innerText = "Male");
  }
}

function setRandomName() {
  return (document.getElementById("name").innerText = getRandomName());
}

//function for getting randomized age
function getRandomAge() {
  return ages[Math.floor(Math.random() * ages.length)];
}

function setRandomAge() {
  return (document.getElementById("age").innerText = getRandomAge());
}

//function for getting randomized race
function getRandomRace() {
  return races[Math.floor(Math.random() * races.length)];
}

function setRandomRace() {
  return (document.getElementById("race").innerText = getRandomRace());
}

//function for getting randomized job
function getRandomJob() {
  return jobs[Math.floor(Math.random() * jobs.length)];
}

function setRandomJob() {
  return (document.getElementById("job").innerText = getRandomJob());
}

//function for getting randomized orientation
function getRandomOrientation() {
  return sexualOrientation[
    Math.floor(Math.random() * sexualOrientation.length)
  ];
}

function setRandomOrientation() {
  return (document.getElementById("orientation").innerText =
    getRandomOrientation());
}

//function for getting randomized relationship status
function getRandomRelationship() {
  return relationshipStatus[
    Math.floor(Math.random() * relationshipStatus.length)
  ];
}

function setRandomRelationship() {
  return (document.getElementById("relationship").innerText =
    getRandomRelationship());
}

//function for getting randomized # of children
function getRandomChildren() {
  return children[Math.floor(Math.random() * children.length)];
}

function setRandomChildren() {
  return (document.getElementById("children").innerText = getRandomChildren());
}

//function for changing pronouns from she/he
function setPronoun() {
  let pronoun = document.getElementsByClassName("pronoun");
  for (let i = 0; i < pronoun.length; i++) {
    if (confirmedSex == "female") {
      pronoun[i].innerHTML = "She";
    } else {
      pronoun[i].innerHTML = "He";
    }
  }
}

//functions for updating appearance descriptions
//overall description
function getOverallDescription() {
  return appearanceOverall[
    Math.floor(Math.random() * appearanceOverall.length)
  ];
}

function setOverallDescription() {
  return (document.getElementById("overallDescription").innerText =
    getOverallDescription());
}

//eyes description
function getEyes() {
  return eyeColor[Math.floor(Math.random() * eyeColor.length)];
}

function setEyes() {
  return (document.getElementById("eyeColor").innerText = getEyes());
}

//hair description
function getHair() {
  return hairColor[Math.floor(Math.random() * hairColor.length)];
}

function setHair() {
  return (document.getElementById("hairColor").innerText = getHair());
}

//hair style description
function getStyle() {
  return hairStyle[Math.floor(Math.random() * hairStyle.length)];
}

function setStyle() {
  return (document.getElementById("hairStyle").innerText = getStyle());
}

//body description
function getBodyDescription() {
  return body[Math.floor(Math.random() * body.length)];
}

function setBodyDescription() {
  return (document.getElementById("bodyDescription").innerText =
    getBodyDescription());
}

//skintone description
function getSkinTone() {
  return skins[Math.floor(Math.random() * skins.length)];
}

function setSkinTone() {
  return (document.getElementById("skinToneDescription").innerText =
    getSkinTone());
}

//undertone description
function getUndertone() {
  return undertones[Math.floor(Math.random() * undertones.length)];
}

function setUndertone() {
  return (document.getElementById("undertoneDescription").innerText =
    getUndertone());
}

//function for rolling dice
function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll * 3;
}

function setRolls() {
  document.getElementById("str").innerText = rollDice();
  document.getElementById("dex").innerText = rollDice();
  document.getElementById("con").innerText = rollDice();
  document.getElementById("int").innerText = rollDice();
  document.getElementById("wis").innerText = rollDice();
  document.getElementById("cha").innerText = rollDice();
}

//function for randomizing alignment
function getRandomAlignment() {
  const confirmedAlignment =
    alignments[Math.floor(Math.random() * alignments.length)];
  return confirmedAlignment;
}

function setRandomAlignment() {
  return (document.getElementById("alignment").innerText =
    getRandomAlignment());
}

//setting text for alignment buttons
function setLawGood() {
  return (document.getElementById("alignment").innerText = "Lawful Good");
}

function setLawNeu() {
  return (document.getElementById("alignment").innerText = "Lawful Neutral");
}

function setLawEvil() {
  return (document.getElementById("alignment").innerText = "Lawful Evil");
}

function setNeuGood() {
  return (document.getElementById("alignment").innerText = "Neutral Good");
}

function setNeu() {
  return (document.getElementById("alignment").innerText = "True Neutral");
}

function setNeuEvil() {
  return (document.getElementById("alignment").innerText = "Neutral Evil");
}

function setChaGood() {
  return (document.getElementById("alignment").innerText = "Chaotic Good");
}

function setChaNeu() {
  return (document.getElementById("alignment").innerText = "Chaotic Neutral");
}

function setChaEvil() {
  return (document.getElementById("alignment").innerText = "Chaotic Evil");
}

//function for getting beliefs LAWFUL GOOD
function getRandomBeliefLG() {
  return beliefsLG[Math.floor(Math.random() * beliefsLG.length)];
}

function setBeliefsLG() {
  document.getElementById("firstBelief").innerText = getRandomBeliefLG();
  document.getElementById("secondBelief").innerText = getRandomBeliefLG();
  document.getElementById("thirdBelief").innerText = getRandomBeliefLG();
}

//function for getting beliefs LAWFUL NEUTRAL
function getRandomBeliefLN() {
  return beliefsLN[Math.floor(Math.random() * beliefsLN.length)];
}

function setBeliefsLN() {
  document.getElementById("firstBelief").innerText = getRandomBeliefLN();
  document.getElementById("secondBelief").innerText = getRandomBeliefLN();
  document.getElementById("thirdBelief").innerText = getRandomBeliefLN();
}

//function for getting beliefs LAWFUL EVIL
function getRandomBeliefLE() {
  let confirmedBeliefLE =
    beliefsLE[Math.floor(Math.random() * beliefsLE.length)];
  return confirmedBeliefLE;
}

function setBeliefsLE() {
  document.getElementById("firstBelief").innerText = getRandomBeliefLE();
  document.getElementById("secondBelief").innerText = getRandomBeliefLE();
  document.getElementById("thirdBelief").innerText = getRandomBeliefLE();
}

//function for getting beliefs NEUTRAL GOOD
function getRandomBeliefNG() {
  return beliefsNG[Math.floor(Math.random() * beliefsNG.length)];
}

function setBeliefsNG() {
  document.getElementById("firstBelief").innerText = getRandomBeliefNG();
  document.getElementById("secondBelief").innerText = getRandomBeliefNG();
  document.getElementById("thirdBelief").innerText = getRandomBeliefNG();
}

//function for getting beliefs NEUTRAL NEUTRAL
function getRandomBeliefNN() {
  return beliefsNN[Math.floor(Math.random() * beliefsNN.length)];
}

function setBeliefsNN() {
  document.getElementById("firstBelief").innerText = getRandomBeliefNN();
  document.getElementById("secondBelief").innerText = getRandomBeliefNN();
  document.getElementById("thirdBelief").innerText = getRandomBeliefNN();
}

//function for getting beliefs NEUTRAL EVIL
function getRandomBeliefNE() {
  return beliefsNE[Math.floor(Math.random() * beliefsNE.length)];
}

function setBeliefsNE() {
  document.getElementById("firstBelief").innerText = getRandomBeliefNE();
  document.getElementById("secondBelief").innerText = getRandomBeliefNE();
  document.getElementById("thirdBelief").innerText = getRandomBeliefNE();
}

//function for getting beliefs CHAOTIC GOOD
function getRandomBeliefCG() {
  return beliefsCG[Math.floor(Math.random() * beliefsCG.length)];
}

function setBeliefsCG() {
  document.getElementById("firstBelief").innerText = getRandomBeliefCG();
  document.getElementById("secondBelief").innerText = getRandomBeliefCG();
  document.getElementById("thirdBelief").innerText = getRandomBeliefCG();
}

//function for getting beliefs CHAOTIC NEUTRAL
function getRandomBeliefCN() {
  return beliefsCN[Math.floor(Math.random() * beliefsCN.length)];
}

function setBeliefsCN() {
  document.getElementById("firstBelief").innerText = getRandomBeliefCN();
  document.getElementById("secondBelief").innerText = getRandomBeliefCN();
  document.getElementById("thirdBelief").innerText = getRandomBeliefCN();
}

//function for getting beliefs CHAOTIC EVIL
function getRandomBeliefCE() {
  return beliefsCE[Math.floor(Math.random() * beliefsCE.length)];
}

function setBeliefsCE() {
  document.getElementById("firstBelief").innerText = getRandomBeliefCE();
  document.getElementById("secondBelief").innerText = getRandomBeliefCE();
  document.getElementById("thirdBelief").innerText = getRandomBeliefCE();
}

//function for getting 3 random personality traits
function getRandomTrait() {
  return personalityTraits[
    Math.floor(Math.random() * personalityTraits.length)
  ];
}

function setTraits() {
  document.getElementById("firstTrait").innerText = getRandomTrait();
  document.getElementById("secondTrait").innerText = getRandomTrait();
  document.getElementById("thirdTrait").innerText = getRandomTrait();
}

//function for getting random plot hook
function getRandomPlotHook() {
  return plotHooks[Math.floor(Math.random() * plotHooks.length)];
}

function setPlotHook() {
  document.getElementById("plotHook").innerText = getRandomPlotHook();
}

//click of generate button
document.querySelector(".generate").addEventListener("click", setRandomSex);
document.querySelector(".generate").addEventListener("click", setRandomName);
document.querySelector(".generate").addEventListener("click", setRandomAge);
document.querySelector(".generate").addEventListener("click", setRandomRace);
document.querySelector(".generate").addEventListener("click", setRandomJob);
document
  .querySelector(".generate")
  .addEventListener("click", setRandomOrientation);
document
  .querySelector(".generate")
  .addEventListener("click", setRandomRelationship);
document
  .querySelector(".generate")
  .addEventListener("click", setRandomChildren);

document.querySelector(".generate").addEventListener("click", setPronoun);
document
  .querySelector(".generate")
  .addEventListener("click", setOverallDescription);
document.querySelector(".generate").addEventListener("click", setEyes);
document.querySelector(".generate").addEventListener("click", setHair);
document.querySelector(".generate").addEventListener("click", setStyle);
document.querySelector(".generate").addEventListener("click", setSkinTone);
document.querySelector(".generate").addEventListener("click", setUndertone);
document.querySelector(".generate").addEventListener("click", setSkinTone);

document
  .querySelector(".generate")
  .addEventListener("click", setBodyDescription);

//click of generate button to roll dice
document.querySelector(".generate").addEventListener("click", setRolls);

document
  .querySelector(".generate")
  .addEventListener("click", setRandomAlignment);

document
  .querySelector(".generate")
  .addEventListener("click", setRandomAlignment);

//click of randomize alignment button
document
  .querySelector(".randomize")
  .addEventListener("click", setRandomAlignment);

//click of alignment buttons to change label
document.getElementById("lawGood").addEventListener("click", setLawGood);
document.getElementById("lawNeu").addEventListener("click", setLawNeu);
document.getElementById("lawEvil").addEventListener("click", setLawEvil);
document.getElementById("neuGood").addEventListener("click", setNeuGood);
document.getElementById("neu").addEventListener("click", setNeu);
document.getElementById("neuEvil").addEventListener("click", setNeuEvil);
document.getElementById("chaGood").addEventListener("click", setChaGood);
document.getElementById("chaNeu").addEventListener("click", setChaNeu);
document.getElementById("chaEvil").addEventListener("click", setChaEvil);

//click of alignment buttons to change beliefs
document.getElementById("lawGood").addEventListener("click", setBeliefsLG);
document.getElementById("lawNeu").addEventListener("click", setBeliefsLN);
document.getElementById("lawEvil").addEventListener("click", setBeliefsLE);
document.getElementById("neuGood").addEventListener("click", setBeliefsNG);
document.getElementById("neu").addEventListener("click", setBeliefsNN);
document.getElementById("neuEvil").addEventListener("click", setBeliefsNE);
document.getElementById("chaGood").addEventListener("click", setBeliefsCG);
document.getElementById("chaNeu").addEventListener("click", setBeliefsCN);
document.getElementById("chaEvil").addEventListener("click", setBeliefsCE);

document.querySelector(".generate").addEventListener("click", setTraits);
document.querySelector(".generate").addEventListener("click", setPlotHook);
