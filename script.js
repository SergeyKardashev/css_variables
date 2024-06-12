var root = document.querySelector(':root');  
var rootStyles = getComputedStyle(root);  
var mainColor = rootStyles.getPropertyValue('--main-color');

console.log(mainColor);

// root.style.setProperty('--main-color', '#88d8b0');

const buttonViolet = document.querySelector('#violet');
console.log(buttonViolet);
const buttonGreen = document.querySelector('#green');
console.log(buttonGreen);

buttonViolet.addEventListener('click', () => {
    console.log('violet button clicked');
    root.style.setProperty('--main-color', 'violet')
});

buttonGreen.addEventListener('click', () => {
    console.log('violet button clicked');
    root.style.setProperty('--main-color', 'lightgreen')
});