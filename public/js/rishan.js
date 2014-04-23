jQuery(document).ready(function ($) {
    $.ajax({
        url: 'http://ipinfo.io/json?callback=?',
        dataType: 'json',
        type: 'GET',
        crossDomain: true,
        success: function (data) {

            console.log("Location: ");
            if (data.country != "U.S.") {
                addListeners();
            }
            //                    console.log(data);
            //                    $('#data-country').text("Country: " + data.country);
            //                    $('#data-city').text("City: " + data.city);
            //                    $('#data-region').text("Region: " + data.region);
            //                    $('#data-zip').text("Network: " + data.org);
            //                    
            //                    $("#data-device")
            //                        .text("Device: " + navigator.userAgent.toLowerCase());
        }

    });

    function addListeners() {
        $('.clk').click(function (e) {
            var href = $(this).attr('href');
            console.log(href);
            console.log(href == 'http://www.stanford.edu');
            if (href == 'http://www.stanford.edu') {
                console.log("stanford");
                e.preventDefault();
                window.location.href = 'http://www.yale.edu';
            } else if (href == 'http://www.google.com') {
                e.preventDefault();
                window.location.href = 'http://www.yahoo.com';
            } else if (href == 'http://en.wikipedia.org/wiki/Larry_Page'){
                e.preventDefault();
                window.location.href =
                    'http://en.wikipedia.org/wiki/Sergey_Brin';
            } else if (href == 'http://en.wikipedia.org/wiki/Sergey_Brin')
            {
                e.preventDefault();
                window.location.href =
                    'http://en.wikipedia.org/wiki/Larry_Page';   
            }
        }); // .click
    } // addListeners ()
});