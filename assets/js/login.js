
$(document).ready(function(){

var a=document.getElementById("show");
a.onclick=function(){
    document.getElementById("showmodal").style.visibility="visible";
}

var back=document.getElementById("back");
back.onclick=function(){
    document.getElementById("showmodal").style.visibility="hidden";
}

var login=document.getElementById("login");
login.onclick=function(){
    document.getElementById("showlogin").style.visibility="visible";
}

var backlogin=document.getElementById("backlogin")
backlogin.onclick=function(){
    document.getElementById("showlogin").style.visibility="hidden";
}
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });