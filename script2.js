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
    
    //   inicio script aling items 

