import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
class BsForm extends React.Component {
    constructor(){
        super();
        this.state={fname:"",fname1:"",email:"",email1:"",dob:"",dob1:"",addr:"",add1:""}
    }
    handleChange=(e)=>{
        const{name,value}=e.target
        this.setState({[name]:value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({fname1:this.state.fname,email1:this.state.email,dob1:this.state.dob,add1:this.state.addr})
        // this.setState({email1:this.state.email})
        // this.setState({dob1:this.state.dob})
        // this.setState({add1:this.state.add})
    }
  render() {
    return (
      <div >
        <h style={{textAlign:"center"}}>Bootstrap Form when submit the form data will display</h>
        <form onSubmit={this.handleSubmit}>
         <FloatingLabel
        controlId="floatingInput"
        label="Enter Your Full Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Jhon Doe" name="fname" onChange={this.handleChange}/>
      </FloatingLabel>
          <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" name="email" onChange={this.handleChange}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Confirm Your Password">
        <Form.Control type="password" placeholder="Password"  />
      </FloatingLabel>
      
      <label>Enter Your Gender</label><br/>
     
      <Form.Check
            inline
            label="Male"
            name="group1"
            type="radio"
           
          />
      <Form.Check
            inline
            label="Female"
            name="group1"
            type="radio"
           
          />
          <Form.Check
            inline
            label="Other"
            name="group1"
            type="radio"
           
          />
           <FloatingLabel
        controlId="floatingInput"
        label="Enter Your Date Of Birth"
        className="mb-3"
      >
        <Form.Control type="date" placeholder="01-01-2002" name="dob" onChange={this.handleChange}/>
      </FloatingLabel>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3} name="addr" onChange={this.handleChange} />
      </Form.Group>
      <Col xs="auto">
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Col>
        </form>
        <div>
            <p><b>Full Name :</b>{this.state.fname1}</p>
            <p><b> Email :</b>{this.state.email1}</p>
            <p><b>Date of Birth :</b>{this.state.dob1}</p>
            <p><b> Address :</b>{this.state.add1}</p>
            
        </div>
      </div>
    );
  }
}
export default BsForm;
