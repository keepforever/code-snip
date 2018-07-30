
const initialState = {
    counter: 1000
}

const incrementCounter = (state, action) => {
    return {
        counter: state.counter + action.payload
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': return incrementCounter(state, action)
        default: return state;
    }
}

export default reducer;
