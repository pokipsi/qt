const selectedCardReducer = (state = {}, action) => {

    if (action.type === 'SELECT_CARD') {

        state.number = action.payload.number ? action.payload.number : state.number;
        state.name = action.payload.name ? action.payload.name : state.name;
        state.expireDate = action.payload.expireDate ? action.payload.expireDate : state.expireDate;

        return { ...state };
    }

    return state;

}

export default selectedCardReducer;