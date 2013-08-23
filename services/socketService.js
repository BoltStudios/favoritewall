

var Primus = require('primus');
var favoritesMonitor = require('./favoritesMonitor');

exports.load = function(server){
  var primus = new Primus(server, { transformer: 'sockjs' });
  
  primus.on('connection', function(spark){
    
    var hasBegun = false;
    spark.on('data', function(message){
      if(hasBegun || message.action != 'begin') 
        return;
        
      //only begin once
      hasBegun = true;
      
      //gather data from socket
      var credentials = message.data.credentials;
      
      //subscribe to any changes in favorited/unfavorited tweets
      var subscriptions = [
        PubSub.subscribe('new-favorite-'+credentials.username, function(msg, tweet){
          spark.write({
            action: 'new-favorite-tweet',
            tweet: tweet
          });
        }),
        PubSub.subscribe('new-unfavorite-'+credentials.username, function(msg, tweet){
          spark.write({
            action: 'new-unfavorite-tweet',
            tweet: tweet
          });
        })
      ];
    
      //start monitoring twitter
      favoritesMonitor.start(credentials.username, credentials.token, credentials.tokenSecret);
    
      //cleanup when client disconnects
      spark.on('end', function(){
        
        //stop listening for changes
        for(var i=0; i<subscriptions.length; i++)
          PubSub.unsubscribe(subscriptions[i]);
    
        //stop monitoring twitter
        favoritesMonitor.stop(credentials.username);
      });
    });
    
  });
};