export default class Store {
  
  constructor(reducer) {
    
      if(typeof reducer !== 'function') {
        throw new Error('reducer must be a function.');
      }
    
      this.reducer = reducer;
      this.state = undefined;
      this.subscribers = [];
      this.history = [];
      
    return this;
  }
  
  dispatch(action) {
         
      const newState = this.reducer(this.state, action);
      this.state = Object.assign(newState);
      this.history.push({action, state: Object.assign(newState) });
      this.subscribers.forEach(fn => fn());
      
  }
  
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  
  getState() {
    return Object.assign(this.state);
  }
  
}