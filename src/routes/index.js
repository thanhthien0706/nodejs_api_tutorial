const testRouter = require("./api/test.js");

function route(app) {
  // route
  app.use("/test", testRouter);
}

module.exports = route;
