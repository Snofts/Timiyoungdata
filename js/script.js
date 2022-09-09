$(document).ready(function(){
    $('.js--section1').waypoint(function(direction){
    if(direction=="down"){
        $('nav').addclass('header-sticky-nav');
    } else{
        $('nav').removeclass('header-sticky-nav');
    }

    });

});