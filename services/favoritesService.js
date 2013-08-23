var Twit = require('twit');

module.exports = {
  getTweets: function(username, token, secret, callback){
    
    //no cache, so load from twitter
    var twitter = new Twit({ consumer_key: GLOBAL.consumerKey, consumer_secret: GLOBAL.consumerSecret, access_token: token, access_token_secret: secret });
		twitter.get('favorites/list', {count:10, screen_name:username}, function(error, tweets) {
		  //do not cache errors
			if(error) {
				  callback([]);
				  return;
			}
			
			//send the tweets
			callback(tweets);
		});
  }
};