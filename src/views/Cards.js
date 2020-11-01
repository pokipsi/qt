import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';

function Cards() {

    let cards = useSelector(state => state.cards);

    return (
        <>
            <h1>Cards</h1>

            <div className="d-flex flex-wrap justify-content-center">
                <Link to={`/cards/add`} className="card-box gradient text-3xl font-weight-bold justify-content-center align-items-center d-flex m-4">+</Link>
                {
                    cards.map(card =>
                        <Link to={`/cards/${card.id}/edit`} key={card.id} className="m-4">
                            <Card card={card} />
                        </Link>
                    )
                }
            </div>

        </>
    );
}

export default Cards;
