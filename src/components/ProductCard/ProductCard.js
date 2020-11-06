import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  const { name, imageUrl, price } = props;

  return (
    <div className="ProductCard">
      <h3 className="ProductCard-name">{name}</h3>
      <img className="ProductCard-image" src={imageUrl} alt="product" />
      <p>${price}</p>
    </div>
  );
}

export default ProductCard;
