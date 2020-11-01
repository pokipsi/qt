const cardsReducer = (state = [], action) => {

    if(action.type === 'SAVE_CARD') {

        if(action.payload.id) {
            let card = state.filter(card => card.id === action.payload.id)[0];
            card.number = action.payload.number;
            card.name = action.payload.name;
            card.expireDate = action.payload.expireDate;
            return [
                ...state
            ]
        }

        return [
            ...state, 
            {
                id: Date.now(),
                number: action.payload.number,
                name: action.payload.name,
                expireDate: action.payload.expireDate
            }
        ]
    }

    return state;

}

export default cardsReducer;