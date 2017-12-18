$(function(){

	$( "#toggle-nav" ).click(function() {
	var label = document.getElementById("toggle-nav");	
	var x = document.getElementById("nav_menu");
    if (x.className === "topnav") {
        x.className += " responsive";
        label.innerHTML = "X";

    } else {
        x.className = "topnav";
        label.innerHTML="МЕНЮ";
    }
	});

});
