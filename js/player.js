var P = window.game.player = {};

P.players = {};

P.init = function() {
    // create player Marker
    P.create();

}

P.create = function() {

    P.players.me  = new google.maps.Marker({
        position: game.background.options.center,
        map: game.background.map,
        icon:'res/me.png',
        title:"That little fella is you - Hello!"
    });

}

P.move = function(){

}


