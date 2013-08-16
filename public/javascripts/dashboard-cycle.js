
(function() {

  //Get a handle to elements
  var $tweet = $(".tweet");
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
  
  var tweetIndex = -1;
  var showNext = function(){
    if(window.tweets.length == 0) return;
    
    $fade.fadeOut(400, function(){
      tweetIndex += 1;
      
      var tweet = window.tweets[tweetIndex%window.tweets.length];
      var html = tweetToHtml(tweet);
      $tweet.html(html);
    
      $fade.fadeIn(0).show();
      window.redrawTweet();
      $fade.fadeOut(0);
      
      $fade.fadeIn(400);
    });
  };

  setInterval(showNext, 8000);
  showNext();



  //check for new tweets
  
  var load = function(){
    $.getJSON('/favorites/'+username, function(t){
      var reload = window.tweets.length == 0;
      window.tweets = t;
      showNext();
    });
  };
  setInterval(load, 5*60*1000);
  load();



})();
