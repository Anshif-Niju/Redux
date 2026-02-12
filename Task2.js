const { createStore, combineReducers } = require('redux');

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };

    case 'DECREMENT':
      if (state.count == 0) {
        return state;
      }
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function userReducer(state = { name: '' }, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { name: action.payload };

    case 'DUPLICATE_NAME':
      return { name: action.payload + action.payload };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});


const store=createStore(rootReducer)

store.dispatch({type:"INCREMENT"})
store.dispatch({type:"DECREMENT"})
store.dispatch({type:"SET_NAME",payload:"Anshif"})


console.log(store.getState())