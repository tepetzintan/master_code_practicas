
  
    const boton1 = document.querySelector("#b1");
  const boton2 = document.querySelector("#b2");
  const boton3 = document.querySelector("#b3");

   // Agregar listener
   boton1.addEventListener("click", function(evento){
       // Aquí todo el código que se ejecuta cuando se da click al botón
       location="cuenta1.html";
   });

   boton2.addEventListener("click", function(evento){
    // Aquí todo el código que se ejecuta cuando se da click al botón
    location="cuenta2.html";
});

boton3.addEventListener("click", function(evento){
    // Aquí todo el código que se ejecuta cuando se da click al botón
    location="cuenta3.html";
});

