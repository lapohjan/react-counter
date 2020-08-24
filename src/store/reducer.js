import * as actionTypes from './actions';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
           return { ...state, counter: state.counter + 1 };
        case "DECREMENT":
            return { ...state, counter: state.counter - 1 };
        case "ADD":
            return { ...state, counter: state.counter + action.value };
        case "REMOVE":
            return { ...state, counter: state.counter - action.value };
        case "RESET":
            return { ...state, counter: 0 };
        case "STORE_RESULT":
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter }),
            };
        case "DELETE_RESULT":
            const updateArray = state.results.filter(item => item.id !== action.result)
            return { ...state, results: updateArray };
    }
    return state;
};

const initialState = {
    counter: 0,
    results: [],
};


export default reducer;