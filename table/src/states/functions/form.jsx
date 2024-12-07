import React, { useState } from "react";
import MyVerticallyCenteredModal from "../../bootstrap/modal";
function FormData() {
    const [modalShow, setModalShow] = React.useState(false);
  const [formData, setFormData] = useState({ user: "", mobile: "",email:""});
  const[file,setFile]=useState(null)
  const handleInput = (e) => {
    // console.log(e.target.files);
        // setFile(URL.createObjectURL(e.target.files[0]));
    let { name, value, type } = e.target;
    if (type === "file") {
        const imageFile = e.target.files[0];
        if (imageFile) {
          const reader = new FileReader();
          reader.onload = () => {
            setFile(reader.result); // Set the file preview URL
          };
          reader.readAsDataURL(imageFile); // Read the file as a data URL
          setFormData((prev) => ({
            ...prev,
            [name]: imageFile, // Save the file object in formData
          }));
        }
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    };
  
    
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(formData.user+" "+formData.mobile)
    setModalShow(true)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          value={formData.user}
          onChange={handleInput}
          placeholder="enter name"
        />
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleInput}
          placeholder="enter mobile number"
        />
         <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
          placeholder="enter email"
        />
        <input
          type="file"
          name="image"
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
      {/* <img src={file} alt="img"/> */}
      {/* {file && <img src={file} alt="Preview" style={{ width: "200px", marginTop: "10px" }} />} */}
      {/* <h1>{formData.user}</h1> */}
      <MyVerticallyCenteredModal show={modalShow}
        onHide={() => setModalShow(false)}
        user={formData.user}
        mobile={formData.mobile}
        email={formData.email}
        src={file}
        />
    </div>
  );
}
export default FormData;
