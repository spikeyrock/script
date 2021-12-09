
let x = '0.75eth';


function silverBuy(params) {
    // 1 character
    fetch("https://warlands.herokuapp.com/",{
        method: 'GET',
        body:  {silver_character: silver_commonChars_total
        }
    })

    var char = silver_character.pop();
    Items_Received = [char];

    //result = [];
    fetch("https://warlands.herokuapp.com/",{
        method: 'POST',
        body:  {items: Items_Received,
            silver_character: silver_commonChars_total
        }
    })

    (Items_Received)
    console.log(silver_commonChars_total)

};

function goldBuy(params) {

    fetch("https://warlands.herokuapp.com/",{
        method: 'GET',
        body:  {silver_character: silver_commonChars_total
        }
    })
    
    // 2 characters & 1 pet
    var char1 = gold_chars_S_total.pop();
    var char2 = gold_chars_S_total.pop();
    var pet = gold_commonPets_total.pop()
    Items_Received = [char1, char2, pet];

    //result = [];
    fetch("https://warlands.herokuapp.com/",{
        method: 'POST',
        body:  {items: Items_Received,
            gold_character: gold_chars_S_total,
            gold_pets: common_pets
        }
    })

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

    fetch("https://warlands.herokuapp.com/",{
        method: 'POST',
        body:  {items: Items_Received,
            diamond_character: diamond_chars_S_total,
            diamond_pets: diamond_pets_S_total,
            diamond_land: land_total
        }
    })

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