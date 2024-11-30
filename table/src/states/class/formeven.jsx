import React,{Component} from "react";
class Even extends Component{
    constructor(){
        super();
        this.state={val:"",output:"",out:""}
    }
    handleChange=(e)=>{
        const value=e.target.value
        const num=/[0-9]/
        if(num.test(value)){
            if(value%2===0){
                this.setState({output:"even"})
            }
            else{
                this.setState({output:"odd"})
            }
    }else{
        this.setState({output:"Enter valid numbers"})
    }

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({out:this.state.output})

    }
    render(){
        return(
            <div>
                <h1 style={{textAlign:"center"}}>Form Even or Odd Task[30-11-24]</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="value" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
                <p>{this.state.out}</p>
            </div>
        )
    }
}
export default Even;