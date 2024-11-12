
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