//Funciones de ocultar/mostrar sobre mi/experiencia en la barra de navegacion.
window.onload = () => {

    let x = document.getElementById("quien_soy");
    let y = document.getElementById("contacto");
    let z = document.getElementById("experiencia");

    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
};
function show(param_div_id){
    let x = document.getElementById("quien_soy");
    let y = document.getElementById("contacto");
    let z = document.getElementById("experiencia");
    
    if (param_div_id === "quien_soy"){
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }else if (param_div_id == "experiencia"){
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    }else{
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}