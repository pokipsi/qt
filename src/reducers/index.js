import cardsReducer from './cards';
import selectedCardReducer from './selectedCard';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    cards: cardsReducer,
    selectedCard: selectedCardReducer
});

export default allReducers;