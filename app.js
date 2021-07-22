const share = document.querySelector('.perfil__share');
const options = document.querySelector('.options');
const img = document.querySelector('.share__img');
const color = document.querySelector('.color');

share.addEventListener('click', shareFunction);

function shareFunction() {
    if(options.classList.contains('hidden')){
        img.style.background = "#6e7f97";
        color.style.fill = '#fff';
        options.classList.remove('hidden');
    } else {
        img.style.background = "hsla(212, 23%, 69%, 0.582)";
        color.style.fill = '#6E8098';
        options.classList.add('hidden');
    } 
    
}