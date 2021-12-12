var x= '0.1eth';
const axios = require('axios');

function silverBuy(params) {      

//        axios.get('https://warlands.herokuapp.com/details').then(resp => {

//       console.log(resp.data);
        axios({
            method: 'get',
            url: 'https://warlands.herokuapp.com/details',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MTUxNDIwLCJqdGkiOiJkZjU2NmIyMGZkMDE0NWJkYWRmZTkwYTU2MTczYjY0YiIsInVzZXJfaWQiOjJ9.2YankabRzG4M1aW30qgpHeXm8HvaaYS2xu5ywMnZRb4',
                'Content-Type' : 'application/json'
              
            }
          }).then(function (response) {
            //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            console.log(response.data.silver_character);
          });



          

          axios({
            method: 'post',
            url: 'https://warlands.herokuapp.com',
            data: {'wallet':'','item_received':[],},
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MTUxNDIwLCJqdGkiOiJkZjU2NmIyMGZkMDE0NWJkYWRmZTkwYTU2MTczYjY0YiIsInVzZXJfaWQiOjJ9.2YankabRzG4M1aW30qgpHeXm8HvaaYS2xu5ywMnZRb4',
                'Content-Type' : 'application/json'
              
            }
          }).then(function (response) {
            //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            console.log(response.data.silver_character);
          });

         
//});

}

if (x == '0.1eth') {
    Items_Received = silverBuy();
};

