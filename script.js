// Function to generate a unique API URL to avoid caching
function getApiUrl() {
    // Append a random number to the API URL to bypass caching
    return `https://api.allorigins.win/get?url=${encodeURIComponent('https://zenquotes.io/api/random')}&rand=${Math.random()}`;
  }
  
  // DOM elements
  const quoteText = document.getElementById('quote');
  const quoteAuthor = document.getElementById('author');
  const quoteBtn = document.getElementById('quote-btn');
  
  // Function to fetch a random quote from the API with a proxy
  async function getRandomQuote() {
    try {
      // Fetch data from the API with a CORS proxy
      const response = await fetch(getApiUrl());
      const data = await response.json();
  
      // Parse the nested JSON to get the actual quote data
      const quoteData = JSON.parse(data.contents);
  
      // Display the quote and author
      const quote = quoteData[0].q;
      const author = quoteData[0].a;
      quoteText.textContent = `"${quote}"`;
      quoteAuthor.textContent = `- ${author}`;
    } catch (error) {
      // Handle errors
      quoteText.textContent = "Oops! Couldn't fetch a quote.";
      quoteAuthor.textContent = "Try again later.";
      console.error('Error fetching the quote:', error);
    }
  }
  
  // Event listener for button click
  quoteBtn.addEventListener('click', getRandomQuote);
  
  // Fetch a quote when the page loads
  document.addEventListener('DOMContentLoaded', getRandomQuote);
  