const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.method === "POST") {
    let data = [];
    request
      .on("data", chunk => {
        data.push(chunk);
      })
      .on("end", () => {
        data = Buffer.concat(data).toString();
        console.log("data buffer", data);
        fs.writeFile("message.json", data, () => {});
      });
  }
  // nasao sam na stack-u, za CORS
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST, GET");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept"
  );

  response.writeHead(200, { "Content-type": "text/html" });
  response.write("This is the response from server!");
  response.end();
});

const host = "localhost";
const port = 3000;

server.listen(port, host, error => {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log(`Server is runing on http://${host}:${port}`);
  }
});
