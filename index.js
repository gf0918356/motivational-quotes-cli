const axios = require('axios');

async function getQuote() {
    try {
        const response = await axios.get('https://zenquotes.io/api/random');
        const quote = response.data[0].q;
        const author = response.data[0].a;
        console.log(`Here's a motivational quote for you:\n"${quote}" - ${author}`);
    } catch (error) {
        console.error("Could not fetch a quote. Try again later.");
    }
}

getQuote();
