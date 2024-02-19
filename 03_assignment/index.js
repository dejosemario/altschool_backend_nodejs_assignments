const http = require("http");

const port = 8900;
const hostname = "localhost";

function requestHandler(req, res) {
    // const { method, url } = req;
    res.write("Let's go!");
    res.end();

}
const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



