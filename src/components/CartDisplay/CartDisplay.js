import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectQuantityInCart } from "../../store/cart/cartSelectors";
import "./CartDisplay.css";

function CartDisplay() {
  const itemsInCart = useSelector(selectQuantityInCart);
  // console.log("HOW MANY ITEMS IN CART?", itemsInCart);

  return (
    <div className="CartDisplay">
      <span className="CartDisplay-counter">{itemsInCart}</span>
      <Link to="/cart">
        <i className="las la-shopping-cart la-3x"></i>
      </Link>
      <span className="CartDisplay-text">cart</span>
    </div>
  );
}

export default CartDisplay;
