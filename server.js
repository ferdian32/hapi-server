const Hapi = require("@hapi/hapi");

class Server {
  init = async () => {
    const server = Hapi.server({
      port: 5000,
      host: "localhost",
    });
    await server.start();
    console.log(`Server Berjalan pada ${server.info.uri}`);
  };
}
const server = new Server();
server.init();
