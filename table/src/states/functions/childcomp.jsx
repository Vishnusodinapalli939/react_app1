import React from "react";
function ChildComp(props){
    return(
        <div>
        <h1>{props.value}</h1>
        <button onClick={props.onClick}>Click</button>
        </div>
    )
}
export default ChildComp;