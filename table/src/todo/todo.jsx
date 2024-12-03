import React from "react";
class Todo extends React.Component{
    constructor(){
        super();
        this.state={todo:"",list:[]}
    }
    handleChange=(e)=>{
        this.setState({todo:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState((prevState)=>{
            console.log(this.state.list)

            return{
                list:[...prevState.list,prevState.todo],
                todo:""
            }
        })
    }
    deleterHandler=(index)=>{
        console.log("delete",index)
        let arr=[]
      this.state.list.filter((a,b)=>index!==b).map((a,b)=>{arr.push(a)})
      console.log(arr);
      this.setState({list:arr})
    }
    render(){
        return(
            <div>
                <h1 style={{textAlign:"center"}}>Todo List [2-12-24]</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todo" value={this.state.todo} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            {/* <p>{this.state.list}</p> */}
            <ul>
                {this.state.list.map((a,b)=>{
                    return(
                        <li key={b}>{a}<button>Edit</button><button onClick={()=>{this.deleterHandler(b)}}>Delete</button></li>
                    )
                })}
            </ul>
            </div>
        )
    }
}
export default Todo;