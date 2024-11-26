import React from "react";

function FunctionProps(props){
    return(
        <div>
            
            <h1>hello {props.name} from {props.city}</h1>
            {/* {console.log(props.children,"hii")} */}
            {props.children.map((a,b)=>{
                return(
                    <ul key={b}>
                        <li>{a}</li>
                    </ul>
                )
            })}
        </div>
    )
}
export default FunctionProps