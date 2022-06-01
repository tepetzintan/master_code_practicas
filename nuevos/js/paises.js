
let paises= ['Monaco', 'Mexico', 'Francia','Espania','Marruecos'];

//pais = document.write("Esbribe el nombre de un pais");
//pais = prompt('Escribe el nombre de un pais correctamente.');


function longestCountry(paises){
if(!Array.isArray(paises)){
    throw TypeError('El agumento pais debe ser un array');
}
if(!paises.every(e => typeof e == 'string')){
    throw TypeError('El arreglo debe contener solamente caracteres.');
}
return paises.reduce((a, p) => a.length > p.length ? a : p, '');
} 

try{
    console.log('El pais con el nombre mas largo es: ' + longestCountry(paises));
}catch(e){
    console.log(`Error: ${e.message}`);
}