/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            //disable scrolling b/c full width
            scrollwheel: false,
            draggable: false,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(37.444445,-122.275243), // Runnymede

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
              {
                "featureType":"landscape",
                "stylers":[
                  {"hue":"#FFBB00"},
                  {"saturation":43.400000000000006},
                  {"lightness":37.599999999999994},
                  {"gamma":1}
                ]
              },
              {
                "featureType":"road.highway",
                "stylers":[
                  {"hue":"#FFC200"},
                  {"saturation":-61.8},
                  {"lightness":45.599999999999994},
                  {"gamma":1}
                ]
              },
              {
                "featureType":"road.arterial",
                "stylers":[
                  {"hue":"#FF0300"},
                  {"saturation":-100},
                  {"lightness":51.19999999999999},
                  {"gamma":1}
                ]
              },
              {
                "featureType":"road.local",
                "stylers":[
                  {"hue":"#FF0300"},
                  {"saturation":-100},
                  {"lightness":52},
                  {"gamma":1}
                ]
              },
              {
                "featureType":"water",
                "stylers":[
                  {"hue":"#0078FF"},
                  {"saturation":-13.200000000000003},
                  {"lightness":2.4000000000000057},
                  {"gamma":1}
                ]
              },
              {
                "featureType":"poi",
                "stylers":[
                  {"hue":"#00FF6A"},
                  {"saturation":-1.0989010989011234},
                  {"lightness":11.200000000000017},
                  {"gamma":1}
                ]
              }
            ]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: mapOptions.center,
            map: map,
            title: 'Runnymede!',
            url: "https://www.google.com/maps/place/37%C2%B026'39.9%22N+122%C2%B016'41.8%22W/@37.4444149,-122.2957874,14z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d37.4444101!4d-122.2782771"
        });
        google.maps.event.addListener(marker, 'click', function() {
            window.location.href = this.url;
        });

    }

    //countdown
    $('.countdown').downCount({
        date: '10/01/2016 16:00:00',
        offset: -5
    });

    var picML = '';
    var goodPicNums = [6,2,5,4,8,12,1,10,3];//this lets us pic the good images
    $.each(goodPicNums, function(index, number) {
      picML += '<div class="col-lg-4 col-sm-6"><img src="img/portfolio/'+number+'.png" class="img-responsive" alt="Sam Havens and Marcelle Justison - wedding 10/01/2016 in Woodside, CA."></div>'
    });

    $('#pics-go-here').html(picML);

})(jQuery); // End of use strict
