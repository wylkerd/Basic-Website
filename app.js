// ativar modo estrito (reduz erros silenciosos, melhora o desempenho e fornece mais avisos e menos recursos inseguros.)
'use strict';

const switcher = document.querySelector('.btn')

const modal = document.getElementById('myModal')
const btn = document.getElementById('myBtn')
const span = document.getElementsByClassName('close')[0]

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    let className = document.body.className;

    if (className === 'light-theme') {
        this.textContent = 'Dark';
    }
    else if (className.includes('dark-theme')) {
        this.textContent = 'Light';
    }

    console.log('Current class name: ' + className);
});

// When the user clicks on the button, open the modal
btn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function() {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
});