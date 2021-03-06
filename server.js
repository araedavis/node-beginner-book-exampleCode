var http = require('http');
var url = require('url');

function start(route, handle){
  function onRequest(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log(`request for ${pathname} received`);

    route(handle, pathname, res, req);
  }

  http.createServer(onRequest).listen(8080);
  console.log('Server started on port 8080');
}

exports.start = start;
