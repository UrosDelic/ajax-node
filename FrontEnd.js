const httpRequest = new XMLHttpRequest();

const obj = {
  name: "uros",
  age: 31,
};
const JSONobj = JSON.stringify(obj);

function sendRequest() {
  httpRequest.open("POST", "http://localhost:3000/");
  httpRequest.setRequestHeader("Content-type", "application/json");

  httpRequest.send(JSONobj);
}

const postButton = document.getElementById("post-button");
postButton.addEventListener("click", sendRequest);
