var B = window.game.background = {};

B.init = function() {

    B._show( 54.368559, 18.642743 ); // default location

    if( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition(function(position) {
            B._update( position.coords.latitude, position.coords.longitude );
        });
    } 
};

B._show = function( lat, lng ) {

    game.options.center = {
        lat: lat,
        lng: lng
    }

    B.options = {
        center: new google.maps.LatLng( game.options.center.lat, game.options.center.lng ),
        zoom: 15,

        streetViewControl: false,

        mapTypeControl: true,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },

        MapTypeId: google.maps.MapTypeId.HYBRID
    }

    B.map = new google.maps.Map( document.getElementById('map_canvas'), B.options );
};

B._update = function( lan, lng ) {
    B.map.setCenter( new google.maps.LatLng( lan, lng ) );
};




