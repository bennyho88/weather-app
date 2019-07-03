const apiKey = "3c581e97bdd6665208a6ff2c1592317e";

const button = document.getElementById("searchBtn");
const input = document.getElementById("input");

let descriptionOne = document.getElementById("w-description-1");
let descriptionTwo = document.getElementById("w-description-2");
let descriptionThree = document.getElementById("w-description-3");
let descriptionFour = document.getElementById("w-description-4");
let descriptionFive = document.getElementById("w-description-5");
let descriptionSix = document.getElementById("w-description-6");

let mainTempOne = document.getElementById("w-temp-1");
console.log(mainTempOne);
let mainTempTwo = document.getElementById("w-temp-2");
console.log(mainTempTwo);
let mainTempThree = document.getElementById("w-temp-3");
console.log(mainTempThree);
let mainTempFour = document.getElementById("w-temp-4");
let mainTempFive = document.getElementById("w-temp-5");
let mainTempSix = document.getElementById("w-temp-6");

let windOne = document.getElementById("w-wind-1");
let windTwo = document.getElementById("w-wind-2");
let windThree = document.getElementById("w-wind-3");
let windFour = document.getElementById("w-wind-4");
let windFive = document.getElementById("w-wind-5");
let windSix = document.getElementById("w-wind-6");

// Axios request

function getWeather() {
  button.addEventListener("click", async function(e) {
    e.preventDefault();
    let city = input.value;
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}&unit=metrics`;
    let response = await axios.get(api);

    var descriptionDataOne = response.data.list[0].weather[0].main;
    var descriptionDataTwo = response.data.list[8].weather[0].main;
    var descriptionDataThree = response.data.list[16].weather[0].main;
    var descriptionDataFour = response.data.list[24].weather[0].main;
    var descriptionDataFive = response.data.list[32].weather[0].main;
    var descriptionDataSix = response.data.list[0].weather[0].main;

    var temperatureDataOne = response.data.list[0].main.temp;
    var temperatureDataTwo = response.data.list[8].main.temp;
    var temperatureDataThree = response.data.list[16].main.temp;
    var temperatureDataFour = response.data.list[24].main.temp;
    var temperatureDataFive = response.data.list[32].main.temp;
    var temperatureDataSix = response.data.list[0].main.temp;

    var windDataOne = response.data.list[0].wind.deg;
    var windDataTwo = response.data.list[8].wind.deg;
    var windDataThree = response.data.list[16].wind.deg;
    var windDataFour = response.data.list[24].wind.deg;
    var windDataFive = response.data.list[32].wind.deg;
    var windDataSix = response.data.list[0].wind.deg;

    console.log(response.data);

    descriptionOne.innerHTML = descriptionDataOne;
    descriptionTwo.innerHTML = descriptionDataTwo;
    descriptionThree.innerHTML = descriptionDataThree;
    descriptionFour.innerHTML = descriptionDataFour;
    descriptionFive.innerHTML = descriptionDataFive;
    descriptionSix.innerHTML = descriptionDataSix;

    mainTempOne.innerHTML = temperatureDataOne;
    mainTempTwo.innerHTML = temperatureDataTwo;
    mainTempThree.innerHTML = temperatureDataThree;
    mainTempFour.innerHTML = temperatureDataFour;
    mainTempFive.innerHTML = temperatureDataFive;
    mainTempSix.innerHTML = temperatureDataSix;

    windOne.innerHTML = windDataOne;
    windTwo.innerHTML = windDataTwo;
    windThree.innerHTML = windDataThree;
    windFour.innerHTML = windDataFour;
    windFive.innerHTML = windDataFive;
    windSix.innerHTML = windDataSix;
  });
}

getWeather();
