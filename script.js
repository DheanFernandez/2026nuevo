// Esperar que la página cargue completamente
window.onload = function() {
    // Iniciar la animación del fuego artificial
    const firework = document.getElementById('firework');
    const explosion = document.getElementById('explosion');
    const buttonContainer = document.getElementById('button-container');
    const messageContainer = document.getElementById('message-container');
    const triggerButton = document.getElementById('triggerButton');
    
    // Crear puntos brillantes aleatorios
    createStars(30); // Se generarán 30 puntos brillantes al azar
    
    // Esperar que la animación termine para mostrar la explosión y el botón
    firework.addEventListener('animationend', function() {
        explosion.style.display = 'block';
        buttonContainer.style.display = 'block';
    });

    // Al hacer clic en el botón
    triggerButton.addEventListener('click', function() {
        // Hacer desaparecer el botón
        buttonContainer.style.display = 'none';

        // Mostrar el mensaje
        messageContainer.style.display = 'block';
    });
};

// Función para crear puntos brillantes aleatorios en el fondo
function createStars(number) {
    const body = document.body;
    for (let i = 0; i < number; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width; // Hacerlo circular
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 1 + 1}s`; // Duración aleatoria
        body.appendChild(star);
    }
}
