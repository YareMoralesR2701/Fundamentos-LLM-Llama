// Renderizado de señales y búsqueda
function renderSenales(lista, contenedorId, filtro) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = '';
    lista.filter(senal =>
        senal.descripcion.toLowerCase().includes(filtro.toLowerCase())
    ).forEach(senal => {
        const div = document.createElement('div');
        div.className = 'senal';
        div.innerHTML = `
            <img src="${senal.imagen}" alt="Señal">
            <span class="descripcion">${senal.descripcion}</span>
        `;
        contenedor.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Render inicial
    renderSenales(senalesPerro, 'lista-perro', '');
    renderSenales(senalesGato, 'lista-gato', '');

    // Búsqueda perro
    document.getElementById('buscador-perro').addEventListener('input', e => {
        renderSenales(senalesPerro, 'lista-perro', e.target.value);
    });
    // Búsqueda gato
    document.getElementById('buscador-gato').addEventListener('input', e => {
        renderSenales(senalesGato, 'lista-gato', e.target.value);
    });
});
