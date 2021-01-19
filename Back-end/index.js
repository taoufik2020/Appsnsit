const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
var cors = require("cors");

//import routes

const appRoute = require("./Route/appsnsitesRoute");

// import middlware
app.use(express.json());
app.use(expressValidator());
app.use(cors());

app.use("/api", appRoute);

//connection with database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("data base connected"))
  .catch(() => console.log("database not connected"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("port run in port", port));
