
const botonEnviar = document.getElementById('Enviar')

botonEnviar.addEventListener('click', function() {
    Swal.fire({
              icon: "success",
              title: "¡Gracias por tu Información!",
              text: "Has enviado tu información con éxito, en breve alguno de nuestros especialistas se comunicará contigo"
          });
          
})

function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    let mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#cotizador');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '+528115028945';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    Swal.fire({
        title: '¡Gracias por contáctarnos!',
        text: 'Ya tenemos la información de la refacción que buscas, en breve nos comunicaremos contigo.',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombreCompleto = document.querySelector('#nombreCompleto').value
        
        let tipo = document.querySelector('#tipo').value
        
        let numeroParte = document.querySelector('#numeroParte').value
        
        let marca = document.querySelector('#marca').value

        let mensaje = 'send?phone=' + telefono + '&text=*Busqueda de Refacción*%0A*Hola, mi nombre es*%0A' + nombreCompleto + '%0ANecesito un@' + tipo + '%0A*con número de parte*%0A' + numeroParte + '%0A*para un equipo de la marca*%0A' + marca + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});