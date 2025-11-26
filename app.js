"use strict";

const quotes = [
  "Practice doesn’t make perfect. Practice makes progress.",
  "Every commit is a step forward.",
  "Small apps, big confidence.",
  "Break tasks down, then build them up.",
  "Ship it, then improve it."
];

const quoteTextEl = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuoteBtn");

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function showRandomQuote() {
  quoteTextEl.textContent = getRandomQuote();
}

newQuoteBtn.addEventListener("click", showRandomQuote);
