const httpRequest = new XMLHttpRequest();

const obj = {
  car: "merc",
  bike: "KTM",
  plane: "AIRBUS",
  meal: "PUNJENA",
  desert: "TORTA",
};
const JSONobj = JSON.stringify(obj);

function postRequest() {
  httpRequest.open("POST", "http://localhost:3000/");
  httpRequest.setRequestHeader("Content-type", "application/json");
  httpRequest.send(JSONobj);
}

function getRequest() {
  httpRequest.open("GET", "http://localhost:3000/");
  // Do something with the retrieved data
  httpRequest.onload = () => {
    let data = JSON.parse(httpRequest.response);
    console.log("data u onload", data);
    for (let element in data) {
    }
  };
  httpRequest.send();
}
// NAPISI FUNCTION ZA KREIRANJE TABELE SA DATA IZ DOBIJENOG OBJEKTA I POZOVI JE U ONLOAD
////
const postButton = document.getElementById("post-button");
postButton.addEventListener("click", postRequest);

const getButton = document.getElementById("get-button");
getButton.addEventListener("click", getRequest);

//const textTag = document.getElementById("text-tag");
