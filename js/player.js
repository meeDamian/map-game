var P = window.game.player = {};

P.init = function() {
    // create player Marker
    game.player = new google.maps.Marker({
        position: B.options.center,
        map: B.map,
        icon: 'res/me.png',
        title: "That's You - hello!"
    });

    // create player inventory
    game.inventory = new google.maps.InfoWindow({
        content: (function() {
            return "666";
        })()
    });

    // open inventory onload
    game.inventory.open( B.map, game.player );

    // open inventory on each click
    google.maps.event.addListener( game.player, 'click', function(){
        game.inventory.open( B.map, game.player );
    })
}
