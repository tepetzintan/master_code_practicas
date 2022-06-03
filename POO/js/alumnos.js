class Alumno{

    constructor (nombre, apellido, caliF, inscrito){
        this.nombre = nombre;
        this.apellido = apellido;
        this.caliF = caliF;
        this.inscrito = inscrito;
    }


    obtenerInicialesAlumno() {
        var separa=datos.split(""); 
        datos=separa[0].charAt(0)+"." + "" +separa[0].charAt(0)+"." + "" +separa[0].charAt()+"."; 
        alert("Las iniciales de tu nombre y apellidos son: " + this.nombre);  

    } 
    obtenerNombreCompleto(){

    }
}
let datos = new Alumno('Luis', 'Tepetzintan', 100, 'Si');

separa.obtenerInicialesAlumno();




console.log(this.nombre);





    
