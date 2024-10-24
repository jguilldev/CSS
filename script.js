// script con ayuda de IA mientras mejoro el javaScript


// inicio script flex direction 

    const selectDirection = document.getElementById('flexDirection');
    const selectJustify = document.getElementById('justifyContent');
    const container = document.querySelector('.container');

    selectDirection.addEventListener('change', (event) => {
      container.style.flexDirection = event.target.value;
    });

    selectJustify.addEventListener('change', (event) => {
      container.style.justifyContent = event.target.value;
    });

    // fin script flex direction 


