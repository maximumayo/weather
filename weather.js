$(document).ready(function () {
    $('#submit').click(function () {
        var city = $('#city').val();
        var key = "APPID=f21989bd78835a17e7bb52aae32725ab";
        //make sure field it not empty
        if (city != '') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&" + key,
                type: "GET",
                dataTyple: "jsonp",
                success: function (data) {
                    var tempRound = Math.round(data.main.temp);
                    //format data to be displayed
                    function display(data) {
                        return "<h2>City: " + "<span style='color:cornflowerblue;'>" + data.name + "</span>" + "</h2>" +
                            "<h2>Tempurature: " + "<span style='color:cornflowerblue;'>" + tempRound + "˚F" + "</span>" + "</h2>" +
                            "<h2>Humidity: " + "<span style='color:cornflowerblue;'>" + data.main.humidity + "%" + "</span>" + "</h2>" +
                            "<h2>Conditions: " + "<span style='color:cornflowerblue;'>" + data.weather[0].description + "</span>" + "</h2>"
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
            //make sure field it not empty
            if (city != '') {
                $.ajax({
                    url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&" + key,
                    type: "GET",
                    dataTyple: "jsonp",
                    success: function (data) {
                        var tempRound = Math.round(data.main.temp);
                        //format data to be displayed
                        function display(data) {
                            return "<h2>City: " + "<span style='color:cornflowerblue;'>" + data.name + "</span>" + "</h2>" +
                                "<h2>Tempurature: " + "<span style='color:cornflowerblue;'>" + tempRound + "˚F" + "</span>" + "</h2>" +
                                "<h2>Humidity: " + "<span style='color:cornflowerblue;'>" + data.main.humidity + "%" + "</span>" + "</h2>" +
                                "<h2>Conditions: " + "<span style='color:cornflowerblue;'>" + data.weather[0].description + "</span>" + "</h2>"
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
