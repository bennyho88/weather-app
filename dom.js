const apiKey = "3c581e97bdd6665208a6ff2c1592317e";

const button = document.getElementById("searchBtn");
const input = document.getElementById("input");
const dayOutput = document.getElementsByTagName("h3");
const weatherIcon = document.getElementById("icon");

let descriptionOne = document.getElementById("w-description-1");
let descriptionTwo = document.getElementById("w-description-2");
let descriptionThree = document.getElementById("w-description-3");
let descriptionFour = document.getElementById("w-description-4");
let descriptionFive = document.getElementById("w-description-5");

let mainTempOne = document.getElementById("w-temp-1");
let mainTempTwo = document.getElementById("w-temp-2");
let mainTempThree = document.getElementById("w-temp-3");
let mainTempFour = document.getElementById("w-temp-4");
let mainTempFive = document.getElementById("w-temp-5");

let windOne = document.getElementById("w-wind-1");
let windTwo = document.getElementById("w-wind-2");
let windThree = document.getElementById("w-wind-3");
let windFour = document.getElementById("w-wind-4");
let windFive = document.getElementById("w-wind-5");

// Axios request

function getWeather() {
  button.addEventListener("click", async function(e) {
    e.preventDefault();
    let city = input.value;
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}&unit=metrics`;
    let response = await axios.get(api);

    descriptionOne.innerHTML = response.data.list[0].weather[0].main;
    descriptionTwo.innerHTML = response.data.list[8].weather[0].main;
    descriptionThree.innerHTML = response.data.list[16].weather[0].main;
    descriptionFour.innerHTML = response.data.list[24].weather[0].main;
    descriptionFive.innerHTML = response.data.list[32].weather[0].main;

    mainTempOne.innerHTML = response.data.list[0].main.temp + "°";
    mainTempTwo.innerHTML = response.data.list[8].main.temp + "°";
    mainTempThree.innerHTML = response.data.list[16].main.temp + "°";
    mainTempFour.innerHTML = response.data.list[24].main.temp + "°";
    mainTempFive.innerHTML = response.data.list[32].main.temp + "°";

    windOne.innerHTML = response.data.list[0].wind.deg;
    windTwo.innerHTML = response.data.list[8].wind.deg;
    windThree.innerHTML = response.data.list[16].wind.deg;
    windFour.innerHTML = response.data.list[24].wind.deg;
    windFive.innerHTML = response.data.list[32].wind.deg;

    console.log(response.data);

    function getIcon() {
      let iconPlace1 = document.getElementById("icon1");
      let iconPlace2 = document.getElementById("icon2");
      let iconPlace3 = document.getElementById("icon3");
      let iconPlace4 = document.getElementById("icon4");
      let iconPlace5 = document.getElementById("icon5");

      console.log(iconPlace1);
      console.log(iconPlace2);

      let icon1 = response.data.list[0].weather[0].icon;
      let icon2 = response.data.list[8].weather[0].icon;
      let icon3 = response.data.list[16].weather[0].icon;
      let icon4 = response.data.list[24].weather[0].icon;
      let icon5 = response.data.list[32].weather[0].icon;

      iconPlace1.src = "https://openweathermap.org/img/wn/" + icon1 + "@2x.png";
      iconPlace2.src = `https://openweathermap.org/img/wn/${icon2}@2x.png`;
      iconPlace3.src = `https://openweathermap.org/img/wn/${icon3}@2x.png`;
      iconPlace4.src = `https://openweathermap.org/img/wn/${icon4}@2x.png`;
      iconPlace5.src = `https://openweathermap.org/img/wn/${icon5}@2x.png`;
      console.log("icon change!!");
    }
    getIcon();
  });
}

getWeather();

// Displaying 5 consecutive days according to the current date

let newDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = newDate.getDay();

// console.log(day);

for (d = 0; d < dayOutput.length; d++, day++) {
  if (day >= 7) {
    day = 0;
  }
  dayOutput[d].innerHTML = days[day];
}
