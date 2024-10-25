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
