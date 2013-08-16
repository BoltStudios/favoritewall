
(function() {

  //Get a handle to elements
  var $tweet = $(".resize-visibility");

  var show = function(){
    $tweet.show();
    window.redrawTweet();
  };
  
  //throttle the window.resize event
  var resizeTimeout = null;
  var onResize = function(){
	  $tweet.hide();

	  if(resizeTimeout) clearTimeout(resizeTimeout);
	  resizeTimeout = setTimeout(show, 300);
  };

  $(function(){
    
    //wire up the resize event
	  $(window).resize(onResize);

  });

})();
