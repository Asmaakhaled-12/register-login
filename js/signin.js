var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var btn = document.getElementById("btn");
var valid=document.getElementById("validation");
var users;
var nameInput;
var currentUser;
if (localStorage.getItem("users") == null) {
    users = [];
}
else {
    users = JSON.parse(localStorage.getItem("users"));
}

btn.onclick=function(){
    if (!checkInput()) {
        valid.style.color = "#dc3545"
        valid.innerHTML = "All Inpurs is Required";
    }
    else
    checkUserExist();
}

function checkUserExist(){
    var correct=false;
    var emailValue=emailInput.value;
    var passValue=passInput.value;
  for(var i=0;i<users.length;i++)
    {
       if(users[i].email==emailValue&&users[i].pass==passValue)
       {
           
        correct=true;
        currentUser=users[i];
          break;         
       }

    }

    if(correct==true)
    {
        location.href = "welcome.html";
        localStorage.setItem("currentuser",JSON.stringify(currentUser))
    }
    else{
        valid.style.color="#dc3545"
        valid.innerHTML="Incorrect Mail or Password"
    }
}

function checkInput() {
    if (emailInput.value == "" || passInput.value == "") {
        return false;
    }
    else
        return true;
}