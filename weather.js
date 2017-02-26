$(document).ready(function () {
    $('#submit').click(function () {
        var city = $('#city').val();
        var key = "APPID=f21989bd78835a17e7bb52aae32725ab";
        if (city != '') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&" + key,
                type: "GET",
                dataTyple: "jsonp",
                success: function (data) {
                    console.log(data);
                    $('#result').html(display(data));
                    $('#city').val('');
                }
            });
        }
        else {
            alert("please enter location");
        }
    });
});

function display(data){

    return  "<h2>City: " + data.name + "</h2>" +
            "<h2>Tempurature: " + data.main.temp + " ˚F" + "</h2>" +
            "<h2>Humidity: " + data.main.humidity + " %" + "</h2>" +
            "<h2>Conditions: " + data.weather[0].description + "</h2>"
};