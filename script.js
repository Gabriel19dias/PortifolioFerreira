// Função para gerar números aleatórios entre 1 e 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Função para criar dados no fundo da página
function createDice() {
    const diceContainer = document.querySelector('.dice-container');
    const dice = document.createElement('div');
    const diceNumber = rollDice();
    dice.classList.add('dice');
    dice.textContent = diceNumber;

    // Definindo posições aleatórias para os dados
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 30 + 30;  // Tamanho entre 30px e 60px

    dice.style.left = `${x}px`;
    dice.style.top = `${y}px`;
    dice.style.width = `${size}px`;
    dice.style.height = `${size}px`;

    diceContainer.appendChild(dice);

    // Remover o dado após o tempo da animação
    setTimeout(() => {
        dice.remove();
    }, 1000); // Tempo de vida do dado (deve ser o mesmo tempo da animação)
}

// Gerar dados aleatoriamente a cada 500ms (ajustado)
setInterval(createDice, 500);
