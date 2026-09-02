let inputTitulojs = document.querySelector('#inputTitulo');
let inputDescripcionjs = document.querySelector('#inputDescripcion');
let inputfechajs = document.querySelector('#inputfecha')
let botonCrear = document.querySelector('.btn-primary');
const botonesCompletar = document.querySelectorAll('.btn-completar');
const taskManager = new TaskManager();

taskManager.load();   
taskManager.render();

const newTaskForm = document.querySelector('#newTaskForm');
newTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (inputDescripcionjs.value === "" || inputTitulojs.value === "" || inputfechajs.value === "") {

        Swal.fire({
            title: "Revisa de nuevo, tienes un campo vacio",
            width: 600,
            padding: "3em",
            color: "darkorchid",
            background: "#fff",
            backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `
        });


        return;



    };

    let inputTituloV = inputTitulojs.value;
    let inputDescripcionV = inputDescripcionjs.value;
    let inputfechaV = inputfechajs.value;

    let prioridadjs = document.querySelector('input[name="prioridadRadios"]:checked');
    let prioridadV = prioridadjs.value;

    console.log("El titulo es: " + inputTituloV);
    console.log("La descripcion es: " + inputDescripcionV);
    console.log("la fecha es: " + inputfechaV);
    console.log("La prioridad es: " + prioridadV);

    taskManager.addTask(
    inputTituloV,
    inputDescripcionV,
    inputfechaV,
    prioridadV
    );

    taskManager.save();

    taskManager.render();

    newTaskForm.reset();



    console.log(taskManager.tasks); 

});



console.log(taskManager.tasks);




const contenedorPrincipal = document.querySelector('.conte-principal');

contenedorPrincipal.addEventListener('click', function(evento) {
    
    
    if (evento.target.classList.contains('delete-button')) {
        evento.preventDefault(); 
        
        const parentTask = evento.target.closest('.card');
        const taskId = Number(parentTask.dataset.taskId);
        taskManager.deleteTask(taskId);
        
        console.log("Se eliminó la tarea", taskId);
        
        
        taskManager.save();
        
        taskManager.render();
    }

    
    if (evento.target.classList.contains('btn-completar')) {
        evento.preventDefault();
        
        
        const boton = evento.target; 
        const tarjeta = boton.closest('.card');
        
        tarjeta.classList.toggle('bg-success-subtle'); 

        if (tarjeta.classList.contains('bg-success-subtle')) {
            boton.textContent = 'Pendiente';
            boton.classList.replace('btn-success', 'btn-warning'); 
        } else {
            boton.textContent = 'Completada';
            boton.classList.replace('btn-warning', 'btn-success'); 
        }
    }
});





