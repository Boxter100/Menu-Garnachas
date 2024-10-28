function copyToClipboard(id) {
    // Obtener el elemento por su ID
    const textToCopy = document.getElementById(id).innerText;

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
