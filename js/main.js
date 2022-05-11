window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navFixed").style.transform = "translate(0,-177%)";
    } else {
        document.getElementById("navFixed").style.transform = "translate(0,-300%)";
    }
};