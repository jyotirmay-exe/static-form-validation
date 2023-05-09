var validName=0,validEmail=0,validMob=0,validPass=0,validConfirm=0;

function showPass()
{
    pass = document.getElementById('pass');
    confirmpass = document.getElementById('confirmpass');
    if(pass.type=="text") { pass.type="password"; confirmpass.type="password"; }
    else { pass.type="text"; confirmpass.type="text"; }
}

function checkAllValid()
{
    if(validName && validEmail && validMob && validPass && validConfirm){
        document.getElementById('submit').disabled=false;
    }
    else{
        alert("Some data seems to be invalid/incomplete. Please re-check!");
        document.getElementById('ok').checked=false;
    }
}

function Submission()
{
    alert("You have confirmed the submission!");
}

function error(element)
{
    element.style.borderColor='red';
    element.style.boxShadow="1px 1px 10px rgb(102, 0, 0)";
    // element.parentElement.style.color="red";
}

function valid(element)
{
    element.style.borderColor="";
    element.style.boxShadow="";
}

function checkName()
{
    var name = document.getElementById("name");
    if(name.value.length<5) { 
        alert("Name cannot be less than 5 characters!"); 
        error(name);

    }
    else{
        valid(name);
        validName=1;
        document.getElementById("pass").disabled = false;
        document.getElementById("confirmpass").disabled = false;
    }
}

function checkEmail()
{
    var email = document.getElementById("email");
    if(email.value.match('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[.a-z]+$'))
    {
        valid(email);
        validEmail=1;
        document.getElementById("mob").disabled = false;
    }
    else{
        alert("Email address is invalid!");
        error(email)
    }
}

function checkMobile()
{
    var mob = document.getElementById("mob");
    if(mob.value.length!=10) 
    {
        alert("Invalid mobile number entered!");
        error(mob);
    }
    else
    {
        validMob=1;
        valid(mob);
    }
}

function checkPass()
{
    var pass = document.getElementById("pass");
    var name = document.getElementById("name");
    var firstname = name.value.split(" ")[0].toLowerCase();
    console.log(firstname);
    msg="";
    if(pass.value.length<8)
    {
        msg+="Password cannot be less than 8 characters!\n";
        validPass=0;
    }
    else{
        validPass=1;
    }
    console.log(validPass);
    if(validPass==1){
        if(pass.value.toLowerCase().includes(firstname))
        {
            msg+="Password cannot contain your first name!";
            validPass=0;
        }
    }
    if(pass.value.toLowerCase()=="password"){
        msg+="Password cannot be \"password\"";
        validPass=0;
        error(pass);
    }

    console.log(validPass);
    if(validPass==0)
    {
        alert(msg);
        error(pass);
        validPass=0;
    }
    else{
        valid(pass);
        validPass=1;
    }
}

function checkConfirm()
{
    var pass = document.getElementById("pass");
    var confirm = document.getElementById("confirmpass");
    if(confirm.value!=pass.value)
    {
        alert("Passwords don't match!");
        error(confirm);
        validConfirm=0;
    }
    else{
        validConfirm=1;
        valid(confirm);
    }
}