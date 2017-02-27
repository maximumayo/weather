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
                    var tempRound = Math.round(data.main.temp);
                    console.log(data);
                    //format data to be displayed
                    function display(data) {
                        return "<h2>City: " + "<span style='color:blue;'>" + data.name + "</span>" + "</h2>" +
                            "<h2>Tempurature: " + "<span style='color:blue;'>" + tempRound + "˚F" + "</span>" + "</h2>" +
                            "<h2>Humidity: " + "<span style='color:blue;'>" + data.main.humidity + "%" + "</span>" + "</h2>" +
                            "<h2>Conditions: " + "<span style='color:blue;'>" + data.weather[0].description + "</span>" + "</h2>"
                    }
                    $('#result').html(display(data));
                    //clear input field
                    $('#city').val('');
                }
            });
        }
        else {
            alert("please enter a location");
        }
    });

    $('#city').keypress(function (key) {
        if (key.which == 13) {
            var city = $('#city').val();
            var key = "APPID=f21989bd78835a17e7bb52aae32725ab";
            if (city != '') {
                $.ajax({
                    url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&" + key,
                    type: "GET",
                    dataTyple: "jsonp",
                    success: function (data) {
                        var tempRound = Math.round(data.main.temp);
                        console.log(data);

                        function display(data) {
                            return "<h2>City: " + "<span style='color:blue;'>" + data.name + "</span>" + "</h2>" +
                                "<h2>Tempurature: " + "<span style='color:blue;'>" + tempRound + "˚F" + "</span>" + "</h2>" +
                                "<h2>Humidity: " + "<span style='color:blue;'>" + data.main.humidity + "%" + "</span>" + "</h2>" +
                                "<h2>Conditions: " + "<span style='color:blue;'>" + data.weather[0].description + "</span>" + "</h2>"
                        }
                        $('#result').html(display(data));
                        //clear input field
                        $('#city').val('');
                    }
                });
            }
            else {
                alert("please enter a location");
            }
        }
    });

});
