window.error = {
    load: function( skippable ) {
        console.log("Nie udało się załadować niektórych skryptów");

        if(typeof skippable === "boolean" && !skippable) throw new Error("Error during loading of some required scripts");
    }
};

(function(){

    if(typeof window.game==="undefined") var G = window.game = {};

    // 0. Set GAME
    G.options = {};

    // 1. load BACKGROUND js
    var tmp = document.createElement('script');
    tmp.async = true;
    tmp.setAttribute('src','js/background.js');
    tmp.onerror = window.error.load;
    tmp.onload = function(){ 
        G.background.init(); 
    };
    document.getElementsByTagName('head')[0].appendChild( tmp );
    delete tmp;

    // 2. Load PLAYER js
    var tmp = document.createElement('script');
    tmp.async = true;
    tmp.setAttribute('src','js/player.js');
    tmp.onerror = window.error.load;
    tmp.onload = function(){ 
        G.player.init(); 
    };
    document.getElementsByTagName('head')[0].appendChild( tmp );
    delete tmp;


})();
