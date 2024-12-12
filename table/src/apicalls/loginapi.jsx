import React,{useState} from "react";
import MyVerticallyCenteredModal from "../bootstrap/modal";
function LoginApi(){
    const [modalShow, setModalShow] = React.useState(false);
    const [formData,setFormData]=useState({
        username:"",
        password:"",
        expiresInMin:30
    });
    const [response,setResponse]=useState(false)
    const handleInput=(e)=>{
        const {name,value,type}=e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }))

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
             // Include cookies (e.g., accessToken) in the request
          })
          .then(res => res.json())
          .then((res)=>{
            console.log(res);
            res.accessToken?setResponse(true):setResponse(false);
            setModalShow(true) 
        });


    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={formData.username} onChange={handleInput} placeholder="enter user name"/>
                <input type="text" name="password" value={formData.password} onChange={handleInput} placeholder="enter password"/>
                <input type="number" name="expiresInMin" value={formData.expiresInMin} />
                <input type="submit"/>
            </form>
        {response?<MyVerticallyCenteredModal show={modalShow}
        onHide={() => setModalShow(false)}
        user={formData.username}
        />:<MyVerticallyCenteredModal show={modalShow}
        onHide={() => setModalShow(false)}
        user="Invalid Crendintials"
        />}

        </div>
    )
}
export default LoginApi;