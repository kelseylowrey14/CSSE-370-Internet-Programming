Phase #1
  Test Cases: (*Basically requirements of assignment, criteria*)
  
  (1.1) 2 HTMl pages (index & secondpage)
  (1.2) Links to connect index & secondpage to eachother
  (1.3) Headers on each page (h1, h2,...)
  (1.4) Images on each page
  (1.5) 3 External Links
  
  Notes: (*Things you learned, issues, what you looked up even easy stuff.*)
    I thought that the h1, h2, h3 was just the different heading numberings but they made the header size vary. 
    
To make your pages open up to another window instead of redirecting it target = "_blank 


Phase #2
 
 All previous tests passed, added new tests

Test Cases:
    (2.1) Separate CSS File
    (2.2) 10 Selectors (Must include the following: Tag Selectors, ID, Class, Pseudoclass, Pseduoelements, Combinators)
    (2.3) Effects (Include the following: Sidebar, Display Focus, Change on Hover)
    
    Notes: Comments in CSS are /*   */
    Forms are like search bars <form class="example" action="/action_page.php" >
        <input type="text" placeholder="Search.." name="search2"></form>


Phase #3

All previous tests passed, added new tests

Test Cases:
    (3.1) Relocate Sidebar when it is on a phone screen
    (3.2) Do Mobile Friendly Test Run
    (3.3) Media Query CSS
    (3.4) Widths in Percent, Font Size 14+
    
    Notes: https://search.google.com/test/mobile-friendly (to test if site is mobile friendly)
    https://khaledkzy.github.io/pixel-vh-vw-converter/ (pixel to vw converter)
    <meta name="viewport" content="width=device-width, initial-scale=1"> to make a page mobile friendly
    @viewport {
  width: device-width ;
  zoom: 1.0 ;
}
@-ms-viewport {
  width: device-width ;
}
@media screen and (min-width:240px) and (max-width:640px) {
  /* for screens that are at least 320 pixels wide but less than or equal to 640 pixels wide */
}

Phase #4

All previous tests passed, added new tests

Test Cases:
    (4.1) External JavaScript file, loaded by index.html
    (4.2) Element (such as a button) that creates a new, visible element when clicked
    (4.3) New element from above should:
            * Have style applied from CSS file
            * Deletes itself when clicked 
    (4.4) Element that contains text that changes when the mouse movers over it, based on mouse's location
    
    Notes:
    Insert to the top of the javascript file to prevent errors 
    /*eslint-env browser*/
    "use strict";
    To remove a text element when clicked without a button:
    function remove(el) {
    var element = el;
    element.remove();
    }
    <p id="Whyus" onclick="remove(this)"></p>
    
    Add to index.html before end body tag or in the head to connect to the javascript external file
    <script type="text/javascript" src="myscript.js"></script>
    Based on mouse location event: https://www.w3schools.com/jsref/event_onmousemove.asp

Phase #5

All Previous tests passed, added new tests

Test Cases:
    (5.1) Fix Accessibility problems identified by ANDI tool for both webpages
    
    Notes: Add ANDI download tool to your book mark tab then when you are on your webpage you can just click it and it will identify any features that you need to fix in order to be accessible
    
    
Phase #6

All previous tests passed, added new tests

Test Cases:
    (6.1) Add the following user workflow to project:
        (6.1.1) Information is pulled through an API (this can be triggered by a user action or automatically using an onload event handler)
        (6.1.2) Present to the user some choice based on that information.
        (6.1.3) Based on the user choice, request additional information through an API.
        (6.1.4) Present something based on the additional information.
        
        Notes: API's are a pain, the api key ones are harder, easier to use ones that don't require a key.
        keep the script tag at the END of the body! Tried putting it in the head and it didn't work.  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.3/axios.min.js" integrity="sha256-xEofWHiBewJOBXBSH5JHWuwCYpBKOQ8KSGSVLbEVYyo=" crossorigin="anonymous"></script> An add in I used to get my data and process the response, came in handy. 
        
        In the JS file this was my main code that was the draft for the rest of what I watnted to do 
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
        
        button1.addEventListener('click', getInfo)
        
        In index.html:
        
        <h3 id="name"></h3>
        <p id ="height">
          </p>
          <p id = "mass">
          </p>
          <p id = "birthyear">
          </p>
        
        </div>
        
        <button type="button" id ="button1" name="button">Get a Random Star Wars' Character!</button> <br><br><br>
        
        Reflection: I defintely struggled on this one the most and spent the most time on this project than others. The thing I spent the most time on before this and effort was the nice side navigation bar 
        
Phase #7

All previous tests passed, (except API tests since they took down the API site I had orginally used??) added new tests

Test Cases: 
        (7.1) Run  website through the OWASP Zap tool  
        (7.2) Submit a screenshot showing that you have addressed any risks that you are able to control (not server-side vulnerabilities).
        
        Notes: https://www.zaproxy.org/
        Points out securty vulnerablities when upload your webpage
        API stopped working, took down site :(
        
Phase #8

All previous tests passed, except API, added new tests

Tests Cases:
        (8.1)Add a React component to your webpage that "reacts" to user input by displaying changes.
            (8.1.1)To do this, you will need to install and run webpack locally
            (8.1.2) Build (compile into) a JavaScript file which will include a React component
            (8.1.3) Add the file to your project, connect it logically to your project.

        Notes: 