"use strict";

const Hapi = require("@hapi/hapi");
const connectDb = require("./config/config").checkDatabaseConnection;
const UserRoutes = require("./routers/student");
const Teacher = require("./routers/teacher");
const Classes = require("./routers/class");
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  const isConnectedToDb = await connectDb();
  if (!isConnectedToDb) {
    console.error("Unable to connect to the database. Exiting...");
    process.exit(1);
  }
  server.route(UserRoutes);
  server.route(Teacher);
  server.route(Classes);
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
