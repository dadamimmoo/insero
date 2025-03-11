

setInterval(function(){
    $("#slide ul").delay(2000);
    $("#slide ul").animate({marginLeft:'-1920px'});
    $("#slide ul").delay(2000);
    $("#slide ul").animate({marginLeft:'-3840px'});
    $("#slide ul").delay(2000);
    $("#slide ul").animate({marginLeft:'-5760px'});
    $("#slide ul").animate({marginLeft:'0px'},0);
});