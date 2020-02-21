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
