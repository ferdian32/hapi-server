const Hapi = require("@hapi/hapi");
const routes = require("./routesrr");
const number = 50;
console.log(number);
class Server {
  init = async () => {
    const _ax012 = Hapi.server({
      port: 5000,
      host: "localhost",
    });
    _ax012.route(routes);
    await _ax012.start();
    console.log(`_ax012 Berjalan pada ${_ax012.info.uri}`);
  };
}
const b1_02a = new Server();
b1_02a.init();
