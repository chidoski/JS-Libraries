//User can capitalize the first letter in a string
function capitalize(word){
  return(word.charAt(0).toUpperCase() + word.slice(1));
  window.alert(new_word);
}

var uncappedWord = "holymoly";
capitalize(uncappedWord);

//This is a function for capitalizing the first letter in a word
//At the current moment this code is given the string, but a user could enter a variable as well
//Once the function takes in given string as a parameter, the function returns the a capitalized version of the string
//In line 2 to .charAt() returns the character from the 0 position
//.toUpperCase takes the character from the 0 position and upperCases it
//the .slice function extracts parts of a string starting at the give position
//With these three functions working together they are able to changing the casing of lowercase strings

//------------------------------------------------------------------------------------------------------------------------
//User input has been added. Users can now submit strings
function capitalizev2(new_word){
  return(new_word.charAt(0).toUpperCase() + new_word.slice(1));
}

var uncappedWordv2 = prompt("What word do you need capitalized?");
var prompted_word = capitalizev2(uncappedWordv2);
window.alert(prompted_word);

//This version of the capitalize function allows for a user to input the string they wish to capitalize
//The return keyword stops the exection of a funtion - that is why when I added window.alert after the retrun keyword nothing happened

//------------------------------------------------------------------------------------------------------------------------
//If an integer is passed instead of a string
function capitalizev2(new_word){
  if(typeof new_word === "number"){
    return("That is not a string");
  }
  return(new_word.charAt(0).toUpperCase() + new_word.slice(1));
}

/*var uncappedWordv2 = prompt("What word do you need capitalized?");
var prompted_word = capitalizev2(uncappedWordv2);
window.alert(prompted_word);*/

var num = 37;
var bad_word = capitalizev2(num);
window.alert(bad_word);

//This version of the capitalize function allows for a user to input the string they wish to capitalize
//The return keyword stops the exection of a funtion - that is why when I added window.alert after the retrun keyword nothing happened
//Something to remember. The prompt() function always returns a string so we shouldn't prompt the user for a number just yet
