import { createStore } from "redux";

let history = [];
//store
const store = createStore(reducer);

//reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    //immutability
    state.amount = state.amount + 1;
    // return { amount: state.amount + 1 };
  }
  return state;
}

//global state

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

//create Action(action is not an api nor part of redux it is just a redux convention inharited from flux which is a predecessor to redux = reducer + flux )

setInterval(() => {
  store.dispatch({ type: "increment" });
}, 2000);
