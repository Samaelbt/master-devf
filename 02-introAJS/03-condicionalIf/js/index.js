//variables
var nombreCompleto, añoNacimiento, añoActual, edad, msg;

nombreCompleto = prompt('Ingresa tu nombre');
añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
añoActual = Number(prompt('Ingresa el año actual'));

//proceso logico
if(nombreCompleto ==="" || añoActual === 0 || añoNacimiento === 0)
{
    msg = "Te faltaron datos, por favor ingresalos todos"
}
else
{
    edad = añoActual - añoNacimiento;

    if(edad <=12)
    {
        msg = `Hola ${nombreCompleto} tu eres un niño aun`
    }
    else if (edad > 12 && edad <18)
    {
        msg = `Hola ${nombreCompleto} tu eres un adolescente`
    }
    else if(edad >= 18&& edad < 65)
    {
        msg = `Hola ${nombreCompleto} ya eres mayor de edad, te invito una chela`
    }
    else
    {
        msg = `Hola ${nombreCompleto} tu eres un adulto mayor`
    }
}

//salida de datos
alert(msg);