
(function(){
  
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  var username = getParameterByName('username');
  
  var load = function(){
    $.getJSON('/favorites/'+username, function(t){
      window.tweets = t;
    });
  };
  
  setInterval(load, 1*60*1000);
  
  load();
  
})();
