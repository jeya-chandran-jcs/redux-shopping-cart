import React, { useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addvalues } from '../components/redux/Slice';

export default function Expenditure() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    let state=useSelector((state)=>state.mycapture)

    const handleSubmit = () => {
        const newExp = inputRef.current.value;
        if (newExp !== "") {
            dispatch(addvalues(newExp));
        }
    };

    return (
        <div>
            Expenditure
            <input type="text" ref={inputRef} />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <p>{state.name}</p>
        </div>
    );
}
