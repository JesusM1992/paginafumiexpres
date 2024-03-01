
let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital Mundial del Vallenato')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  function enviarFormulario() {
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    var mensajeWhatsApp = `Correo: ${email}` +
                          `Nombre: ${name}` +
                          `Teléfono: ${phone}` +
                          `Mensaje: ${message}`;

    var enlaceWhatsApp = `https://wa.me/573185068308?text=${encodeURI(mensajeWhatsApp)}`;
    window.open(enlaceWhatsApp, 'https://wa.me/573185068308');
}
