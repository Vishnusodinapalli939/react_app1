import React ,{Component} from "react";
class SimpleForm extends Component{
    constructor(){
        super();
        this.state={text:""}
    }
    formsubmit=(e)=>{
        e.preventDefault();
        this.setState({text:e.target.id1.value})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.formsubmit}>
                    <input id="id1" type="text"   />
                    <input type="submit"/>
                </form>
                <h1>{this.state.text}</h1>

                
            </div>
        )
    }
}
export default SimpleForm