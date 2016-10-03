var express = require('express');
var app = express();
app.set("port", process.env.PORT || 3000);

app.get('/', function(req,res){
  var header = req.headers;
  res.json({
    'ipaddress': req.ip,
    'language': header['accept-language'],
    'software': header['user-agent']
  });
});

app.listen(app.get("port"));
