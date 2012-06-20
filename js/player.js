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

    P.inventory.show();

}

P.move = function(){

    // TODO: background variable used temporarly
    P.players.me.setPosition( game.background.options.center );
}

P.inventory = {
    getContent: function(){
        // Loadz of magic gonna happen hier
        return "Oto Twój inwentarz!";
    },
    init: function() {
        window.I = P.inventory;

        I.inventory = new google.maps.InfoWindow({
            content: game.player.inventory.getContent()
        });

        google.maps.event.addListener( game.player.players.me, 'click', I.show );

    },
    show: function(){
        if(typeof I==="undefined") this.init();            
         
        I.inventory.open( game.background.map, game.player.players.me );
    }    
}


