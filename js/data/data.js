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
  "Human",
  "Human",
  "Human",
  "Human",
  "Human",
  "Human",
  "Human",
  "Human",
  "Human",
  "Human",
  "Human",
  "Human",
  "Human",
  "Human",
  "Human",
  "Dragonborn",
  "Draconic Ancestry Dragonborn",
  "Dwarf",
  "Hill Dwarf",
  "Mountain Dwarf",
  "Duergar Dwarf",
  "Deep Dwarf",
  "Gold Dwarf",
  "Shield Dwarf",
  "Elf",
  "Half-Elf",
  "High Elf",
  "Wood Elf",
  "Eladrin Elf",
  "Drow Elf",
  "Sea Elf",
  "Gnome",
  "Deep Gnome",
  "Rock Gnome",
  "Halfling",
  "Lightfoot Halfling",
  "Stout Halfling",
  "Orc",
  "Half-Orc",
  "Tiefling",
  "Asmodeus Tiefling",
  "Baalzebul Tiefling",
  "Dispater Tiefling",
  "Fierna Tiefling",
  "Glasya Tiefling",
  "Levistus Tiefling",
  "Mammon Tiefling",
  "Mephistopheles Tiefling",
  "Zariel Tiefling",
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

const sexualOrientations = [
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

const relationshipStatuses = [
  "Single",
  "Single",
  "Single",
  "In A Relationship",
  "Recently Broke Up",
  "Single",
  "Married",
  "Recently Divorced",
  "Single",
  "Divorced",
  "Married",
  "Single",
  "Married",
];

const children = [
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  1,
  1,
  2,
  2,
  2,
  3,
  4,
];

const overallAppearances = [
  "has freckled, rosy skin that gives off a youthful appearance.",
  "is classically beautiful, with a glass-like complexion and a soft, oval face.",
  "has a rather mysterious look. Is he hiding something?",
  "seems to be a very smiley person.",
  "has gorgeous eyes. You'll get lost in them if you're not careful.",
  "is quite pretty, but it isn't distracting.",
  "is rather exotic-looking. You can't help but stare.",
  "is striking in appearance, with a statuesque jawline and strong cheekbones.",
  "has a rather rough appearance.",
  "gives off an intimidating look.",
  "has a welcoming appearance.",
  "looks like someone you can trust.",
  "gives off a cheerful and friendly aura.",
  "might have some self-esteem issues.",
  "looks to be bright and vivacious.",
  "has a warm and inviting demeanor.",
  "is absolutely ravishing, with sirenesque eyes and angular features.",
  "looks a bit unapproachable.",
  "is an unearthly beauty. You've never seen anything like it before.",
  "is a bit ugly, but that's okay.",
];

const eyeColors = [
  "dark brown",
  "brown",
  "light brown",
  "blue",
  "blue",
  "bright blue",
  "hazel",
  "green",
  "light green",
  "bright green",
  "emerald green",
  "grey",
  "light grey",
  "grey",
  "bright grey",
  "dark grey",
  "amber",
  "hazel",
  "onyx",
  "sapphire",
  "deep brown",
  "sky blue",
  "bright amber",
];

const hairColors = [
  "jet black",
  "black",
  "indigo",
  "dark brown",
  "honey brown",
  "honey blonde",
  "dirty blonde",
  "platinum blonde",
  "white",
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
];

const hairStyles = [
  "is kept neatly in a bun.",
  "has a slightly wavy texture.",
  "is pulled into an elegant french twist.",
  "has been buzzed off.",
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
  "has a slight wave to it.",
  "is pin-straight.",
  "falls in textured layers.",
  "is styled in a loose French braid.",
  "is slicked back.",
  "is just incredible. Like.. is this hair even real?",
  "is in two tight french braids.",
  "is held in a low ponytail.",
  "is held loosely in a top-knot.",
  "has not been brushed in weeks.. or years.",
  "is wild and voluminous.",
  "falls in perfect ringlets.",
  "is styled in glamorous curls.",
  "messily thrown together.",
  "smells vaguely of honey.",
  "has a blunt, asymmetrical cut.",
  "hasn't been washed in a while.",
  "is hidden by a hood.",
  "is in effortless waves.",
  "gives off a fresh, floral scent.",
  "smells like roses.",
];

const bodyTypes = [
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
  "is unusually tall.",
  "is a bit on the short side.",
  "is so small.. could probably fit in your pocket.",
  "has a slender build.",
  "has great legs.",
  "is slightly overweight.",
  "stands proudly, with shoulders back and chest out.",
  "is a bit chubby.",
  "has broad shoulders.",
  "looks to be quite athletic.",
  "has a bit of a beer belly.",
  "looks delicate and frail.",
];

const clothings = [
  "is wearing a crimson silken cloak.",
  "is wearing a fitted leather bustier.",
  "is wearing a loose linen shirt and some old trousers.",
  "has a friendly canine companion named Kaiser.",
  "is wearing work pants and worn leather boots.",
  "wears a blue feathered hat.",
  "is wearing black satin gloves and a stylish beret.",
  "is wearing extravagant clothes with gilded embroidery.",
  "wears a well-fitted collared shirt and suspenders.",
  "has a talkative pet raven named Finnigan.",
  "is accompanied by a pet cat named Fezez.",
  "always dresses to the nines, no matter the occasion.",
  "wears tattered robes.",
  "wears a beautiful green cape that barely kisses the floor.",
  "is wearing a long, suede coat with a western-style hat.",
  "wears a beautifully embroidered lime-green robe that would lend itself towards a position of some station.",
  "wears an electrum amulet with a sapphire - the size of an eye - fixed glaring in your direction.",
  "wears stained, threadbare linens. They look to have been dragged through gutters or troughs.",
  "wears a simple blue shirt that drapes to their knees. A large, black leather belt sits atop, fixed tightly around their waist as a fashion statement.",
  "wears a gold signet ring. Upon closer inspection there are runes around the onyx in the middle you haven't seen in this age.",
  "wears a jacket that has several utilitarian pockets along with some brown cloth pants.",
  "wears mud-caked boots that have seen years of abuse. The stains of earth have worked their way up their trousers almost to the knee.",
  "wears furs derived from the breadth and depth of this land. White, orange, and brown furs cover them from head to toe. A bead of sweat drips from their brow.",
  "wears leather straps that leave little to the imagination. A silver bracer perforated horizontally in 5 separate lines cuffs their right arm beneath the shoulder.",
  "wears a loose linen shirt and baggy gray breeches. A rope tied tight around the waist is all that stands between them and public scorn.",
  "wears a golden neckpiece that starts at the nape and drapes just below the chest. It looks as if it was woven by a spider. Jade hangs from the webbing at the bottom.",
  "wears a purple velvet robe with the shapes of the night sky embroidered in golden threads across its lapel. Gold thread also embellishes the elegant shape of its make.",
  "wears knee-high leather boots blacker than the night. They've been well-kept despite how intimidating they would be if you heard them striding toward you.",
  "wears a triangular robe draped across their left shoulder with their right exposed to the elements. A cobalt-blue sash holds the piece together with simple cloth wrapping their chest.",
  "wears an elegant midnight-blue robe that must have been an old seamstress’ swan song. It’s evident that it has never graced bare earth and looks only to have dragged against the marble courts of royalty.",
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

const skinTones = [
  "fair",
  "pale",
  "light",
  "tan",
  "tanned",
  "medium",
  "olive",
  "deep",
];

const beliefsLG = [
  `"Society has merit, and as a participant I defend it."`,
  `"My Creed is my word, and my hand its upholder."`,
  `"Though I may disagree, the wisdom of our elders will prevail."`,
  `"There's nothing like the satisfaction of a made bed and folded laundry."`,
  `"Justice and honor are a heavy burden for the righteous. We carry this weight so that the weak may grow strong and the meek grow brave."`,
  `"Justice is all. Honor is my armor. He who commits a crime will pay. Without law and truth, there is only chaos. I am the light, I am the sword of righteousness. My enemy shall pay in the end. Right is might. My soul is pure. My word is truth."`,
  `"Absolute freedom is no better than chaos. Society needs laws and regulations to protect it."`,
  `"No day goes by where I am not tempted to return to my inborn nature.  What is better? To be born good, or to overcome your evil nature through great effort?"`,
  `"The law is the end product of many years of history... the fruit of human knowledge! Like a gem, polished to a gleam through trials... and errors. It is this fruit we receive, and pass on, and face in our time. And it is always changing, growing. Nurturing it is our task as human beings."`,
  `"He who does not punish evil, commands it to be done."`,
  `"I swear to seek justice, to let it guide me, until I find a more perfect Ideal."`,
];

const beliefsLN = [
  `"If I have to save the world, I will."`,
  `"I am the sword that enforces the will of the people."`,
  `"Justice is blind."`,
  `"A vow is a vow. Nothing in this world is worth more."`,
  `"Justice is incidental to law and order."`,
  `"Fame...justice...I'm not interested in either. If a woman was murdered, I'm out to find the killer. That's all."`,
  `"A mentality compounded of two very simple principles, admirable in themselves but which, by carrying them to extremes, almost makes one evil — respect for authority and hatred of all forms of revolt against it."`,
  `"Want? Agree? That has nothing to do with it. The law is the law."`,
  `"No personal justice takes precedence over the world's justice."`,
  `"The guilty must be punished."`,
  `"The code is the code. The law bends for no one."`,
];

const beliefsLE = [
  `"Come hell or high water, I will hunt those that defy us."`,
  `"There is no joy greater than seeing the fear in the eyes of those we bring to their knees."`,
  `"An eye for an eye? If they take my eye, I'll build a beholder out of them and their kin."`,
  `"Even Devils have laws. Abiding the contract gives us power, but break it, and we're bound as slaves."`,
  `"One Vision. One Purpose. Peace Through Power."`,
  `"If your enemy defies you, serve him steel and fire. But if he bends the knee, you must help him back to his feet, else no man will ever kneel to you."`,
  `"Pity them not and scorn their cries of innocence - it is better that one hundred innocently fall before the wrath of the Emperor than one kneels before the Daemon."`,
  `"The people are happy and content. As I have commanded they be..."`,
  `"Say what you like about warlords and dictators; they always pay their bills on time."`,
  `"Citizens should not fear their government. This will be enforced."`,
];

const beliefsNG = [
  `"The balance must be preserved."`,
  `"To act in anger is to betray your own judgment."`,
  `"Protect those who can't defend themselves above all else, then you can do as you will."`,
  `"Creation and all its imperfections are divine, perversions of it will not be suffered."`,
  `"Those who violate the rules and fail to follow orders are garbage. However, those who do not care for and support their fellows... are even lower than garbage!"`,
  `"Surely in the ideal state governments and their people should exist happily together. Fear in either direction will lead to violence."`,
  `"Rules are not necessarily sacred; principles are."`,
  `"When the system works, use it. When it doesn't... that's what we are there for."`,
  `"I am free, no matter what rules surround me. If I find them tolerable, I tolerate them; if I find them too obnoxious, I break them. I am free because I know that I alone am morally responsible for everything I do."`,
  `"You don't need a reason to help people."`,
  `"It was a sweet day when I realised legal and illegal had nothing to do with right and wrong."`,
  `"If you feel like a broken man, and want to run away from the problems you face, if you think you can't fight for yourself any longer, then the answer is simple. Don't fight for yourself. Fight for someone else."`,
];

const beliefsNN = [
  `"Fuck all this shit, man."`,
  `"Fate controls all things. Who am I to interfere?"`,
  `"...?"`,
  `"Beauty in all things. Right and wrong, good and evil. Respect your ability to indulge in what you please, and do not forget that others have that same privilege."`,
  `"I don't want to carry anyone's burden."`,
  `"People gotta talk themselves into law and order before they do anything about it. Maybe because down deep they don't care. They just don't care."`,
  `"A live body and a dead body contain the same number of particles. Structurally, there's no discernible difference. Life and death are unquantifiable abstracts. Why should I be concerned?"`,
  `"I don't know, and I have no opinion."`,
];

const beliefsNE = [
  `"Take what you can. The only thing you can rely on is yourself."`,
  `"Allies are great.. but you can find allies anywhere..."`,
  `"We all die alone. I don't care what prayers you say or what family you have. We. All. Die. Alone."`,
  `"Hmmm, maybe I should help them...or, maybe I should just help myself!"`,
  `"I'm fighting my own war, and abide by no rules. No boundaries. I hesitate not at torture, human trafficking or genocide. I'm loyal to no flag or a country or any set of ideals."`,
  `"Destroy anyone who has ever slighted you."`,
  `"I've got no complaints as long as I get to kill who I want and steal what I want."`,
  `"Don't apologise. I never do."`,
];

const beliefsCG = [
  `"I don't care what you say. This is wrong, and I won't just accept it!"`,
  `"I follow my heart. It tells me what is right and what must be done."`,
  `"I dunno about all that... but something tells me it's the right thing to do."`,
  `"Justice is blind and cannot see where mercy and compassion must be exercised."`,
  `"I don't care what I become. All those who fought against witches, who believed in hope as magical girls, I don't want to see them cry. I want them to be smiling to the end. If any rule or law stands against that, I will destroy it. I will rewrite it."`,
  `"Nobody's always right. Nobody's always good. But wanting to be? Wanting to do what's best so fucking much you'll change the rules to do it? That's a win in my book."`,
  `"Because while the truncheon may be used in lieu of conversation, words will always retain their power. Words offer the means to meaning, and for those who will listen, the enunciation of truth"`,
  `"Good men don't need rules."`,
  `"Power does things to people. I ain't never met a man who had it that I favoured. So I take it from 'em, and hope they see what remains."`,
  `"My soul is good, but free. Laws have no conscience. Blind order promotes disorder. Goodness cannot be learned just from a book of prayer. Compassion does not wear a uniform. The smallest act of kindness is never wasted. Repay kindness with kindness. Be kind to someone in trouble — it may be you who needs kindness the next day."`,
  `"I put no stock in religion. By the word religion, I've seen the lunacy of fanatics of every denomination be called the "Will of God". I've seen too much religion in the eyes of too many murderers. Holiness is in right action and courage on behalf of those who cannot defend themselves. And goodness - what the Gods desire - comes from the mind and spirit. And what you decide to do every day, you will be a good man, [smiles] or not."`,
  `"Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend."`,
  `"There is hope in the individual, in you, not in a system, not in the blueprint of a planned society, not in any religious organization, but in you, the individual."`,
];

const beliefsCN = [
  `"I do as I please and as I please changes from one day to the next!"`,
  `"The devil is in the details and I care not for reading the fine print."`,
  `"I was what you would call 'good' once. I have indulged in what you would call a little 'evil' as well. What matters most is the fun that was had all the while!"`,
  `"Yeah, let's break some rules!"`,
  `"Do what thou wilt' shall be the whole of the law."`,
  `"There is no good or evil. There is only fun and boring."`,
  `"You know how I so revel in chaos."`,
  `"I'll tell you one thing... I'm not a pawn of the Powers That Be. I'm neither an ally of the warlocks nor of the witches. I am who I am. I'm not a puppet of authority like you."`,
  `"My world is all just shades of grey. That's why you'll never really understand me."`,
  `"A rolling stone gathers no moss. There is only today. Be like the wind and be taken wherever fate sees fit. He who fights fate courts folly. You only live once. Power to those who do not wish for power. Avoid anything in a uniform. Challenge the old orders."`,
  `"I don't fight for good, and I don't fight for evil. I JUST FIGHT!"`,
  `"The passage of time rids humans of attachment, but is that aging or growth? There is an answer, but what is right and wrong depends on who's talking when and where. I'm an ally and an enemy to everything all at once. I simply go with the flow. You can destroy anything, you can save anything, so long as the flow continues. So yes, there is an answer. But I have no need for conclusions. And right now, neither do you."`,
  `"I don't suffer from insanity, I love every minute of it!"`,
  `"I have a secret love of chaos. There should be more of it. Do not believe — and I am dead serious when I say this — do not assume that order and stability are always good, in a society or in a universe. The old, the ossified, must always give way to new life and the birth of new things. Before the new things can be born the old must perish."`,
];

const beliefsCE = [
  `"One man's loss is another's gain."`,
  `"I stand defiant of those who claim to 'represent' people. People is a term used for animals who cannot act for themselves."`,
  `"Greed is good."`,
  `"If it serves me, that's all I need to know."`,
  `"They can't be bought, bullied, reasoned or negotiated with. Some men just want to watch the world burn."`,
  `"I do what I do, when I choose, why I wish. I answer to no one."`,
  `"Destruction isn't supposed to make sense! It's only fun when it's senseless!"`,
  `"Kill everyone now! Condone first degree murder! Advocate cannibalism! Eat shit! Filth are my politics! Filth is my life!"`,
  `"Being alive is wonderful! And the most wonderful thing about life is taking it away from other people."`,
  `"I love only myself. If all other people exist out there to magnify that love, then there is no more splendid world than this one. They allow me to experience the joy of living... for as long as there are people out there to kill... then I will not cease to exist."`,
  `"Because once I didn't care about the rules anymore, I had all the power. We all have it inside of us. We just got to let it out. And I can show you how..."`,
  `"Sometimes the only way to fix a system is to burn it down and start from scratch. But I'm not interested in the 'fixing' bit."`,
  `"Schemers trying to control their little worlds. I'm not a schemer. I try to show the schemers how pathetic their attempts to control things really are"`,
  `"That which we cannot destroy, we will defile! Those we cannot defeat will know only despair!"`,
  `"Tear down creation, just to see if you can."`,
];

const personalityTraits = [
  "values friendship and kinship over all.",
  "is typically the life of the party.",
  "wants to be friends with everyone.",
  "is not very careful with words. Makes sure to blurt out every thought and every detail that comes to mind.",
  "has a strong work ethic. Hard work builds character.",
  "means well, but can be disloyal at times. Has tarnished a few friendships this way.",
  "stutters and breaks eye contact when nervous.. which is all of the time.",
  "is hardened to emotion, and rarely shows any form of expression.",
  "is generally quiet and calculated, speaking only when it is important.",
  "can be blunt. Says things as they are without considering others' feelings.",
  "brings flowers to the at the cemetary each week to pay respects to lost loved ones and strangers alike.",
  "is a pathological liar. I wouldn't count on this one.",
  "is always polite, even if it's disingenuous. But you would never be able to tell.",
  "is constantly gossiping about something. Knows everything going on in town.",
  "is a fearless and undefeated fighter. Has never been beaten in battle.",
  "trusts strangers way too easily. A bit easy to manipulate.",
  "is always willing to lend a hand to those in need.",
  "spends a little too much time at the brothel.",
  "has impossible standards and is difficult to please.",
  "maintains a postitive outlook on life, and is sure to always lift everyone's spirits.",
  "can't read or write, but is very sociable and happy to talk to you.",
  "can be extremely emotional. Can be set off by small occurrences.",
  "is a total animal lover. Would completely replace every human friend with an animal if possible. Wants to save every stray cat, dog, and horse.",
  "is a bit of a troublemaker, and has been arrested once or twice.",
  "will only help if you offer some coin. Will basically do anything for some coin.",
  "enjoys stirring drama amongst the townspeople for no good reason.",
  "is generally nice, but can be confrontational. Be careful with this one.",
  "absolutely LOVES, lives, and breathes drama. There is never enough drama for this one.",
  "is full of energy and can't stop fidgeting around. Continuously paces around the room. ",
  "is having an affair and doesn't feel guilty about it.",
  "feels betrayed by most of society due to childhood trauma.",
  "enjoys lockpicking as a hobby.",
  "is loved by family and friends alike. A genuinely good person.",
  "has many enemies.",
  "is very popular. Has a strong reputation among the people.",
  "has a terrible reputation and wants to make amends.",
  "is always looking for affirmation.",
  "is a conspiracy theorist.",
  "has a soft heart. You feel comforted in their presence.",
  "may have kleptomaniac tendencies.",
  "is always trying to tell jokes that rarely land.",
  "feels society has been corrupted by coin. Tries to barter whenever possible.",
  "has a soft-spot for the downtrodden. Will always donate a spare coin.",
  "flirts with literally everyone. Don't think you're special.",
  "is quite the adrenaline junkie. Always up for some adventure.",
  "is a bit absent-minded. Often gets lost in daydreams and forgets about the task at hand.",
];

const plotHooks = [
  "stumbled upon a curious note by the docks which featured glyphs of various sizes, and seeks to know the origin.",
  "is having an affair with a town guard.",
  "is cursed with Lycanthropy and wants to cure it.",
  "has spotted hooded figures entering the neighbor's house every night.",
  "sells potions of questionable origin at the night market for some extra coin.",
  "seeks to die an honorable and glorious death by duel.",
  "is hosting an extravagant Summer soiree for all of the townspeople. You will need an invitation to attend.",
  "has had the same repetitive nightmare for the last month. Could it be more than just a dream?",
  "has heard rumor of a distant land of abundant riches.",
  "has been hired to steal items from the Player Characters.",
  "desperately wants a spouse.",
  "noticed a strong odor emanating from the Northern lake.",
  "wants to run away from home and become a traveling musician.",
  "hates the aristocracy and wants to see them taken down.",
  "has been infecting townspeople with Lycanthropy.",
  "has been framed for murder.",
  "wears an amulet engraved with a strange symbol.",
  "has been hired to steal coin from the Player Characters.",
  `wants to invite you to dinner, and won't take "no" for an answer.`,
  "is the host of a deadly disease which is transmitted by physical contact.",
];

export {
  ages,
  races,
  jobs,
  sexualOrientations,
  relationshipStatuses,
  children,
  overallAppearances,
  eyeColors,
  hairColors,
  hairStyles,
  bodyTypes,
  clothings,
  alignments,
  skinTones,
  beliefsLG,
  beliefsLN,
  beliefsLE,
  beliefsNG,
  beliefsNN,
  beliefsNE,
  beliefsCG,
  beliefsCN,
  beliefsCE,
  personalityTraits,
  plotHooks,
};
