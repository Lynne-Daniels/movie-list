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

var movieUrl = 'https://netflixroulette.net/api/api.php?title=Attack%20on%20titan';
var apiMovies = ['Rocky', 'Star trek', 'As Good as It Gets'];

var getMovie = (movieURL, callback) => {
  $.ajax({
    method: 'GET',
    url: movieURL,
    datatype: 'json'
  })
    .done((data) => {
      console.log('done', data);
      callback(data);
    }
    );  
};
// getMovie(movieUrl, function(data) {console.log(data)})
window.$ = $;
window.apiSample = apiSample;
window.movies = movies;
window.getMovie = getMovie;
window.movieUrl = movieUrl;