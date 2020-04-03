/*eslint-env browser*/
"use strict";

function Functext() {
  document.getElementById("Whyus").innerHTML = "Our team is always available to provide expert advice and guidance. We are the number one wedding planning site according to US Weekly. We will make sure to customize the wedding to your needs. We are here to make sure your big day is perfect! -Kelsey Lowrey ";
}

function remove(el) {
  var element = el;
  element.remove();
}

var x = 0;
var y = 0;
var z = 0;

function myMoveFunction() {
  document.getElementById("demo").innerHTML = z+=1;
}


function main() {
    document.getElementById("demo2").innerHTML = "Star Wars people!";
}
function fetchPerson() {
    fetch("https://swapi.co/api/people/", {
        method: "GET",
        mode:'no-cors',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    }).then(resp => resp.json()).then(processPeople)
}

function processPeople(jsonPeople) {
    var elperson = document.getElementById("person")
    jsonPeople
        .data
        .forEach(person => {
            console.log(person.name)
            var li = document.createElement('li')
            li.appendChild(document.createTextNode(person.name))
            elperson.appendChild(li)
        });
}