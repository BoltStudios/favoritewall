
var cache = {};

module.exports = {
  
  get: function(key){
      //check the cache
      var about = cache[key];
      
      //no cache? return undefined
      if(!about){
          console.log('No cache found for: '+key);
          return undefined;
      }
      
      //expired? return undefined
      if(about.expires < new Date()){
          console.log('Cache had expired for: '+key);
          delete cache[key];
          return undefined;
      }
      
      //return the valid cache
      console.log('Using cache for: '+key);
      return about.value;
  },
  
  set: function(key, value, ms){
      console.log('Caching: '+key);
      
      //clear any old value
      delete cache[key];
      
      //cache the value and set the expiration
      cache[key] = {
        value: value,
        expires: +new Date() + ms
      };
  }
  
};