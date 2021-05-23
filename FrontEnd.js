//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// require pripada nod-u ne moze da radi na DOM-u
const httpRequest = new XMLHttpRequest();

const obj = {
    name: "ime",
    age: 30,
};
const JSONobj = JSON.stringify(obj);


function sendRequest() {
    httpRequest.open("GET", "http://localhost:3000/");
    httpRequest.onload = () => {
        resolve(httpRequest.response);
    }
    httpRequest.setRequestHeader("Content-type", "application/json");
    httpRequest.send();

}

const postButton = document.getElementById('post-button');
postButton.addEventListener('click', sendRequest)

function onClick() {
    alert('test');
}