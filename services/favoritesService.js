var ntwitter = require('ntwitter');
var cache = require('./cachingService');

module.exports = {
  getTweets: function(username, token, secret, callback){
    
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
			
			//cache the result
			cache.set(username, tweets);
			
			//send the tweets
			callback(tweets);
		});
  }
};