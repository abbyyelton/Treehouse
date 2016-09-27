function Movie(title, duration, year) {
  Media.call(this, title, duration);
  this.year = year;
}

Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
  var htmlString = '<li';
  if (this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>' + this.title + ' (' + this.year + ')';
  htmlString += '<span class="duration">' + this.duration + '</span></li>';
  return htmlString;
};
