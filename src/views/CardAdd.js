import Card from '../components/Card';
import Form from '../components/Form';
import { useSelector, useDispatch } from 'react-redux';

function CardAdd() {

    let card = useSelector(state => state.selectedCard);

    return (
        <>
            <h1>Add Card</h1>

            <div className="d-flex flex-column align-items-center">
                <Card card={card} />
                <div className="mb-5"></div>
                <Form />
            </div>
        </>
    );
}

export default CardAdd;
