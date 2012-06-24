window.error = {
    load: function( skippable ) {
        console.log("Nie udało się załadować niektórych skryptów");

        if(typeof skippable === "boolean" && !skippable) throw new Error("Error during loading of some required scripts");
    }
};

function constructGame() {

    game.options = {
        login: {
            showable:true,
            show:function( O ) {
                var $acc = $('#account'),
                    $tab = $('#tab'),
                    $con = $('#content');

                    var o = {};
                    if( O.horizontal==-1 ) o.left = 0;
                    else if( O.horizontal==0 ) o.left=(game.options.window.width-$con.width())/2+"px";
                    else if( O.horizontal==1 ) o.right = 0;

                    if( O.vertical==-1 ) o.top = 0;
                    else if( O.vertical==0 ) o.top =(game.options.window.height-$con.height())/2+"px";// TODO: check if all window fits in that case
                    else if( O.vertical==1 ) o.bottom = 0;

                    O = $.extend({ top:"", right: "", bottom:"", left: "" }, o);

                // TODO: animate tab to hide

                $tab.hide();



                $con.css('background','white');

                for(prep in O) $con.css(prep, O[prep]);
                

                // last line:
                $con.show();
            },
            hide:function() {

            }
        },
        window: {
            width:0,
            height:0,
            refresh:function() {
                this.height = window.innerHeight;
                this.width = window.innerWidth;
            }
        }
    };

    game.options.window.refresh();
    window.onresize = function( event ) { game.options.window.refresh(); };

    window.addEventListener("mouseout", function( e ){

        if( !game.options.login.showable ) return false;

        var w3 = game.options.window.width,
            w1 = w3 / 3,
            w2 = w1 * 2,

            h3 = game.options.window.height,
            h1 = h3 / 3,
            h2 = h1 * 2;

        if( e.x<=0 || e.x>=w3 || e.y<=0 || e.y>=h3 ) {

            var O = { vertical:0, horizontal:0 };
            if( e.x<w1 ) O.horizontal = -1;
            else if( e.x>w2 ) O.horizontal = 1;

            if( e.y<h1 ) O.vertical = -1;
            else if(e.y>h2 ) O.vertical = 1;

            game.options.login.show( O );
        }



    }, false);
    
}

(function(){

    if(typeof window.game==="undefined") var G = window.game = {};

    // 0. Set GAME
    constructGame();

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

    // 2. Load PLAYER(s) (and inventory) js
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
