import React,{useState , useTransition} from 'react'
import Boiler from './Boiler'
import NAMES from "../data.json";


const Fetch = () => {
    const [query, setQuery] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [isPanding, startTransition] = useTransition();
    
    const changeHandler = (event) =>{
        setInputValue(event.target.value)
        startTransition(() => setQuery(event.target.value))
    }
    const filtertitle = NAMES.filter(item => {
        return item.title.includes(query)
    })
  return (
    <>
    <Boiler>
        <div className='App'>
        <input type="text" value={inputValue} onChange={changeHandler}/>
            {isPanding && <p>Updating list...</p>}
            {filtertitle.map((item)=>(
                <p key={item.id}>
                    <ul>
                        <li>{item.title}</li>
                    </ul>
                </p>
            ))}
        </div> 
    </Boiler>
    </>
  )
}

export default Fetch