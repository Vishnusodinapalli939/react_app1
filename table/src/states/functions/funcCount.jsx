import React,{useState} from 'react';
import ButtonComp from '../../utilites/button';
/*
Drawbacks of class components in react:
1.more complex in boiler plate(predefine methods such as lifecycle methods) in code.
2.This keyword can be confusing.
3.need to use different lifecycles to handle tasks.
4.it cann't run from top to bottom,methods will invokes as per lifecycle.


React Hooks:Hooks allow function components to have access to state and other React features.

Rules to be follow while using Hooks:
1.hooks always should use in functional components only.
2.hooks always call at the top of the function component and should import from react.
3.hooks cann't be used in conditionals,cann't be used in the loops.

Hooks methods:
1.useState
2.useEffect
3.useRef
4.useMemo
5.useReducer
6.useContext
7.useCallback
8.custom hooks

1.useState:
    --The React useState Hook allows us to track state in a function component.
    --State generally refers to data or properties that need to be tracking in an application.
useState accepts an initial state and returns two values:
    --The current state.
    --A function that updates the state.
const[currentState,updateFunction]=useState(value in any data)

NOTE:it always returns an array,that's why we can use array destructuring .

state lifting:
    --it is a technique in a react where moving state from  children component to a parent component, lifting it up to component tree
    Benefits:
    1.shared State:multiple child components can be access and update the shared state.
    2.Easier state management:parent component manages the states,reducing complexity in child component.



*/
function UsestateComp(){
    const [counter,setCounter]=useState(0);
    // const handleInc=()=>{
    //     setCounter(counter+1)
    // }
    // const handleDec=()=>{
    //     setCounter(counter-1)
    // }
    const handler=(action)=>{
        switch(action){
            case "inc":setCounter(counter+1);break;
            case "dec":setCounter(counter-1);break;
            default:setCounter(0)
        }

    }

    return(
        <div>
            <h1>UseState Method[6-12-24]</h1>
            <h1>{counter}</h1>
            {/* <button onClick={handleInc}>Inc</button> */}
            {/* <button onClick={handleDec}>Dec</button> */}
            <div style={{display:"flex",gap:"10px"}}>
            <ButtonComp  onClick={()=>{handler("inc")}}>Increment</ButtonComp>
            <ButtonComp  onClick={()=>{handler("dec")}}>Decrement</ButtonComp>
            <ButtonComp  onClick={()=>{handler()}}>Reset</ButtonComp>
            </div>
        </div>
    )
}
export default UsestateComp;