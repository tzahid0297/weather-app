// let celTemperature = document.querySelector("#celsius-link");
// let farTemperature = document.querySelector("#fahrenheit-link");

// if (celTemperature > 10 && farTemperature > 50) {
//   Math.ceil()

function formatDate(timestamp) {
  let date = new Date(timestamp);

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let currentDate = timestamp.getDate();
  let currentDay = days[timestamp.getDay()];
  let currentMonth = months[timestamp.getMonth()];
  // let currentHour = timestamp.getHours();
  let currentYear = timestamp.getFullYear();
  let currentMinutes = timestamp.getMinutes();
  let formattedDate = `${currentDay}, ${currentDate} ${currentMonth} ${currentYear} - ${formatHours(timestamp)}`;
  return formattedDate;
}

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

// let date = new Date();
// let todayDate = document.querySelector("#date-time");
// todayDate.innerHTML = formatDate(date);


// function search(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#search-text-input");

//   let h1 = document.querySelector("h1");
//   if (searchInput.value) {
//     h1.innerHTML = `${searchInput.value}`;
//   } else {
//     h1.innerHMTL = null;
//     alert("Enter a city please, unless you're an alien!");
//   }
// }

// let form = document.querySelector("#search-form");
// form.addEventListener("submit", search);

// function showTemperature(response) {
//   let temperature = Math.round(response.data.main.temp);
//   let city = response.data.name;
//   let tempElement = document.querySelector("#temp");
//   let tempDescription = document.querySelector("#temp-description");
//   tempElement.innerHTML = `${temperature}`;
//   tempDescription.innerHTML = response.data.weather[0].description;
// }

// function currentLocation(position) {
//  let apiKey = "7d58ce6949384336473200edea8ebd96";
//  let units = "metric";
//  let city = "Lausanne"; 
//  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

//  axios.get(apiUrl).then(showTemperature);

// }

// function getCurrentPosition() {
//  navigator.getlocation.getCurrentPosition(currentLocation);
// }

// let button = document.querySelector("#current-location");
// button.addEventListener("click", currentLocation);

let date = new Date();
let todayDate = document.querySelector("#date-time");
todayDate.innerHTML = formatDate(date);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
    searchCity(searchInput.value);
  } else {
    alert("Enter a city please, unless you're an alien!");
  }
}
function searchCity(city) {
  let apiKey = "7d58ce6949384336473200edea8ebd96";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
  console.log(response.data);
  // let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let h1 = document.querySelector("h1");
  let tempElement = document.querySelector("#temp");
  let tempDescription = document.querySelector("#temp-description")
  let iconImage = document.querySelector("#icon");

  celTemp = response.data.main.temp;

  h1.innerHTML = city;
  tempElement.innerHTML = Math.round(celTemp);
  tempDescription.innerHTML = response.data.weather[0].description;
  iconImage.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconImage.setAttribute("alt", response.data.weather[0].icon); 
}

function currentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "7d58ce6949384336473200edea8ebd96";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=q=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.getlocation.getCurrentPosition(currentLocation);
}
let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);

// function celTemp(event) {
//   event.preventDefault();
//   let celTempInput = document.querySelector("#cel-link");
//   celTempInput.innerHTML = 18;
// }

function fahTemp(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temp");
  let fahrenheitTemp = (celTemp * 1.8) + 32;
  tempElement.innerHTML = Math.ceil(fahrenheitTemp); 
}

// function celTemp(event) {
//   event.preventDefault();
//   let tempElement = document.querySelector("#temp");
//   tempElement.innerHTML = Math.round(response.data.main.temp); 
// }

let celTemp = null;

let fahTempInput = document.querySelector("#fah-link");
fahTempInput.addEventListener("click", fahTemp);

// let celTempInput = document.querySelector("#cel-link");
// celTempInput.addEventListener("click", celTemp);