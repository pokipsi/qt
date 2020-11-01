import { useSelector, useDispatch } from 'react-redux';
import { useState, setState } from 'react';
import { selectCard } from '../actions';
import { saveCard } from '../actions';

function Form() {

    let card = useSelector(state => state.selectedCard);
    let dispatch = useDispatch();

    const [nums, setNums] = useState(card && card.number ? card.number.split("-") : []);
    const [wrongDate, setWrongDate] = useState(false);
    const [wrongCardNumber, setWrongCardNumber] = useState(false);
    const [proceed, setProceed] = useState(false);

    const setName = name => {
        card.name = name;
        dispatch(selectCard(card));
    }

    const getName = () => {
        return card.name ? card.name : "";
    }

    const setExpireDate = expireDate => {
        card.expireDate = expireDate;
        setWrongDate(! isValidDate(expireDate));
        dispatch(selectCard(card));
    }

    const getExpireDate = () => {
        return card.expireDate ? card.expireDate : "";
    }

    const createNumber = (value, chunk) => {
        nums[chunk] = value;
        let number = nums.join("-");
        card.number = number;
        setWrongCardNumber(! isValidNumber());
        dispatch(selectCard(card));
    }

    const getNumberChunk = i => {
        return card.number ? card.number.split("-")[i] : "";
    }

    const isValidNumber = () => {
        if(nums[0] && nums[0].length && ['4', '5', '6'].includes(nums[0][0])) {
            if(nums.length == 4) {
                let ret = true;
                nums.forEach(item => {
                    if (item.length != 4) {
                        setProceed(false);
                    }
                });
                setProceed(ret);
                return ret;
            }
            setProceed(false);
            return false;
        }
        setProceed(false);
        return false;
    }

    const isValidDate = input => {
        try {
            let x = input.split("/");
            if(x.length == 2) {
                let date = Date.now();
                let userYear = parseInt(x[1]);
                let userMonth = parseInt(x[0]);
                let userDate = new Date();
                userDate.setFullYear(2000 + userYear);
                userDate.setMonth(userMonth - 1);
                setProceed(userDate > date);
                return userDate > date;
            }
        }
        catch {
            setProceed(false);
            return false;
        }
        setProceed(false);
        return false;
    }

    const save = () => {
        if(proceed) dispatch(saveCard(card));
    }

    return (
        <div className="form">
            <label>Name</label>
            <input type="text" value={getName()} className="form-control mb-3" onInput={e => setName(e.target.value)} />
            <label>Number</label>
            <div className="d-flex mx-n1">
                <input type="text" className="form-control mx-1" value={getNumberChunk(0)} onInput={e => createNumber(e.target.value, 0)}/>
                <input type="text" className="form-control mx-1" value={getNumberChunk(1)} onInput={e => createNumber(e.target.value, 1)}/>
                <input type="text" className="form-control mx-1" value={getNumberChunk(2)} onInput={e => createNumber(e.target.value, 2)}/>
                <input type="text" className="form-control mx-1" value={getNumberChunk(3)} onInput={e => createNumber(e.target.value, 3)}/>
            </div>
            { wrongCardNumber ? <div className="text-red mb-3">Wrong card number</div> : <div className="mb-3"></div> }
            <label>Expires on</label>
            <input placeholder="MM/YY" type="text" value={getExpireDate()} className="form-control" onInput={e => setExpireDate(e.target.value, 3)} />
            { wrongDate ? <div className="text-red mb-5">Wrong date</div> : <div className="mb-5"></div> }
            <button className="btn btn-primary btn-block text-uppercase" onClick={() => save()} disabled={! proceed}>Save</button>
        </div>
    );
}

export default Form;
