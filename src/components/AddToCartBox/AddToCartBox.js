import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cart/cartActions";
import { cartQuantityWithProductId } from "../../store/cart/cartSelectors";
import "./AddToCartBox.css";

function AddToCartBox(props) {
  const dispatch = useDispatch();

  const { productId } = props;

  const quantity = useSelector(cartQuantityWithProductId(productId));

  const addToCartHandler = () => {
    dispatch(addToCart(productId));
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="AddToCartBox">
      <div className="AddToCart-wrapper">
        <i className="las la-shopping-cart la-2x"></i>
        <button onClick={removeFromCartHandler} className="AddToCart-btn">
          -
        </button>
        <span> {!quantity ? 0 : quantity?.quantity} item in cart</span>
        <button onClick={addToCartHandler} className="AddToCart-btn">
          +
        </button>
      </div>
    </div>
  );
}

export default AddToCartBox;
