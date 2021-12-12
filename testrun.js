// character arrays - 4 types
const fs = require('fs');


const common_characters = ["C-Fabian-1", "C-Gwen-1", "C-Hector-1", "C-Ho-Jin-1", "C-Idore-1", "C-Lucius-1", "C-Maze-1", "C-Sabrina-1", "C-Templar-1", "C-Theia-1"];
const rare_characters = ["C-Fabian-2", "C-Gwen-2", "C-Hector-2", "C-Ho-Jin-2", "C-Idore-2", "C-Lucius-2", "C-Maze-2", "C-Sabrina-2", "C-Templar-2", "C-Theia-2"];
const legendary_characters = ["C-Fabian-3", "C-Gwen-3", "C-Hector-3", "C-Ho-Jin-3", "C-Idore-3", "C-Lucius-3", "C-Maze-3", "C-Sabrina-3", "C-Templar-3", "C-Theia-3"];
const mystic_characters = ["C-Fabian-4", "C-Gwen-4", "C-Hector-4", "C-Ho-Jin-4", "C-Idore-4", "C-Lucius-4", "C-Maze-4", "C-Sabrina-4", "C-Templar-4", "C-Theia-4"];


// character selection arrays

const silver_commonChars_total = {};
for (i = 0; i < 525; i++) {
    var value = common_characters[Math.floor(Math.random() * common_characters.length)];
    silver_commonChars_total[i] = value;
};
let silver = JSON.stringify(silver_commonChars_total)
fs.writeFile('silver.json', silver, function (err) {
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
const common_pets = ["P-Chiron-1", "P-Fleta-1", "P-Griffin-1"];
const rare_pets = ["P-Chiron-2", "P-Fleta-2", "P-Griffin-2"];
const legendary_pets = ["P-Chiron-3", "P-Fleta-3", "P-Griffin-3"];

// pet selection arrays
const gold_commonPets_total = [];
for (i = 0; i < 325; i++) {
    var value = common_pets[Math.floor(Math.random() * common_pets.length)];
    gold_commonPets_total[i] = value;
};

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
const land_total = Array(150).fill("L-Forrest Land");
let LandOutput = JSON.stringify(land_total)

// if else to select chest

const gold_chars_total = gold_commonChars_total.concat(gold_rareChars_total);
const gold_chars_S_total = gold_chars_total.sort(() => Math.random() - 0.5);
let GoldCharOutput = JSON.stringify(gold_chars_S_total)
const diamond_chars_total = diamond_commonChars_total.concat(diamond_rareChars_total, diamond_legendaryChars_total, diamond_mysticChars_total);
const diamond_chars_S_total = diamond_chars_total.sort(() => Math.random() - 0.5);
let DiamondCharOutput = JSON.stringify(diamond_chars_S_total)

const diamond_pets_total = diamond_commonPets_total.concat(diamond_rarePets_total, diamond_legendaryPets_total);
const diamond_pets_S_total = diamond_pets_total.sort(() => Math.random() - 0.5);
let DiamondPetOutput = JSON.stringify(diamond_pets_S_total)


var final_gold_op=[];
g_dict = {};

for(i=0; i<325; i++){
    var c1 = gold_chars_S_total.pop();
    var c2 = gold_chars_S_total.pop();
    var p1 = gold_commonPets_total.pop()
    final_gold_op[i]=[c1,c2,p1];
    
    g_dict[i] = final_gold_op[i];
    let g_op = JSON.stringify(g_dict)
    fs.writeFile('gold.json', g_op, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

var final_diamond_op = [];
d_dict = {};
console.log(land_total.length);
console.log(gold_commonPets_total.length);

for(i=0; i<150; i++){
    var c1 = diamond_chars_S_total.pop();
    var c2 = diamond_chars_S_total.pop();
    var c3 = diamond_chars_S_total.pop();
    var c4 = diamond_chars_S_total.pop();
    var p1 = diamond_pets_S_total.pop();
    var p2 = diamond_pets_S_total.pop();
    var l1 = land_total.pop();

    final_diamond_op[i]=[c1,c2,c3,c4,p1,p2,l1];

    d_dict[i] = final_diamond_op[i];
    let d_op = JSON.stringify(d_dict)
    fs.writeFile('diamond.json', d_op, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

}

