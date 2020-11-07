import React from "react";
import { Link } from "react-router-dom";
import AddToCartBox from "../AddToCartBox/AddToCartBox";
import "./ProductCard.css";

function ProductCard(props) {
  const { productId, name, imageUrl, price } = props;

  return (
    <div className="ProductCard">
      <h3 className="ProductCard-name">{name}</h3>
      <Link to={`/product/${productId}`}>
        <img className="ProductCard-image" src={imageUrl} alt="product" />
      </Link>
      <p>${price}</p>
      <AddToCartBox productId={productId} />
    </div>
  );
}

export default ProductCard;
