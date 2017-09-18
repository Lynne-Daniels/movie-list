class AddVid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: 'qwert'};

    this.newSearch = this.newSearch.bind(this);
  }
  newSearch(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (<div>test add prop in Component
      {/* undefined<p>{this.props.movies[0].title}</p>*/}
      <input type="text"/>
      <button>Add</button>
      <div>this.state.val is {this.state.value}</div>

    </div>);
  }
}

window.AddVid = AddVid;