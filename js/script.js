import {
  femaleNames,
  maleNames,
  humanNames,
  elfNames,
  dwarfNames,
  gnomeNames,
  halflingNames,
  orcNames,
  tieflingNames,
  dragonbornNames,
  dragonbornClans,
} from "./names.js";

import {
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
} from "./arrays.js";

const sexes = ["female", "male"];
const racialAbilityModifiers = {
  Dragonborn: { str: 2, dex: 0, con: 0, int: 0, wis: 0, cha: 1 },
  "Draconic Ancestry Dragonborn": {
    str: 2,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 1,
  },
  Dwarf: { str: 0, dex: 0, con: 2, int: 0, wis: 0, cha: 0 },
  "Hill Dwarf": { str: 0, dex: 0, con: 2, int: 0, wis: 1, cha: 0 },
  "Mountain Dwarf": { str: 2, dex: 0, con: 2, int: 0, wis: 0, cha: 0 },
  "Duergar Dwarf": { str: 1, dex: 0, con: 2, int: 0, wis: 0, cha: 0 },
  "Deep Dwarf": { str: 0, dex: 0, con: 2, int: 0, wis: 1, cha: 0 },
  "Arctic Dwarf": { str: 0, dex: 1, con: 2, int: 0, wis: 1, cha: 0 },
  "Gold Dwarf": { str: 0, dex: 0, con: 2, int: 0, wis: 1, cha: 0 },
  "Shield Dwarf": { str: 0, dex: 0, con: 2, int: 0, wis: 1, cha: 0 },
  Elf: { str: 0, dex: 2, con: 0, int: 1, wis: 0, cha: 0 },
  "Eladrin Elf": { str: 0, dex: 2, con: 0, int: 1, wis: 0, cha: 0 },
  "High Elf": { str: 0, dex: 2, con: 0, int: 1, wis: 0, cha: 0 },
  "Wood Elf": { str: 0, dex: 2, con: 0, int: 0, wis: 1, cha: 0 },
  "Half-Elf": { str: 0, dex: 1, con: 0, int: 0, wis: 1, cha: 2 },
  "Drow Elf": { str: 0, dex: 2, con: 0, int: 0, wis: 0, cha: 1 },
  "Sea Elf": { str: 0, dex: 2, con: 1, int: 0, wis: 0, cha: 0 },
  Gnome: { str: 0, dex: 0, con: 0, int: 2, wis: 0, cha: 0 },
  "Deep Gnome": { str: 0, dex: 1, con: 0, int: 2, wis: 0, cha: 0 },
  "Rock Gnome": { str: 0, dex: 0, con: 1, int: 2, wis: 0, cha: 0 },
  Halfling: { str: 0, dex: 2, con: 0, int: 2, wis: 0, cha: 1 },
  "Lightfoot Halfling": { str: 0, dex: 2, con: 0, int: 0, wis: 0, cha: 1 },
  "Stout Halfling": { str: 0, dex: 2, con: 1, int: 0, wis: 0, cha: 0 },
  Orc: { str: 2, dex: 0, con: 1, int: 0, wis: 0, cha: 0 },
  "Half Orc": { str: 2, dex: 0, con: 1, int: 0, wis: 0, cha: 0 },
  Human: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
  Tiefling: { str: 0, dex: 2, con: 0, int: 1, wis: 0, cha: 2 },
  "Asmodeus Tiefling": { str: 0, dex: 0, con: 1, int: 0, wis: 0, cha: 2 },
  "Baalzebul Tiefling": { str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 2 },
  "Dispater Tiefling": { str: 0, dex: 1, con: 1, int: 0, wis: 0, cha: 2 },
  "Fierna Tiefling": { str: 0, dex: 0, con: 0, int: 0, wis: 1, cha: 2 },
  "Glasya Tiefling": { str: 0, dex: 1, con: 0, int: 0, wis: 0, cha: 2 },
  "Levistus Tiefling": { str: 0, dex: 0, con: 1, int: 0, wis: 0, cha: 2 },
  "Mammon Tiefling": { str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 2 },
  "Mephistopheles Tiefling": { str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 2 },
  "Zariel Tiefling": { str: 1, dex: 0, con: 0, int: 0, wis: 0, cha: 2 },
};
let confirmedRace = "";
let lastName = "";
let confirmedAlignment = "";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function setRandomSexAndFirstName() {
  const confirmedSex = getRandomElement(sexes);
  const firstName =
    confirmedSex === "female"
      ? getRandomElement(femaleNames)
      : getRandomElement(maleNames);

  document.getElementById("sex").innerText =
    confirmedSex === "female" ? "Female" : "Male";

  let pronoun = document.getElementsByClassName("pronoun");
  for (let i = 0; i < pronoun.length; i++) {
    if (confirmedSex == "female") {
      pronoun[i].innerText = "She";
    } else {
      pronoun[i].innerText = "He";
    }
  }

  return (document.getElementById("firstName").innerText = firstName);
}

function setRandomAge() {
  let age = getRandomElement(ages);
  return (document.getElementById("age").innerText = age);
}

function setRandomRaceAndLastName() {
  confirmedRace = getRandomElement(races);
  document.getElementById("race").innerText = confirmedRace;
  if (
    confirmedRace == "Elf" ||
    confirmedRace == "Half-Elf" ||
    confirmedRace == "High Elf" ||
    confirmedRace == "Wood Elf" ||
    confirmedRace == "Eladrin Elf" ||
    confirmedRace == "Drow Elf" ||
    confirmedRace == "Sea Elf"
  ) {
    lastName = `${getRandomElement(elfNames)}`;
  } else if (confirmedRace == "Human") {
    lastName = `${getRandomElement(humanNames)}`;
  } else if (
    confirmedRace == "Dwarf" ||
    confirmedRace == "Hill Dwarf" ||
    confirmedRace == "Mountain Dwarf" ||
    confirmedRace == "Duergar Dwarf" ||
    confirmedRace == "Deep Dwarf" ||
    confirmedRace == "Arctic Dwarf" ||
    confirmedRace == "Gold Dwarf" ||
    confirmedRace == "Shield Dwarf"
  ) {
    lastName = `${getRandomElement(dwarfNames)}`;
  } else if (
    confirmedRace == "Gnome" ||
    confirmedRace == "Deep Gnome" ||
    confirmedRace == "Rock Gnome"
  ) {
    lastName = `${getRandomElement(gnomeNames)}`;
  } else if (
    confirmedRace == "Halfling" ||
    confirmedRace == "Lightfoot Halfling" ||
    confirmedRace == "Stout Halfling"
  ) {
    lastName = `${getRandomElement(halflingNames)}`;
  } else if (confirmedRace == "Orc" || confirmedRace == "Half-Orc") {
    lastName = `${getRandomElement(orcNames)}`;
  } else if (
    confirmedRace == "Tiefling" ||
    confirmedRace == "Asmodeus Tiefling" ||
    confirmedRace == "Baalzebul Tiefling" ||
    confirmedRace == "Dispater Tiefling" ||
    confirmedRace == "Fierna Tiefling" ||
    confirmedRace == "Glasya Tiefling" ||
    confirmedRace == "Levistus Tiefling" ||
    confirmedRace == "Mammon Tiefling" ||
    confirmedRace == "Mephistopheles Tiefling" ||
    confirmedRace == "Zariel Tiefling"
  ) {
    lastName = `${getRandomElement(tieflingNames)}`;
  } else if (
    confirmedRace == "Dragonborn" ||
    confirmedRace == "Draconic Ancestry Dragonborn"
  ) {
    lastName = `${getRandomElement(dragonbornNames)}
     of the Clan ${getRandomElement(dragonbornClans)}`;
  }
  return (document.getElementById("surname").innerText = lastName);
}

function setRandomJob() {
  getRandomElement(jobs);
  return (document.getElementById("job").innerText = getRandomElement(jobs));
}

function setRandomOrientation() {
  return (document.getElementById("orientation").innerText =
    getRandomElement(sexualOrientations));
}

function setRandomRelationship() {
  return (document.getElementById("relationship").innerText =
    getRandomElement(relationshipStatuses));
}

function setRandomChildren() {
  return (document.getElementById("children").innerText =
    getRandomElement(children));
}

function setRandomDescription() {
  return (document.getElementById("overallDescription").innerText =
    getRandomElement(overallAppearances));
}

function setRandomEyes() {
  return (document.getElementById("eyeColor").innerText =
    getRandomElement(eyeColors));
}

function setRandomHair() {
  return (document.getElementById("hairColor").innerText =
    getRandomElement(hairColors));
}

function setRandomHairstyle() {
  return (document.getElementById("hairStyle").innerText =
    getRandomElement(hairStyles));
}

function setRandomBodyDescription() {
  return (document.getElementById("bodyDescription").innerText =
    getRandomElement(bodyTypes));
}

function setRandomSkinTone() {
  return (document.getElementById("skinToneDescription").innerText =
    getRandomElement(skinTones));
}

function setRandomClothing() {
  return (document.getElementById("clothing").innerText =
    getRandomElement(clothings));
}

function rollThreeDice() {
  let rollTotal = 0;
  for (let i = 0; i < 3; i++) {
    rollTotal += Math.floor(Math.random() * 6) + 1;
  }
  return rollTotal;
}

function setRandomRolls() {
  const abilityModifiers = racialAbilityModifiers[confirmedRace];
  for (const ability in abilityModifiers) {
    const modifier = abilityModifiers[ability];
    const score = modifier === 0 ? rollThreeDice() : rollThreeDice() + modifier;
    const newScore =
      modifier === 0 ? score : `${score + modifier} (+${modifier})`;
    if (ability === "str") {
      document.getElementById("str").innerText = newScore;
    } else if (ability === "dex") {
      document.getElementById("dex").innerText = newScore;
    } else if (ability === "con") {
      document.getElementById("con").innerText = newScore;
    } else if (ability === "int") {
      document.getElementById("int").innerText = newScore;
    } else if (ability === "wis") {
      document.getElementById("wis").innerText = newScore;
    } else if (ability === "cha") {
      document.getElementById("cha").innerText = newScore;
    }
  }
}

function setRandomAlignment() {
  confirmedAlignment = getRandomElement(alignments);
  document.getElementById("alignment").innerText = confirmedAlignment;
  return confirmedAlignment;
}

function setBeliefs(alignment) {
  const beliefs = {
    "Lawful Good": beliefsLG,
    "Lawful Neutral": beliefsLN,
    "Lawful Evil": beliefsLE,
    "Neutral Good": beliefsNG,
    "True Neutral": beliefsNN,
    "Neutral Evil": beliefsNE,
    "Chaotic Good": beliefsCG,
    "Chaotic Neutral": beliefsCN,
    "Chaotic Evil": beliefsCE,
  };

  document.getElementById("firstBelief").innerText = getRandomElement(
    beliefs[alignment]
  );
  document.getElementById("secondBelief").innerText = getRandomElement(
    beliefs[alignment]
  );
  document.getElementById("thirdBelief").innerText = getRandomElement(
    beliefs[alignment]
  );
  document.getElementById("alignment").innerText = alignment;
}

function randomizeBeliefs() {
  setRandomAlignment();
  setBeliefs(confirmedAlignment);
}

function setRandomTraits() {
  document.getElementById("firstTrait").innerText =
    getRandomElement(personalityTraits);
  document.getElementById("secondTrait").innerText =
    getRandomElement(personalityTraits);
}

function setRandomPlotHook() {
  document.getElementById("plotHook").innerText = getRandomElement(plotHooks);
}

function generateRandomCharacter() {
  setRandomSexAndFirstName();
  setRandomRaceAndLastName();
  setRandomAge();
  setRandomJob();
  setRandomOrientation();
  setRandomRelationship();
  setRandomChildren();
  setRandomDescription();
  setRandomEyes();
  setRandomHair();
  setRandomHairstyle();
  setRandomSkinTone();
  setRandomClothing();
  setRandomBodyDescription();
  setRandomRolls();
  setRandomTraits();
  setRandomPlotHook();
  randomizeBeliefs();
}

document
  .querySelector(".generate")
  .addEventListener("click", generateRandomCharacter);

document
  .querySelector(".randomize")
  .addEventListener("click", randomizeBeliefs);

document.getElementById("lawGood").addEventListener("click", function () {
  setBeliefs("Lawful Good");
});
document.getElementById("lawNeu").addEventListener("click", function () {
  setBeliefs("Lawful Neutral");
});
document.getElementById("lawEvil").addEventListener("click", function () {
  setBeliefs("Lawful Evil");
});
document.getElementById("neuGood").addEventListener("click", function () {
  setBeliefs("Neutral Good");
});
document.getElementById("neu").addEventListener("click", function () {
  setBeliefs("True Neutral");
});
document.getElementById("neuEvil").addEventListener("click", function () {
  setBeliefs("Neutral Evil");
});
document.getElementById("chaGood").addEventListener("click", function () {
  setBeliefs("Chaotic Good");
});
document.getElementById("chaNeu").addEventListener("click", function () {
  setBeliefs("Chaotic Neutral");
});
document.getElementById("chaEvil").addEventListener("click", function () {
  setBeliefs("Chaotic Evil");
});
