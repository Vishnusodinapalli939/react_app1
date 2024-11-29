import React from "react";
import Table from "react-bootstrap/Table";
function BsTable(props) {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.data.id}</td>
            <td>{props.data.title}</td>
            <td>{props.data.price}</td>
            <td>{props.data.description}</td>
            <td>{props.data.category}</td>
            <td><img src={props.data.image} alt={props.data.title}/></td>
            <td>{props.data.rating.rate}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default BsTable;
