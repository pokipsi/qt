import ChipIcon from '../chip.png';
import Visa from '../visa.png';
import Discover from '../discover.png';
import MasterCard from '../master_card.png';

function Card(props) {

    const getIcon = () => {
        let digit = props.card ? String(props.card.number)[0] : 0;
        switch(digit) {
            case "4": 
                return Visa;
            case "5": 
                return MasterCard;
            case "6": 
                return Discover;
            default: return null;
        }
    }

    const getNumber = () => {
        return props.card ? props.card.number : "";
    }

    const getName = () => {
        return props.card ? props.card.name : "";
    }

    const getExpireDate = () => {
        return props.card ? props.card.expireDate : "";
    }

    return (
        <div className="card-box gradient">
            <div className="card-logo-wrapper mb-3">
                {
                    <img className="card-logo" src={getIcon()} />
                }
            </div>
            <div className="mb-3"><img className="card-chip" src={ChipIcon} /></div>
            <div className="mb-3">{getNumber()}</div>
            <div className="d-flex justify-content-between">
                <div className="w-1001">{getName()}</div>
                <div className="w-1001">{getExpireDate()}</div>
            </div>
            
        </div>
    );
}

export default Card;
