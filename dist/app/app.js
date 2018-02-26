var app = {
    init: function () {
        var bittrex = require('node-bittrex-api')
        
        bittrex.options({
            'apikey': APIKEY,
            'apisecret': APISECRET
            
        });
        bittrex.getbalances(function (data, err) {
            var criptos = data.result;
            criptos.forEach(element => {
                console.log(element)
                if (element.Currency == "BTC") {
                    $('.projection').append(`
                            <div class="row">
                                    <div class="col-sm-4">
                                            <div class="panel panel-primary">
                                                    <div class="panel-body">
                                                            <img src="dist/app/img/bitcoin.png" class="img-fluid" alt="Responsive image" style="heigth: 30px; width: 30px;">
                                                        Bitcoin Total: ${element.Available}
                                                    </div>
                                                </div>
                                    </div>
                                
                            </div>

    `)
                }
            });
        });
    },

}