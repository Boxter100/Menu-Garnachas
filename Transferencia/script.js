// Función para copiar al portapapeles usando 'data-copy'
function copyToClipboard(id) {
    // Obtener el elemento por su ID
    const element = document.getElementById(id);
    
    // Obtener el valor del atributo 'data-copy'
    const textToCopy = element.getAttribute('data-copy');
    
    // Usar la API de portapapeles para copiar el texto
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // Opcional: notificar al usuario que el texto ha sido copiado
            alert("Texto copiado: " + textToCopy);
        })
        .catch(err => {
            console.error('Error al copiar: ', err);
        });
}
