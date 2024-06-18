// script.js
document.addEventListener('DOMContentLoaded', function() {
  const playlist = [
      { title: 'Dunsi Oyekan', src: "Audio/song1.mp3" },
      { title: 'Q maddi', src: 'Audio/song2.mp3' },
      { title: 'Ayra Starr', src: 'Audio/song3.mp3' }
  ];

  const playlistContainer = document.getElementById('playlist');
  const audioPlayer = document.getElementById('audioPlayer');

  playlist.forEach((song, index) => {
      const songElement = document.createElement('div');
      songElement.classList.add('song');
      songElement.textContent = song.title;
      songElement.dataset.index = index;
      playlistContainer.appendChild(songElement);

      songElement.addEventListener('click', () => {
          playSong(index);
      });
  });

  function playSong(index) {
      const selectedSong = playlist[index];
      audioPlayer.src = selectedSong.src;
      audioPlayer.play();
  }
});
