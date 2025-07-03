document.addEventListener('DOMContentLoaded', function() {

    // --- EFEITO 1: MENU HAMBÚRGUER ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // --- EFEITO 2: EFEITO DE DIGITAÇÃO NA PÁGINA INICIAL (Alteração 1) ---
    const typingEffectElement = document.getElementById('typing-effect');
    if (typingEffectElement) {
        // Agora o script digita apenas a parte que vai no span
        const text = "Desenvolvedor Full-Stack!"; 
        let index = 0;
        typingEffectElement.innerHTML = ''; // Garante que o span comece vazio
        function type() {
            if (index < text.length) {
                typingEffectElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 100); // Velocidade da digitação
            }
        }
        type();
    }

    // --- VALIDAÇÃO DO FORMULÁRIO DE CONTATO (Sem alterações) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const successMessage = document.getElementById('form-success-message');
            
            let isValid = true;
            
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            successMessage.textContent = '';
            successMessage.style.display = 'none';

            if (name.value.trim() === '') { showError(name, 'Por favor, preencha seu nome.'); isValid = false; }
            if (email.value.trim() === '') { showError(email, 'Por favor, preencha seu e-mail.'); isValid = false; } 
            else if (!isValidEmail(email.value.trim())) { showError(email, 'Por favor, insira um e-mail válido.'); isValid = false; }
            if (message.value.trim() === '') { showError(message, 'Por favor, escreva uma mensagem.'); isValid = false; }

            if (isValid) {
                successMessage.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
                successMessage.style.display = 'block';
                contactForm.reset();
            }
        });

        function showError(inputElement, message) {
            const errorElement = inputElement.nextElementSibling;
            errorElement.textContent = message;
        }

        function isValidEmail(email) {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return regex.test(email);
        }
    }
});