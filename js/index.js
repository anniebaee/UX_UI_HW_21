/*jquery*/
$("body").css("background", "white");
/*event listeners*/
$(".cell4").hover(function(){
    $(this).css("background-color", "green");
}, function(){
    $(this).css("background-color", "transparent");
});