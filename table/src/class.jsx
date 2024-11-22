import React from 'react';
import './class.css'
import Vivo from './images/vivo.jpg'
import Laptop from './images/laptop.jpg'
import Watch from './images/watch.jpg'
const obj=[{
    productName:"mobile",
    productImg:Vivo,
    productPrice:55000,
    productAvailability:true
},
{
    productName:"laptop",
    productImg:Laptop,
    productPrice:55000,
    productAvailability:false
},
{
    productName:"Watch",
    productImg:Watch,
    productPrice:55000,
    productAvailability:true
}
]
const styles={
    main:{display:"flex",backgroundColor:"aqua",width:"50vw",padding:"45px",justifyContent:"space-evenly"},
    c1:{color:"green"},
    c2:{color:"red"}
   }
class Main extends React.Component{
    
        // if(obj.productAvailability==true){
        //     let temp=styles.c1
        // }else{
        //     let temp=styles.c2
        // }
    
    render(){
        return(
            //jsx approach
            // <div style={styles.main}>
            //     <div style={obj[0].productAvailability?styles.c1:styles.c2}>
            //     {obj[0].productName}
            //     {obj[0].productPrice}
            //     </div>
            //     <div style={obj[1].productAvailability?styles.c1:styles.c2}>
            //     {obj[1].productName}
            //     {obj[1].productPrice}
            //     </div>
                // {/* <h1 style={temp}>{obj.productName}{obj.productPrice}</h1> */}
        
                // {/* <h1 style={obj.productAvailability==true?styles.c1:styles.c2}>{obj.productName}{obj.productPrice}</h1> */}
            <>
            <div className="main">
                <div className={obj[0].productAvailability?"c1":"c2"}>
                <h1>{obj[0].productName}</h1>
                <img src={obj[0].productImg} alt="mobile"/>
                <h1>{obj[0].productPrice}</h1>
                </div>
                <div className={obj[1].productAvailability?"c1":"c2"}>
                <h1>{obj[1].productName}</h1>
                <img src={obj[1].productImg} alt="laptop"/>
                <h1>{obj[1].productPrice}</h1>
                </div>
                <div className={obj[2].productAvailability?"c1":"c2"}>
                <h1>{obj[2].productName}</h1>
                <img src={obj[2].productImg} alt="watch"/>
                <h1>{obj[2].productPrice}</h1>
                </div>
            </div>
        </>
        )
    }
}

export default Main