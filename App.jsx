// define App
class App extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
// App need to be in the global scope.  It is undefined if this line is removed
window.App = App;