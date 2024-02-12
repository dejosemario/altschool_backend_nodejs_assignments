const http = require("http");

const port = 8900;
const hostname = "localhost";

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

function requestHandler(req, res) {
  const { method, url } = req;

  if (method === "GET" && url === "/books") {
    // Handle GET /books endpoint
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "This is GET /books endpoint" }));
  } 
  else if (method === "PUT" && url === "/books") {
    // Handle PUT /books endpoint
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "This is PUT /books endpoint" }));
  } 
  else if (method === "DELETE" && url === "/books") {
    // Handle DELETE /books endpoint
    res.end(JSON.stringify({ message: "This is DELETE /books endpoint" }));
  } 
  else if (method === "GET" && url === "/books/author") {
    // Handle GET /books/author/ endpoint
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "This is GET /books/author endpoint" }));
  } 
  else if (method === "POST" && url === "This is /books/author") {
    // Handle POST /books/author/ endpoint
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "This is POST /books/author endpoint" }));
  } 
  else if (method === "PUT" && url===("/books/author")) {
    // Handle PUT /books/author/ endpoint
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "This is PUT /books/author endpoint" }));
  } 
  else {
    // Handle unknown endpoint
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Endpoint not found" }));
  }
}
