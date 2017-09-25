
import Store from './index.js';

const Action = {
  Increment: 1,
  Decrement: 2
};

function counterReducer(state = { counter: 0 }, action) {

  switch (action.type) {

    case Action.Increment:
      return { counter: state.counter + action.step };
      break;

    case Action.Decrement:
      return { counter: state.counter - action.step };
      break;

    default:
      return state;

  };
}

function Increment() {
  store.dispatch({
    type: Action.Increment,
    step: 1
  });
}

function Decrement() {
  store.dispatch({
    type: Action.Decrement,
    step: -1
  });
}

const store = new Store(counterReducer);

store.subscribe(() => console.log('listning state: ', store.getState()));

Increment();
Increment();
Increment();