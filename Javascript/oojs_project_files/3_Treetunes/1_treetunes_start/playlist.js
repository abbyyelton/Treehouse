function Playlist() {
  this.media = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(media) {
  this.media.push(media);
};

Playlist.prototype.play = function() {
  var currentMedia = this.media[this.nowPlayingIndex];
  currentMedia.play();
};

Playlist.prototype.stop = function(){
  var currentMedia = this.media[this.nowPlayingIndex];
  currentMedia.stop();
};

Playlist.prototype.next = function() {
  this.stop();
  this.nowPlayingIndex++;
  if ( this.nowPlayingIndex === this.media.length ) {
    this.nowPlayingIndex = 0;
  };
    this.play();
};

Playlist.prototype.renderInElement = function( list ) {
  list.innerHTML = '';
  for ( var i = 0; i < this.media.length; i++ ) {
    list.innerHTML += this.media[i].toHTML();
  }

};
