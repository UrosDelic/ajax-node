const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  // cors
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST, GET");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

  if (request.method === "POST") {
    let data = [];
    request
      .on("data", payloadChunk => {
        data.push(payloadChunk);
      })
      .on("end", () => {
        data = Buffer.concat(data).toString();
        fs.writeFile("message.json", data, () => {});
      });
  } else if (request.method === "GET") {
    let message = fs.readFileSync("message.json", () => {});
    message = Buffer.from(message);
    response.write(message);
  }
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
