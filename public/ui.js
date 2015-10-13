/**                                                                                                                                
 * ui.js                                                                                                                           
 *                                                                                                                                 
 * Defines functionality for instrumenting the user-interface.                                                                     
 *                                                                                                                                 
 */

var librs = librs || {};
librs.ui = {};
librs.ui = function(){
	

var toggle = function() {

    console.log('About!');
    var about = document.getElementById('about');
    if(hasClass(about,'show')){
    	removeClass(about,'show');
    }
    else{
    	 addClass(about, 'show');
    	 
    }
   
    
};

var fetch = function(){
	var yearID = document.getElementById("year");
	var year = yearID.value;
	console.log(year);
	vizController(year);
};

var initialize = function() {

    console.log('Initialize!');

    // Grab the 'About' button element, identified by the                                                                          
    // 'about-btn' id.                                                                                                             
    var button = document.getElementById('about-btn');
    var button = document.getElementById('submit-btn');

    // From this point forward, when the button is clicked, the                                                                   
    // toggle function shall be invoked.                                                                                           
    button.onclick = toggle;
    button.onclick = fetch;

};

// When this file is included at the bottom of the page,                                                                           
// the js is loaded after the DOM is loaded.  It is a                                                                              
// good time to initialize the UI elements in the page.                                                                            
initialize();
};// end module
librs.ui();
