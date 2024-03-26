import express from "express";
import authRoute from "./routes/auth.route.js";
import connectDB from "./config/db.js";
import dotenv  from "dotenv"
const app = express();

//middleware
app.use(express.json());
app.use('/auth', authRoute);

const port = process.env.PORT || 8900;
const hostname = "localhost";


app.get("/", (req, res) => {
  res.send("Welcome to Authors API!");
});


app.all("*", (req, res) => {
  res.send(`Page doesn't exit, Kindly navigate to the accurate route`);
});

app.listen(port, hostname, () => {
  connectDB();
  console.log(`Server running at http://localhost:${port}/`);
});
