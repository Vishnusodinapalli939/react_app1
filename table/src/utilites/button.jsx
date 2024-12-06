import React from 'react';
function ButtonComp(props){
    console.log(props)
    const{children,onClick}=props
    return(
        <div>
            <button onClick={onClick} style={{backgroundColor:"burlywood",padding:"10px",borderRadius:"10px"}}>{children}</button>

        </div>
    )
}
export default ButtonComp;