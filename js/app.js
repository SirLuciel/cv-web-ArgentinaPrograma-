//Funciones de ocultar/mostrar 
window.onload = () => {

    let quien_soy = document.getElementById("quien_soy");//Toma el id del div "quien soy".
    let contacto = document.getElementById("contacto");//Toma el id del div "contacto".
    let experiencia = document.getElementById("experiencia");//Toma el id del div "ecperiencia".

    quien_soy.style.display = "block";// bloquea el div "quien soy" para que solo se visualice él.
    contacto.style.display = "none";// oculta el div "contacto".
    experiencia.style.display = "none";// oculta el div "experiencia".
};
function show(div_id){
    window.onload();
    
if (div_id === "experiencia"){
        quien_soy.style.display = "none";// oculta el div "quien soy".
        contacto.style.display = "none";// oculta el div "contacto".
        experiencia.style.display = "block";// bloquea el div "experiencia" para que solo se visualice él.
    }if(div_id === "contacto"){
        quien_soy.style.display = "none";// oculta el div "quien soy".
        contacto.style.display = "block";// bloquea el div "contacto" para que solo se visualice él.
        experiencia.style.display = "none";// oculta el div "experiencia".
    }
}
//Para cancelar el evento de recargar pagina del sumbit y obtener los datos del formulario.
const form = document.getElementById("contacto_form");
form.addEventListener("submit", (event) =>{
    event.preventDefault();//cancela el evento sumbit.
    let formData = Object.fromEntries( new FormData(event.target));//en esta variable se toman los datos.
    alert("Datos del formulario: "+JSON.stringify(formData));//alerta para demostrar que los datos son tomados.
});
