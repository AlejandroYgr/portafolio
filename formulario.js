function validateForm() {

    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.querySelector('textarea').value;
  

    if (nombre.trim() === '') {
      alert('Por favor, ingresa tu nombre');
      return false;
    }
  
    if (telefono.trim() === '') {
      alert('Por favor, ingresa tu teléfono');
      return false;
    }
  
    if (!/^[0-9]{9}$/.test(telefono)) {
      alert('Por favor, ingresa un número de teléfono válido');
      return false;
    }
  
    if (correo.trim() === '') {
      alert('Por favor, ingresa tu correo electrónico');
      return false;
    }
  
    if (!/\S+@\S+\.\S+/.test(correo)) {
      alert('Por favor, ingresa un correo electrónico válido');
      return false;
    }
  
    if (mensaje.trim() === '') {
      alert('Por favor, ingresa un mensaje');
      return false;
    }
      return true;
  }
  

  var form = document.querySelector('.formulario form');
  form.addEventListener('submit', function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });