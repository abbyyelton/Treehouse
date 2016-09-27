function Song(title, artist, duration) {
  Media.call(this, title, duration)
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() {
  var htmlString = '<li';
  if (this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>' + this.title + ' - ' + this.artist;
  htmlString += '<span class="duration">' + this.duration + '</span></li>';
  return htmlString;
};
