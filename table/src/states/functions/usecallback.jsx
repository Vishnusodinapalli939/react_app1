import React, { useState } from "react";
import ChildComp from "./childcomp";
import { useCallback } from "react";
function CallbackHook(){
    const [count,setCount]=useState(1);
    const [callbackcount,setCallbackCount]=useState(0)
    const handleCal=useCallback(()=>{
        setCount(count+1);
        setCallbackCount(callbackcount+1)

    })
const handlecount=()=>{
        setCount(count+1);
    }

    return(
        <div>
            {/* <h1>{count}</h1> */}
            {/* <button onClick={()=>{setCount(count+1)}}>Click</button> */}
            
            <ChildComp onClick={handlecount} value={count}/>
            <button onClick={handleCal}>callback</button>
            <p>Callback creates :<b>{callbackcount} </b>calls</p>
           

        </div>
    )
}
export default CallbackHook;