var x = window.matchMedia("(max-width: 988px)")
var nav = document.getElementById('nav');
var container = document.getElementById('container');
window.onscroll = function() {

    if (window.pageYOffset > 100) {
        if (x.matches) {
            nav.style.position = "fixed";
            nav.style.top = 0;
            nav.style.width = "100%";
            // nav.style.positionLeft = "px";
        } else {
            nav.style.position = "fixed";
            nav.style.top = 0;
            nav.style.width = "100%";
            // nav.style.marginRight = "100px";
            nav.style.positionLeft = "0px";

            nav.style.marginLeft = "-16px";

        }
    } else {
        nav.style.position = "relative";
        nav.style.top = 100;
        nav.style.width = "100%";
        nav.style.marginLeft = "0px";
    }
}