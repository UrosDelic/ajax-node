
const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write("<h2>server is working</h2>");
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