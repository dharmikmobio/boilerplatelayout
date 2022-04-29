/* eslint-disable no-unused-vars */
import React,{useState,startTransition} from 'react'
import Boiler from './Boiler'


const Test = () => {
    const [name, setName] = useState("React 18");
    // const [email, setEmail] = useState("testing@gmail.com");
  
    const updateAll = () =>{
        setName("React new version");
        
        // startTransition(()=>{
        //     setEmail("test@gmail.com");
        // })
        
    }
    console.warn("update");

    const [gender, setGender] = useState("male");
    const secoundAll = (e) =>{
        setGender(e.target.getAttribute("data-gender"));
    }
  return (
    <>
        <Boiler>
            <h1 className='new'>React 18</h1>
            <p className='new2'>{name}</p>
            {/* <p className='new2'>{email}</p> */}
            <button className='btn' onClick={updateAll}>Update All </button>


            <button data-gender="male" onClick={secoundAll}>Male </button>
            <button data-gender="female" onClick={secoundAll}>Female </button>
            <br/>
            <div className={`box ${gender}`} style={{margin:"10px"}}>
                select{gender}
            </div>
            
        </Boiler>
    </>
  )
}

export default Test