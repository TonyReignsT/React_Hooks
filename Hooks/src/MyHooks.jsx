import React,{useState} from 'react'
import propTypes from 'prop-types'

export default function MyHooks(){
    //1. useState
    const[name,setName] = useState("");
    const updateName = () => {
      setName("Reigns")  
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick = {updateName}>Set Name</button>
        </div>
    )

   
}
MyHooks.propTypes = {
    name: propTypes.string,
}
