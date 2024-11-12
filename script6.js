// Inicio overflow

// Selección del select para overflow
const selectOverflow = document.getElementById('overflowExample');
// Contenedor específico para aplicar overflow
const overflowContainer = document.getElementById('overflowContainerExample');

// Cambia overflow cuando el usuario selecciona una opción
if (selectOverflow && overflowContainer) {
  selectOverflow.addEventListener('change', (event) => {
    overflowContainer.style.overflow = event.target.value;
  });
}

// Fin overflow


// Inicio overflow x and y 

// Selección del select para overflow-x y overflow-y
const selectOverflowX = document.getElementById('overflowXExample');
const selectOverflowY = document.getElementById('overflowYExample');
// Contenedor específico para aplicar overflow-x y overflow-y
const overflowXYContainer = document.getElementById('overflowContainerXYExample');

// Cambia overflow-x y overflow-y cuando el usuario selecciona una opción
if (selectOverflowX && selectOverflowY && overflowXYContainer) {
  selectOverflowX.addEventListener('change', (event) => {
    overflowXYContainer.style.overflowX = event.target.value;
  });

  selectOverflowY.addEventListener('change', (event) => {
    overflowXYContainer.style.overflowY = event.target.value;
  });
}

// Inicio overflow x and y 

