    // inicio script justify items

    const selectJustifyExample = document.getElementById('justifyContentExample');
    const justifyContainer = document.getElementById('justifyExampleContainer');

    selectJustifyExample.addEventListener('change', (event) => {
      justifyContainer.style.justifyContent = event.target.value;
    });

    // fin script justify items


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




    // inicio script grow


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


    // fin script grow


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



    // inicio script flex shrink en filas
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

    // final script flex shrink en filas

    // inicio de script flex shrink en filas
    const selectFlexShrinkRow = document.getElementById('flexShrinkRowExample');
    const flexShrinkRowItem1 = document.querySelector('.flex-shrink-row-item1');
    const flexShrinkRowItem2 = document.querySelector('.flex-shrink-row-item2');
    const flexShrinkRowItem3 = document.querySelector('.flex-shrink-row-item3');

    function applyFlexShrinkRow(values) {
      flexShrinkRowItem1.style.flexShrink = parseInt(values[0]);
      flexShrinkRowItem2.style.flexShrink = parseInt(values[1]);
      flexShrinkRowItem3.style.flexShrink = parseInt(values[2]);
    }

    selectFlexShrinkRow.addEventListener('change', (event) => {
      const values = event.target.value.split(',');
      applyFlexShrinkRow(values);
    });
    
    // fin  de script flex shrink en filas
