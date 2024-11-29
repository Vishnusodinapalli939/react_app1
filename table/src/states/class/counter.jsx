import { Component } from "react";
class Counter extends Component{
    constructor(){
        super();
        this.state={counter:0,color:"black"}
    }
    handleEvent=()=>{
        this.setState({counter:this.state.counter+1,color:"green"})
    }
    handleEvent1=()=>{
        this.setState({counter:this.state.counter-1,color:"blue"})
    }
    handleEvent2=()=>{
        this.setState({counter:this.state.counter+2,color:"aqua"})
    }
    handleEvent3=()=>{
        this.setState({counter:this.state.counter-2,color:"pink"})
    }
    handleEvent4=()=>{
        this.setState({counter:this.state.counter+5,color:"orange"})
    }
    handleEvent5=()=>{
        this.setState({counter:this.state.counter-5,color:"red"})
    }
    render(){
        return(
            <div>
                <h1 style={{textAlign:"center"}}>States and Conditional rendering [28-11-24]</h1>
                <h1 style={{color:this.state.color}}>{this.state.counter}</h1>
                <button onClick={this.handleEvent}>+1</button>
                <button onClick={this.handleEvent1}>-1</button>
                <button onClick={this.handleEvent2}>+2</button>
                <button onClick={this.handleEvent3}>-2</button>
                <button onClick={this.handleEvent4}>+5</button>
                <button onClick={this.handleEvent5}>-5</button>
            </div>
        )
    }
}
export default Counter;