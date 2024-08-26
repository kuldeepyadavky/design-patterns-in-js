// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Iterator
 * **Category**: Behavioral Pattern
 * **Description**:
 * The Iterator pattern provides a way to access the elements of a collection sequentially without exposing
 * its underlying representation. It defines a standard interface to traverse a collection, allowing
 * flexibility and consistency.
 *
 * **Real-Life Example**:
 * Think of a playlist in a music player. The playlist might contain songs from different albums, but you
 * need a consistent way to iterate through and play each song, one after another.
 */

// Collection class that holds a collection of items
class Playlist {
  constructor() {
    this.songs = []; // The list of songs
  }

  addSong(song) {
    this.songs.push(song); // Adds a song to the playlist
  }

  // Returns an iterator for the playlist
  createIterator() {
    return new PlaylistIterator(this.songs);
  }
}

// Iterator class that defines how to traverse through the playlist
class PlaylistIterator {
  constructor(songs) {
    this.songs = songs;
    this.currentIndex = 0; // Keeps track of the current song in the playlist
  }

  // Returns the next song in the playlist
  next() {
    return this.songs[this.currentIndex++];
  }

  // Checks if there are more songs left to play
  hasNext() {
    return this.currentIndex < this.songs.length;
  }
}

// Client code using the iterator
const playlist = new Playlist();
playlist.addSong('Song 1');
playlist.addSong('Song 2');
playlist.addSong('Song 3');

// Get the iterator for the playlist
const iterator = playlist.createIterator();

// Iterate through the playlist
while (iterator.hasNext()) {
  logMessage(iterator.next()); // Logs: Song 1, then Song 2, then Song 3
}

/**
 * Explanation:
 * 1. **Playlist (Collection)**:
 *    - The `Playlist` class holds a collection of songs and provides a method to get an iterator for the collection.
 *
 * 2. **PlaylistIterator (Iterator)**:
 *    - The `PlaylistIterator` class defines how to traverse the playlist. It provides methods like `next` to get the next song and `hasNext` to check if there are more songs left.
 *
 * 3. **Client Code**:
 *    - The client code uses the iterator to traverse through the playlist without needing to know the details of how the playlist is structured internally.
 *
 * **Real-Life Analogy**:
 * Imagine a playlist in a music app. Even if the songs come from different albums or sources, you want to play them in a consistent sequence, and that’s what the iterator helps achieve.
 */
