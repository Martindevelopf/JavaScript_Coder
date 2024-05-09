/*
CREAR UN ALGORITMO CON UN CONDICIONAL
CRAR UN ALGORITMO  UTILIOZANDO UN CICLO
TAMBIEN CREAR UN SIMULAOR INTERACTIVO
UTILIZAR FUNCIONES

*/

const CursoYoga = 15000;
const CursoRef = 12000;
const CursoKu= 10000;
const CursoRei= 8000;

//funcion para mostrar el precio de los cursos de la escuela de YOGA

function mostrarValorCursos(codigoCurso) {
    switch (codigoCurso) {
        case 1:
            alert("El curso de YOGA Cuesta $15000.");
            break;
        case 2:
            alert("El curso de Reflexologia Cuesta $12000.");
            break;
        case 3:
            alert("El curso de Kundalini Cuesta $10000.");
            break;
        case 4:
            alert("El curso de Reiki Cuesta $8000.");
            break;
        default:
            console.warn("Error, debe ingresar un código correcto de curso.");
            alert("Error, debes ingresar un número de curso válido (entre 1 y 4).");

            break;
    }
} 
function mostrarValorCuota(codigoCurso) {
    
    let numeroCuotas = parseInt(prompt("Ingrese el número de cuotas (máximo 6):"));

    if ( numeroCuotas <= 0 || numeroCuotas > 6) {
        console.error("El número de cuotas ingresado no es válido.");
    
    }

// guardo en variable preciototal el valor de cada curso segun lo ingresado por prompt  en funcion anterior
    let precioTotal;
    switch (codigoCurso) {
        case 1:
            precioTotal = CursoYoga;
            break;
        case 2:
            precioTotal = CursoRef;
            break;
        case 3:
            precioTotal = CursoKu;
            break;
        case 4:
            precioTotal = CursoRei;
            break;
        default:
            console.error("Error, debe ingresar un código correcto de curso ");
            return;
    }

    // hago la division para que me de el precio de cada cuota
    let valorCuota = precioTotal / numeroCuotas;

    // Muestro en pantalla el valor de las cuotas
    console.log("El valor de cada cuota para el curso es:");
    for (let i = 1; i <= numeroCuotas; i++) {
        console.log("Cuota " + i + ": $" + valorCuota.toFixed(2));
    }
}


let codigoCurso = parseInt(prompt("Ingrese el código del curso:\n1 - Yoga\n2 - Reflexología\n3 - Kundalini\n4 - Reiki"));
mostrarValorCursos(codigoCurso);
mostrarValorCuota(codigoCurso);

