
/*
Entregas
*Funciones de orden superior
Funciones comunes con variables, arrays constantes etc
objetos js -array de objetos literales
logica de la app
entredas salidas por prompt etc etc 

*/

const CURSOS = [
    {imagen: '🧘‍♂️', codigo: 1, nombre: 'YOGA', precio: 15000, duracion_M: 12, inscriptos: []},
    {imagen: '🦶', codigo: 2, nombre: 'REFLEXOLOGIA', precio: 12000, duracion_M: 10, inscriptos: []},
    {imagen: '🕉', codigo: 3, nombre: 'KUNDALINI', precio: 10000, duracion_M: 18, inscriptos: []},
    {imagen: '🎎', codigo: 4, nombre: 'REIKI', precio: 8000, duracion_M: 6, inscriptos: []},
    {imagen: '👩🏽', codigo: 5, nombre: 'YOGA PARA NIÑOS', precio: 11000, duracion_M: 12, inscriptos: []},
    {imagen: '🧶', codigo: 6, nombre: 'PILATES', precio: 7000, duracion_M: 12, inscriptos: []},
];

function mostrarInfoCurso() {

    let continuar = true;
    let codigosConsultados = [];

    while (continuar) {

        const CODIGO_CURSO = parseInt(prompt("Ingrese el código del curso del que desea obtener información:"));

        if (CODIGO_CURSO >= 1 && CODIGO_CURSO <= 6) {

            if (codigosConsultados.includes(CODIGO_CURSO)) { //me fijo si ya consulto en el array qeu se ira llenando
                
                console.warn('Ya solicito dicha información para este curso.');

            } else {

                let CURSO = CURSOS.find(curso => curso.codigo === CODIGO_CURSO);
                console.table([CURSO]);
                codigosConsultados.push(CODIGO_CURSO);// se supone que la misma persona no se inscribiria 2 veces al mismo curso solo que se clonaria
               
            }
        } else {
            alert('El código ingresado no es válido. Por favor ingrese un código entre 1 y 6.');
        }

        continuar = confirm("¿Desea mostrar información de más cursos? Ingrese otro código.");
    }
    //console.log(codigosConsultados);
}
 

    function inscripcionCurso() {
    let nuevoCurso = true; // Variable para controlar si el usuario desea continuar inscribiéndose

    while (nuevoCurso) { // true

        let codigoCurso = parseInt(prompt("¿A qué curso desea inscribirse? Ingrese el código, por favor."));
        const CURSO = CURSOS.find(curso => curso.codigo === codigoCurso);

        if (CURSO) {

            if (CURSO.inscriptos.length < 15) { 

                let nombreAlumno = prompt(`Ingrese su nombre para inscribirse en ${CURSO.nombre}:`);
                if (nombreAlumno !== ""){// porque le puse esto en ese momento? 
                    nombreAlumno = nombreAlumno.toUpperCase();// mejor hacemos esto cosa que nos pongan cualquier verduraso
                    CURSO.inscriptos.push(nombreAlumno);
                    console.log(`Muchas gracias ${nombreAlumno}, te has inscrito en el curso de ${CURSO.nombre}.`);
                    console.log(`El curso ${CURSO.nombre} tiene los alumnos:  ${CURSO.inscriptos.length}`)
                   
                } else {
                    alert("Ingresa un nombre válido, por favor.");
                }
            } else {
                console.log(`El curso ${CURSO.nombre} ya está COMPLETO!!`);
            }
        } else {
            alert("Código de curso inválido.");
        }

        nuevoCurso = confirm("¿Desea inscribirse a otro curso?"); // Confirm devuelve true si se presiona "Aceptar" y false si se presiona "Cancelar"
    }  
}






/*
const Prueba = [];

function ingresar (){
    continuar_1 = true

    while (continuar_1){
   let ingresando = parseInt(prompt("ingresa numeros para ir metiendo al array prueba"))
    Prueba.push(ingresando)
    console.log(Prueba) 
    continuar_1 = confirm("desea seguir agregando numeros?")
    // porque la ultima iteracion me tira Nan es como que me agarra ese false

}

}
 
    function mostrarInscriptos(){
    CURSOS.forEach(curso => {
    console.log(`Alumnos inscritos en ${curso.nombre}:`);
    curso.inscritos.forEach(alumno => {
        console.log(alumno);
    });
}}*/
