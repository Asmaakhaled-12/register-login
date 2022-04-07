var user=JSON.parse( localStorage.getItem("currentuser"));
var btn=document.getElementsByClassName("btn");
var h1=document.getElementById("sayWelcome");
h1.innerHTML=`Welcome ${user.name}`;
btn.onclick=function(){
    location.href="signin.html"
}
