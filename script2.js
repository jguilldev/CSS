    // inicio script justify content

    const selectJustifyExample = document.getElementById('justifyContentExample');
    const justifyContainer = document.getElementById('justifyExampleContainer');

    selectJustifyExample.addEventListener('change', (event) => {
      justifyContainer.style.justifyContent = event.target.value;
    });

    // fin script justify content


    //   inicio script aling items 

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




