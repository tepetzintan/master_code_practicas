function deposito3(){
    let cantidadT=parseInt(document.getElementById('cantidadTotal').value);
    let cantidad1=parseInt(document.getElementById('cuenta3').value);
    document.getElementById('cuenta3').value=(cantidadT+cantidad1);
}
function retirar3(){
    let cantidadT=parseInt(document.getElementById('cantidadTotal').value);
    let cantidad1=parseInt(document.getElementById('cuenta3').value);
    document.getElementById('cuenta3').value=(cantidad1-cantidadT);
}