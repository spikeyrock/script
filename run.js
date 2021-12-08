// character arrays - 4 types
const fs = require('fs')


const common_characters = ["Fabian-1", "Gwen-1", "Hector-1", "Ho-Jin-1", "Idore-1", "Lucius-1", "Maze-1", "Sabrina-1", "Templar-1", "Theia-1"];

const rare_characters = ["Fabian-2", "Gwen-2", "Hector-2", "Ho-Jin-2", "Idore-2", "Lucius-2", "Maze-2", "Sabrina-2", "Templar-2", "Theia-2"];

const legendary_characters = ["Fabian-3", "Gwen-3", "Hector-3", "Ho-Jin-3", "Idore-3", "Lucius-3", "Maze-3", "Sabrina-3", "Templar-3", "Theia-3"];

const mystic_characters = ["Fabian-4", "Gwen-4", "Hector-4", "Ho-Jin-4", "Idore-4", "Lucius-4", "Maze-4", "Sabrina-4", "Templar-4", "Theia-4"];

// character selection arrays

const silver_commonChars_total = [];
for (i = 0; i < 525; i++) {
    var value = common_characters[Math.floor(Math.random() * common_characters.length)];
    silver_commonChars_total[i] = value;
};

fs.writeFile('silver_commonChars_total.json', silver_commonChars_total, function (err) {
    if (err) throw err;
    console.log('Saved!');
});

const gold_commonChars_total = [];
for (i = 0; i < 455; i++) {
    var value = common_characters[Math.floor(Math.random() * common_characters.length)];
    gold_commonChars_total[i] = value;

};

const diamond_commonChars_total = [];
for (i = 0; i < 330; i++) {
    var value = common_characters[Math.floor(Math.random() * common_characters.length)];
    diamond_commonChars_total[i] = value;
};

const gold_rareChars_total = [];
for (i = 0; i < 195; i++) {
    var value = rare_characters[Math.floor(Math.random() * rare_characters.length)];
    gold_rareChars_total[i] = value;
};

const diamond_rareChars_total = [];
for (i = 0; i < 150; i++) {
    var value = rare_characters[Math.floor(Math.random() * rare_characters.length)];
    diamond_rareChars_total[i] = value;
};

const diamond_legendaryChars_total = [];
for (i = 0; i < 90; i++) {
    var value = legendary_characters[Math.floor(Math.random() * legendary_characters.length)];
    diamond_legendaryChars_total[i] = value;
};

const diamond_mysticChars_total = [];
for (i = 0; i < 30; i++) {
    var value = mystic_characters[Math.floor(Math.random() * mystic_characters.length)];
    diamond_mysticChars_total[i] = value;
};

// pet arrays
const common_pets = ["Chiron-1", "Fleta-1", "Griffin-1"];
const rare_pets = ["Chiron-2", "Fleta-2", "Griffin-2"];
const legendary_pets = ["Chiron-3", "Fleta-3", "Griffin-3"];

// pet selection arrays
const gold_commonPets_total = [];
for (i = 0; i < 325; i++) {
    var value = common_pets[Math.floor(Math.random() * common_pets.length)];
    gold_commonPets_total[i] = value;
};
fs.writeFile('gold_commonPets_total.json', gold_commonPets_total, function (err) {
    if (err) throw err;
    console.log('Saved!');
});


const diamond_commonPets_total = [];
for (i = 0; i < 150; i++) {
    var value = common_pets[Math.floor(Math.random() * common_pets.length)];
    diamond_commonPets_total[i] = value;
};

const diamond_rarePets_total = [];
for (i = 0; i < 105; i++) {
    var value = rare_pets[Math.floor(Math.random() * rare_pets.length)];
    diamond_rarePets_total[i] = value;
};

const diamond_legendaryPets_total = [];
for (i = 0; i < 45; i++) {
    var value = legendary_pets[Math.floor(Math.random() * legendary_pets.length)];
    diamond_legendaryPets_total[i] = value;
};


// land array
const land_total = Array(150).fill("Forrest Land");
fs.writeFile('land_total.json', land_total, function (err) {
    if (err) throw err;
    console.log('Saved!');
});


// if else to select chest

const gold_chars_total = gold_commonChars_total.concat(gold_rareChars_total);
const gold_chars_S_total = gold_chars_total.sort(() => Math.random() - 0.5);
fs.writeFile('gold_chars_S_total.json', gold_chars_S_total, function (err) {
    if (err) throw err;
    console.log('Saved!');
});


const diamond_chars_total = diamond_commonChars_total.concat(diamond_rareChars_total, diamond_legendaryChars_total, diamond_mysticChars_total);
const diamond_chars_S_total = diamond_chars_total.sort(() => Math.random() - 0.5);
fs.writeFile('diamond_chars_S_total.json', diamond_chars_S_total, function (err) {
    if (err) throw err;
    console.log('Saved!');
});


const diamond_pets_total = diamond_commonPets_total.concat(diamond_rarePets_total, diamond_legendaryPets_total);
const diamond_pets_S_total = diamond_pets_total.sort(() => Math.random() - 0.5);
fs.writeFile('diamond_pets_S_total.json', diamond_pets_S_total, function (err) {
    if (err) throw err;
    console.log('Saved!');
});


let x = '-';
var y = 0;


function silverBuy(params) {
    // 1 character
    var char = silver_commonChars_total.pop();
    Items_Received = [char];

    //result = [];
    console.log(Items_Received)
    console.log(silver_commonChars_total)

};

function goldBuy(params) {
    // 2 characters & 1 pet
    var char1 = gold_chars_S_total.pop();
    var char2 = gold_chars_S_total.pop();
    var pet = gold_commonPets_total.pop()
    Items_Received = [char1, char2, pet];

    //result = [];
    console.log(Items_Received)
    console.log(gold_chars_S_total)
    console.log(common_pets)

};

function diamondBuy(params) {
    // 4 characters & 2 pets & 1 land
    var char1 = diamond_chars_S_total.pop();
    var char2 = diamond_chars_S_total.pop();
    var char3 = diamond_chars_S_total.pop();
    var char4 = diamond_chars_S_total.pop();
    var pet1 = diamond_pets_S_total.pop();
    var pet2 = diamond_pets_S_total.pop();
    var land = land_total.pop(value);

    //result = [];
    Items_Received = [char1, char2, char3, char4, pet1, pet2, land];
    console.log(Items_Received)
    console.log(diamond_chars_S_total)
    console.log(diamond_pets_S_total)
    console.log(land_total)

};


if (x == '0.1eth') {
    Items_Received = silverBuy();
};


if (x == '0.3eth') {
    Items_Received = goldBuy();
};

if (x == '0.75eth') {
    Items_Received = diamondBuy();

};