var quotes = [
    {
      quoteText: "The only way to do great work is to love what you do.",
      quoteAuthor: "Steve Jobs"
    },
    {
      quoteText: "In three words I can sum up everything I've learned about life: it goes on.",
      quoteAuthor: "Robert Frost"
    },
    {
      quoteText: "It does not matter how slowly you go as long as you do not stop.",
      quoteAuthor: "Confucius"
    }
    // add more quotes here...
  ];

  
  function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];
    var quoteText = document.getElementById("quote-text");
    var quoteAuthor = document.getElementById("quote-author");
    quoteText.innerText = quote.quoteText;
    quoteAuthor.innerText = quote.quoteAuthor;
  }

  var button = document.getElementById("new-quote-button");
  button.addEventListener("click", function() {
    getRandomQuote();
  });
  