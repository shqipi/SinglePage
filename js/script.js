//Side div
function showNav(){
    var element = document.getElementById("side-div");
    element.classList.toggle('hide');
}

function hideNav(){
    var element = document.getElementById("side-div");
    element.classList.add('hide');
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation").style.top = "0";
    document.getElementById("side-div").style.right = "0";
  } else {
    document.getElementById("navigation").style.top = "-100px";
    document.getElementById("side-div").style.right = "-211px";
  }
  prevScrollpos = currentScrollPos;
}

//User log-in

function validateform(){
  var user = document.getElementById("user").value;
  if(user.length < 5)
  alert("Username, smundë të jetë i zbrazët ose të ketë më pak se 5 karaktere");

  var Password = document.getElementById("Password");
  var test = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  console.log("anything");
  if(Password.value.match(test)){
    alert("Password eshte ne rregull");
  }else{
    var label = document.getElementById("info");
    label.style.display = "block";
  }
}


// Porofolio

filterSelection("BRANDING")

function  filterSelection(c){
    var x, i;
    x = document.getElementsByClassName('colum');
    for(i = 0; i< x.length; i++){
        w3RemoveClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1)
        x[i].className += " " +  "show";
    }
}


function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnsection");
var btn = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//Subscribe validation

function ValidateEmail(inputText){
  var mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(inputText.value.match(mailformat)){
    alert("Email i shkruar eshte valid!");   
    document.emailvalid.Email.focus();
    return true;
  }else{
  alert("Email i shkruar nuk eshte valid!");   
    document.emailvalid.Email.focus();
    return false;
  }
}

//Contact uS Main Page

function ValidateMainPageForm(){
  var Subject = document.getElementById("Subjext").value;
  if(Subject == 0 || Subject == null){
    alert("Subject nuk mundet te jet e zbrazet");
  }

  var name = document.getElementById("name").value;
  if(name == 0 || name == null || name < 2){
    alert("Emri nuk mundet te jet e zbrazet apo te jet me i vogel se 2 shkronja");
  }

  var email = document.getElementById("email").value;
  var testem = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(email.match(testem)){
    alert("Email eshte valid");
  }else{
    alert("Email nuk eshte valid");
  }

  var Message = document.getElementById("Message").value;
    if(Message.length == null || Message.length < 2){
      alert("Ju lutem shkruani nje koment ne pjesen e 'Message'");
    }

}

  
 











