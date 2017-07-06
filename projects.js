$(document).ready( function() {
	$("#projects-title").delay(100).fadeTo(1200, 1);

	$(".bordered-link").hover( function() {
    	$(this).css('background-color', 'White');
    	$(this).css('color', 'rgba(0, 180, 200, 1)');
    }, function() {
    	$(this).css('background-color', 'rgba(0, 180, 200, 1)');
    	$(this).css('color', 'White');
    })
});