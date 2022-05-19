function login(form){
    if (form.usuario.value==="ibeth" || "alexis" || "diana") {
        if(form.password.value==="123"){
            location="principal.html";
        
    } else {
    alert("Usuario y/o contrasenia incorrectos");
    }
} else{
    alert("Usuario y/o contrasenia incorrectos");

}
}