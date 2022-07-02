require('dotenv').config()
const axios = require('axios')
const {PHONE_NUMBER_ID, BEARER_TOKEN} = process.env
function sendMessage(mobileNumber) {
    axios.post(`https://graph.facebook.com/v13.0/${PHONE_NUMBER_ID}/messages`, 
    {
        "messaging_product": "whatsapp",
        "to": `${mobileNumber}`,
        "type": "template",
        "template": {
            "name": "hello_world",
            "language": {
                "code": "en_US"
            }
        }
    },
    {
        headers:{'Content-Type': 'application/json','Authorization': `Bearer ${BEARER_TOKEN}`}
    }
    ).then((data) => {
        console.log(data)
    }).catch(error => {
        console.log(error)
    })
}