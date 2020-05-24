const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("windSpeed");
const temperatureEl = document.getElementById("temperature");
const locationEl = document.getElementById("location");
const searchbtn = document.getElementById('searchbtn');


// Display Previous Searches 
searchbtn.addEventListener('click', function () {
    var searchAnswer = $("#searchInput").val();
    localStorage.setItem('history', searchAnswer);
    document.querySelector('#location').innerHTML=searchAnswer;
    $('div.searchResults').append(searchAnswer);
}, false);


// Location 
/*currentPosition(setPosition);
setPosition(position)
    position.coords.latitude
    position.coords.longitude 
*/
// Ajax Call
$("#searchbtn").on("click", function(event) {
    event.preventDefault();

// Here we grab the text from the input box
    var city = $("#searchInput").val();
    var key = 'e664809273a9e730273447cbf35d1018';

// Using Ajax to call
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        dataType: 'json',
        method: "GET",
        data: {q:city, appid: key, units: 'metric'},
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
        })
        $('#temperature').html(tempData);
        $('#humidity').html(humdityData);
        $('#windSpeed').html(windSpeedData);
        $('#icon').html(icon);
        
    });
});


