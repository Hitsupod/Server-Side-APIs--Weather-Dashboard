const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("windSpeed");
const temperatureEl = document.getElementById("temperature");
const locationEl = document.getElementById("location");
const searchbtn = document.getElementById('searchbtn');
var cities = [''];
const cityButton = document.getElementById('button-view');
var city = $("#searchInput").val();
var apikey = 'e664809273a9e730273447cbf35d1018';
var dailyURL = 'https://api.openweathermap.org/data/2.5/weather';
var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' ;


// Button Event

$("#searchbtn").on("click", function(event) {
    event.preventDefault();
    
// Using Ajax to call for current weather  
    $.ajax({
        url: dailyURL,
        dataType: 'json',
        method: "GET",
        data: {q:city, appid: apikey, units: 'metric'},
    })

    .then(function(data) {
        var tempData = '';
        var humdityData = '';
        var windSpeedData = '';
        var icon = '';
        $.each(data.weather, function(index, val) {
            tempData = data.main.temp;
            humdityData = data.main.humidity;
            windSpeedData = data.wind.speed;
            icon = "<img src =" + data.weather[0].icon + ".png>";  
        });
        $('#icon').html(icon);
        $('#temperature').html(tempData);
        $('#humidity').html(humdityData);
        $('#windSpeed').html(windSpeedData);
    })
// Using Ajax to call for forecast 
  /* $.ajax({
        url: forecastURL,
        dataType: 'json',
        method: "GET",
        data: {q:city, appid: apikey, units: 'metric'},
    })

// Potential For Loop 
    .then(function(response){
        // Day 1 Outputs 
        var day1 = response.list[3].sys.dt_txt;
        var temp1 = response.list[3].main.temp;
        var humdity1 = response.list[3].main.humdity;
        var windspeed1 = response.list[3].wind.speed;
        $('#forecastDay1').html(day1);
        $('#forecastTemperature1').html(temp1);
        $('#forecastHumidity1').html(humdity1);
        $('#forecastWindSpeed1').html(windspeed1);

        //Day 2 Outputs 
        var day2 = response.list[11].sys.dt_txt;
        var temp2 = response.list[11].main.temp;
        var humdity2 = response.list[11].main.humdity;
        var windspeed2 = response.list[11].wind.speed;
        $('#forecastDay2').html(day1);
        $('#forecastTemperature2').html(temp2);
        $('#forecastHumidity2').html(humdity2);
        $('#forecastWindSpeed2').html(windspeed2);

        // Day 3 Outputs
        var day3 = response.list[0].sys.dt_txt;
        var temp3 = response.list[0].main.temp;
        var humdity3 = response.list[0].main.humdity;
        var windspeed3 = response.list[0].wind.speed;
        $('#forecastDay3').html(day3);
        $('#forecastTemperature3').html(temp3);
        $('#forecastHumidity3').html(humdity3);
        $('#forecastWindSpeed3').html(windspeed3);

        // Day 4 Outputs
        var day4 = response.list[0].sys.dt_txt;
        var temp4 = response.list[0].main.temp;
        var humdity4 = response.list[0].main.humdity;
        var windspeed4 = response.list[0].wind.speed;
        $('#forecastDay4').html(day4);
        $('#forecastTemperature4').html(temp4);
        $('#forecastHumidity4').html(humdity4);
        $('#forecastWindSpeed4').html(windspeed4);

        // Day 5 Outputs
        var day5 = response.list[0].sys.dt_txt;
        var temp5 = response.list[0].main.temp;
        var humdity5 = response.list[0].main.humdity;
        var windspeed5 = response.list[0].wind.speed;
        $('#forecastDay5').html(day5);
        $('#forecastTemperature5').html(temp5);
        $('#forecastHumidity5').html(humdity5);
        $('#forecastWindSpeed5').html(windspeed5);

    }*/
});

// Testing Fetch 
/*fetch ('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=e664809273a9e730273447cbf35d1018&unit=metric')
    .then(response => response.json())
    .then(response => console.log(response))
});*/

// Display Previous Searches 
searchbtn.addEventListener('click', function () {
    var searchAnswer = $("#searchInput").val();
    // localStorage.setItem('history', searchAnswer);
    for (var i = 0; i < cities.length; i++) {
        var newCity = $("<button>");
        // Adding a class of movie to our button
        newCity.addClass("city");
        // Adding a data-attribute
        newCity.attr("data-name", cities[i]);
        // Providing the initial button text
        newCity.text(searchAnswer);
        // Adding the button to the HTML
        $("#buttons-view").append(newCity);
    };
    
    //document.querySelector('#location').innerHTML=searchAnswer;
    // $('div.searchResults').append(searchAnswer);
}, false);

// Previous Results Search 
/*cityButton.addEventListener('click', function(){
    event.preventDefault();
})*/


/*function weatherData() {
    let headers = new Headers
    return fetch({
        url: 'https://api.openweathermap.org/data/2.5/forecast',
        dataType:'json',
        method: 'GET',
        header: headers,
        data: {q:city, appid: key, units:'metric'},
    }).then(response => {
        return response.json();
    });
}*/
 


