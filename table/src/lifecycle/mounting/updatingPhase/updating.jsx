import React from "react";
import axios from "axios";
import ProductsCard from "../../../bootstrap/card";
import Loader from "../../../utilites/loadSpinner/loader";
/*
Updation Phase: it is used where the states and props of a component are updated followed by some user events,
    such as clicking, pressing a key on the keyboard, etc. 
    --A component is updated whenever there is a change in the component's state or props.
it has 5 phases
1.constructor()
2.render()
    2.1 getDerivedStateFromProps()
3.componentDidUpdate()
4.shouldComponentUpdate()
5.getSnapshotBeforeUpdate() 

3.componentDidUpdate()--when ever a component is updated this method automatically executes
    --it accepts 2 parameters
    componentDidUpdate(prevProps,prevState){}


4.shouldComponentUpdate()-- method you can return a Boolean value that specifies whether React should continue with the rendering or not.
    --The default value is true
    --it wll decides whether a component should update or not
    shouldComponentUpdate(nextprops,nextState){}
5.getSnapshotBeforeUpdate() --it will contain the information of state before updating
    getSnapshotBeforeUpdate(prevProps,prevState){}


*/
class UpdatingComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, product: null, color: "red" };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    this.setState({ count: this.state.count - 1 });
  };
  val = (a) => {
    this.setState({ count: this.state.count + a });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  static getDerivedStateFromProps(props, state) {
    return { color: props.color };
    // return null;
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState,"updating")
    // console.log(prevProps,"props")
    if (prevState.count !== this.state.count) {
      axios
        .get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then((res) => {
          this.setState({ product: res.data });
          // console.log(res)
        });
    }
  }
  shouldComponentUpdate(nextprops, nextState) {
    if (this.state.count >= 20) {
      return false;
    } else {
      return true;
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState.count, "snapshot");
    return null;
  }

  render() {
    const { count, product, color } = this.state;
    // console.log(product)
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Updating Phase</h1>
        <div style={{}}>
          <span style={{display:"flex",justifyContent:"center"}}>
            <h1 style={{ color: color }}>{count}</h1>
          </span>
          <span style={{display:"flex",justifyContent:"center"}}>
            <button onClick={this.inc}>Inc</button>
            <button onClick={this.dec} disabled={count < 1}>
              Dec
            </button>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            padding: "10px",
          }}
        >
          <button
            onClick={() => {
              this.val(3);
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              this.val(4);
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              this.val(5);
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              this.val(6);
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              this.val(7);
            }}
          >
            7
          </button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          {product ? <ProductsCard data={product} /> : <Loader />}
        </div>
      </div>
    );
  }
}
export default UpdatingComp;
