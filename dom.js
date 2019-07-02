const key = "3c581e97bdd6665208a6ff2c1592317e";

const button = document.getElementById("search");
const input = document.getElementById("input");

const week = [];
const dayOne = [];
const dayTwo = [];
const dayThree = [];
const dayFour = [];
const dayFive = [];

input.addEventListener("keypress", getValueOfInput);

function getValueOfInput(e) {
  console.log(e.target.value);
}

// Axios request

function getWeather() {
  button.addEventListener("click", async function(e) {
    e.preventDefault();
    let city = input.value;
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${key}&unit=metrics`;
    let response = await axios.get(api).catch(err => {
      console.log(err);
    });
    console.log(response);
    /*
    for (i = 0; i < response.data.list.length; i += 8) {
      console.log(response.data.list[i]);
      week.push(response.data.list[i].main);
    }
    console.log(week);
    dayOne.push(week[0]);
    console.log(dayOne);
    */
  });
}

getWeather();

/* Exercise 3:

Write a JavaScript program to replace every 
character in a given string with the character following
it in the alphabet



// String.fromCharCode
// charCodeAt

const moveCharsForward = str =>
  str
    .split("")
    .map(char => String.fromCharCode(char.charCodeAt(0 + 1)))
    .join("");

console.log(moveCharsForward("abcd"));


// replace every character in string
var sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.replace());
// with character following it in the alphabet

*/
