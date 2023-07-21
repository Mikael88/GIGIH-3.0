const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log('Connected to the MongoDB database!');

    const db = client.db('Spotspotipe');

    // Songs Collection
    const songsData = [
        {
            "title": "Shape of You",
            "artist": "Ed Sheeran",
            "album": "÷ (Divide)"
          },
          {
            "title": "Someone Like You",
            "artist": "Adele",
            "album": "21"
          },
          {
            "title": "Billie Jean",
            "artist": "Michael Jackson",
            "album": "Thriller"
          },
          {
            "title": "Bohemian Rhapsody",
            "artist": "Queen",
            "album": "A Night at the Opera"
          },
          {
            "title": "Imagine",
            "artist": "John Lennon",
            "album": "Imagine"
          },
          {
            "title": "Hotel California",
            "artist": "Eagles",
            "album": "Hotel California"
          },
          {
            "title": "Like a Rolling Stone",
            "artist": "Bob Dylan",
            "album": "Highway 61 Revisited"
          },
          {
            "title": "Rolling in the Deep",
            "artist": "Adele",
            "album": "21"
          },
          {
            "title": "Thriller",
            "artist": "Michael Jackson",
            "album": "Thriller"
          },
          {
            "title": "Boogie Wonderland",
            "artist": "Earth, Wind & Fire",
            "album": "I Am"
          }
    ];
    await db.collection('Songs').insertMany(songsData);

    // Artist Collection
    const artistData = [
        {
            "name": "Ed Sheeran",
            "date_of_birth": "1991-02-17",
            "genre": ["Pop", "R&B"]
          },
          {
            "name": "Adele",
            "date_of_birth": "1988-05-05",
            "genre": ["Pop", "Soul"]
          },
          {
            "name": "Michael Jackson",
            "date_of_birth": "1958-08-29",
            "genre": ["Pop", "R&B"]
          },
          {
            "name": "Queen",
            "date_of_birth": "1970-06-27",
            "genre": ["Rock"]
          },
          {
            "name": "John Lennon",
            "date_of_birth": "1940-10-09",
            "genre": ["Rock"]
          },
          {
            "name": "Eagles",
            "date_of_birth": "1971-01-01",
            "genre": ["Rock", "Country"]
          },
          {
            "name": "Bob Dylan",
            "date_of_birth": "1941-05-24",
            "genre": ["Rock", "Folk"]
          },
          {
            "name": "Earth, Wind & Fire",
            "date_of_birth": "1969-02-21",
            "genre": ["R&B", "Funk"]
          }
    ];
    await db.collection('Artist').insertMany(artistData);

    // Popular Songs Collection
    const popularSongsData = [
        {
            "title": "Shape of You",
            "times_played": 2000000,
            "period_of_time": "2023-01-01 to 2023-07-18"
          },
          {
            "title": "Someone Like You",
            "times_played": 1800000,
            "period_of_time": "2023-01-01 to 2023-07-18"
          },
          {
            "title": "Billie Jean",
            "times_played": 1600000,
            "period_of_time": "2023-01-01 to 2023-07-18"
          },
          {
            "title": "Bohemian Rhapsody",
            "times_played": 1400000,
            "period_of_time": "2023-01-01 to 2023-07-18"
          },
          {
            "title": "Imagine",
            "times_played": 1300000,
            "period_of_time": "2023-01-01 to 2023-07-18"
          },
          {
            "title": "Hotel California",
            "times_played": 1200000,
            "period_of_time": "2023-01-01 to 2023-07-18"
          },
          {
            "title": "Like a Rolling Stone",
            "times_played": 1100000,
            "period_of_time": "2023-01-01 to 2023-07-18"
          },
          {
            "title": "Rolling in the Deep",
            "times_played": 1000000,
            "period_of_time": "2023-01-01 to 2023-07-18"
          },
          {
            "title": "Thriller",
            "times_played": 950000,
            "period_of_time": "2023-01-01 to 2023-07-18"
          },
          {
            "title": "Boogie Wonderland",
            "times_played": 900000,
            "period_of_time": "2023-01-01 to 2023-07-18"
          }
    ];
    await db.collection('PopularSongs').insertMany(popularSongsData);

    console.log('Data inserted into collections successfully!');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the connection when done
    await client.close();
    console.log('Connection to MongoDB closed.');
  }
}

main();