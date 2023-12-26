const axios = require('axios');
const request = require('request')

const url = 'https://catfact.ninja/fact'

axios.get(url)
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

request({ url: url }, (error, response, body) => {
    // Parse the response body from JSON string into JavaScript object
    if (!error) {
        const data = JSON.parse(body)
        console.log(data)
    } else {
        console.log(error);

    }

})