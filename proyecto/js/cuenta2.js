function deposito2(){
    let cantidadT=parseInt(document.getElementById('cantidadTotal').value);
    let cantidad1=parseInt(document.getElementById('cuenta2').value);
    document.getElementById('cuenta2').value=(cantidadT+cantidad1);
}
function retirar2(){
    let cantidadT=parseInt(document.getElementById('cantidadTotal').value);
    let cantidad1=parseInt(document.getElementById('cuenta2').value);
    document.getElementById('cuenta2').value=(cantidad1-cantidadT);
}