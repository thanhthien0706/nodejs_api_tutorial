const express = require("express");
const morgan = require("morgan");
const route = require("./routes");
const bodyParser = require('body-parser');
const database = require("./configs/databases");

// connect database
database.connect();

const app = express();
const port = 3000;
const urlencoded_body_parser = bodyParser.urlencoded({
  extended: true,
});

// enecode request
app.use(bodyParser.json());
app.use(urlencoded_body_parser);

// morgan logger
app.use(morgan("dev"));

// routes init
route(app);

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
