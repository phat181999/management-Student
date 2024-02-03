"use strict";
const Hapi = require("@hapi/hapi");
const connectDb = require("./config/config").checkDatabaseConnection;
const UserRoutes = require("./routers/student");
const Teacher = require("./routers/teacher");
const Classes = require("./routers/class");
const routeBuilder = require("hapi-route-builder");
const ODataServer = require("odata-v4-server");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: true,
    },
  });

  const isConnectedToDb = await connectDb();
  if (!isConnectedToDb) {
    console.error("Unable to connect to the database. Exiting...");
    process.exit(1);
  }
  server.route(UserRoutes);
  server.route(Teacher);
  server.route(Classes);
  // await server.register({ plugin: routeBuilder });

  // server.route(routeBuilder.routesForHandler(ODataServer.createHandler(model)));
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
