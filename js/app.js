//Funciones de ocultar/mostrar sobre mi/experiencia en la barra de navegacion.
window.onload = () => {

    let quien_soy = document.getElementById("quien_soy");
    let contacto = document.getElementById("contacto");
    let experiencia = document.getElementById("experiencia");

    quien_soy.style.display = "block";
    contacto.style.display = "none";
    experiencia.style.display = "none";
};
function show(div_id){
    window.onload();
    
    if (div_id === "quien_soy"){
        quien_soy.style.display = "block";
        contacto.style.display = "none";
        experiencia.style.display = "none";
    }if (div_id === "experiencia"){
        quien_soy.style.display = "none";
        contacto.style.display = "none";
        experiencia.style.display = "block";
    }if(div_id === "contacto"){
        quien_soy.style.display = "none";
        contacto.style.display = "block";
        experiencia.style.display = "none";
    }
}
const form = document.getElementById("contacto_form");
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let formData = Object.fromEntries( new FormData(event.target));
    alert("Datos del formulario: "+JSON.stringify(formData));
});
