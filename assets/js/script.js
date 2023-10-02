var forecastKey = "5b1f1d54d0c4fe12031b005974f333bd";
var requestUrl = "https://api.openweathermap.org/data/2.5/weather";
var dropdown = document.getElementById("dropdown");
var searchButton = document.getElementById("searchButton");
var currentForecastEl = document.getElementById("currentForecast");
var fiveDayEl = document.getElementById("fiveDay");
var cityInputEl = document.getElementById("cityInput");

function getCity(city) {
  var cityUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + forecastKey;
  fetch(cityUrl).then(function (response) {
    console.log(response);
    return response.json();
  })
    .then(function (data) {
      console.log(data)
      fiveDay(data[0].lat, data[0].lon)
      getCurrent(data[0].lat, data[0].lon)
    })
}

function fiveDay(lat, lon) {
  var cityUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=5b1f1d54d0c4fe12031b005974f333bd&units=imperial";
  fetch(cityUrl).then(function (response) {
    console.log(response);
    return response.json();
  })
    .then(function (data) {
      console.log(data)
      for (let i = 0; i < data.list.length; i += 8) {
        const day = data.list[i];
        var temp = document.createElement("p")
        var humidity = document.createElement("p")
        var windspeed = document.createElement("p")
        var icon = document.createElement("img")
        temp.textContent = day.main.temp
        humidity.textContent = day.main.humidity
        windspeed.textContent = day.wind.speed
        icon.setAttribute("src", "https://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png")
        fiveDayEl.append(icon, temp, humidity, windspeed)
      }
    })
}

function getCurrent(lat, lon) {
  var cityUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=5b1f1d54d0c4fe12031b005974f333bd&units=imperial";
  fetch(cityUrl).then(function (response) {
    console.log(response);
    return response.json();
  })
    .then(function (data) {
      console.log(data)
      var temp = document.createElement("p")
      var humidity = document.createElement("p")
      var windspeed = document.createElement("p")
      var icon = document.createElement("img")
      temp.textContent = data.main.temp
      humidity.textContent = data.main.humidity
      windspeed.textContent = data.wind.speed
      icon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")
      currentForecastEl.append(icon, temp, humidity, windspeed)
    })
}

searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  var cityInputEl = document.getElementById("cityInput");
  getCity(cityInputEl.value)
  localStorage.setItem ("cityInputEl") = 
  console.log (cityInputEl)
})

function previousCity(){
  var cityHistory = localStorage.getItem ("cityInputEl")
 }

//  saveButton.addEventListener("click", function(event) {
//   event.preventDefault();
  
  // var studentGrade = {
  //   student: student.value,
  //   grade: grade.value,
  //   comment: comment.value.trim()
  // };
  
  // localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
  // renderMessage();
  
//   });
