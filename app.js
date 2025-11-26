"use strict";

const quotes = [
  {text: "Practice doesn’t make perfect. Practice makes progress.", author: "Unknown"},
  {text: "Every commit is a step forward.", author: "GridSyntax"},
  {text: "Small apps, big confidence.", author: "GridSyntax"},
  {text: "Break tasks down, then build them up.", author: "GridSyntax"},
  {text: "Ship it, then improve it.", author: "GridSyntax"}
];

const quoteTextEl = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuoteBtn");

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function showRandomQuote() {
  const quote = getRandomQuote();
  quoteTextEl.textContent = `"${quote.text}"  ~ ${quote.author}`;
}

newQuoteBtn.addEventListener("click", showRandomQuote);
