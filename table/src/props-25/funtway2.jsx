import React from "react";

function App1(props){
    const {name,city,state}=props
    return(
        // <div>
        //     <h3>parent Elements</h3>
        //     Name:{props.name}<br/>
        //     City:{props.city}<br/>
        //     State:{props.state}
            
        // </div>
        <div>
            Name:{name}<br/>
            city:{city}<br/>
            state:{state}
        </div>
    )
}
App1.defaultProps={
    name:"vishnu",
    city:"kadapa",
    state:"AP"
}
// function App2(){
//     return(
//         <div>
//             <h3>child component</h3>
//             <App1 name="vishnu" city="kadapa" state="AP"/>
//         </div>
//     )
// }
export default App1