export function createListItem(text, platform, onDeleteCallback) {
    const li = document.createElement("li");
    li.className = "item";
    li.draggable = true;

    switch (platform) {
        case 'StreamerBot':
            li.classList.add('streamerBot');
            break;
        case 'BASE':
            li.classList.add('base');
            break;
        case 'Twitch':
            li.classList.add('twitch');
            break;
        case 'OBS':
            li.classList.add('obs');
            break;
        case 'YouTube':
            li.classList.add('youtube');
            break;
        default:
            li.classList.add('default');
            break;
    }

    li.innerHTML = `
        <span>${text}</span>
        <button class="hamburger-btn mini-button" title="Mover">☰</button>
        <button class="remove-btn mini-button" title="Deletar">❌</button>
    `;

    // Adicionando evento para remover com animação
    li.querySelector(".remove-btn").addEventListener("click", () => {
        li.classList.add("removing");  // Adiciona a classe para animação de remoção
        // Remover o item após a animação
        setTimeout(() => {
            onDeleteCallback(li);  // Chama o callback para efetivar a remoção
        }, 500);  // Tempo de animação (500ms)
    });

    // Adiciona a animação de "subir" (para frente) ao adicionar o item
    li.classList.add("adding");

    return li;
}
