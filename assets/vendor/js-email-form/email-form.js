(function () {
  "use strict";

  emailjs.init('EDHYk4d-Rjf9GBUoN');  

  const serverID = 'default_service';
  const templateID = 'template_g8kc4zf';
  const publicKey = 'EDHYk4d-Rjf9GBUoN';

  document.getElementById('contact-form')
    .addEventListener('submit',
      function(event) {
        event.preventDefault();

        document.querySelector('.loading').classList.add('d-block');
        document.querySelector('.error-message').classList.remove('d-block');
        document.querySelector('.sent-message').classList.remove('d-block');
      
        emailjs.sendForm(
          serverID,
          templateID,
          document.getElementById('contact-form'),
          publicKey
          )
            .then(function() {
                document.querySelector('.loading').classList.remove('d-block');
                document.querySelector('.sent-message').classList.add('d-block');
                document.getElementById('contact-form').reset(); 
            }, function(error) {
                displayError(document, error);
            });
      }
    );
  
  function displayError(form, error) {
    form.querySelector('.loading').classList.remove('d-block');
    form.querySelector('.error-message').innerHTML = error;
    form.querySelector('.error-message').classList.add('d-block');
  }

})();
