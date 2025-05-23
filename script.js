const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it.",
    "Don't stop when you're tired. Stop when you're done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days."
  ];
  
  const quoteElement = document.getElementById("quote");
  
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.classList.remove("fade-in");
  
    // Force reflow
    void quoteElement.offsetWidth;
  
    quoteElement.textContent = quotes[randomIndex];
    quoteElement.classList.add("fade-in");
  }
  
  // Show first quote on load
  window.onload = showRandomQuote;
  
  