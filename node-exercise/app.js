const http = require('http');
const dt = require('./myDateModule');
const uc = require('upper-case');

http.createServer ((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase('Hello World! ') + dt.dt());
    res.end();
}).listen(8080);
console.log('Server running on port 8080');