import React from "react";
import Friend from "../Friend/Friend";
import "./Cart.css";
const Cart = (props) => {
  console.log(props);
  const name = props.friend.name;
  return (
    <div className="showName">
      <h3> {name}</h3>
    </div>
  );
};

export default Cart;
