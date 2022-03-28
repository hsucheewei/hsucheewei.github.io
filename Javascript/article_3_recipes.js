//Burger Menu 
function burgerMenu() {
  var x = document.getElementById("mobileLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

/* Collapsible Recipe Content */
var coll = document.getElementsByClassName("collapsible");

var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


/*Like Counters*/

//Recipe 1 like counter
var like1 = 0;

function likeinc_1() {
  likeupdate_1(++like1);
}

function likeupdate_1(val1) {
  document.getElementById("lcount1").innerHTML = val1;
}

//Recipe 2 like counter
var like2 = 0;

function likeinc_2() {
  likeupdate_2(++like2);
}

function likeupdate_2(val2) {
  document.getElementById("lcount2").innerHTML = val2;
}

//Recipe 3 like counter
var like3 = 0;

function likeinc_3() {
  likeupdate_3(++like3);
}

function likeupdate_3(val3) {
  document.getElementById("lcount3").innerHTML = val3;
}

//Recipe 4 like counter
var like4 = 0;

function likeinc_4() {
  likeupdate_4(++like4);
}

function likeupdate_4(val4) {
  document.getElementById("lcount4").innerHTML = val4;
}

/*Comment Counter*/

//Recipe 1 comment counter
var comment1 = 0;
// var comment

function commentinc_1() {
  commentupdate_1(++comment1);
}

function commentupdate_1(val1) {
  document.getElementById("ccount1").innerHTML = val1;
}

//Recipe 2 comment counter
var comment2 = 0;

function commentinc_2() {
  commentupdate_2(++comment2);
}

function commentupdate_2(val2) {
  document.getElementById("ccount2").innerHTML = val2;
}

//Recipe 3 comment counter
var comment3 = 0;

function commentinc_3() {
  commentupdate_3(++comment3);
}

function commentupdate_3(val3) {
  document.getElementById("ccount3").innerHTML = val3;
}

//Recipe 4 comment counter
var comment4 = 0;

function commentinc_4() {
  commentupdate_4(++comment4);
}

function commentupdate_4(val4) {
  document.getElementById("ccount4").innerHTML = val4;
}


/*Comment Pop-up*/
//Recipe 1 Pop up
function openForm() {
  document.getElementById("form").style.display = "block";
}

function closeForm() {
  document.getElementById("form").style.display = "none";
}

function submitForm() {
  if (document.getElementById("textbox").value != "") {
    document.getElementById("form").style.display = "none";
    document.getElementById("textbox").value = ""
    document.getElementById("alert1").style.display = "none";
    commentinc_1();
  }else if (document.getElementById("textbox").value == "") {
    document.getElementById("alert1").style.display = "block";
  }
}

//Recipe 2 Pop up
function openForm_2() {
  document.getElementById("form2").style.display = "block";
}

function closeForm_2() {
  document.getElementById("form2").style.display = "none";
}

function submitForm_2() {
  if (document.getElementById("textbox2").value != "") {
    document.getElementById("form2").style.display = "none";
    document.getElementById("alert2").style.display = "none";
    document.getElementById("textbox2").value = ""
    commentinc_2();
  }else if (document.getElementById("textbox2").value == "") {
    document.getElementById("alert2").style.display = "block";
  }
}

//Recipe 3 Pop up
function openForm_3() {
  document.getElementById("form3").style.display = "block";
}

function closeForm_3() {
  document.getElementById("form3").style.display = "none";
}

function submitForm_3() {
  if (document.getElementById("textbox3").value != "") {
    document.getElementById("form3").style.display = "none";
    document.getElementById("alert3").style.display = "none";
    document.getElementById("textbox3").value = ""
    commentinc_3();
  }else if (document.getElementById("textbox3").value == "") {
    document.getElementById("alert3").style.display = "block";
  }
}

//Recipe 4 Pop up
function openForm_4() {
  document.getElementById("form4").style.display = "block";
}

function closeForm_4() {
  document.getElementById("form4").style.display = "none";
}

function submitForm_4() {
  if (document.getElementById("textbox4").value != "") {
    document.getElementById("form4").style.display = "none";
    document.getElementById("alert4").style.display = "none";
    document.getElementById("textbox4").value = ""
    commentinc_4();
  }else if (document.getElementById("textbox4").value == "") {
    document.getElementById("alert4").style.display = "block";
  }
}