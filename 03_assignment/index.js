const http = require("http");
const getBooks = require("./books");
const getAuthors = require("./authors");

const port = 8900;
const hostname = "localhost";

function getBodyFromStream(req, res) {
  return new Promise((resolve, reject) => {
    const data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    req.on("end", () => {
      const body = Buffer.concat(data).toString();
      if (body) {
        try {
          resolve(JSON.parse(body));
          return;
        } catch (err) {
          reject(err);
        }
      } else {
        res.statusCode = 401;
        res.end(
          "No body found in the request, please provide a body to continue"
        );
      }
      resolve({});
    });
    req.on("error", (err) => {
      reject(err);
    });
  });
}

function authenticate(req, res, next) {
  const { headers } = req;
  const username = "dejosemario";
  const password = "baseball";
  try {
    if (headers.username !== username || headers.password !== password) {
      res.statusCode = 401;
      res.write("You are not authorized to access this page");
      console.log("not authenticated");
      res.end();
      return;
    }
    next(req, res);
  } catch (err) {
    console.log(err);
  }
}

async function requestHandler(req, res) {
  const { headers, methods, url } = req;
  const body = await getBodyFromStream(req, res);
  req.body = body;
  console.log("this is the body", req.body);
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
    authenticate(req, res, getBooks);
  }
  if (url === "/authors") {
    authenticate(req, res, getAuthors);
  }
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
