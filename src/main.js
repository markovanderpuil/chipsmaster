
var CMS = require("./service");
var service = CMS.createService();
service.start(4343,function(){
  console.log("Service ChipsMaster started on port 4343.");
});
