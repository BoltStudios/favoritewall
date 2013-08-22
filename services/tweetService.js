var ntwitter = require('ntwitter');
var cache = require('./cachingService');

module.exports = {
  getTweets: function(username, token, secret, callback){
    
    setTimeout(function(){
      console.log('start stream');
      var twitter = new ntwitter({ consumer_key: GLOBAL.consumerKey, consumer_secret: GLOBAL.consumerSecret, access_token_key: token, access_token_secret: secret });
      twitter.stream('user', function(stream){
        stream.on('data', function (data) {
          //only pay attention to favorites
          if(data.event != 'favorite') return;
          
          //only care about things WE favorited (not my tweet that someone else favorited)
          if(data.source.screen_name != username) return;
          
          var tweet = data.target_object;
          var info = JSON.stringify(tweet);
          if(info.length > 50) info = info.substring(0, 40);
          console.log('favorite', info);
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
    }, 1000);
    
    callback([]);
    return;
    
    //check the cache
    var tweets = cache.get(username);
    if(tweets){
			//send the cached tweets
      callback(tweets);
      return;
    }
    
    //no cache, so load from twitter
    var twitter = new Twit({ consumer_key: GLOBAL.consumerKey, consumer_secret: GLOBAL.consumerSecret, access_token: token, access_token_secret: secret });
		twitter.get('favorites/list', {count:10, screen_name:username}, function(error, tweets) {
		  //do not cache errors
			if(error) {
				  callback([]);
				  return;
			}
			
			//cache the result for 61 seconds
			cache.set(username, tweets, 61*1000);
			
			//send the tweets
			callback(tweets);
		});
  }
};