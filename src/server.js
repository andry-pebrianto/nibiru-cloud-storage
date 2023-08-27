const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { APP_NAME, NODE_ENV, PORT } = require("./utils/env");
const { failed } = require("./utils/createResponse");

// deklarasi express
const app = express();

// middleware
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
  })
);
app.use(cors());
app.use(express.static("public"));

// root router
app.get("/", (req, res) =>
  res.send(`${APP_NAME} API - ${NODE_ENV[0].toUpperCase() + NODE_ENV.slice(1)}`)
);
// main router
app.use(require("./router/upload.route"));
// 404 router
app.use((req, res) => {
  failed(res, {
    code: 404,
    payload: "Resource on that url not found",
    message: "Not Found",
  });
});

// running server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} with ${NODE_ENV} environment`);
  console.log(`Visit http://localhost:${PORT}`);
  console.log("Developed by Andry Pebrianto");
});
