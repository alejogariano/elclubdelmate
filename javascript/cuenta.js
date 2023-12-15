function validarFormulario() {
  
  let emailInput = document.getElementById('inputEmail');
  let nombreInput = document.getElementById('inputNombre');
  let terminosCheckbox = document.getElementById('gridCheck');

  
  if (!emailInput.value.trim() || !nombreInput.value.trim()) {
      
      Swal.fire({
          title: 'Error',
          text: 'Por favor, completa todos los campos obligatorios.',
          icon: 'error',
          confirmButtonText: 'Ok'
      });
      return;
  }

  
  if (!terminosCheckbox.checked) {
      
      Swal.fire({
          title: 'Error',
          text: 'Debes aceptar los términos y condiciones.',
          icon: 'error',
          confirmButtonText: 'Ok'
      });
      return;
  }

  
  Swal.fire({
      title: '¡Asociado!',
      text: 'Te has asociado exitosamente.',
      icon: 'success',
      confirmButtonText: 'Ok'
  }).then((result) => {
      
      if (result.isConfirmed) {
          window.location.href = '../index.html';
      }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  
  let formulario = document.getElementById('asociacion');
  formulario.addEventListener('submit', function(event) {
      
      event.preventDefault();
      
      validarFormulario();
  });
});

