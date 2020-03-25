// ReduxNotes

// REDUX is a framework used to manage STATE and can be used with many technologies, such as REACT

// Redux has a single state object responsible for the entire state of your application
// The state object is held in the Redux STORE -- even an app with many components will have its state held in this STORE
// This makes the REDUX STORE the SINGLE SOURCE OF TRUTH

// If any part of your app wants to update its state, this must happen through the Redux STORE

// The point of this is to make state management simpler

// The Redux object itself has a createStore() method, which takes reducer as its argument. The reducer function takes state in as an argument and returns state.

// Ex:
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer)

// REMINDER: 
// In ES6 you can use default parameters for functions.

// Ex:
const greeting = (name = "Anonymous") => "Hello" + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

// Notice that supplying an argument for name, we still get that value returned as expected as part of the string concatenation.
// If we supply no argument, the default is supplied and concatenated.

//Ex: 
const increment = (number, value = 1) => number + value;

console.log(increment(5,2)); //7
console.log(increment(5)); //6

// Redux uses this syntax to supply a default state value.

// More concise refactoring of the above code example:
const store = Redux.createStore(
  (state = 5) => state
);

// Accessing the state from the store:
const currentState = store.getState();

// To update state in Redux, you must dispatch actions. An ACTION is a JS object that contains information about an action event that has occurred. 
// The Redux store receives the action objects and updates its state accordingly.
// Sometimes Redux actions carry data, like a username after a user login.
// Data is optional, but actions still must have a 'type' property that specifies the action type.
// Redux actions are like messengers delivering information about events happening in an app to the Redux store. Then the store conducts the business of updating the state based on the action.

// To write a Redux action, just declare an object with a type property.

// Ex:
const action = {
    type: 'LOGIN'
};

// Action creators return an object with a type property that specifies the action that has occurred. 

function actionCreator() {
  return action;
}

// Then the method dispatches an action object to the Redux store. Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });

