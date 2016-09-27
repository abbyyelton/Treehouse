var playlist = new Playlist();

var song1 = new Song( 'Title', 'Artist', '2:34');
var song2 = new Song( 'Title2', 'Artist2', '2:30');
var song3 = new Song( 'Title3', 'Artist3', '1:34');

var movie1 = new Movie('Man of Steel', '2:34', '2013');

playlist.add(song1);
playlist.add(song2);
playlist.add(song3);
playlist.add(movie1);

var playlistElement = document.getElementById('playlist');

playlist.renderInElement( playlistElement );

var playButton = document.getElementById('play');
var nextButton = document.getElementById('next');
var stopButton = document.getElementById('stop');

playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement( playlistElement );
}
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement( playlistElement );
}
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement( playlistElement );
}
