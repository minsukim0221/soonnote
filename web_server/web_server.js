var express = require('express');
var opener = require('opener');
var app = express();


var bodyParser  = require("body-parser");

var config =  require('./../serverConfig'),
    port = config.webServerPort;


var changeDir = __dirname.replace(/\web_server/g,'');
//__dirname은 node에서 제공, 뒤는 정규식

app.use(express.static(changeDir + 'public'));

//opener("http://localhost:8091");

app.get('/', function (req, res) {
    
    console.log("!!!!web_server@@@@@@@@@@ :"+req.query); 
    
    try{
        console.log("web_server@@@@@@@@@@ :"+req.query); 
        res.render('index.html'); 
        //express.static으로 경로없이 
        //index.html로 접근 가능    
    
    }catch(err){
        console.log(err);
    }
});

try{
    app.listen(port);
}catch(error){
    console.log(err);
}
 
console.log("App Server Start Listen on port : " + port);

