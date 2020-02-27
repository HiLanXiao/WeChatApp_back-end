const Hapi = require("@hapi/hapi");
const config = require("./config/index");
const routesHelloHapi = require("./routes/route_basic");

const server = new Hapi.Server({
  port: config.port,
  host: config.host
});

const init = async () => {
  server.route([
    {
      method: "GET",
      path: "/login",
      handler: (req, res) => {
        try {
          console.log("reply");
          return "Hello";
        } catch {
          console.log("Find Errors");
        }
      }
    }
  ]);

  server.route({
    method: "GET",
    path: "/squre",
    handler: (req, res) => {
      try {
        console.log("reply");
        return "Hello";
      } catch {
        console.log("Find Errors");
      }
    }
  });

  await server.start();
  console.log(`Server is running at: ${server.info.uri}`);
};

init();
