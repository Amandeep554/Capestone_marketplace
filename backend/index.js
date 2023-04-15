const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(cors())
require("./startup/logger")();
require("./startup/init")();
require("./firebase")();
require("./startup/routes")(app);
require("./startup/database")();

const server = app.listen(PORT, () =>
  console.log(`listening to port ${PORT}...`)
);

module.exports = server;
