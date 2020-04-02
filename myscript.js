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

/*function main() {
    document.getElementById("LOTRAPI").innerHTMl = "Hello LOTR";
}
function fetchLOTR(){
    fetch("https://the-one-api.herokuapp.com/v1/book", {
        method: "GET",
        headers: {
            "Accept":"application/json",
            "Content-Type": "application/json",
            "Authorization":"Bearer ci3sASKvz3hCGN10OHn3"
        }
    }).then(resp->resp.json()).then(processLOTR).cath(err ->console.log(err))
}

function processLOTR(jsonLOTR){
   var book = document.getElementById("book") 
   jsonLOTR
    .data
    .filter(jsonLOTR->jsonLOTR.book.name)
    .forEach(book->{
            console.log(book.name)
            var li = document.createElement('li')
            li.appendChild(document.createTextNode(book.name))
    book.appendChild(li)
             });
}
*/

function main() {
    document.getElementById("demo2").innerHTML = "Cool Number!";
}
function fetchNumber() {
    fetch("https://api.math.tools/numbers/nod", {
        method: "GET",mode:'no-cors',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            
        }
    }).then(resp => resp.json()).then(processnumber).catch(err=>console.log(err))
}

function processnumber(jsonnumber) {
    var elnumber = document.getElementById("number")
    jsonnumber
        .data
        .forEach(number => {
        console.log(numbers.number)
            var li = document.createElement('li')
            li.appendChild(document.createTextNode(numbers.number))
            elnumber.appendChild(li)
        });
}