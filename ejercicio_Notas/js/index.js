/*
Vamos a crear una aplicación que nos permita a un profesor generar las notas definitivas de sus alumnos.

Debemos permitir al profesor que nos indique cuantos alumnos va a calificar.
Debemos permitir al profesor ingresar la cantidad de notas que va a promediar en general.
Con esas notas vamos a obtener el promedio de cada estudiante
Mostrar al profesor al final una lista de estudiantes con su nombre y su definitiva.
*/

//variables y entradas
var cantidadAlumnos, cantidadNotas, nombre, nota, promedio;
var nombres = [];
var resultados = [];

cantidadAlumnos = Number(prompt('Ingresa la cantidad de alumnos de tu clase'))
cantidadNotas = Number(prompt('Ingresa la cantidad de notas a promediar de los Alumnos'))

//proceso logico
for(i = 1; i <= cantidadAlumnos; i++){
    nombre = prompt('Ingresa el nombre del alumno ' + i)

    nota = Number(prompt('Ingresa la nota'));
}


