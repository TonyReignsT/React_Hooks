import {useState, useEffect} from 'react'
import propTypes from 'prop-types'

export default function UseEffect(){
    const[count, setCount] = useState(0);

    useEffect(()=>{
        //Updating the browsers title using the browser API
        document.title = `You Clicked ${count} times`;
    })

    return(<div>
        <p>You Clicked <b>{count}</b> the button times</p>
        <button onClick = {()=> setCount(count + 1)}>Click Me</button>
    </div>
        
    );
}

UseEffect.propTypes = {
    count:propTypes.number,
}