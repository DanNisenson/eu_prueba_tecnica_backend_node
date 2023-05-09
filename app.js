const express = require("express");
var cors = require("cors");
const path = require("path");
const logger = require("morgan");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/v1/", require("./routes/index"));

module.exports = app;
