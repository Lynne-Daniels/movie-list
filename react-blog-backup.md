react-blog-backup.md
React — a Simple Example
I just finished learning the basics of React, Angular and Backbone over just a couple weeks. I really needed a crib sheet to keep track of all that new information. Learning was especially challenging as our class project included some unfamiliar JSX and ES6 syntax. Since I’m hoping to use React again in the future, I’ll make that cheatsheet now and share it here.
TODO copy paste html output once it works — render in codepen only?
TODO paste url of working code on CodePen
Dependencies — React uses ES6 and JSX, which not all browsers will understand. It is necessary to use Babel to translate to standard JS.
<!--Babel transpiles JSX and ES6 to ES5 that the brower can understand.-->  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <!-- React -->
    <script src="https://fb.me/react-with-addons-0.14.6.js"></script>
    <script src="https://fb.me/react-dom-0.14.6.js"></script>
<!-- Remember to include all your .js and .jsx files.  Order matters.  Variables will be undefined if the file
    that needs them is running before the file with the variable declaration is processed. Be certain to tell babel
    about the jsx, add type="text/babel" to the opening script tag. -->


Data — what is an application without data? Grab a JSON, declare some variables and be sure to attach them to the window or global scope. While you’re at it, remember the React Component we create later will also need to be explicitly declared on the window scope. I tried it without. Stuff broke. We will also need to tell the React component about the data later.
let myVar = 'sample data string'; window.myVar = myVar;
Create a React Component — Create it before using it. In ES6, classes are not hoisted. Extend the React Component class. Call a constructor and call super to use the prototypes’s constructor as well. 
Give the Component some Properties — We pass along props so that our component knows about our data. What, how? We will see that later when a render function call instantiates the new component. For now, remember that props has to be an argument in both functions: constructor(props) and super(props).  Constructor builds our new instance using the props data, and super uses React’s constructor to add all the built in functionality.
Give the Class a Render Function— in here we use the JSX mashup of HTML and JavaScript to describe the element we want to see on the page. This element will land inside the HTML tag we designate later.
// create a new instanced of a React Component
class App extends React.Component { 
constructor(props)
    super(props);
    /*
      state is optional - keeps track of UI choices
   */
    this.state = {
      steps: this.props.todos,
      step: this.props.todos[0].step
    };
    // add methods here if needed
  }
  render() {
    return (
      <div>this.props.myVar</div>
    )}
}


Give the React Component a Home on the HTML page —a location where the markup described in the render function will be placed on the page.
<div id="app"></div>
Render the Component — This is where we tell React to place a component’s information and markup into the DOM. The render function takes two arguments: a function and a DOM node. This inner function has two more arguments, the app name and an object containing all the data. Confused yet? Wait, there’s more. The inner function uses this crazy syntax and doesn’t even look like a function. Babel Repl to the rescue. Check out the translation below.
ReactDOM.render(<App todos = {window.todos} headline = {window.headline}/>, document.getElementById('app'));
// same thing as:
ReactDOM.render(React.createElement(App, { todos: window.todos, headline: window.headline }), document.getElementById('app'));
Again, we have to use window.anything when talking about global variables because something, (TODO remember what), breaks if we just assume the global scope will work. (This single file app will work without it, but it breaks the multipage version because…er…maybe… JSX and Babel?). Anyway, this programming stuff gets increasingly complex. Can’t hurt to get in the habit of window.whatever to note when a variable is to be used on the global scope.
That’s it for now. There may be a part two after the next confusion/coding/ documenting cycle.
Resources:
React — https://facebook.github.io/react/docs/hello-world.html
Babel — http://babeljs.io/
JSX — https://facebook.github.io/react/docs/jsx-in-depth.html