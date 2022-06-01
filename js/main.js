
const botonEnviar = document.getElementById('Enviar')

botonEnviar.addEventListener('click', function() {
    Swal.fire({
              icon: "success",
              title: "¡Gracias por tu Información!",
              text: "Has enviado tu información con éxito, en breve alguno de nuestros especialistas se comunicará contigo"
          });
          
})
