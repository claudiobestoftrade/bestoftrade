var bittrex = require('node-bittrex-api')
const APISECRET = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
   const APIKEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
 
   bittrex.options({ 
     'apikey' : APIKEY, 
     'apisecret' : APISECRET, 
     'stream' : false, 
     'verbose' : false, 
     'cleartext' : false 
   });
 
   bittrex.getbalances( function( data, err ) {
     console.log( data );
   });