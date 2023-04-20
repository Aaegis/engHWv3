/*
BEFORE YOU EXAMINE THIS CODE

Make sure you look at README.md. It has an explanation for this program's purpose and the comments below will make
more sense.
Don't forget to view the website live at https://[TEMPORARILY REDACTED].github.io/engHWv3/
*/

// Leaving a reminder for myself in the console incase I forget
console.warn("Ensure arguments/values are changed when switching arrays - This warning is intentional");

/* These are where all the vocabulary words go. Once the Randomize! button is pressed, these will be passed 
through randomize(), and the return value will be set on the left panel.*/
var wordList = ["Synthetic", "Toil", "Moil", "Cementation", "Despicable", "Excruciate", "Dogma", "Implementation",
"Intimidation", "Specialization"];

console.log("Loading main array - " + wordList);

// This variable is used in the list debugListType to test to see if the program works with variables.
var debugVar = "I am a debug variable. Please put me in the list debugListType!";

// These are the debug word lists. They can be put into parameters below and test to see if they work.
console.log("Loading debug array(s)");

var debugWordList = ["word1", "word2", "word3", "word4", "word5"];
var debugListASCII = ["!", "@", "`", "ƒ", "•", "—", "Ÿ", "¥", "§", "©", "«", "¿", "á"];
var debugListType = ["string", true, false, 1, 0.1, 0.0000000001, debugVar]; /* Double does not work. Unfortunately,
JS does not support type casting.*/

// Update the text input area with the words from wordList.
console.log("Loading selected wordlist - change value/array to select a different array.");
document.getElementById('textInput').innerHTML = wordList;

// Takes parameters to switch between multiple word lists if needed.
/*
This function works by selecting the first value and swapping it with a value in a different place. It will do the same for the next value, and keep
going until it reaches the end.
*/
function randomize(array) {
    for (var i = 0; i <= array.length-1; i++) {
        var randomIndex = Math.floor(Math.random() * i);
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    console.log("Ran shuffle - " + array);
    if (array != wordList) {
        console.warn("The MAIN wordlist is not being used. Ignore this warning if you intended to use a debug list.");
    }
    return array;
}

/* When this button is clicked, it will call the randomize function and set its value to the text area. If there
are no values in wordList, it will alert the user and output a warning to the console, the program functions normally. However, the output will be
blank.
*/
document.getElementById('randomizeButton').onclick = function() {
    document.getElementById("textArea").innerHTML = randomize(wordList).join("\n"); // If a new word list is provided, insert a new argument here
    if (wordList == "") {
        console.warn("There are no values in the MAIN array");
        alert("There are no values in the MAIN array.");
    }
}

/* This function is for the text input. Upon clicking a button, the text area above will update based on the content
of this text area.*/
// This function takes parameters so it can work with other arrays in case debugging is needed.
/* This function works by taking an array as an argument, then getting the value of textInput. The function then sets the value of
the inputted array as the value of textInput. However, the array's value is currently one entire string, and it needs to be
separated so that it can be shuffled. To do that, it splits the string into an array by separating it by commas. Lastly, it returns the array.
*/
function updateArray(array) {
    array = document.getElementById('textInput').value;
    var arraySplit = array.split(",");
    document.getElementById('textArea').innerHTML = arraySplit;
    wordList = arraySplit;
    console.log("Updated MAIN wordlist to - " + wordList);
    if (wordList == "") {
        console.warn("There are no values in the selected array");
        alert("There are no values in the selected array.");
    }
    return array;
}
    
// When the button is clicked, call updateArray to insert custom words inputted by the user in the text input area.
document.getElementById('update').onclick = function() {
    updateArray(wordList);
    console.log("Successfully updated");
}

// Just a fun little easter egg. There's no purpose to this. It just sets wordList to a bunch of lines so that the
// user can repeatedly press the Randomize! Button and try to bogosort it.
var bogosort = ["|", "||", "|||", "||||", "|||||", "||||||", "|||||||", "||||||||", "|||||||||", "||||||||||"]; // 10 rows
document.getElementById('bogosortButton').onclick = function() {
    wordList = bogosort;
    document.getElementById('textArea').innerHTML = randomize(wordList).join("\n");
    console.log("Enabled bogosort");
}