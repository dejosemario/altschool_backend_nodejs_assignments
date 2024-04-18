import express from "express";
import authRoute from "./routes/auth.route.js";
import connectDB from "./config/db.js";
import ErrorWithStatus, {errorHandler} from "./middlewares/error.js";{errorHandler} from "./middlewares/error.js";
const app = express();

//middleware
app.use(express.json());
app.use('/api/auth', authRoute);
app.use(ErrorWithStatus);
app.use(errorHandler);



const port = process.env.PORT || 8900;
const hostname = "localhost";


app.get("/", (req, res) => {
  res.send("Welcome to Authors API!");
});


app.all("*", (req, res) => {
  res.send(`Page doesn't exit, Kindly navigate to the accurate route`);
});


app.listen(port, hostname, async() => {
  await connectDB();
  console.log(`Server running at http://localhost:${port}/`);
});
