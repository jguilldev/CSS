// inicio script de flex basis

// Selección del select para flex-basis
const selectFlexBasis = document.getElementById('flexBasisExample');
// Elementos específicos para aplicar flex-basis
const flexBasisItem1 = document.querySelector('.flex-basis-item1');
const flexBasisItem2 = document.querySelector('.flex-basis-item2');
const flexBasisItem3 = document.querySelector('.flex-basis-item3');

// Función para aplicar flex-basis
function applyFlexBasis(values) {
  flexBasisItem1.style.flexBasis = values[0];
  flexBasisItem2.style.flexBasis = values[1];
  flexBasisItem3.style.flexBasis = values[2];
}

// Escucha cambios en el select y aplica flex-basis
selectFlexBasis.addEventListener('change', (event) => {
  const values = event.target.value.split(',').map(value => value.trim());
  applyFlexBasis(values);
});

// Fin script de flex basis


/* inicio script short hand grow shrink basis */

// Selección del select para la propiedad abreviada flex
const selectFlexShorthand = document.getElementById('flexShorthandExample');
// Elementos específicos para aplicar la propiedad abreviada flex
const flexShorthandItem1 = document.querySelector('.flex-shorthand-item1');
const flexShorthandItem2 = document.querySelector('.flex-shorthand-item2');
const flexShorthandItem3 = document.querySelector('.flex-shorthand-item3');

// Función para aplicar la propiedad abreviada flex
function applyFlexShorthand(values) {
  flexShorthandItem1.style.flex = values;
  flexShorthandItem2.style.flex = values;
  flexShorthandItem3.style.flex = values;
}

// Escucha cambios en el select y aplica la propiedad abreviada flex
selectFlexShorthand.addEventListener('change', (event) => {
  const values = event.target.value;
  applyFlexShorthand(values);
});


    /* fin script short hand grow shrink basis */

    

/* Inicio wrap */



// Selección del select para flex-wrap
const selectFlexWrap = document.getElementById('flexWrapExample');
// Contenedor específico para aplicar flex-wrap
const flexWrapContainer = document.getElementById('flexContainerFlexWrapExample');

// Cambia flex-wrap cuando el usuario selecciona una opción
if (selectFlexWrap && flexWrapContainer) {
  selectFlexWrap.addEventListener('change', (event) => {
    flexWrapContainer.style.flexWrap = event.target.value;
  });
}

/* Fin wrap */
