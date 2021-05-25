const httpRequest = new XMLHttpRequest();

const obj = {
  vehicles: {
    car: "OPET TEST",
    bike: "OPET TEST",
    plane: "OPET TEST",
  },
};
const JSONobj = JSON.stringify(obj);

function postRequest() {
  httpRequest.open("POST", "http://localhost:3000/");
  httpRequest.setRequestHeader("Content-type", "application/json");
  httpRequest.send(JSONobj);
}

function getRequest() {
  httpRequest.open("GET", "http://localhost:3000/");
  httpRequest.onload = () => {
    const data = JSON.parse(httpRequest.response);
  };
  // izvan onload mora biti - proveri
  httpRequest.send();
}

const postButton = document.getElementById("post-button");
postButton.addEventListener("click", postRequest);

const getButton = document.getElementById("get-button");
getButton.addEventListener("click", getRequest);
