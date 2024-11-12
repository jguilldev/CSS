    // inicio script justify content

    const selectJustifyExample = document.getElementById('justifyContentExample');
    const justifyContainer = document.getElementById('justifyExampleContainer');

    selectJustifyExample.addEventListener('change', (event) => {
      justifyContainer.style.justifyContent = event.target.value;
    });

    // fin script justify content


    //   inicio script aling items 

    // Control de align-items con ID específico y compartido con justify-content

    // Selección del select para align-items
    const selectAlignItems = document.getElementById('alignItemsExample');
    // Contenedor específico para aplicar align-items
    const flexContainerAlign = document.getElementById('flexContainerAlignExample');

    // Cambia align-items cuando el usuario selecciona una opción
    if (selectAlignItems && flexContainerAlign) {
    selectAlignItems.addEventListener('change', (event) => {
        flexContainerAlign.style.alignItems = event.target.value;
    });
    }
    
    //   fin script aling items 


    // inicio script align content 

    // Selección del select para align-content
    const selectAlignContent = document.getElementById('alignContentExample');
    // Contenedor específico para aplicar align-content
    const flexContainerAlignContent = document.getElementById('flexContainerAlignContentExample');

    // Cambia align-content cuando el usuario selecciona una opción
    if (selectAlignContent && flexContainerAlignContent) {
      selectAlignContent.addEventListener('change', (event) => {
        flexContainerAlignContent.style.alignContent = event.target.value;
      });
    }

    // fin script align content 




    // inicio script grow column


// script2.js - Control de flex-grow con ID específico

// Selección del select para flex-grow
const selectFlexGrow = document.getElementById('flexGrowExample');
// Contenedor específico para aplicar flex-grow
const flexGrowItem1 = document.querySelector('.flex-grow-item1');
const flexGrowItem2 = document.querySelector('.flex-grow-item2');
const flexGrowItem3 = document.querySelector('.flex-grow-item3');

// Cambia flex-grow cuando el usuario selecciona una opción
if (selectFlexGrow && flexGrowItem1 && flexGrowItem2 && flexGrowItem3) {
  selectFlexGrow.addEventListener('change', (event) => {
    const values = event.target.value.split(', ');
    flexGrowItem1.style.flexGrow = values[0];
    flexGrowItem2.style.flexGrow = values[1];
    flexGrowItem3.style.flexGrow = values[2];
  });
}


    // fin script grow column


    // inicio script grow row(filas)

    const selectFlexGrowRow = document.getElementById('flexGrowRowExample');
    const flexGrowRowItem1 = document.querySelector('.flex-grow-row-item1');
    const flexGrowRowItem2 = document.querySelector('.flex-grow-row-item2');
    const flexGrowRowItem3 = document.querySelector('.flex-grow-row-item3');

    selectFlexGrowRow.addEventListener('change', (event) => {
      const values = event.target.value.split(', ');
      flexGrowRowItem1.style.flexGrow = values[0];
      flexGrowRowItem2.style.flexGrow = values[1];
      flexGrowRowItem3.style.flexGrow = values[2];
    });
    // fin script grow row(filas)



    // inicio script flex shrink en columnas
    const selectFlexShrink = document.getElementById('flexShrinkExample');
    const flexShrinkItem1 = document.querySelector('.flex-shrink-item1');
    const flexShrinkItem2 = document.querySelector('.flex-shrink-item2');
    const flexShrinkItem3 = document.querySelector('.flex-shrink-item3');
        const flexShrinkContainer = document.getElementById('flexShrinkContainer');

    function applyFlexShrink(values) {
      flexShrinkItem1.style.flexShrink = values[0];
      flexShrinkItem2.style.flexShrink = values[1];
      flexShrinkItem3.style.flexShrink = values[2];
    }

    selectFlexShrink.addEventListener('change', (event) => {
      const values = event.target.value.split(',');
      applyFlexShrink(values);
    });

    // final script flex shrink en columnas

// script2.js - Control de flex-shrink en filas

// Selección del select para flex-shrink en filas
const selectFlexShrinkRow = document.getElementById('flexShrinkRowExample');
const flexShrinkRowItem1 = document.querySelector('.flex-shrink-row-item1');
const flexShrinkRowItem2 = document.querySelector('.flex-shrink-row-item2');
const flexShrinkRowItem3 = document.querySelector('.flex-shrink-row-item3');

// Función para aplicar flex-shrink
function applyFlexShrinkRow(values) {
  flexShrinkRowItem1.style.flexShrink = parseInt(values[0]);
  flexShrinkRowItem2.style.flexShrink = parseInt(values[1]);
  flexShrinkRowItem3.style.flexShrink = parseInt(values[2]);
}

// Escucha los cambios en el select y aplica flex-shrink
selectFlexShrinkRow.addEventListener('change', (event) => {
  const values = event.target.value.split(',').map(value => parseInt(value.trim()));
  applyFlexShrinkRow(values);
});

    
    // fin  de script flex shrink en filas


    // inicio script de flex basis

  // script2.js - Control de flex-basis con ID específico

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

// script2.js - Control de la propiedad abreviada flex con ID específico

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


/* Inicio FlexFlow */

// Selección del select para flex-flow
const selectFlexFlow = document.getElementById('flexFlowExample');
// Contenedor específico para aplicar flex-flow
const flexFlowContainer = document.getElementById('flexContainerFlexFlowExample');

// Cambia flex-flow cuando el usuario selecciona una opción
if (selectFlexFlow && flexFlowContainer) {
  selectFlexFlow.addEventListener('change', (event) => {
    flexFlowContainer.style.flexFlow = event.target.value;
  });
}

/* Inicio FlexFlow */