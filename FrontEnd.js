//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// require pripada nod-u ne moze da radi na DOM-u


const httpRequest = new XMLHttpRequest();

const obj = {
    name: "ime",
    age: 30,
};
const JSONobj = JSON.stringify(obj);


function postData() {
    httpRequest.open("POST", "http://localhost:3000/", true);
    httpRequest.setRequestHeader("Content-type", "application/json");
    httpRequest.send(JSONobj);
}



const postButton = document.getElementById('post-button');
postButton.addEventListener('click', onClick)

function onClick() {
    alert('test');
}