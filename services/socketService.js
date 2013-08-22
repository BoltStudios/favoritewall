

var Primus = require('primus');
var favoritesService = require('./favoritesService');

exports.load = function(server){
  var primus = new Primus(server, { transformer: 'sockjs' });
  
  primus.on('connection', function(spark){
    
    var hasBegun = false;
    spark.on('data', function(message){
      if(hasBegun || message.action != 'begin') 
        return;
        
      //only begin once
      hasBegun = true;
      console.log('spark began');
      
      //gather data from socket
      var credentials = message.data.credentials;
      
      //subscribe to any changes in favorited tweets
      var subscription = PubSub.subscribe(credentials.username+'-favorites-changed', function(msg, data){
        console.log('spark received favorites, writing them... ', data.length);
        spark.write({
          action: 'favorites',
          tweets: data
        });
      });
    
      //start monitoring twitter
      favoritesService.startMonitoring(credentials.username, credentials.token, credentials.tokenSecret);
    
      //cleanup when client disconnects
      spark.on('end', function(){
        console.log('spark end');
      
        //stop listening for changes
        PubSub.unsubscribe(subscription);
    
        //stop monitoring twitter
        favoritesService.stopMonitoring(credentials.username);
      });
    });
    
  });
};