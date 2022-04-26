/* eslint-disable no-unused-vars */
import React,{useState,startTransition} from 'react'
import Boiler from './Boiler'


const Test = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const updateAll = () =>{
        setName("Dharmik");
        
        startTransition(()=>{
            setEmail("test@gmail.com");
        })
        
    }
    console.warn("update");
  return (
    <>
        <Boiler>
            <h1>React 18</h1>
            <button onClick={updateAll}>Update All </button>
            
        </Boiler>
    </>
  )
}

export default Test