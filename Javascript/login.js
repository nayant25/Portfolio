function validate(){
    user = document.getElementById("username").value
    pass = document.getElementById("password").value

    if(user.length == 0){
        alert("Please enter Username")
        document.getElementById("username").focus()//cusrsor blink using focus
    }else if(pass.length == 0){
        alert("Please enter Password")
        document.getElementById("password").focus()//cusrsor blink using focus
    }
    else{
        myform.submit();
    }
}