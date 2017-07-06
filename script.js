$(document).ready( function(){
    var titles = ["B.S. Mathematical Sciences", "Student Developer", "Data Engineer", "Avid Reader", "Desperate College-grad"];
    
    $("#myname").delay(200).fadeTo(1800, 1);
    $("#mytitle").text(titles[0]).delay(600).fadeTo(1800, 1);
    $("#resume").delay(900).fadeTo(1800, 1);


    //HOVER FOR BUTTONS (.bordered-link)
    $(".bordered-link").hover( function() {
    	$(this).css('background-color', 'White');
    	$(this).css('color', 'rgba(0, 180, 200, 1)');
    }, function() {
    	$(this).css('background-color', 'rgba(0, 180, 200, 1)');
    	$(this).css('color', 'White');
    })

    var length = titles.length;
    var i = 1;

    function loopLi() {
        setInterval(function() {    // this code is executed every 1200 milliseconds:

            $("#mytitle").delay(1200).fadeTo(1200, 0, function() {
                $(this).text(titles[i]);
                i = (i+1) % length;
            }).fadeTo(1200, 1);

        }, 1200);
    }

    $(loopLi);

})
    


