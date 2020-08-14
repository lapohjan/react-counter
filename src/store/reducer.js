const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            ...state;
    }
 
};
const initialState = {
    counter: 0
}
export default reducer;