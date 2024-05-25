function setupRandomQuotes() {
  let quotes = [
    "Someone had once said you could be terrified in space, but you could not be worried there. It was perfectly true.",
    "The future was, very literally, in their own hands.",
    "I am putting myself to the fullest possible use, which is all I think that any conscious entity can ever hope to do.",
    "What I really like is to be at home, working.",
    "The great, like stars, are not afraid of dark times for that is when they shine the brightest",
    "Welcome my son, welcome to the machine",
    "Shine on you crazy diamond",
    "Ashes to ashes, funk to funky",
    "There’s a starman waiting in the sky",
    "Come ride with me through the veins of history",
    "And how can we win when fools can be kings?",
    "I’d like to be under the sea in an octopus’ garden in the shade",
    "What would you think if I sang out of tune?",
    "I look at you all, see the love there that’s sleeping",
    "Please could you stop the noise? I’m tryna get some rest",
    "How did this fit in your story?",
    "Are you a lucky little lady in the city of light or just another lost angel, city of night?",
    "Link it to the world, link it to yourself",
    "Everything about you resonates happiness",
    "Wash me away, clean your body of me",
    "Passing by you light up my up my darkest skies, you take only seconds to draw me in",
    "Paradise comes at a price that I'm not prepared to pay",
    "Fate can't decide, alignment of the planets in your hands",
    "Come on and change the course of history",
    "I will be singing for absolution",
  ];

  let pElement = document.querySelector('.random-quote p');

  function generateRandomQuote() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    pElement.textContent = randomQuote;
  }

  generateRandomQuote();

  pElement.addEventListener('click', generateRandomQuote);
}

document.addEventListener('DOMContentLoaded', setupRandomQuotes);
