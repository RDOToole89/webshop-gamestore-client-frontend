import React from "react";
import AddToCartBox from "../AddToCartBox/AddToCartBox";
import "./ProductCard.css";

function ProductCard(props) {
  const { productId, name, imageUrl, price } = props;

  return (
    <div className="ProductCard">
      <h3 className="ProductCard-name">{name}</h3>
      <img className="ProductCard-image" src={imageUrl} alt="product" />
      <p>${price}</p>
      <AddToCartBox productId={productId} />
    </div>
  );
}

export default ProductCard;
