window.onscroll = function () {
    document.getElementById("navFixed").style.opacity = "1";
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navFixed").style.transform = "translate(0,-190%)";
    } else {
        document.getElementById("navFixed").style.transform = "translate(0,-350%)";
    }
};