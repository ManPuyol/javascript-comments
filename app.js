document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('commentForm');
    const authorInput = document.getElementById('author');
    const contentInput = document.getElementById('content');
    const commentsList = document.getElementById('commentsList');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const author = authorInput.value.trim();
        const content = contentInput.value.trim();

        if (!author || !content) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
            <p><strong>${author}</strong>: ${content}</p>
        `;
        commentsList.appendChild(commentElement);

        // Limpiar el formulario
        authorInput.value = '';
        contentInput.value = '';
    });
});
