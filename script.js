/*
BEFORE YOU EXAMINE THIS CODE

Make sure you look at README.md. It has an explanation for this program's purpose and 
*/

// This variable is used in the list debugListType to test to see if the program works with variables.
var debugVar = "I am a debug variable. Please put me in the list debugListType!";

/* These are where all the vocabulary words go. Once the Randomize! button is pressed, these will be passed 
through randomize(), and the return value will be set on the left panel.*/
wordList = ["Python", "Javascript", "C", "Rust", "C++", "C#", "Go", "Ruby", "Lua", "Fortran", "Malbolge", "HTML",
"CSS", "Java"];

var debugWordList = ["word1", "word2", "word3", "word4", "word5"];
var debugListASCII = ["!", "@", "`", "ƒ", "•", "—", "Ÿ", "¥", "§", "©", "«", "¿", "á"];
var debugListType = ["string", true, false, 1, 0.1, 0.0000000001, debugVar]; /* Double does not work. Unfortunately,
JS does not support type casting.*/

// Takes parameters to switch between multiple word lists if needed.
/* This function is based off of the Fisher-Yates shuffling algorithm. I programmed it in my own way since I didn't
like other people's examples. I discovered this algorithm on Stack Overflow by a user named coolaj86. See their 
post here:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function randomize(array) {
    for (var currentIndex = array.length-1; currentIndex != 0; currentIndex--) {
        var randomIndex = Math.floor(Math.random() * currentIndex);
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

document.getElementById('randomizeButton').onclick = function() {
    document.getElementById("textArea").innerHTML = randomize(wordList).join("\n"); // If a new word list is provided, insert a new argument here
}

// Just a fun little easter egg
var bogosort = ["|", "||", "|||", "||||", "|||||", "||||||", "|||||||", "||||||||", "|||||||||", "||||||||||"]; // 10 rows
document.getElementById('bogosortButton').onclick = function() {
    document.getElementById('textArea').innerHTML = randomize(bogosort).join("\n");
}