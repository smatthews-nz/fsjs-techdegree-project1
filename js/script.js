/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author - Sam Matthews
Date - May 2019
Grading - looking for exceeds expectations
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/* set up the initial array, plus objects for each quote.
  quotes include author, source of quote, year, and relevant tags. */
let quotes = [
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    source: "J.K. Rowling",
    citation: "Harry Potter and the Goblet of Fire",
    year: 2000,
    tags: "Book, Fiction"
  },
  {
    quote: "Friendship is born at the moment when one man says to another 'What! You too? I thought that no one but myself...'",
    source: "C.S. Lewis",
    citation: "The Four Loves",
    year: 1960,
    tags: "Book, Fiction"
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    source: "H. Jackson Brown Jr.",
    citation: "P.S. I love you",
    year: 1990,
    tags: "Book, Book of sayings"
  },
  {
    quote: "All that is gold does not glitter, Not all those who wander are lost\; The old that is strong does not wither, Deep roots are not reached by the frost. From the ashes a fire shall be woken, A light from the shadows shall spring\; Renewed shall be blade that was broken, The crownless again shall be king.",
    source: "J.R.R. Tolkien",
    citation: "The Fellowship of the Ring",
    year: 1954,
    tags: "Book, Fantasy"
  },
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    source: "J.K. Rowling",
    citation: "Harry Potter and the Sorcerer's Stone",
    year: 1997,
    tags: "Book, Fiction"
  },
  {
    quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    source: "William Shakespeare",
    citation: "As You Like It",
    year: 1603,
    tags: "Play"
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
    source: "Dr. Seuss",
  citatione: "Oh, The Places You'll Go!",
    year: 1990,
    tags: "Book, Childrens Book"
  },
  {
    quote: "I love deadlines. I love the whooshing noise they make as they go by.",
    source: "Douglas Adams",
    citation: "The Salmon of Doubt",
    year: 2000,
    tags: "Book, Science Fiction"
  },
  {
    quote: "The story so far\: In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    source: "Douglas Adams",
    citation: "The Restaurant at the End of the Universe",
    year: 1980,
    tags: "Book, Science Fiction"
  },
  {
    quote: "…no boy or girl should ever be disheartened by lack or success in their youth but should diligently and faithfully continue to persevere and make up for lost time.",
    source: "Winston Churchill",
    citation: "Speech, University of Miami(Florida)",
    year: 1946,
    tags: "Speech"
  }
];

let rgbColors = [
  {
    red: 27,
    green: 68,
    blue: 244
  },
  {
    red: 237,
    green: 109,
    blue: 242
  },
  {
    red: 173,
    green: 177,
    blue: 109
  },
  {
    red: 143,
    green: 107,
    blue: 127
   }
   ,
   {
     red: 30,
     green: 72,
     blue: 174
   },
   {
     red: 126,
     green: 248,
     blue: 254
   },
   {
     red: 235,
     green: 153,
     blue: 140
   },
   {
     red: 125,
     green: 189,
     blue: 145
   }

]

//for in loop to test that objects are created correctly
for(prop in quotes){
console.log(prop, ": ", quotes[prop]);
}

/*
  getRandomQuote function creates a random number between 0, and the array length
  and returns a random quote object from the array.
*/
function getRandomQuote(){
let quote = {};
let randomNum = Math.floor(Math.random() * quotes.length);

quote = quotes[randomNum];
return quote;
}
//log to check that getRandomQuote is functioning correctly
console.log(getRandomQuote());

/*
  getRandomRGBColour function creates a random number between 0, and the array length
  to select a random rgb colour from the array.
*/
function getRandomRGBColour(){
  let rgbColor = {};
  let randomNum = Math.floor(Math.random() * rgbColors.length);

  rgbColor = rgbColors[randomNum];
  return rgbColor;
}


/*
  printQuote function calls two other functions.
  1. to create a random quote
  2. to create a random RGB getRandomRGBColour
  the function then updates the innerHTML of the quote class using the random quote
  the function also updates the background colour of the body, plus the loadQuote button using the
  colour that is randomly selected from the rgb colours array.
*/

function printQuote(){
//set up random quote in variable
let randomQuote = getRandomQuote();
let rgbColor = getRandomRGBColour();
let rgbString = "rgb("+ rgbColor.red + "," + rgbColor.green + ","+ rgbColor.blue + ")";
//set up html string
let html = "";
html += "<p class=\"quote\">" + randomQuote.quote + "</p>";
html += "<p class=\"source\">" + randomQuote.source;
//boolean test to ensure citation is present
if (randomQuote.citation !== ""){
  html += "<span class=\"citation\">" + randomQuote.citation + "</span>";
}
//boolean to test that year is present
if(randomQuote.year > 0){
  html += "<span class=\"year\">" + randomQuote.year + "</span>";
}
 
if(randomQuote.tags !== ""){
    html += "<span class=\"tags\">" + randomQuote.tags + "</span>";
}
 html += "</p>"

document.body.style.backgroundColor = rgbString;
document.getElementById("loadQuote").style.backgroundColor = rgbString;
document.getElementById("quote-box").innerHTML = html;

}

setInterval("printQuote()", 30000);

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
