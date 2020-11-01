export const saveCard = card => {
    return {
        type: 'SAVE_CARD',
        payload: card
    }
}

export const selectCard = card => {
    return {
        type: 'SELECT_CARD',
        payload: card
    }
}