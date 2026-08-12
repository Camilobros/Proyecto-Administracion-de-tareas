let inputTitulojs = document.querySelector('#inputTitulo');
let inputDescripcionjs = document.querySelector('#inputDescripcion');
let inputfechajs = document.querySelector('#inputfecha')
let botonCrear = document.querySelector('.btn-primary');

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