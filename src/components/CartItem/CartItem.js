import AddToCartBox from "../AddToCartBox/AddToCartBox";
import "./CartItem.css";

function CartItem(props) {
  const { name, productId, qty, price, imgUrl } = props;

  // console.log("WHATS IN PROPS?!?", props);

  return (
    <div className="CartItem">
      <img src={imgUrl} className="CartItem-img" alt="cart item" />
      <h4 className="CartItem-name">{name}</h4>
      <div className="CartItem-stars">
        <i className="las la-star"></i>
        <i className="las la-star"></i>
        <i className="las la-star"></i>
        <i className="las la-star"></i>
        <i className="las la-star"></i>
      </div>
      <div className="CartItem-qty">{qty}</div>
      <AddToCartBox productId={productId} />
      <p className="CartItem-total">${parseFloat(price * qty)}</p>
    </div>
  );
}

export default CartItem;
