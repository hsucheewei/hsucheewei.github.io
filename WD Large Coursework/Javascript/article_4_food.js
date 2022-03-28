function burgerMenu() {
    var x = document.getElementById("mobileLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  }
  

$("#show-hide").click(function () {

    $(".hidden").slideToggle();

    if (document.getElementById("show-hide").innerHTML == "SHOW MORE ARTICLES") {
        document.getElementById("show-hide").innerHTML = "SHOW LESS ARTICLES";
    } else {
        document.getElementById("show-hide").innerHTML = "SHOW MORE ARTICLES";
    }
    
});