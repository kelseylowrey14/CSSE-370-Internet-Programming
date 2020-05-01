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

let button = document.querySelector('#button')
let name = document.querySelector('#name')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')
let birthyear = document.querySelector('#birthyear')

 
var randomNumber = Math.floor((Math.random()*88)+1)
let apiURL= 'https://swapi.co/api/people/' + randomNumber.toString()


function getInfo(){
   
   axios.get(apiURL).then(response=>{
       updateInfo(response.data)
       
   }).catch(e =>{
       console.log('There was an error.')
   })
}

function updateInfo(data){
    name.innerText = data.name
    
   
};

function updateInfom(data){
    mass.innerText = 'Mass: ' +data.mass
       
   }
function updateInfoh(data){
    height.innerText = 'Height: ' + data.height
       
   }
function updateInfoby(data){
  birthyear.innerText = 'Birth Year: ' + data.birth_year

};

function getInfom(){
axios.get(apiURL).then(response=>{
       updateInfom(response.data)
       
   }).catch(e =>{
       console.log('There was an error.')
   })
}



function getInfoh(){
axios.get(apiURL).then(response=>{
       updateInfoh(response.data)
       
   }).catch(e =>{
       console.log('There was an error.')
   })
}

function getInfoby(){
axios.get(apiURL).then(response=>{
       updateInfoby(response.data)
       
   }).catch(e =>{
       console.log('There was an error.')
   })
}



mbutton.addEventListener('click', getInfom)
bybutton.addEventListener('click', getInfoby)
 hbutton.addEventListener('click', getInfoh) 
button1.addEventListener('click', getInfo)
