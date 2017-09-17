// define App
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div> 
        {/*https://facebook.github.io/react/docs/forms.html*/}
        <input onChange={this.handleChange} type="text">Search</input>
        <div>{this.state.value}</div>
        <h4>Filtered Movies</h4>
        <ul>
          {
            //filter the movies
            this.props.movies.filter((movie) =>{

              return movie.title.indexOf(this.state.value) > -1;
            // map results to component html
            }).map((movie, index)=>{
              return <li key={index}>{movie.title}</li>;
            })
          }
        </ul>
        <h4>All the movies</h4>
        <ul>
          {this.props.movies.map((movie, index)=>{
            return <li key={index}>{movie.title}</li>;
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