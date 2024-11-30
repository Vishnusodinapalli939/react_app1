import React, { Component } from "react";
class Form extends Component{
    constructor(){
        super();
        this.state={fname:"",output:"",lname:"",mobile:""}
    }
    handleChange=(e)=>{
        console.log(e.target)
        const {name,value}=e.target
        this.setState({[name]:value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({output:this.state.fname+" "+this.state.lname+" "+this.state.mobile})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="fname">First name</label>
                    <input type="text" name="fname" placeholder="fname" onChange={this.handleChange}/><br/>
                    <label for="fname">Last name</label>
                    <input type="text" name="lname" placeholder="lname" onChange={this.handleChange}/><br/>
                    <label for="mobile">Mobile No</label>
                    <input type="tel" name="mobile" onChange={this.handleChange}/><br/>
                  
                    <input type="submit"/>
                </form>
                {/* <p>{this.state.mobile}</p> */}
                <h1>{this.state.output}</h1>
            </div>
        )
    }
}
export default Form;