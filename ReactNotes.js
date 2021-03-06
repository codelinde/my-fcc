// REACT TERMINOLOGY
/*
State - any data your application needs to know about that can change over time. Apps should respond to state changes and present an updated UI when necessary.

Stateless FUNCTIONAL Component - any FUNCTION(!!!) you write which accepts props and returns JSX

Stateless Component (NOT FUNCTIONAL) - a CLASS (NOT FUNCTION!!!) that extends React.Component, but does NOT use internal state

Stateful Component (may be called 'component' or 'React components') - any component that DOES maintain its own internal state 

ES6 Class Component - A component that uses ES6 class syntax to extend React.Component.
*/

class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}

{ /* Notice that the Kitten class is an extension of React.Component class, meaning it can access local state and lifecycle hooks from React.Component. 

    Furthermore, Kitten has a constructor that calls super()

    super() calls the constructor of the parent class, which is React.Component.

NOTICE that the render() function also needs parentheses encircling the returned JSX 

When React encounters a custom HTML tag that references another component (a component name wrapped in < />), it renders the markup for that component in the location of the tag. 


*/ }

// RENDERING REACT CODE TO THE DOM
ReactDOM.render(componentToRender, targetNode). 

//The first argument is the React component that you want to render. The second argument is the DOM node that you want to render that component within.

class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
        </div>
      );
    }
  };
  
  ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

// you need to use the triangle brackets when passing in a Class Component. Also the two subcomponents are declared behind the scenes, which may be confusing if you are used to all the variables being defined in the code editor and visible in front of you.

// a typical React component is an ES6 class which extends React.Component. It has a render method that returns HTML (from JSX) or null. 

class MyComponent extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        )
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))


// Custom HTML attributes can be passed TO a (STATELESS FUNCTIONAL) component.

<App>
  <Welcome user='Mark' />
</App>

const Welcome = (props) => <h1>Hello, {props.user}</h1>

// We have defined the attribute Mark of the property user

// NOTE: For prop values to evaluate as JS, they need to be enclosed in curly brackets e.g...

date = {Date()}

// Default props can be assigned in case no value is supplied.

MyComponent.defaultProps = {
  location: 'San Francisco'
}

// So, if you have
<MyComponent />

//But choose not to supply a 'location', San Francisco will be the value of the prop.

// IMPORTANT NOTE: If the value of a prop passed into a component needs to be an integer, it must be enclosed in curly brackets

{100}

// EXAMPLE of overriding default props

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10} />
  }
};

// PropTypes

// You can set propTypes on a component to require the data type to be a certain type. For example:

MyComponent.propTypes = {
  handleClick: PropTypes.func.isRequired 
}

// This tells React that handleClick is a required property and that its type must be a function

// array, bool, func, number, object, string, symbol, etc. See docs: https://reactjs.org/docs/typechecking-with-proptypes.html

// However, proptypes has to be imported separatelky from React
import PropTypes from 'prop-types';

// Anytime you refer to a class component within itself, you use the this keyword. To access props within a class component, you preface the code that you use to access it with this. For example, if an ES6 class component has a prop called data, you write
 {this.props.data}

 // Generally, it is considered better to minimize statefulness and emphasize stateless functional components where possible in order to follow the flow of state throughout your application.

//  You create state in a React component by declaring a state property on the component class in its constructor. This initializes the component with state when it is created. The state property must be set to a JavaScript object. Declaring it looks like this:

this.state = {
  // describe your state here
}

// you MUST create a class component by extending React.Component in order to create state like this.

// Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in state in its render() method. You can access the data with 
this.state

//If you want to access a state value within the return of the render method, you HAVE TO enclose the value in curly braces.

// If you make a component stateful, no other components are aware of its state--it is encapsualated/local to that component, unless you pass state data to a child component as props.

// State can also be accessed by typing JavaScript directly into the render() method before the return statement. In other words, you can declare functions, access data from state/props, perform computations on this data, then assign it to variables, which can be accessed in the return statement.

// React docs on State and Lifestyle: https://reactjs.org/docs/state-and-lifecycle.html

// Aside from initializing state in the constructor, you can also update a component's state by calling this.setState(), where the argument is an object of key-value pairs, with keys as state properties and values as updated state data.

this.setState({
  username: 'Balthazar'
});

// ALWAYS use this.setState() when changes occur rather than modifying state directly.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: 'React Rocks!'
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

// In addition to setting and updating state, you can also define methods for your component class. A class method typically needs to use the this keyword so it can access properties on the class (such as state and props) inside the scope of the method. There are a few ways to allow your class methods to access this.

// One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized. You may have noticed the last challenge used this.handleClick = this.handleClick.bind(this) for its handleClick method in the constructor. Then, when you call a function like this.setState() within your class method, this refers to the class and will not be undefined.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

// Common React paradigms:
//1) unidirectional data flow: State flows in one direction down the tree of your application's components, from the stateful parent component to child components. The child components only receive the state data they need. 
//2) complex stateful apps can be broken down into just a few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state. It begins to create a separation where state management is handled in one part of code and UI rendering in another.

//You can pass state as props to child components, but you're not limited to passing data. You can also pass handler functions or any method that's defined on a React component to a child component. This is how you allow child components to interact with their parent components. You pass methods to a child just like a regular prop. It's assigned a name and you have access to that method name under this.props in the child component.

//The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount(). This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

//Inline styles are done using double brackets like a JS object (that React has to surround in brackets to interpret as JS) rather than surrounding with quotes as in normal HTML attributes. Property names must be in camelCase not kebab-case. px can be omitted from font size. Property values should generally be written in quotes.

//If you have a large set of styles, you can assign a style object to a constant to keep your code organized.

//You can also write JavaScript directly in your render methods, before the return statement, without inserting it inside of curly braces. This is because it is not yet within the JSX code. When you want to use a variable later in the JSX code inside the return statement, you place the variable name inside curly braces.

//you can use the && logical operator to perform conditional logic in a more concise way. This is possible because you want to check if a condition is true, and if it is, return some markup.  Example:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};

// Ternary operators may be employed inside of return statements e.g. 
condition ? expressionIfTrue : expressionIfFalse

// Nested ternary operators are also possible. Example:
{
  this.state.userAge == '' ? buttonOne : 
    this.state.userAge >= 18 ? buttonTwo : buttonThree
}

// you can render CSS conditionally based on the state of a React component. To do this, you check for a condition, and if that condition is met, you modify the styles object that's assigned to the JSX elements in the render method.

// This is a dramatic shift from the more traditional approach of applying styles by modifying DOM elements directly (e.g. the jQuery method). In that approach, you must keep track of when elements change and also handle the actual manipulation directly. It can become difficult to keep track of changes, potentially making your UI unpredictable. When you set a style object based on a condition, you describe how the UI should look as a function of the application's state. There is a clear flow of information that only moves in one direction.

// When you create an array of elements, each one needs a key attribute set to a unique value. React uses these keys to keep track of which items are added, changed, or removed. This helps make the re-rendering process more efficient when the list is modified in any way. Keys only need to be unique between sibling elements, they don't need to be globally unique.



// There are some use cases where it makes sense to render a React component on the server. Since React is a JavaScript view library and you can run JavaScript on the server with Node, this is possible. In fact, React provides a renderToString() method you can use for this purpose.

// There are two key reasons why rendering on the server may be used in a real world app:

  // 1) Without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines.

  // 2) This creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.

  // Example: 
  class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

ReactDOMServer.renderToString(<App/>)