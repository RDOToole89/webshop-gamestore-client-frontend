import React from "react";
import { useSelector } from "react-redux";
import { selectItemsInCart } from "../../store/cart/cartSelectors";
import "./CartDisplay.css";

function CartDisplay() {
  const itemsInCart = useSelector(selectItemsInCart);
  // console.log("HOW MANY ITEMS IN CART?", itemsInCart);

  return (
    <div className="CartDisplay">
      <span className="CartDisplay-counter">{itemsInCart}</span>
      <i className="las la-shopping-cart la-3x"></i>
      <span className="CartDisplay-text">cart</span>
    </div>
  );
}

export default CartDisplay;
