import {useState} from 'react'
import propTypes from 'prop-types'

export default function Event(){
    const[name,setName] = useState("Guest");
    const[quantity,setQuantity] = useState(0);

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    return(
        <div>
            <h3>Event Handlers (onChange)</h3>
            <h4>Inputs</h4>
            {/* outputs name  and quantity in real-time */}
            <input type = "text" value={name} onChange = {handleNameChange}/> <br />
            Name: {name}
            <br /><br />
            <input type="number" value = {quantity}  onChange = {handleQuantityChange}/> <br />
            Quantity: {quantity}
        </div>
    );

}

Event.propTypes = {
    name: propTypes.string,
    quantity: propTypes.number,
};

