const http = require("http");
const getBooks = require("./books");
const getAuthors = require("./authors");

const port = 8900;
const hostname = "localhost";

async function requestHandler(req, res) {
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
