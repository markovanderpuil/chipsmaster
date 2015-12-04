var http = require("http");
module.exports.createService = function(){
  return { start: function(port,callback){
    var server = http.createServer(function(request,response){
      response.end();
    });
    server.listen(port,callback);
  }};
};
