function deposito1(){
    let cantidadT=parseInt(document.getElementById('cantidadTotal').value);
    let cantidad1=parseInt(document.getElementById('cuenta1').value);
    document.getElementById('cuenta1').value=(cantidadT+cantidad1);
}
function retirar1(){
    let cantidadT=parseInt(document.getElementById('cantidadTotal').value);
    let cantidad1=parseInt(document.getElementById('cuenta1').value);
    document.getElementById('cuenta1').value=(cantidad1-cantidadT);
}
