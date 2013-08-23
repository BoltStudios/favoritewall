var ntwitter = require('ntwitter');
var cache = require('./cachingService');

var monitors = {};

var favoritesMonitor = module.exports = {
  
  start: function(username, token, secret){
    favoritesMonitor.stop(username);
    
    var monitor = {
      twitter: new ntwitter({ consumer_key: GLOBAL.consumerKey, consumer_secret: GLOBAL.consumerSecret, access_token_key: token, access_token_secret: secret })
    };
    monitors[username] = monitor;
    
    twitter.stream('user', function(stream){
      monitor.stream = stream;
      
      stream.on('data', function (data) {
        //only pay attention to favorites
        if(data.event != 'favorite')
          return;
        
        //only care about things WE favorited (not my tweet that someone else favorited)
        if(data.source.screen_name != username)
          return;
        
        var tweet = data.target_object;
        
        //get current favorites
        var favorites = cache.get(username) || [];
        
        //make the new tweet first (newest)
        favorites.splice(0, 0, tweet);
        
        //limit length to 10
        if(favorites.length > 10)
            favorites.splice(10, favorites.length-10);
        
        cache.set(username, favorites);
      });
      stream.on('end', function (response) {
        console.log('end', response);
      });
      stream.on('destroy', function (response) {
        console.log('destroy', response);
      });
      stream.on('error', function (error, code) {
        console.log('error', arguments);
      });
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