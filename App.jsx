// define App
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: '',
      newMovie: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.newMovie = this.newMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  // record any information in the search input
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  // record any information in the add input
  newMovie(event) {
    this.setState({newMovie: event.target.value});
  }
  // save the text in the add input to movies and clear the textbox
  addMovie(event) {
    var movie = this.state.newMovie;
    this.props.movies.push({title: movie});
    this.setState({newMovie: ''});
    this.refs.addMov.value = '';
  }
  toggleWatched(index) {
    this.props.movies[index].watched = !!!this.props.movies[index].watched;// !!! converts undefined to bool.
    this.setState({}); // update the button text
  }

  render() {
    return (
      <div>
        {/*not using for now - will get working in main component first
          get complicated to use other component
        <AddVid>Add lands here</AddVid> */}
        {/*https://facebook.github.io/react/docs/forms.html*/}
        <input onChange={this.handleChange} type="text">Search</input>
        <div>{this.state.value}</div>

        <div>Add a movie to the list         
          <input ref="addMov" onChange={this.newMovie} type="text" placeholder='Add a Movie'/>
          <button onClick={this.addMovie}>Add</button>
          <div>{this.state.newMovie}</div>
          <div>this.props.movies.length is {this.props.movies.length}</div>
        </div>
        <br/>

        <h4>Filtered Movies</h4>
        <ul>
          {
            //filter the movies
            this.props.movies.filter((movie) =>{
              return movie.title.indexOf(this.state.value) > -1;
            // map results to component html
            }).map((movie, index)=>{
              return <li key={index} ref={index}>{movie.title}</li>;
            })
          }
        </ul>
        <h4>All the movies</h4>
        <ul>
          {this.props.movies.map((movie, index)=>{
            return <li key={index} ref={index} data-id={index}>{movie.title}
              <div className="watched" onClick={() => { this.toggleWatched(index); }}>{movie.watched ? 'watched' : 'not watched'}</div></li>;
          }
          )}
        </ul>
        <h2>Hello Worldish Examples</h2>
        <p><code>this.state.step </code>renders the same thing as <code>this.props.todos[0].step</code></p>
        <p>{this.props.movies[0].title}</p>
      </div>);
  }
}
// App needs to be in the global scope.  It is undefined if this line is removed
window.App = App;