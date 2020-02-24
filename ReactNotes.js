// REACT TERMINOLOGY
/*
State - any data your application needs to know about that can change over time. Apps should respond to state changes and present an updated UI when necessary.

Stateless FUNCTIONAL Component - any FUNCTION(!!!) you write which accepts props and returns JSX

Stateless Component (NOT FUNCTIONAL) - a CLASS (NOT FUNCTION!!!) that extends React.Component, but does NOT use internal state

Stateful Component (may be called 'component' or 'React components') - any component that DOES maintain its own internal state 
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

