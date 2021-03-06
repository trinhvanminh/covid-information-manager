require("dotenv").config();
const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const route = require("./routes/index.route");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const fileUpload = require("express-fileupload");
const axios = require("axios");
const https = require("https");

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

const Agent = new https.Agent({
  rejectUnauthorized: false,
});

const instance = axios.create();

instance.defaults.httpsAgent = Agent;

// set body-parse to parse req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

// set static folder
app.use(express.static(path.join(__dirname, "public")));

//	HTTP logger
// app.use(morgan("combined"));

//view engine config
app.engine(
  ".hbs",
  hbs.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      formatTs: (ts) =>
        ts ? ts.toLocaleDateString("en-GB").split("/").reverse().join("/") : "",
      ifeq: (a, b) => (a === b ? "selected" : ""),
      if_eq: (a, b, opts) => (a === b ? opts.fn(this) : opts.inverse(this)),
      if_eq_s: (a, b, c, opts) =>
        a === b || a == c ? opts.fn(this) : opts.inverse(this),
    },
  })
);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Routes
route(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
