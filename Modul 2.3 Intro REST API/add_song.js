const axios = require('axios');

const songsToAdd = [
  {
    songName: 'Bohemian Rhapsody',
    artists: ['Queen'],
    url: 'spotify_url_1',
  },
  {
    songName: 'Imagine',
    artists: ['John Lennon'],
    url: 'spotify_url_2',
  },
  {
    songName: 'Thriller',
    artists: ['Michael Jackson'],
    url: 'spotify_url_3',
  },
  // Add more songs as needed
];

async function addSongsToPlaylist() {
  for (const song of songsToAdd) {
    try {
      await axios.post('http://localhost:3000/add', song);
      console.log(`Song "${song.songName}" by ${song.artists.join(', ')} added successfully.`);
    } catch (error) {
      console.error(`Error adding song "${song.songName}":`, error.message);
    }
  }
}

addSongsToPlaylist();
