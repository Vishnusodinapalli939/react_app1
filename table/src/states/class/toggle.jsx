import React ,{Component} from "react";
import "./toggle.css"
import SimpleForm from "./simpleform";
class Toggle extends Component{
    constructor(){
        super();
        this.state={isOn:true}
    }
    ButtonTrue=()=>{
        this.setState({isOn:!this.state.isOn})
    }
    render(){
        return(
            <div>
                <SimpleForm/>
                <button onClick={this.ButtonTrue} className={this.state.isOn?"switchon":"switchoff"}>{this.state.isOn?<h1>Switch Off</h1>:<h1>switch On</h1>}</button>
                <h1 onClick={this.ButtonTrue} className={this.state.isOn?"texton":"textoff"}>{this.state.isOn?<h1>Turned on</h1>:<h1>turned off</h1>}</h1>
            
            </div>
        )
    }
}
export default Toggle