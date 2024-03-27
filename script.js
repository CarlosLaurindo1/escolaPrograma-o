// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submitTestimonial');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do formulário
        var testimonialInput = document.getElementById('testimonial');
        var testimonialList = document.getElementById('testimonialList');
        
        var testimonialText = testimonialInput.value.trim();
        
        if (testimonialText !== '') {
            var testimonialItem = document.createElement('div');
            testimonialItem.classList.add('alert', 'alert-success', 'mt-3');
            testimonialItem.textContent = testimonialText;
            testimonialList.appendChild(testimonialItem);
            testimonialInput.value = ''; // Limpa o campo de depoimento após o envio
        } else {
            alert('Por favor, insira um depoimento válido.');
        }
    });
});
