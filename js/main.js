new WOW().init();

window.onscroll = function () {
    document.getElementById("navFixed").style.opacity = "1";
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navFixed").style.transform = "translate(0,-190%)";
    } else {
        document.getElementById("navFixed").style.transform = "translate(0,-350%)";
    }
};

var mainNav = document.getElementById("mainNav");
var listNav = mainNav.getElementsByTagName("li");

var mainNavFixed = document.getElementById("mainNavFixed");
var listNavFixed = mainNavFixed.getElementsByTagName("li");
for (var i = 0; i < listNavFixed.length; i++) {
    listNavFixed[i].addEventListener("click", function () {
        var currentFixed = document.querySelector("#mainNavFixed .active");
        currentFixed.className = currentFixed.className.replace("active", "");
        this.className += " active";
    });
};