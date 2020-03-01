require("env2")("./.env");
const Hapi = require("@hapi/hapi");
const config = require("./config/index");
const routesHelloHapi = require("./routes/route_basic");
const pluginHapiSwagger = require("./plugins/hapi_swagger");

const server = new Hapi.Server({
  port: config.port,
  host: config.host
});

const init = async () => {
  await server.register([
    // 为系统使用 hapi-swagger
    ...pluginHapiSwagger
  ]);

  server.route([
    {
      method: "GET",
      path: "/login",
      options: {
        description: "测试",
        notes: "测试api",
        tags: ["api"]
      },
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
