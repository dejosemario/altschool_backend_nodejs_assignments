const http = require("http");

const port = 8900;
const hostname = "localhost";

function requestHandler(req, res) {
  res.write("My name is Odumodu Josemaria Oluchukwu");
  res.end();
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);
