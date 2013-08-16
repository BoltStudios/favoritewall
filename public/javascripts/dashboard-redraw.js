
(function() {

  //Get a handle to elements
  var $tweet = $(".tweet");
  var $img = $(".tweet-panel .icon");
  var $tweetPnl = $(".tweet-panel");

  //resize icon and tweet to look nice
  window.redrawTweet = function(){
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
