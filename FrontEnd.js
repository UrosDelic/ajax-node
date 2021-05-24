const httpRequest = new XMLHttpRequest();

const obj = {
  vehicles: {
    car: "limousine",
    bike: "ktm-duke",
    plane: "lufthansa",
  },
};
const JSONobj = JSON.stringify(obj);

function sendRequest() {
  httpRequest.open("POST", "http://localhost:3000/");
  httpRequest.setRequestHeader("Content-type", "application/json");

  httpRequest.send(JSONobj);
}

const postButton = document.getElementById("post-button");
postButton.addEventListener("click", sendRequest);
