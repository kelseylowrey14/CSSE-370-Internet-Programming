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
