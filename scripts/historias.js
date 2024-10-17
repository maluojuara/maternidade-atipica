let textos = {};
const fecharHistoria = document.querySelector('.fechar');
const modal = document.querySelector('.modal');

fetch('/assets/textos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            textos = data; 
        })
        .catch(error => {
            console.error('Houve um problema com a requisição Fetch:', error);
        });

function abrirHistoria(id) {
    const modalTitulo = document.querySelector('.modal-titulo h3');
    const modalTexto = document.querySelector('.modal-texto');
    const modalDescricaoTexto = document.querySelector('.modal-descricao-texto');
    const modalDescricaoImg = document.querySelector('.modal-descricao-img');

    modalTitulo.textContent = textos[id].titulo;
    modalTexto.textContent = textos[id].texto;
    modalDescricaoTexto.textContent = textos[id].descricao_imagem;
    modalDescricaoImg.src = textos[id].imagem; 
    modalDescricaoImg.alt = textos[id].descricao_imagem; 

    modal.style.display = 'block'; 
}

fecharHistoria.addEventListener('click', () => {
    modal.style.display = 'none'; 
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.querySelectorAll('.hover-container').forEach(container => {
    container.addEventListener('click', () => {
        abrirHistoria(container.id); 
    });
});