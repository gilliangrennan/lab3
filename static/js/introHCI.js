'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});
function projectClick(e) {
	var containingProject = $(this).closest(".project");
	containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    	console.log("Project clicked");
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
}
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
