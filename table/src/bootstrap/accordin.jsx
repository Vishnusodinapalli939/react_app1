import Accordion from 'react-bootstrap/Accordion';

function ProductsAccordion(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.data.title}</Accordion.Header>
        <Accordion.Body>
         <img src={props.data.image} alt={props.data.title}/>
         <div>
            {props.data.description}
         </div>
         <p>Category :{props.data.category}</p>
         <div style={{display:"flex",justifyContent:"space-between"}}>
          <p> Price  : {props.data.price}</p>
           <p> Rating  :{props.data.rating.rate}</p>
         </div>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default ProductsAccordion;