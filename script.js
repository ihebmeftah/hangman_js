// @beldi5 : Start implimentation of generating the letter 
const letters = 'abcdefghijklmnopqrstuvwxyz'; // Variable contain all letters 
let lettersArray = Array.from(letters); // Convert letters to array 
let lettersContainer = document.querySelector('.letters'); // Selecting the letters container
lettersArray.forEach((letter) => {
    // Create a span for each letter 
    let span = document.createElement('span');
    // Create a text contain a letter  
    theLetter = document.createTextNode(letter);
    // Append text into the spa 
    span.appendChild(theLetter);
    // Append css class 'letter-box' for span
    span.className = 'letter-box';
    // Append it to the letters container
    lettersContainer.appendChild(span);
});
// By @beldi5 : End implimentation of generating the letter 

// @beldi5 : Start implimentation of random word 
const words = {
    programming: ['python', 'java', 'kotlin', 'javascript'],
    movies: ['avengers', 'interstellar', 'inception', 'matrix'],
    countries: ['egypt', 'syria', 'spain', 'france', 'germany'],
    football: ['lionel messi', 'cristiano ronaldo', 'mohamed salah', 'neymar', 'zlatan ibrahimovic'],
    Singers: ['eminem', 'shakira', 'madonna', 'adele', "rihanna"],
};

let allKeys = Object.keys(words); // Get all keys from words object (Categories)
let randomIndexCategory = Math.floor(Math.random() * allKeys.length); // Get random index depending on the length of allKeys
let category = allKeys[randomIndexCategory]; // Get the category depending on the random index
document.querySelector('.game-info .category span').textContent = category; // Display the category in the game info
let randomIndexWord = Math.floor(Math.random() * words[category].length); // Get random index depending on the length of the words in the category
let word = words[category][randomIndexWord]; // Get the word depending on the random index
console.log(word);
console.log(category);
// @beldi5 : End implimentation of random word

// @ihebmeftah
// this logic for display case of the word in the game
let lettersGuessContainer = document.querySelector('.letters-guess');
let letterAndSpace = Array.from(word);
letterAndSpace.forEach((letter) => {
    let emptySpan = document.createElement('span');
    /*  point = document.createTextNode('.');
      emptySpan.appendChild(point);*/
    if (letter === ' ') {
        // handling word with space
        emptySpan.className = 'with-space';
    }
    lettersGuessContainer.appendChild(emptySpan);
});