const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "./pages/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;

    case "/contact":
      path += "contact.html";
      break;

    default:
      path += "404.html";
      break;
  }

  res.setHeader("Content-Type", "text/html");

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(`ERROR OCCURED: ${req.statusCode}`);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(8080, "localhost", () => {
  console.log("listening");
});
