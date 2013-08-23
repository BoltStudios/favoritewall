
(function(){
  
  var primus = new Primus('/', { });

  primus.on('data', function message(data) {
    if(data.action == 'new-favorite-tweet'){
      //ignore the tweet if it's already known
      for(var i=0; i<window.tweets.length; i++){
        var t = window.tweets[i];
        if(t.id == data.tweet.id){
          return;
        }
      }
      
      //mark the tweet as needing to be shown most
      data.tweet.shown = -new Date();
      
      //get rid of the oldests
      window.tweets.sort(function(a,b) {
        if (a.id < b.id) return 1;
        if (a.id > b.id) return -1;
        return 0;
      });

      if(window.tweets.length > 9)
          window.tweets.splice(9, window.tweets.length-9);
      
      //add the tweet
      window.tweets.push(data.tweet);
    }
    
    if(data.action == 'new-unfavorite-tweet'){
      //remove the bad tweet
      for(var i=0; i<window.tweets.length; i++){
        var t = window.tweets[i];
        if(t.id == data.tweet.id){
          window.tweets.splice(i, 1);
          return;
        }
      }
    }
  });
  
  //begin the connection
  primus.write({
    action: 'begin',
    data: { credentials: window.credentials }
  });
  
})();