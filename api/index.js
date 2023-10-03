const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");

const config = require("../config.js");
const user = require("./components/user/network.js");
const auth = require("./components/auth/network.js");
const post = require("./components/post/network.js");
const errors = require("../network/errors.js");

const app = express();

app.use(bodyParser.json());

const swaggerDoc = require("./swagger.json");

// Router
app.use("/api/user", user);
app.use("/api/postr", post);
app.use("/api/auth", auth);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, () => {
  console.log(`API listening on port ${config.api.port}`);
});
