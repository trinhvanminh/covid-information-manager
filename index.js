const express = require("express");
const app = express();
const port = 3000;
const hbs = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const route = require("./routes");

// set body-parse to parse req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

// routing
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
