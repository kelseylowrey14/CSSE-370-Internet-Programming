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
