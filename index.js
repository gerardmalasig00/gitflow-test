const fs = require("fs");

const http = require("http");
const server = http.createServer();

fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});

console.log("this will log after the data");

server.listen(8080, "localhost", () => {
  console.log("Listen to request...");
});

server.on("request", (req, res) => {
  res.statusCode = 201;
  res.end("Hello");
});
