// Função para criar o item na lista
export function createListItem(text, platform, onDeleteCallback) {
    const li = document.createElement("li");
    li.className = "item"; // Definindo a classe base do item
    li.draggable = true;

    // Adiciona a classe com base na plataforma
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

    // Adicionando evento para remover o item ao clicar no botão de remover
    li.querySelector(".remove-btn").addEventListener("click", () => {
        onDeleteCallback(li); // Chama a função de remoção
    });

    return li;
}
