import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import {
  cartItemsWithName,
  selectQuantityInCart,
  cartSubtotal,
} from "../../store/cart/cartSelectors";

import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();

  const itemsInCart = useSelector(selectQuantityInCart);
  const cartItemDetails = dispatch(cartItemsWithName());
  const total = useSelector(cartSubtotal);

  // console.log(total);

  return (
    <div className="Cart">
      <h2>Your cart has {itemsInCart} items... </h2>
      <div className="Cart-box">
        {cartItemDetails.map((item) => {
          return (
            <CartItem
              key={item.productId}
              productId={item.productId}
              name={item.name}
              qty={item.quantity}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          );
        })}
        <div className="Cart-total">
          <div className="Cart-total-box">
            <p className="Cart-total-shipping">Shipping costs: none</p>
            <p className="Cart-total-articles">
              Subtotal ({itemsInCart} item): ${total.toFixed(2)}
            </p>
            <button className="Cart-total-button">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
