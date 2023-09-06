const express = require("express");
const bodyParser = require("body-parser");

const config = require("../config.js");
const user = require("./components/user/network.js");

const app = express();

app.use(bodyParser.json());

// Router
app.use("/api/user", user);

app.listen(config.api.port, () => {
  console.log(`API listening on port ${config.api.port}`);
});
