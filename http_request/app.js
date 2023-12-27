const https = require('node:https');

const url = 'https://catfact.ninja/fact';
let data = '';

const request = https.request(url, (response) => {
    response.on('data', (chunk) => {
        data = data + chunk.toString()

    })
    response.on('end', () => {
        const body =JSON.parse(data)
        console.log(body);
    })

})

request.on('error',(error)=>{
    console.log('An error!',error)
})
request.end()
