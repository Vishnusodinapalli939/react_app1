import { Component } from "react";
class Counter extends Component{
    constructor(){
        super();
        this.state={counter:0}
    }
    handleEvent=()=>{
        this.setState({counter:this.state.counter+1})
    }
    handleEvent1=()=>{
        this.setState({counter:this.state.counter-1})
    }
    handleEvent2=()=>{
        this.setState({counter:this.state.counter+2})
    }
    handleEvent3=()=>{
        this.setState({counter:this.state.counter-2})
    }
    handleEvent4=()=>{
        this.setState({counter:this.state.counter+5})
    }
    handleEvent5=()=>{
        this.setState({counter:this.state.counter-5})
    }
    render(){
        return(
            <div>
                <h1 style={{textAlign:"center"}}>States and Conditional rendering [28-11-24]</h1>
                <h1>{this.state.counter}</h1>
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