var express = require("express");
var api = express.Router();
api.get('/whoami', function(req, res){
  var header = req.headers;
  var ip = header['x-forwarded-for'] ||
     req.connection.remoteAddress;
  res.json({
    'ipaddress': ip,
    'language': header['accept-language'].split(',')[0],
    'software': header['user-agent'].split(') ')[0].split(' (')[1]
  });
});

module.exports =  api;
