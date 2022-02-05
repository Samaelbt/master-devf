/*Desafio:
    1. Solicitar los nombres completos de los miembros de la familia separados por (,)
    2. Convertir esos nombres a un array de nombres de la familia y mostrarlo en consola
    3. Combinar los dos array en un solo y reordenarlo de atras hacia adelante array y lo vamos a mostrar al usuario.
    4. Agregar las validaciones que crean necesarias.
    */
//variables y entrada
var nombre, apellido1, apellido2, nombreCompleto, nombresMiembros;
var arrayNombre = []; //inicializo arreglo vacio
var arrayFamiliares = [];
var arrayCombinado = [];

nombre = prompt('Ingresa tu nombre');
apellido1 = prompt('Ingresa tu primer apellido');
apellido2 = prompt('Ingresa tu segundo apellido');
nombresMiembros = prompt('Ingresa los nombres de tus familiares separados por una coma(,)');

if(nombre === '' || apellido1 === '' || apellido2 === '' || nombresMiembros ==='')
{
    alert('Por favor rellena todas los datos solicitados');
}
else if(nombresMiembros.includes(',') === false)
{
    alert('Olvidaste ingresar los nombre separados con una coma (,)');
}
else
{

//logica
arrayNombre.push(nombre);
arrayNombre.push(apellido1);
arrayNombre.push(apellido2);

nombreCompleto  = ` Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]} `

//salidas
console.log(arrayNombre);
console.log(arrayFamiliares);
alert(nombreCompleto);
alert(arrayCombinado.reverse());
}