const express = require("express");

const config = require("../config.js");

const app = express();

// Router

app.listen(config.api.port, () => {
  console.log(`API listening on port ${config.api.port}`);
});
