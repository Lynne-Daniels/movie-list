var movies = [
  {title: 'A Bugs\'s Life', watched: true},
  {title: 'Hackers', watched: false},
  {title: 'The Grey', watched: false},
  {title: 'Sunshine', watched: false},
  {title: 'Ex Machina', watched: true},
];
// get info from http://netflixroulette.net/api/

var apiSample = [
  {
    "unit": 6226,
    "show_id": 70299043,
    "show_title": "Attack on Titan",
    "release_year": "2013",
    "rating": "4.6",
    "category": "Anime",
    "show_cast": "Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka",
    "director": "",
    "summary": "For over a century, people have been living behind barricades to block out the giant Titans that threaten to destroy the human race. When a Titan destroys his hometown, young Eren Yeager becomes determined to fight back.",
    "poster": "http:\/\/cdn-2.nflximg.com\/en_us\/boxshots\/ghd\/70299043.jpg",
    "mediatype": 1
  }
];
var getMovie = (movieTitle, callback) => {
  $.ajax({
    method: 'GET',
    url: 'https://netflixroulette.net/api/api.php?',
    data: {title: movieTitle},
    datatype: 'json'
  })
    .done((data) => {
      callback(data);
    }
    );  
};
var nfrMovies = [];
//var movieUrl = ['https://netflixroulette.net/api/api.php?title=Attack%20on%20titan'];
var movieUrl = ['https://netflixroulette.net/api/api.php'];
var apiMovies = ['Rocky', 'Star trek', 'As Good as It Gets'];
var moviesz = apiMovies.map((e,i,a) => {
  // uri encode e
  getMovie(e, function(movie) {
    console.log('here i am', movie);
    nfrMovies.push(movie);
  });
});

console.log('nooooooo', moviesz);
// getMovie(movieUrl, function(data) {console.log(data)})
window.$ = $;
window.apiSample = apiSample;
window.movies = movies;
window.getMovie = getMovie;
window.movieUrl = movieUrl;