function showGoogleMaps() {

    // Style forked from http://snazzymaps.com/style/99/old-map
    var styles = [{
        "featureType": "administrative",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "water",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "transit",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "landscape",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.highway",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.local",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "water",
        "stylers": [{
            "color": "#abbaa4"
        }]
    }, {
        "featureType": "road.highway",
        "stylers": [{
            "color": "#ad9b8d"
        }]
    }];

    var latLng = new google.maps.LatLng(44.9822331, -93.2619393);

    var mapOptions = {
        zoom: 13, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: false, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng,
        disableDefaultUI: true,
        styles: styles
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);