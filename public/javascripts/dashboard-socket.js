
(function(){
  
  var primus = new Primus('/', { });

  primus.on('data', function message(data) {
    console.log('client received data', data);
  });
  
  //begin the connection
  primus.write({
    action: 'begin',
    data: { credentials: window.credentials }
  });
  
})();