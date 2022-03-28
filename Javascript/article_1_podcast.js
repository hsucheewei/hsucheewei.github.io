function burgerMenu() {
    var x = document.getElementById("mobileLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

$(function(){
      $('iframe.frame').responsiveIframe({
        ratio: 9/16
      });
    });