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
                }
            });
        }
        else {
            alert("please enter location");
        }
    });
});