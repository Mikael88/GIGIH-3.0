const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

// Initialize playlist as an array of objects with song details and play count
const playlist = [];

// Route to add a song to the playlist
app.post('/add', (req, res) => {
  const { songName, artists, url } = req.body;
  const newSong = { songName, artists, url, playCount: 0 };
  playlist.push(newSong);
  res.status(201).json(newSong);
});

// Route to play a song from the playlist
app.get('/play/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < playlist.length) {
    playlist[index].playCount++;
    res.status(200).json(playlist[index]);
  } else {
    res.status(404).json({ message: 'Song not found' });
  }
});

// Route to get the list of songs from the playlist
app.get('/playlist', (req, res) => {
  res.status(200).json(playlist);
});

// Route to get the list of songs sorted by most played
app.get('/playlist/most-played', (req, res) => {
  const sortedPlaylist = playlist.slice().sort((a, b) => b.playCount - a.playCount);
  res.status(200).json(sortedPlaylist);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
