import React,{Component} from "react";
class ClassProps extends Component{
    render(props){
        return(
            <div>
                <h1>{this.props.role}-{this.props.age}</h1>
            </div>
        )
    }
}
export default ClassProps