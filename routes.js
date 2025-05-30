const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
  {
    method: "GET",
    path: "/user/${username?}",
    handler: (request, h) => {
      const { username = "stranger" } = request.params;
      const { lang } = request.query;
      if (lang === "id") {
        return `Hello ${username} from ${lang}`;
      }
      return `Hello ${username} ! `;
    },
  },
  {
    method: "GET",
    path: "/query",
    handler: (request, h) => {
      const { name, location } = request.query;
      return `Hello ${name} from ${location}`;
    },
  },
  {
    method: "GET",
    path: "/login",
    handler: (request, h) => {
      return h
        .response("success")
        .type("text/plain")
        .header("Custom-Header", "some-value");
    },
  },
];

module.exports = routes;
