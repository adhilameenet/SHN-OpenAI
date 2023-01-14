require('dotenv').config()
const {  Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
    organization: process.env.ORGANIZATION_ID,
    apiKey: process.env.API_KEY
});
const openai = new OpenAIApi(configuration);

openai.createImage({
    // prompt:prompt
    // n : n,
    // size : size  
}).then((response) => {
    console.log(response.data.data)
}).catch((err) => {
    console.log(err)
})