const episodes = [
    { title: 'Empregabilidade tecnológica', description: 'Com Luana Alves', image: './Assets/img/ep1.svg', audio: 'audio1.mp3' },
    { title: 'Segurança e Privacidade na Web', description: 'Com João Silva', image: './Assets/img/ep2.svg', audio: 'audio2.mp3' },
    { title: 'Acessibilidade Digital', description: 'Com Maria Oliveira', image: './Assets/img/ep3.svg', audio: 'audio3.mp3' },
    { title: 'Inovação e Criatividade', description: 'Com Carla Santos', image: './Assets/img/ep4.svg', audio: 'audio4.mp3' },
    { title: 'Sustentabilidade em TI', description: 'Com Pedro Araújo', image: './Assets/img/ep5.svg', audio: 'audio5.mp3' },
];

const upColumn = document.querySelector('.up-column');
const dowColumn = document.querySelector('.dow-column');

function createBox(episode) {
    const box = document.createElement('div');
    box.classList.add('box');

    box.innerHTML = `
        <img src="${episode.image}" alt="${episode.title}" class="box-image">
        <div class="box-content">
            <div class="title-box">
                <p>${episode.title}, ${episode.description}</p>
            </div>
            <div class="complement-box">
                <audio controls class="box-audio">
                    <source src="${episode.audio}" type="audio/mpeg">
                </audio>
            </div>
        </div>
    `;

    return box;
}

// Distribuição dos episódios: 2 no topo e 3 embaixo
episodes.forEach((episode, index) => {
    const box = createBox(episode);
    if (index < 2) {
        upColumn.appendChild(box); // Primeiros 2 episódios vão na coluna superior
    } else {
        dowColumn.appendChild(box); // Os restantes vão na coluna inferior
    }
});
