import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductsCard(props) {
    // {console.log(props)}
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body style={{overflowY:"scroll",height:"150px"}}>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text >
         {props.data.description}
        </Card.Text>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <Card.Text>Price:
         {props.data.price}
        </Card.Text>
        <Card.Text>Rating:
         {props.data.rating.rate}
        </Card.Text>
        </div>
     
      </Card.Body>
      <Card.Footer className="text-muted" style={{display:"flex",justifyContent:"space-between"}}>
      <Link to="/products"><Button variant="primary">Back</Button></Link>
        <Button variant="primary">{props.data.category}</Button>
        </Card.Footer>
    </Card>
  );
}

export default ProductsCard;