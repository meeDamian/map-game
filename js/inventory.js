var I = window.game.inventory = {};

I.init = function() {

    I.inventory = new google.maps.InfoWindow({
        content: I.getContent()
    });

    //I.show();

    google.maps.event.addListener( game.player.players.me, 'click', I.show );

};

I.show = function(){
    I.inventory.open( game.background.map, game.player.players.me );
};

I.getContent = function(){
    // Loadz of magic gonna happen hier
    return "Oto Twój inwentarz!";
}
