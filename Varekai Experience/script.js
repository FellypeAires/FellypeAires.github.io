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

// Botão de Crise Existencial
const crisisBtn = document.getElementById('crisis-btn');

crisisBtn.addEventListener('click', () => {
    crisisBtn.textContent = "CRISE ATIVADA!";
    document.body.style.animation = "glitch 0.5s infinite";
    audioPlayer.src = "music/crisis.mp3";
    audioPlayer.play();

    setTimeout(() => {
        crisisBtn.textContent = "CRISE EXISTENCIAL";
        document.body.style.animation = "none";
    }, 3000);
});