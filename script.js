$(document).ready(function(){
    $("#myname").delay(100).fadeTo(1200, 1);
    $("#mytitle").delay(200).fadeTo(1200, 1);
    $("#resume").delay(300).fadeTo(1200, 1);


    //HOVER FOR BUTTONS (.bordered-link)
    $(".bordered-link").hover( function() {
    	$(this).css('background-color', 'White');
    	$(this).css('color', 'rgba(0, 180, 200, 1)');
    }, function() {
    	$(this).css('background-color', 'rgba(0, 180, 200, 1)');
    	$(this).css('color', 'White');
    })

    $('#proceed').click( function() {
    	$('.cover-page').fadeOut(100);
    })
})
    


