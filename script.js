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
