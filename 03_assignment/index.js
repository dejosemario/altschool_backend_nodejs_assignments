const http = require("http");
const getBooks = require("./books");
const getAuthors = require("./authors");
const { authenticate } = require("./authentication");

const port = 8900;
const hostname = "localhost";

function requestHandler(req, res) {
  const { headers, methods, url } = req;
  if (url === "/") {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message:
          "This is the root endpoint, use /books or /authors to get data",
      })
    );
  }

  if (url === "/books") {
    authenticate(req, res)
      .then(() => {
        getBooks(req, res);
      })
      .catch((err) => {
        res.writeHead(400);
        res.end(JSON.stringify({ message: err }));
      });
  }

  if (url === "/authors") {
    authenticate(req, res)
      .then(() => {
        getAuthors(req, res);
      })
      .catch((err) => {
        console.log(err);
        res.writeHead(400);
        res.end(JSON.stringify({ message: err }));
      });
  }
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
