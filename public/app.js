
console.log("is it working");
$(document).ready(function(){
    $(window).on('scroll',function(){
    // console.log($(document).scrollTop());
    if ($(document).scrollTop() > 50){
        $('.navbar').addClass('shrink');

    }
    
    else{
        $('.navbar').removeClass('shrink');

    }
});

});
