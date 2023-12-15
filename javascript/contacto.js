function enviarConsulta() {
    
    let nombreApellido = document.getElementById("nombreApellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let consulta = document.getElementById("consulta").value;
    let provincia = document.getElementById("provincia").value;
    let localidad = document.getElementById("localidad").value;

    
    console.log("Nombre y Apellido: " + nombreApellido);
    console.log("Email: " + email);
    console.log("Telefono: " + telefono);
    console.log("Consulta: " + consulta);
    console.log("Provincia: " + provincia);
    console.log("Localidad: " + localidad);

    
    Swal.fire({
        icon: 'success',
        title: '¡Enviada!',
        text: 'Estaremos respondiendo su consulta en la brevedad.'
    });
}

function restablecerFormulario() {

    document.getElementById("nombreApellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("consulta").value = "";
    document.getElementById("provincia").selectedIndex = 0;
    document.getElementById("localidad").selectedIndex = 0; 
}