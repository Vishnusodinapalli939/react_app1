import React, { useState } from "react";
import ButtonComp from "../utilites/button";
function Calculator() {
  // const[val,setVal]=useState(0)
  const [strVal, setStrVal] = useState(" ");
  const add = (a) => {
    setStrVal(strVal + a);
  };
  const handle = () => {
    try{
    let x = eval(strVal);
    setStrVal(x);
    }catch(error){
        setStrVal("Error")
    }
  };
  const reset = () => {
    setStrVal("");
  };
  const cross=()=>{
    let y=strVal.slice(0,-1);
    setStrVal(y)
  }

  return (
    
    <div style={{display:"flex",justifyContent:"center"}}>
      <div style={{ border: "2px solid red",width:"250px" ,padding:"15px",borderRadius:"20px",backgroundColor:"light" }}>
        <div style={{ border: "2px solid red",height:"60px",textAlign:"right",textWrap:"wrap" }}>
          {" "}
          <h1 style={{}}>{strVal}</h1>
        </div>
        {/* <h1>{val}</h1> */}
        <div style={{padding:"10px"}}>
        <span style={{ display: "flex", gap: "10px",margin:"10px" }}>
        <ButtonComp onClick={reset}>Ac</ButtonComp>
        <ButtonComp onClick={cross}>&#128942;</ButtonComp>
          <ButtonComp
            onClick={() => {
              add("%");
            }}
          >
            %
          </ButtonComp>
          <ButtonComp
            onClick={() => {
              add("**");
            }}
          >
            Pow
          </ButtonComp>
          
          
        </span>
        <span style={{ display: "flex", gap: "17px",margin:"10px" }}>
          <ButtonComp
            onClick={() => {
              add(7);
            }}
          >
            7
          </ButtonComp>
          <ButtonComp
            onClick={() => {
              add(8);
            }}
          >
            8
          </ButtonComp>
          <ButtonComp
            onClick={() => {
              add(9);
            }}
          >
            9
          </ButtonComp>
          <ButtonComp
            onClick={() => {
              add("*");
            }}
          >
            X
          </ButtonComp>
        </span>
        <span style={{ display: "flex", gap: "17px",margin:"10px" }}>
          <ButtonComp
            onClick={() => {
              add(4);
            }}
          >
            4
          </ButtonComp>
          <ButtonComp
            onClick={() => {
              add(5);
            }}
          >
            5
          </ButtonComp>
          <ButtonComp
            onClick={() => {
              add(6);
            }}
          >
            6
          </ButtonComp>
          <ButtonComp
            onClick={() => {
              add("-");
            }}
          >
           -
          </ButtonComp>
        </span>
        <span style={{ display: "flex", gap: "17px",margin:"10px" }}>
          <ButtonComp
            onClick={() => {
              add(1);
            }}
          >
            1
          </ButtonComp>
          <ButtonComp
            onClick={() => {
              add(2);
            }}
          >
            2
          </ButtonComp>
          <ButtonComp
            onClick={() => {
              add(3);
            }}
          >
            3
          </ButtonComp>
          <ButtonComp
            onClick={() => {
              add("+");
            }}
          >
          +
          </ButtonComp>
        </span>

        <span style={{ display: "flex", gap: "17px",margin:"10px" }}>
          <ButtonComp
            onClick={() => {
              add("00");
            }}
          >
            00
          </ButtonComp>
          <ButtonComp
            onClick={() => {
              add(0);
            }}
          >
            0
          </ButtonComp>
          {/* <ButtonComp
            onClick={() => {
              add(".");
            }}
          >
            .
          </ButtonComp> */}
          <ButtonComp
            onClick={() => {
              add("/");
            }}
          >
            /
          </ButtonComp>
          <ButtonComp onClick={handle}>=</ButtonComp>
        </span>
       
      </div>
      </div>
    </div>
  );
}
export default Calculator;
