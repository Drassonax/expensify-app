import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET',
    count: 0
})

// Reducers
const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
         case 'INCREMENT':
             return {
             count: state.count + action.incrementBy
             }
         case 'DECREMENT':
             return {
                 count: state.count - action.decrementBy
             }
         case 'RESET':
             return {
                 count: 0
             }
         case 'SET':
             return {
                 count: action.count
             }
         default:
             return state
    }
 }


 
const store = createStore(countReducer)

// runs every time the store changes
//returns a function that cancels the subscription
const subscription = store.subscribe(() => {
    console.log(store.getState())
})
// subscription()

// increment the count
store.dispatch(incrementCount())
store.dispatch(incrementCount({incrementBy: 5}))

// decrement the count
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 10}))

// reset the count
store.dispatch(resetCount())

// sets the count to the provided value
store.dispatch(setCount({ count: 101 }))