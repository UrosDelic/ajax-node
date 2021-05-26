//const httpRequest = new XMLHttpRequest();

const postButton = document.getElementById("post-button");
postButton.addEventListener("click", postRequest);

const getButton = document.getElementById("get-button");
getButton.addEventListener("click", getRequest);

// refactor
const sendHttpRequest = (method, url, data) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(method, url);
  if (data) {
    httpRequest.setRequestHeader("Content-type", "application/json");
    httpRequest.send(data);
  }
  // nauci onload
  httpRequest.onload = () => {
    // httpRequest.response;
    // console.log(httpRequest.response, "data u onload");
  };
  httpRequest.send();
};

const obj = {
  car: "merc",
  bike: "KTM",
};
const JSONobj = JSON.stringify(obj);

function postRequest() {
  sendHttpRequest("POST", "http://localhost:3000/", JSONobj);
  // httpRequest.open("POST", "http://localhost:3000/");
  // httpRequest.setRequestHeader("Content-type", "application/json");
  // httpRequest.send(JSONobj);
}

function getRequest() {
  sendHttpRequest("GET", "http://localhost:3000/");
  //httpRequest.open("GET", "http://localhost:3000/");
  // Do something with the retrieved data
  // httpRequest.onload = () => {
  //   let data = JSON.parse(httpRequest.response);
  //   console.log("data u onload", data);
  // };
  // httpRequest.send();
}
// NAPISI FUNCTION ZA KREIRANJE TABELE SA DATA IZ DOBIJENOG OBJEKTA I POZOVI JE U ONLOAD
////
