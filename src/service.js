var http = require("http");
module.exports.createService = function(){
  return { start: function(port,callback){
    var server = http.createServer(function(request,response){
      response.end("{available_POST_endpoints: [move_to_pot]}");
    });
    server.listen(port,callback);
  }};
};
