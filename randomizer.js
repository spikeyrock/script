var x = '0.1eth';
const axios = require('axios');

function silverBuy(params) {
    axios({
        method: 'get',
        url: 'https://warlands.herokuapp.com/details',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MTUxNDIwLCJqdGkiOiJkZjU2NmIyMGZkMDE0NWJkYWRmZTkwYTU2MTczYjY0YiIsInVzZXJfaWQiOjJ9.2YankabRzG4M1aW30qgpHeXm8HvaaYS2xu5ywMnZRb4',
            'Content-Type': 'application/json'

        }
    }).then(function (response) {
        //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        console.log(response.data.silver_character);
    });

    var char = silver_character.pop();
    Items_Received = [char];

    //result = [];

    axios({
        method: 'post',
        url: 'https://warlands.herokuapp.com',
        data: {
            'wallet': '',
            'remaining': {
                "silver_character": silver_character,
                'gold_character': response.data.gold_character,
                "gold_pets": response.data.gold_pets,
                "diamond_character": response.data.diamond_character,
                "diamond_pets": response.data.diamond_pets,
                "diamond_land": response.data.diamond_land
            },
            'item_received': Items_Received,
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MTUxNDIwLCJqdGkiOiJkZjU2NmIyMGZkMDE0NWJkYWRmZTkwYTU2MTczYjY0YiIsInVzZXJfaWQiOjJ9.2YankabRzG4M1aW30qgpHeXm8HvaaYS2xu5ywMnZRb4',
                'Content-Type': 'application/json'
            }
        }.then(function (response) {
            //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            console.log(response.data.silver_character);
        })

    });
};

function goldBuy(params) {
        axios({
            method: 'get',
            url: 'https://warlands.herokuapp.com/details',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MTUxNDIwLCJqdGkiOiJkZjU2NmIyMGZkMDE0NWJkYWRmZTkwYTU2MTczYjY0YiIsInVzZXJfaWQiOjJ9.2YankabRzG4M1aW30qgpHeXm8HvaaYS2xu5ywMnZRb4',
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            console.log(response.data.gold_character);
        });

        gold_chars_S_total = response.data.gold_character;
        gold_commonPets_total = response.data.gold_pets;
        // 2 characters & 1 pet
        var char1 = gold_chars_S_total.pop();
        var char2 = gold_chars_S_total.pop();
        var pet = gold_commonPets_total.pop()
        Items_Received = [char1, char2, pet];

        //result = [];

        axios({
            method: 'post',
            url: 'https://warlands.herokuapp.com',
            data: {
                'wallet': '',
                'remaining': {
                    "silver_character": response.data.silver_character,
                    'gold_character': gold_character,
                    "gold_pets": gold_pets,
                    "diamond_character": response.data.diamond_character,
                    "diamond_pets": response.data.diamond_pets,
                    "diamond_land": response.data.diamond_land
                },
                'item_received': Items_Received,
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MTUxNDIwLCJqdGkiOiJkZjU2NmIyMGZkMDE0NWJkYWRmZTkwYTU2MTczYjY0YiIsInVzZXJfaWQiOjJ9.2YankabRzG4M1aW30qgpHeXm8HvaaYS2xu5ywMnZRb4',
                    'Content-Type': 'application/json'
                }
            }.then(function (response) {
                console.log(response.data.gold_character);
            })
        });


        console.log(Items_Received)
        console.log(gold_chars_S_total)
        console.log(common_pets)

};

function diamondBuy(params) {

        axios({
            method: 'get',
            url: 'https://warlands.herokuapp.com/details',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MTUxNDIwLCJqdGkiOiJkZjU2NmIyMGZkMDE0NWJkYWRmZTkwYTU2MTczYjY0YiIsInVzZXJfaWQiOjJ9.2YankabRzG4M1aW30qgpHeXm8HvaaYS2xu5ywMnZRb4',
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            console.log(response.data.diamond_character);
        });

        // 4 characters & 2 pets & 1 land
        diamond_chars_S_total = response.data.diamond_character;
        diamond_pets_S_total = response.data.diamond_pets;
        land_total = response.data.diamond_land;

        var char1 = diamond_chars_S_total.pop();
        var char2 = diamond_chars_S_total.pop();
        var char3 = diamond_chars_S_total.pop();
        var char4 = diamond_chars_S_total.pop();
        var pet1 = diamond_pets_S_total.pop();
        var pet2 = diamond_pets_S_total.pop();
        var land = land_total.pop(value);

        //result = [];
        axios({
            method: 'post',
            url: 'https://warlands.herokuapp.com',
            data: {
                'wallet': '',
                'remaining': {
                    "silver_character": response.data.silver_character,
                    'gold_character': response.data.gold_character,
                    "gold_pets": response.data.gold_pets,
                    "diamond_character": diamond_character,
                    "diamond_pets": diamond_pets,
                    "diamond_land": diamond_land
                },
                'item_received': Items_Received,
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MTUxNDIwLCJqdGkiOiJkZjU2NmIyMGZkMDE0NWJkYWRmZTkwYTU2MTczYjY0YiIsInVzZXJfaWQiOjJ9.2YankabRzG4M1aW30qgpHeXm8HvaaYS2xu5ywMnZRb4',
                    'Content-Type': 'application/json'
                }
            }.then(function (response) {
                console.log(response.data.gold_character);
            })
        });


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
