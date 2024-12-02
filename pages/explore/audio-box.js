window.addEventListener("load", () => {
    const audioPlayer = document.getElementById("audio-player");
    const playButton = document.querySelector(".btn-play");
    const backwardButton = document.querySelector(".btn-backward");
    const forwardButton = document.querySelector(".btn-forward");
    const progressBar = document.querySelector(".progress-bar");
    const volumeBar = document.querySelector(".volume-bar");

    // Tocar/Pausar música
    playButton.addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = "❚❚"; // Troca o ícone de play para pausa
        } else {
            audioPlayer.pause();
            playButton.textContent = "▶️"; // Troca o ícone de pausa para play
        }
    });

    // Avançar 15 segundos
    forwardButton.addEventListener("click", () => {
        audioPlayer.currentTime += 15;
    });

    // Retroceder 15 segundos
    backwardButton.addEventListener("click", () => {
        audioPlayer.currentTime -= 15;
    });

    // Atualizar a barra de progresso
    audioPlayer.addEventListener("timeupdate", () => {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
    });

    // Alterar a posição do áudio com a barra de progresso
    progressBar.addEventListener("input", () => {
        const seekTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    });

    // Ajustar o volume
    volumeBar.addEventListener("input", () => {
        audioPlayer.volume = volumeBar.value / 100;
    });
});
