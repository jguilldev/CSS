// script con ayuda de IA mientras mejoro el javaScript

const select = document.getElementById('flexDirection');
const container = document.querySelector('.container');

select.addEventListener('change', (event) => {
  container.style.flexDirection = event.target.value;
});