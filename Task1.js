const { createStore } = require("redux");

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log("updated store:", store.getState());
});

function increment(value) {
  return { 
    type: "INCREMENT" ,
    payload:value

  };
}

store.dispatch(increment(5));
store.dispatch(increment(3));
store.dispatch(increment(8));
