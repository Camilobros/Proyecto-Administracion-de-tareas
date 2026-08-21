let inputTitulojs = document.querySelector('#inputTitulo');
let inputDescripcionjs = document.querySelector('#inputDescripcion');
let inputfechajs = document.querySelector('#inputfecha')
let botonCrear = document.querySelector('.btn-primary');
const botonesCompletar = document.querySelectorAll('.btn-completar');


botonesCompletar.forEach(function(boton) {
    
    boton.addEventListener('click', function(evento) {
        
        evento.preventDefault(); 

        
        const tarjeta = boton.closest('.card');

        
        tarjeta.classList.toggle('bg-success-subtle'); // Le pone fondo verde a la tarjeta
        

        
        if (tarjeta.classList.contains('bg-success-subtle')) {
            boton.textContent = 'Pendiente';
            boton.classList.replace('btn-success', 'btn-warning'); // Botón amarillo
        } else {
            boton.textContent = 'Completada';
            boton.classList.replace('btn-warning', 'btn-success'); // Botón verde
        }
    });
    
});







botonCrear.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (inputDescripcionjs.value === "" || inputTitulojs.value === "" || inputfechajs.value === "") {

        Swal.fire({
            title: "Revisa de nuevo, tienes un campo vacio",
            width: 600,
            padding: "3em",
            color: "darkorchid",
            background: "#fff url(/images/trees.png)",
            backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `
        });


        return;



    };



    let inputDescripcionV = inputDescripcionjs.value;
    let inputTituloV = inputTitulojs.value;
    let inputfechaV = inputfechajs.value;

    let prioridadjs = document.querySelector('input[name="prioridadRadios"]:checked');
    let prioridadV = prioridadjs.value; 





    console.log("El titulo es: " + inputTituloV);
    console.log("La descripcion es: " + inputDescripcionV);
    console.log("la fecha es: " + inputfechaV);
    console.log("La prioridad es: " + prioridadV);
});

const taskManager = new TaskManager(); 
 
console.log(taskManager.tasks); 