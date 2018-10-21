class SetList {
  constructor (songs) {
    this.set = songs;
    this.count = 0;
    this.hasSongPlaying = false;
    this.incrementSong = this.incrementSong.bind(this);
    this.startSong = this.startSong.bind(this);
    this.stopSong = this.stopSong.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  incrementSong () {
    this.hasSongPlaying = false;
    this.count++;
    if (!this.set[this.count]) {
      this.count = 0;
    }
  }

  startSong () {
    const currentSong = this.set[this.count];
    currentSong.start(this.incrementSong);
    this.hasSongPlaying = true;
  }

  stopSong () {
    const currentSong = this.set[this.count];
    currentSong.stop();
    this.hasSongPlaying = false;
  }

  handleClick () {
    if (this.hasSongPlaying) {
      this.stopSong();
    } else {
      this.startSong();
    }
  }
}

module.exports = SetList;
