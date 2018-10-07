function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$('#mobile-menu').on('click touchstart', function() {
    $('.topnav .right').toggleClass('mobile-links');
    $(this).after($('.topnav .right'));
});
