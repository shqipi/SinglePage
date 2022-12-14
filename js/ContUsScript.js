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
    document.getElementById("navigation").style.top = "-120px";
    document.getElementById("side-div").style.right = "-211px";
  }
  prevScrollpos = currentScrollPos;
}

//Contact  Us
function ValidateEmail(inputText){
  var mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(inputText.match(mailformat)){
    alert("Email i shkruar eshte valid!");  
    return true;
  }else{
    alert("Email i shkruar nuk eshte valid!");   
    return false;
  }
}
function validateMyform(){
  var FirstName = document.getElementById("fname").value;
  if(FirstName.length == null || FirstName.length < 2){
    alert("Emri nuk munde te jet i zbrazet apo te jet me i vogel se 2 shkronja");
  }

  var Lastname = document.getElementById("lname").value;
  if(Lastname.length == null || Lastname.length <2){
    alert("Mbiemri nuk munde te jet i zbrazet apo te jet me i vogel se 2 shkronja");
  }

  var OwnerName = document.getElementById("ovname").value;
  if(OwnerName == 0 || OwnerName || null || OwnerName <2){
    alert("Emri i kompanis nuk munde te jet i zbrazet apo te jet me i vogel se 2 shkronja");
  }

  var phone =document.getElementById("Phone").value;
  var test = /^\d{9}$/;
  if(Phone.value.match(test)){
    // alert("Numri eshte valid");
    return true;
  }else{
    alert("Numri nuk eshte valid ('XXX-XXX-XXX')");
  }

  var address = document.getElementById("Address").value;
  if(address == 0 || address || null || address <2){
    alert("Adresa e kompanis nuk munde te jet i zbrazet apo te jet me i vogel se 2 shkronja");
  }

  var email = document.getElementById("Email").value;
  ValidateEmail(email);

  var select =document.getElementById("city").value;
  if(city.value){
    return true;
  }else{
    alert("Ju lutem zgjidheni njerin opcion");
  }

  var zipcode = document.getElementById("ZipCode").value;
  var test = /^\d{5}$/;
  if(ZipCode.value.match(test)){
    return true;
  }else{
    alert("Zip codi duhet te permbaj te pakten 5 numra");
  }

  var  Kerkasa = document.getElementById("Kerkasa").value;
    if(Kerkasa== 0 || Kerkasa == null || Kerkasa < 2){
      alert("Kërkesa nuk mund të jetë e zbrazë dhe të ketë më pas se dy shkronja");
    }
}

function hideShow(){
  var i;
  var divi =document.getElementById("hide");
  var element = document.getElementsByName('CompType');
  for(i=0; i < element.length; i++){
    var vlera = element[i].value;
    if(element[i].checked){
      if(vlera === "Tjeter")
      {
        divi.style.display = "block";
      }
      else{
        divi.style.display = "none";
      }
    }
  }
}