const http = require('http');
const host ='localhost';
const port = 3000;

const requestListener = function(req, res) {
    res.writeHead(200,{'Content-type':'text/html'});
    res.end('<h1>hello node!!!!</h1>');
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
