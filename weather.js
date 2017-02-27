$(document).ready(function () {
    //when get weather btn is clicked
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
                        return "<h2>City: " + "<span class='info'>" + data.name + "</span>" + "</h2>" +
                            "<h2>Tempurature: " + "<span class='info'>" + tempRound + "˚F" + "</span>" + "</h2>" +
                            "<h2>Humidity: " + "<span class='info'>" + data.main.humidity + "%" + "</span>" + "</h2>" +
                            "<h2>Conditions: " + "<span class='info'>" + data.weather[0].description + "</span>" + "</h2>"
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
    //when enter key is pressed
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
                            return "<h2>City: " + "<span class='info'>" + data.name + "</span>" + "</h2>" +
                                "<h2>Tempurature: " + "<span class='info'>" + tempRound + "˚F" + "</span>" + "</h2>" +
                                "<h2>Humidity: " + "<span class='info'>" + data.main.humidity + "%" + "</span>" + "</h2>" +
                                "<h2>Conditions: " + "<span class='info'>" + data.weather[0].description + "</span>" + "</h2>"
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