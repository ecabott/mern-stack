const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/utils-generator')
  .then(() => console.log('Database Connected!'))
  .catch((err) => console.log('Database is not Connected!'));

const app = express();

const indexRouter = require("./routes");

// Setting up the third party middlewares
app.use(morgan("short"));
app.use(cors());

// JSON data capture
app.use(bodyParser.json());

// Form data capture
app.use(bodyParser.urlencoded({extended: true}));

// Setting up the EJS Templating
app.set("view engine", "ejs");
app.set("views", "./views");

// Serving the static files
app.use(express.static('public'));

// To test application level error handling
app.get('/broken', (req, res, next) => {
  throw new Error('Broken');
});

app.use("/", indexRouter);

// Application level error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something went wrong');
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});