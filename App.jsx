// define App
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies,
      movie: this.props.movies[0].title
    }; 

  }
  render() {
    return (
      <div> 
        <ul>
          {this.props.movies.map((movie, index)=>{
            return <li key={index}>{movie.title}:
              <p><code>popcorn</code></p></li>;
          }
          )}
        </ul>
        <h2>Hello Worldish Examples</h2>
        <p><code>this.state.step </code>renders the same thing as <code>this.props.todos[0].step</code></p>
        <p>{this.props.movies[0].title}</p>
        <p>{this.state.movie.title}</p>
      </div>);
  }
}
// App needs to be in the global scope.  It is undefined if this line is removed
window.App = App;