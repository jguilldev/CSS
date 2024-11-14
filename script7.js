// Inicio de float

// script2.js - Control de float y clear con IDs específicos

// Selección de los elementos select para float y clear
const selectFloatLeft = document.getElementById('floatLeftExample');
const selectFloatRight = document.getElementById('floatRightExample');
const selectClear = document.getElementById('clearExample');

// Elementos específicos para aplicar float y clear
const floatLeftBox = document.querySelector('.float-left-box');
const floatRightBox = document.querySelector('.float-right-box');
const clearContainer = document.getElementById('clearContainer');

// Cambia float de la caja izquierda
if (selectFloatLeft && floatLeftBox) {
  selectFloatLeft.addEventListener('change', (event) => {
    floatLeftBox.style.float = event.target.value;
  });
}

// Cambia float de la caja derecha
if (selectFloatRight && floatRightBox) {
  selectFloatRight.addEventListener('change', (event) => {
    floatRightBox.style.float = event.target.value;
  });
}

// Cambia clear del contenedor de limpieza
if (selectClear && clearContainer) {
  selectClear.addEventListener('change', (event) => {
    clearContainer.style.clear = event.target.value;
  });
}


// Fin de float 