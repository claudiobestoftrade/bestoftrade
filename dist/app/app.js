var app = {
    init: function(){
        bittrex.getbalances( function( data, err ) {
            console.log( data );
          });
    },

}