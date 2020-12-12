function validacion(){
    console.log("validacion")
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
     if (email == "jframirez78@misena.edu.co" & password == "1234"){
        location.href="www.google.com";
}
     else {document.getElementById ("validacion").innerHTML="No coincide"
}

}
   
