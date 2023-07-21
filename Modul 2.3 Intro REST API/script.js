document.addEventListener('DOMContentLoaded', () => {
    const addForm = document.getElementById('addForm');
    const playlistDiv = document.getElementById('playlist');
    const mostPlayedDiv = document.getElementById('mostPlayed');
  
    function displayPlaylist() {
      axios.get('/playlist').then((response) => {
        playlistDiv.innerHTML = '';
        const songs = response.data;
        songs.forEach((song) => {
          const songDiv = createSongDiv(song);
          playlistDiv.appendChild(songDiv);
        });
      });
    }
  
    function displayMostPlayed() {
      axios.get('/playlist/most-played').then((response) => {
        mostPlayedDiv.innerHTML = '';
        const mostPlayedSongs = response.data;
        mostPlayedSongs.forEach((song) => {
          const songDiv = createSongDiv(song);
          mostPlayedDiv.appendChild(songDiv);
        });
      });
    }
  
    function createSongDiv(song) {
      const songDiv = document.createElement('div');
      songDiv.classList.add('song');
      songDiv.innerHTML = `
        <h3>${song.songName}</h3>
        <p>Artists: ${song.artists.join(', ')}</p>
        <p>Spotify URL: <a href="${song.url}" target="_blank">${song.url}</a></p>
        <p>Play Count: ${song.playCount}</p>
      `;
      return songDiv;
    }
  
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const songName = document.getElementById('songName').value;
      const artists = document.getElementById('artists').value;
      const url = document.getElementById('url').value;
  
      axios
        .post('/add', {
          songName,
          artists: artists.split(',').map((artist) => artist.trim()),
          url,
        })
        .then(() => {
          addForm.reset();
          displayPlaylist();
          displayMostPlayed();
        })
        .catch((error) => {
          console.error(error);
        });
    });
  
    displayPlaylist();
    displayMostPlayed();
  });
  