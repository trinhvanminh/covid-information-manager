require("dotenv").config();
const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const route = require("./routes/index.route");
const morgan = require("morgan");
const path = require("path");

// set body-parse to parse req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

//	HTTP logger
app.use(morgan("combined"));

//view engine config
app.engine(
  ".hbs",
  hbs.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      formatTs: (ts) => (ts ? ts.toLocaleDateString() : ""),
    },
  })
);
app.set("view engine", ".hbs");
app.set("views", "./views");

// Routes
route(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
