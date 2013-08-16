
(function() {

  //Get a handle to elements
  var $tweet = $(".tweet");
  var $img = $(".tweet-panel .icon");
  var $tweetPnl = $(".tweet-panel");

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  var layout = getParameterByName('layout');

  //resize icon and tweet to look nice
  window.redrawTweet = function(){

  	if(layout === "fullscreen"){
  		$tweetPnl.addClass("fullscreen");
  		$("body").addClass("fullscreen");
  	}
  	else{
  		$tweetPnl.removeClass("fullscreen");
  		$("body").removeClass("fullscreen");
  	}  	  

	  $tweet.show();
		$img.show();

	  var heightOfPanel = $tweetPnl.height();
	  var imgSize = heightOfPanel;
	  $img.width(imgSize+'px');
	  $img.height(imgSize+'px');
  
	  var size = 150;
	  while(size > 0){
		    size -= 1;
		    $tweet.css('font-size', size+'px');

		    if($tweet.height() < (heightOfPanel-20))
		        break;
	  }
  };

})();
