// Lista de episódios com informações
const episodes = [
    { title: 'EP 01 - O inglês como playground de possibilidades', link: '#', description: 'Nessa conversa abordamos as diversas facetas do inglês de forma divertida e leve, com nosso querido', speaker: 'Prof Oscar', image: './Assets/img/oscar.png', audio: './Assets/audio/oscarcorte.mp3' },
    { title: 'EP 02 -  Da Programação ao Mestrado', link: '#', description: 'Um papo sobre Embarque Digital, mestrado, hackathons e softwares, com nossa querida', speaker: 'Larissa Albuquerque', image: './Assets/img/larissa.png', audio: './Assets/audio/larissacorte.mp3' },
    { title: 'EP 03 - Mercado de tecnologia e processos seletivos', link: '#', description: 'Como se destacar em processos seletivos, LinkedIn e trabalhar sua comunicação, com', speaker: 'Luana Alves', image: './Assets/img/luana.png', audio: './Assets/audio/luanacorte.mp3' },
    { title: 'EP 04 - DIA-A-DIA NO LAB DO PORTO DIGITAL', link: '#', description: 'Em breve disponível em nossa plataforma QueridasTech, com', speaker: 'convidados especiais', image: './Assets/img/ep4.svg', audio: './Assets/audio/audio.mp3' },
    // { title: 'EP 05 - ESTUDANTE EMBARQUE', link: '#', description: 'Falamos sobre o processo e estudo no programa Embarque Digital, com', speaker: 'Felipe', image: './Assets/img/ep5.svg', audio: './Assets/audio/audio5.mp3' },
];

// Seleção das colunas
const upColumn = document.querySelector('.up-column');
const midColumn = document.querySelector('.mid-column');
const dowColumn = document.querySelector('.dow-column');

// Função para criar o HTML de cada episódio
function createBox(episode) {
    const box = document.createElement('div');
    box.classList.add('box');

    box.innerHTML = `
        <div class="box-container">
            <div class="visual-box">
                <img src="${episode.image}" alt="${episode.title}" class="box-image">
                <div class="box-content">
                    <div class="title-box">
                        <h3>${episode.title}</h3>
                        <p>${episode.description} <u>${episode.speaker}</u></p>
                    </div>
                </div>
            </div>
            <div class="complement-box">
                <!-- Player de áudio usando MediaElement.js -->
                <div class="audio-player">
                    <audio class="mejs-player" controls>
                        <source src="${episode.audio}" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div>
    `;
    return box;
}

document.addEventListener('DOMContentLoaded', function () {
    // Contadores para as colunas
    let upCount = 0;
    let midCount = 0;
    let dowCount = 0;

    episodes.forEach((episode, index) => {
        const box = createBox(episode);

        if (upCount < 2) {
            upColumn.appendChild(box); // Coloca as 2 primeiras boxes na upColumn
            upCount++; // Incrementa o contador de upColumn
        } else if (midCount < 3) {
            midColumn.appendChild(box); // Coloca até 3 boxes na midColumn
            midCount++; // Incrementa o contador de midColumn
        } else if (dowCount < 2) {
            dowColumn.appendChild(box); // Coloca até 2 boxes na dowColumn
            dowCount++; // Incrementa o contador de dowColumn
        }
    });

    // Inicializa o MediaElement.js nos players de áudio
    const players = document.querySelectorAll('.mejs-player');
    players.forEach(player => {
        new MediaElementPlayer(player, {
            // Configurações adicionais podem ser feitas aqui se necessário
            features: ['playpause', 'progress', 'current', 'duration', 'volume', 'fullscreen']
        });
    });
});
