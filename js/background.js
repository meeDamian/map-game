var B = window.game.background = {};

B.options = {
    center: new google.maps.LatLng( 54.368559, 18.642743 ),
    zoom: 15,

    streetViewControl: false,

    mapTypeControl: true,
    mapTypeControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_CENTER
    },

    MapTypeId: google.maps.MapTypeId.HYBRID
}

B.init = function() {
    B.map = new google.maps.Map( document.getElementById('map_canvas'), B.options );
}

B.addPlayer = function() {

    // create player Marker
    window.game.player = new google.maps.Marker({
        position: B.options.center,
        map: B.map,
        icon: 'res/me.png',
        title: "That's You - hello!"
    });

    // create player inventory
    window.game.inventory = new google.maps.InfoWindow({
        content: (function() {
            return "666";
        })()
    });

    // open inventory onload
    window.game.inventory.open( B.map, window.game.player );

    // open inventory on each click
    google.maps.event.addListener( window.game.player, 'click', function(){
        window.game.inventory.open( B.map, window.game.player );
    })
}



