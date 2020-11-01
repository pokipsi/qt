import Card from '../components/Card';
import Form from '../components/Form';
import { useSelector, useDispatch } from 'react-redux';
import { selectCard } from '../actions';
import { useState } from 'react';


function CardEdit({ match }) {

    let cards = useSelector(state => state.cards);

    let card = cards.filter(card => card.id == match.params.id)[0];

    const dispatch = useDispatch();

    dispatch(selectCard(card));

    return (
        <>
            <h1>Edit Card</h1>

            <div className="d-flex flex-column align-items-center">
                <Card card={card} />
                <div className="mb-5"></div>
                <Form />
            </div>
        </>
    );
}

export default CardEdit;
