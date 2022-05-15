 // Creating variables based on their IDs
 const vowelNumberDisplay = document.getElementById('vowelDisplay');
 const submitButton = document.getElementById('submit');
 const letterNumberDisplay = document.getElementById('letterDisplay');
 const consonantNumberDisplay = document.getElementById('consonantDisplay');
 const wordNumberDisplay = document.getElementById('wordsDisplay');
 let vowelCount = 0;
 let letterCount = 0;
 let consonantCount = 0;
 let wordCount = 0;
 let userInput;
 let spaces;

 // LETTER COUNT
 function inputLetterCount() {
     const userInput = document.getElementById('mainText').value;

     // Remove all white spaces, tabs, space
     let spacesText = userInput.replace(/\s/g, "");

     // Get length of string after removal
     let letterCount = spacesText.length;
     return letterCount;
 }

 
 // CONSONANTS COUNT
 function inputConsonantCount() {
     const userInput = document.getElementById('mainText').value;
     // Check consonant count using regex
     let consonantCount = userInput.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
     return consonantCount;           

 }

 // VOWEL COUNT
 // Gets input value
 function inputVowelCount() {
     const userInput = document.getElementById('mainText').value;
     // Check vowel count using regex
     let vowelCount = userInput.match(/[aeiou]/gi).length;
     return vowelCount;
     return userInput;
 }

 // WORD COUNT
 function inputWordCount() {
     const userInput = document.getElementById('mainText').value;
     let wordCount = userInput.trim().split(/\s+/).length;
     return wordCount;
 }


 // Assign an event when button is clicked 
 submitButton.addEventListener('click', function() {
     console.log(`${inputVowelCount()} vowel`);
     inputVowelCount()
     vowelNumberDisplay.innerHTML = inputVowelCount();

     console.log(`${inputLetterCount()} characters`);
     inputLetterCount()
     letterNumberDisplay.innerHTML = inputLetterCount();

     console.log(`${inputConsonantCount()} consonants`);
     inputConsonantCount()
     consonantNumberDisplay.innerHTML = inputConsonantCount();

     console.log(`${inputWordCount()} words`);
     inputWordCount()
     wordNumberDisplay.innerHTML = inputWordCount();
 });
