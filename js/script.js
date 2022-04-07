var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var btn = document.getElementById("btn");
var h6 = document.getElementById("sucess");
var users = [];
if (localStorage.getItem("users") == null) {
    users = [];
}
else {
    users = JSON.parse(localStorage.getItem("users"));
}
btn.onclick = function () {
    if (!checkInput()) {
        h6.style.color = "#dc3545"
        h6.innerHTML = "All Inpurs is Required";
    }
    else
        addUser();
}

function addUser() {
    var exist = 0;
    var user = {
        name: nameInput.value,
        email: emailInput.value,
        pass: passInput.value
    }
    for (var i = 0; i < users.length; i++) {
        if (users[i].email.includes(user.email)) {
            h6.style.color = "#dc3545"
            h6.innerHTML = "email already exists";
            exist = 1;
            break;
        }
    }
    if (exist == 0) {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        h6.style.color = "#28a745"
        h6.innerHTML = "Suceess"
    }

}

function checkInput() {
    if (nameInput.value == "" || emailInput.value == "" || passInput.value == "") {
        return false;
    }
    else
        return true;
}

nameInput.onkeyup = function () {
    var rejxName = /^[A-z]{3,20}((\\s|\\w)?([a-z]{3,10}[0-9]{0,5}|[0-9]{1,5}))?$/
    if (!rejxName.test(nameInput.value)) {
        btn.disabled = "true"
    }
    else {
        btn.removeAttribute("disabled");
    }
}

emailInput.onkeyup = function () {
    var rejxEmail = /^[a-z]{3,10}[0-9]{0,5}@(gmail.com|yahoo.com)$/
    if (!rejxEmail.test(emailInput.value)) {
        btn.disabled = "true"
    }
    else {
        btn.removeAttribute("disabled");
    }
}

passInput.onkeyup = function () {
    var rejxEmail = /^[A-Za-z0-9_]{3,50}$/
    if (!rejxEmail.test(passInput.value)) {
        btn.disabled = "true"
    }
    else {
        btn.removeAttribute("disabled");
    }
}

