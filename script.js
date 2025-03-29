// Player de Música
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const progressBar = document.querySelector('.progress');

let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playBtn.textContent = '▶';
    } else {
        audioPlayer.play();
        playBtn.textContent = '⏸';
    }
    isPlaying = !isPlaying;
});

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

// Botão de Crise Existencial (versão corrigida)
const crisisBtn = document.getElementById('crisis-btn');

crisisBtn.addEventListener('click', () => {
    const isCrisis = !document.body.classList.contains('crisis-mode');
    
    if (isCrisis) {
        // Ativa modo crise
        document.body.classList.add('crisis-mode');
        crisisBtn.textContent = "CRISE ATIVADA!";
        audioPlayer.src = "music/crisis.mp3";
        audioPlayer.play();
    } else {
        // Desativa modo crise
        document.body.classList.remove('crisis-mode');
        crisisBtn.textContent = "CRISE EXISTENCIAL";
    }
});



// CRIA ESTRELAS PISCANTES
function createStars() {
  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${3 + Math.random() * 7}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.width = `${2 + Math.random() * 4}px`;
    star.style.height = star.style.width;
    document.body.appendChild(star);
  }
}

// CRIA PÓLEN FLUTUANTE
function createPollen() {
  for (let i = 0; i < POLLEN_COUNT; i++) {
    const pollen = document.createElement("div");
    pollen.className = "pollen";
    pollen.style.left = `${Math.random() * 100}vw`;
    pollen.style.top = `${Math.random() * 100}vh`;
    pollen.style.animationDuration = `${10 + Math.random() * 20}s`;
    pollen.style.opacity = `${0.2 + Math.random() * 0.5}`;
    document.body.appendChild(pollen);
  }
}

// INICIA TUDO
window.onload = function() {
  createBees();
  createStars();
  createPollen();
  
  // Atualiza posição das abelhas se o player se mover
  window.addEventListener('resize', () => {
    document.querySelectorAll('.bee').forEach(bee => bee.remove());
    createBees();
  });
};

// =============================================
// EFEITO DE ESTRELAS PISCANTES (adicione isto)
// =============================================

function createStars() {
    // Configurações
    const STAR_COUNT = 500;
    const COLORS = ['#ffffff', '#ffe6cc', '#ccf2ff', '#ffccf2'];
    const MIN_SIZE = 1;
    const MAX_SIZE = 3;
    
    // Cria estrelas
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Posição aleatória
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      
      // Tamanho e cor aleatórios
      star.style.width = `${MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE)}px`;
      star.style.height = star.style.width;
      star.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      
      // Animação personalizada
      const duration = 2 + Math.random() * 3;
      const delay = Math.random() * 5;
      star.style.animation = `twinkle ${duration}s infinite ${delay}s alternate`;
      
      // Adiciona ao body
      document.body.appendChild(star);
    }
  }
  
  // Inicia quando a página carregar
  window.addEventListener('load', createStars);

  // EFEITO DE PARTÍCULAS (versão garantida)
function createParticles() {
    const btn = document.getElementById('crisis-btn');
    
    btn.addEventListener('click', function() {
      // Remove partículas antigas primeiro
      document.querySelectorAll('.crisis-particle').forEach(p => p.remove());
      
      // Cria 30 partículas
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'crisis-particle';
        
        // Posição aleatória
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 50;
        
        // Estilo dinâmico
        particle.style.cssText = `
          position: absolute;
          width: ${2 + Math.random() * 4}px;
          height: ${2 + Math.random() * 4}px;
          background: hsl(${Math.random() * 360}, 100%, 50%);
          border-radius: 50%;
          left: 50%;
          top: 50%;
          pointer-events: none;
          z-index: 1000;
          transform: translate(-50%, -50%);
          animation: particle-fly 0.8s ease-out forwards;
          --tx: ${Math.cos(angle) * distance}px;
          --ty: ${Math.sin(angle) * distance}px;
        `;
        
        btn.appendChild(particle);
        
        // Remove após animação
        setTimeout(() => particle.remove(), 800);
      }
    });
  }
  
  // Inicia quando a página carregar
  window.addEventListener('load', createParticles);