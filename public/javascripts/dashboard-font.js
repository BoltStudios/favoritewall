
(function() {

  //Get a handle to elements
  var $tweet = $(".font-loaded-visibility").hide();
  
  var onFontLoad = function(){
    $tweet.show();
    window.redrawTweet();
  };
  
  //Embed font, get called back on load: http://www.google.com/fonts/#QuickUsePlace:quickUse/Family:
  window.WebFontConfig = {
    google: { families: [ 'Doppio+One::latin' ] },
		active: onFontLoad,
		inactive: onFontLoad
  };
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);

})();
