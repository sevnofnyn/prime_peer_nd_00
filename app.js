var http = require('http');

var module3 = require('./module3');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write(module3.accountBalance());
    res.end();
}).listen(process.env.PORT || 3000);


//console.log(module3.accountBalance());


