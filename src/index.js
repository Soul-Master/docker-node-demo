const http = require("http");

// Must be `0.0.0.0` to accept request from address outside container
const host = '0.0.0.0';
const args = process.argv.slice(2);
 // Specify port of server via first argument
 // node index.js 1234
const port = args.length ? parseInt(args[0]) : 8080;   

function requestListener(req, res) {
    res.writeHead(200);

    var d = new Date();
    res.end("Hello World at " + d.toLocaleString('en-us'));
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});