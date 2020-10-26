require('env2')('./config/.env');
const Hapi = require('@hapi/hapi');
const config = require('./config/index');
const pluginHapiSwagger = require('./plugins/hapi_swagger');
const { route } = require('./routes');

const server = new Hapi.Server({
  port: config.port,
  host: config.host,
});

const init = async () => {
  await server.register([
    // 为系统使用 hapi-swagger
    ...pluginHapiSwagger,
  ]);

  server.route([...route]);
  await server.start();
  console.log(`Server is running at: ${server.info.uri}`);
};

init();
