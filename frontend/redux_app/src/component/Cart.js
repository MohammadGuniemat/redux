import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, multiply } from "../actions/cartAction";

const Cart = () => {
    console.log('RERENDERED !!!');
    
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <h2>Number of items in Cart: {state.numOfItems}</h2>
      <button className="green"
        onClick={() => {
          dispatch(addItem());
        }}
      >
        Add Item to Cart
      </button>
      <button className="red"
        disabled={state.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(multiply());
        }}
      >
        Remove Item to Cart
      </button>
    </div>
  );
};

export default Cart;