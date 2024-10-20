function updateCount(button, change) {
    // Obtener el span que muestra la cantidad
    const countElement = button.parentElement.querySelector('.count');
    let count = parseInt(countElement.textContent);

    // Actualizar la cantidad, asegurándose de que no sea menor que 0
    count += change;
    if (count < 0) {
        count = 0; // No permitir que sea negativo
    }

    // Actualizar el contenido del span
    countElement.textContent = count;
}



function toggleCart() {
    const cartSummary = document.getElementById('cartSummary');
    if (cartSummary.style.display === 'none' || cartSummary.style.display === '') {
        cartSummary.style.display = 'block'; // Mostrar el resumen
    } else {
        cartSummary.style.display = 'none'; // Ocultar el resumen
    }
}

function closeCart() {
    document.getElementById('cartSummary').style.display = 'none'; // Ocultar el resumen
}
