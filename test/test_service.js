var expect = require("expect.js"),
    request= require("request"),
    
    CMS = require("../src/service");
describe("The ChipsMaster Service", function() {
  it("can have its API queried",function(done){
    var service = CMS.createService();
    service.start(4242, function(){
      request("http://localhost:4242/api",function(error,response,body) {
        if (error) {
          done(error);
          return;
        }
        expect(body).to.equal("{available_POST_endpoints: [move_to_pot]}");
        done();
      });
    });
  });
});
