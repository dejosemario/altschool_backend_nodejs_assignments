import express from "express";
import logger from "./logger.js";
import getAuthors from "../routes/authors.js";

const app = express();

//middleware
app.use(express.json());
app.use("/authors", getAuthors);
app.use(logger);

const port = 8900;
const hostname = "localhost";


app.get("/", (req, res) => {
  res.send("Welcome to Authors API!");
});


app.all("*", (req, res) => {
  res.send(`Page doesn't exit, Kindly navigate to the accurate route`);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
