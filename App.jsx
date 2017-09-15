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
    return <h1>{this.state.movie}</h1>;
  }
}
// App needs to be in the global scope.  It is undefined if this line is removed
window.App = App;