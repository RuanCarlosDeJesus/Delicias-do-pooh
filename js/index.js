const titulo = document.getElementById('titulo');

// Função para atualizar o gradiente
function mudarCorGradiente() {
  const cores = [
    'linear-gradient(90deg, #FF7A00, #FFD700)',
    'linear-gradient(90deg, #FFD700, #FF7A00)',
    'linear-gradient(90deg, #FF4500, #FF7A00)',
    'linear-gradient(90deg, #aa6426, #FFD700)',

  ];

  let indice = 0;

  setInterval(() => {
    titulo.style.background = cores[indice];
    titulo.style.backgroundClip = 'text';
    titulo.style.webkitBackgroundClip = 'text'; // Para compatibilidade com Safari
    titulo.style.textFillColor = 'transparent'; // Mantém o gradiente visível

    indice = (indice + 1) % cores.length; // Alterna entre os gradientes
  }, 1000); // Troca a cada segundo
}

// Simula a abertura e ativa a mudança de cor
setTimeout(() => {
  titulo.classList.add('open');
  mudarCorGradiente();
}, 500);
