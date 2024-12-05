import React,{useState} from 'react';
function UsestateComp(){
    const [counter,setCounter]=useState(0);
    const handleInc=()=>{
        setCounter(counter+1)
    }
    const handleDec=()=>{
        setCounter(counter-1)
    }

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Dec</button>
        </div>
    )
}
export default UsestateComp;