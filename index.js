// Imported the axios library so it will make a HTTP requests
const axios = require('axios');

// added a asynchronous function to fetch and display a motivational quote
async function getQuote() {
    try {
        // Made a GET request to the Zen Quotes API to fetch a random quote using const response
        const response = await axios.get('https://zenquotes.io/api/random');
        // extracts the const quote and const author from the API response
        const quote = response.data[0].q;
        const author = response.data[0].a;
        // console.log logs the quote and author to the console
        console.log(`Here's a motivational quote for you:\n"${quote}" - ${author}`);
    } catch (error) {
        // catches the error and puts into console for troubleshooting
        console.error("Could not fetch a quote. Try again later.");
    }
}
// Call the getQuote function to fetch and display a quote
getQuote();
