
(function() {

  //Get a handle to elements
  var $tweet = $(".tweet");
  var $tweetPanel = $(".tweet-panel");
  var $tweetPanelWrapper = $(".tweet-panel-wrapper");
  var $fade = $(".cycle-visibility").hide();
  
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  
  var username = getParameterByName('username');

  
  var tweetToHtml = function(tweet){
    //return "To be <span class='hash'>#successful</span>, you have to stand behind and make big bets on people you believe in. <span class='hash'>#Leadership</span><span class='info'>Cale Kennedy | @CaleKennedy | Brought to you by Bolt Studios</span>";
    var screenname = tweet.user.screen_name;
    var name = tweet.user.name;
    var text = tweet.text;

    var html = text
        .replace(/#[^ ]*/g, function(match, contents, offset, s){
            return "<span class='hash'>"+match+"</span>";
        })
        .replace(/http[^ ]*/g, function(match, contents, offset, s){
            return "<span class='link'>"+match+"</span>";
        });
    
    html += "<span class='info'>"+name+" | @"+screenname+" | Brought to you by Bolt Studios</span>";
    return html;
  };
  
  var showNextTimeout = null;
  var clearShowNextTimeout = function(){
    //clear the timeout
    if(showNextTimeout){
      clearTimeout(showNextTimeout);
      showNextTimeout = null;
    }
  };
  var showNextInEightSeconds = function(){
    clearShowNextTimeout();
    showNextTimeout = setTimeout(window.showNextTweet, 8000);
  };
  window.newTweetIsAvailable = function(){
    //already waiting to run?
    if(showNextTimeout) return;
    
    //no pending timeout, so show it now
    window.showNextTweet();
  };
  window.showNextTweet = function(){
    clearShowNextTimeout();
    
    if(window.tweets.length == 0){
      if(window.isContinuous){
        //check again in 8 seconds
        showNextInEightSeconds();
        return;
      }else{
        //animate the panel out
        $tweetPanelWrapper.animate({'top':'40%'}, 200);
        return;
      }
    }
    
    //we're about to show a tweet
    if($tweetPanelWrapper.css('top') != '0%'){
      //hide whatever tweet was showing
      $fade.hide();
      
      //animate the panel in
      $tweetPanelWrapper.animate({'top':'0%'}, 200);
    }
    
    window.tweets.sort(function(a,b){
      a.shown = a.shown || 0;
      b.shown = b.shown || 0;
      if (a.shown < b.shown) return -1;
      if (a.shown > b.shown) return 1;
      return 0;
    });
    
    var tweet = window.tweets[0];
    
    //mark it as shown now
    tweet.shown = new Date().getTime();
    
    if(!window.isContinuous){
      //remove the tweet
      window.tweets.splice(0, 1);
    }
      
    $fade.fadeOut(400, function(){
      var html = tweetToHtml(tweet);
      $tweet.html(html);
    
      $fade.fadeIn(0).show();
      window.redrawTweet();
      $fade.fadeOut(0);
      
      $fade.fadeIn(400);
    });
    
    showNextInEightSeconds();
  };

  window.showNextTweet();


})();
