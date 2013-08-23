var ntwitter = require('ntwitter');

var monitors = {};

var favoritesMonitor = module.exports = {
  
  start: function(username, token, secret){
    favoritesMonitor.stop(username);
    
    var monitor = {
      twitter: new ntwitter({ consumer_key: GLOBAL.consumerKey, consumer_secret: GLOBAL.consumerSecret, access_token_key: token, access_token_secret: secret })
    };
    monitors[username] = monitor;
    
    
    monitor.twitter.stream('user', function(stream){
      monitor.stream = stream;
      
      stream.on('data', function (data) {
        
        //only care about things WE favorited (not my tweet that someone else favorited)
        if(!data || !data.source || data.source.screen_name != username)
          return;
          
        //favorite?
        if(data.event == 'favorite'){
          //publish favorite event 
          var tweet = data.target_object;
          PubSub.publish('new-favorite-'+username, tweet);
        }
        
        //unfavorite?
        if(data.event == 'unfavorite'){
          //publish favorite event 
          var tweet = data.target_object;
          PubSub.publish('new-unfavorite-'+username, tweet);
        }
        
      });
      // stream.on('end', function (response) {
      //   console.log('end', response);
      // });
      // stream.on('destroy', function (response) {
      //   console.log('destroy', response);
      // });
      // stream.on('error', function (error, code) {
      //   console.log('error', arguments);
      // });
    });
  },
  
  stop: function(username){
    var monitor = monitors[username];
    if(!monitor) return;

    if(monitor.stream)
      monitor.stream.destroy();
      
    delete monitors[username];
  }
};