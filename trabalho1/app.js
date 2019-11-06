const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const rotas = require("./routes/rotas");
require("./databases/db");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/", rotas);

module.exports = app;
