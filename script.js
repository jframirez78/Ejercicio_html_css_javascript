function credencial(){
    console.log("credencial");
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
     if (email == "jframirez78@misena.edu.co" & password == "1234"){
        location.href="www.google.com";
}
     else {document.getElementById("credencial").innerHTML="No coincide"
    }

}
   
