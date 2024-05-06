
    document.addEventListener('DOMContentLoaded', function() {
        const hamburgerButton = document.querySelector('.v > button');
        const navLinks = document.getElementById('navLinks');
        const signInOptions = document.getElementById('signInOptions');

        hamburgerButton.addEventListener('click', function() {
            navLinks.classList.toggle('hidden');
            signInOptions.classList.toggle('hidden');
        });
    });

