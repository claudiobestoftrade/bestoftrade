var fs = require('fs')



var app = {
    init: function () {
        fs.readFile('../keys.json', 'utf8', function (err, contents) {            
            var res = JSON.parse(contents)
            var bittrex = require('node-bittrex-api')

            bittrex.options({
                'apikey': res.APIKEY,
                'apisecret': res.APISECRET

            });
            bittrex.getbalances(function (data, err) {
                console.log(data)
                $.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/', function(bit_usd){
                    var bit_val = bit_usd[0].price_usd                    
                    var criptos = data.result;
                    criptos.forEach(element => {
                        
                        if (element.Currency == "BTC") {
                            var usd_total = bit_val / 0.00000001 * element.Available
                            var usd_reduced = usd_total.toString().substring(0,6)
                            var usd_mill = usd_reduced.substring(0,4)
                            var usd_cent = usd_reduced.substring(4,6)                            
                            $('.projection').append(`
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="panel panel-primary bitcoin">
                                            <div class="panel-body">
                                                <div class="col-sm-2">
                                                    <img src="dist/app/img/bitcoin.png" class="img-fluid" alt="Responsive image" style="heigth: 30px; width: 30px;">
                                                </div>
                                                <div class="col-sm-10">
                                                BTC Total: ${element.Available} <br>
                                                USD Total: ${usd_mill +','+usd_cent}
                                                </div>
                                                    
                                                
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                                

<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
               

                               <div class="row">
                                    <div class="col-sm-12">
                                        <div class="panel panel-primary bitcoin">
                                            <div class="panel-body">
                                                <div class="col-sm-2">
                                                    <img src="dist/app/img/bitcoin.png" class="img-fluid" alt="Responsive image" style="heigth: 30px; width: 30px;">
                                                </div>
                                                <div class="col-sm-10">
                                                    <div class="row">
                                                    BTC Total: ${element.Available} <br>
                                                    USD Total: ${usd_mill +','+usd_cent}
                                                    <div class="btn-toolbar pull-right">
                                                    <input class="toggle-one" type="checkbox" checked data-toggle="toggle">
                                                    </div>
                                                    
                                                    </div>
                                                
                                                </div>
                                                    
                                                
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                                <div class="row">
                                <div class="col-sm-12">
                                    <div class="panel panel-primary bitcoin">
                                        <div class="panel-body">
                                            <div class="col-sm-2">
                                                <img src="dist/app/img/bitcoin.png" class="img-fluid" alt="Responsive image" style="heigth: 30px; width: 30px;">
                                            </div>
                                            <div class="col-sm-10">
                                                <div class="row">
                                                BTC Total: ${element.Available} <br>
                                                USD Total: ${usd_mill +','+usd_cent}
                                                <div class="btn-toolbar pull-right">
                                                <input class="toggle-one" type="checkbox" checked data-toggle="toggle">
                                                </div>
                                                
                                                </div>
                                            
                                            </div>
                                                
                                            
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                            <div class="row">
                            <div class="col-sm-12">
                                <div class="panel panel-primary bitcoin">
                                    <div class="panel-body">
                                        <div class="col-sm-2">
                                            <img src="dist/app/img/bitcoin.png" class="img-fluid" alt="Responsive image" style="heigth: 30px; width: 30px;">
                                        </div>
                                        <div class="col-sm-10">
                                            <div class="row">
                                            BTC Total: ${element.Available} <br>
                                            USD Total: ${usd_mill +','+usd_cent}
                                            <div class="btn-toolbar pull-right">
                                            <input class="toggle-one" type="checkbox" checked data-toggle="toggle">
                                            </div>
                                            
                                            </div>
                                        
                                        </div>
                                            
                                        
                                    </div>
                                </div>
                            </div>                                
                        </div>
                        <div class="row">
                        <div class="col-sm-12">
                            <div class="panel panel-primary bitcoin">
                                <div class="panel-body">
                                    <div class="col-sm-2">
                                        <img src="dist/app/img/bitcoin.png" class="img-fluid" alt="Responsive image" style="heigth: 30px; width: 30px;">
                                    </div>
                                    <div class="col-sm-10">
                                        <div class="row">
                                        BTC Total: ${element.Available} <br>
                                        USD Total: ${usd_mill +','+usd_cent}
                                        <div class="btn-toolbar pull-right">
                                        <input class="toggle-one" type="checkbox" checked data-toggle="toggle">
                                        </div>
                                        
                                        </div>
                                    
                                    </div>
                                        
                                    
                                </div>
                            </div>
                        </div>                                
                    </div>
                    <div class="row">
                    <div class="col-sm-12">
                        <div class="panel panel-primary bitcoin">
                            <div class="panel-body">
                                <div class="col-sm-2">
                                    <img src="dist/app/img/bitcoin.png" class="img-fluid" alt="Responsive image" style="heigth: 30px; width: 30px;">
                                </div>
                                <div class="col-sm-10">
                                    <div class="row">
                                    BTC Total: ${element.Available} <br>
                                    USD Total: ${usd_mill +','+usd_cent}
                                    <div class="btn-toolbar pull-right">
                                    <input class="toggle-one" type="checkbox" checked data-toggle="toggle">
                                    </div>
                                    
                                    </div>
                                
                                </div>
                                    
                                
                            </div>
                        </div>
                    </div>                                
                </div>
                <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-primary bitcoin">
                        <div class="panel-body">
                            <div class="col-sm-2">
                                <img src="dist/app/img/bitcoin.png" class="img-fluid" alt="Responsive image" style="heigth: 30px; width: 30px;">
                            </div>
                            <div class="col-sm-10">
                                <div class="row">
                                BTC Total: ${element.Available} <br>
                                USD Total: ${usd_mill +','+usd_cent}
                                <div class="btn-toolbar pull-right">
                                <input class="toggle-one" type="checkbox" checked data-toggle="toggle">
                                </div>
                                
                                </div>
                            
                            </div>
                                
                            
                        </div>
                    </div>
                </div>                                
            </div>
            <div class="row">
            <div class="col-sm-12">
                <div class="panel panel-primary bitcoin">
                    <div class="panel-body">
                        <div class="col-sm-2">
                            <img src="dist/app/img/bitcoin.png" class="img-fluid" alt="Responsive image" style="heigth: 30px; width: 30px;">
                        </div>
                        <div class="col-sm-10">
                            <div class="row">
                            BTC Total: ${element.Available} <br>
                            USD Total: ${usd_mill +','+usd_cent}
                            <div class="btn-toolbar pull-right">
                            <input class="toggle-one" type="checkbox" checked data-toggle="toggle">
                            </div>
                            
                            </div>
                        
                        </div>
                            
                        
                    </div>
                </div>
            </div>                                
        </div>
        <div class="row">
        <div class="col-sm-12">
            <div class="panel panel-primary bitcoin">
                <div class="panel-body">
                    <div class="col-sm-2">
                        <img src="dist/app/img/bitcoin.png" class="img-fluid" alt="Responsive image" style="heigth: 30px; width: 30px;">
                    </div>
                    <div class="col-sm-10">
                        <div class="row">
                        BTC Total: ${element.Available} <br>
                        USD Total: ${usd_mill +','+usd_cent}
                        <div class="btn-toolbar pull-right">
                        <input class="toggle-one" type="checkbox" checked data-toggle="toggle">
                        </div>
                        
                        </div>
                    
                    </div>
                        
                    
                </div>
            </div>
        </div>                                
    </div>
    <div class="row">
    <div class="col-sm-12">
        <div class="panel panel-primary bitcoin">
            <div class="panel-body">
                <div class="col-sm-2">
                    <img src="dist/app/img/bitcoin.png" class="img-fluid" alt="Responsive image" style="heigth: 30px; width: 30px;">
                </div>
                <div class="col-sm-10">
                    <div class="row">
                    BTC Total: ${element.Available} <br>
                    USD Total: ${usd_mill +','+usd_cent}
                    <div class="btn-toolbar pull-right">
                    <input class="toggle-one" type="checkbox" checked data-toggle="toggle">
                    </div>
                    
                    </div>
                
                </div>
                    
                
            </div>
        </div>
    </div>                                
</div>




      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                            `)
                            $('.toggle-one').bootstrapToggle();
                            $('.bitcoin').click(function(){
                                $('#exampleModalLong').modal('show')
                            })
                        }
                    });
                })
                
            });
        });

    },

}