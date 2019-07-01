/*
const key = "3c581e97bdd6665208a6ff2c1592317e";

// You can also use ID
const button = document.getElementById("button");
const input = document.getElementById("input-text");
console.log(button, input);

// Axios is a tool that fetches the API
/*
input.addEventListener("keypress", getValueOfInput);
// Scope and closure: you cant have acces to a var outside of this
function getValueOfInput(event) {
  console.log(event.target);
}
*/

//Await till you get response of API, then...
//City value has to be in the function!

const key = "3c581e97bdd6665208a6ff2c1592317e";
// You can also use ID
const button = document.getElementsByTagName("button");
const input = document.getElementById("input-text");

/*Axios is a tool that fetches the API */

input.addEventListener("keypress", getValueOfInput);

/*Scope and closure: you cant have acces to a var outside of this */
function getValueOfInput(e) {
  console.log(e.target.value);
}

function getWeather() {
  button.addEventListener("click", async function() {
    let city = input.value;
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&&APPID=${key}`;
    let response = await axios.get(api);
    //displayWeather(response);
    console.log(response.data);
  });
}

/*
function displayWeather(){
getElementById("description").value
}
*/
