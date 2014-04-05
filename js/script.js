

function dismissDropdown() {
	$("#nav-dropdown").animate({
		top: -255
	}, 300, function() {
		//complete
	});
	$("#shadow").fadeOut();

}

jQuery(document).ready(function() {

	$('#shadow').bind('touchstart click',dismissDropdown);

	// this horseshit is necessary to get prompt interaction with touch
	$("#hamburger").bind('touchstart click', function(e) {

		e.preventDefault();

		console.log('boop!');

		$("#nav-dropdown").animate({
			top: 0
		}, 300, function() {
			//complete
		});

		$("#shadow").fadeIn();
	});

	$("#nav-dropdown").click(function() {
		dismissDropdown();
	});



});