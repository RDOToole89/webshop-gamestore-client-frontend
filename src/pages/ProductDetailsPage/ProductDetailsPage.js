import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/products/productActions";
import { selectProduct } from "../../store/products/productSelectors";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = dispatch(selectProduct(id));

  return (
    <div className="ProductPage">
      {!product ? (
        <h1>Loading...</h1>
      ) : (
        <div className="ProductBox">
          <div className="ProductBox-left">
            <img className="ProductBox-img" alt="product" src={product.imgUrl} />
          </div>
          <div className="ProductBox-right">
            <h2 className="ProductBox-header">{product.productName}</h2>
            <p className="ProductBox-description">{product.description}</p>

            <h3 className="ProductBox-price">${product.price}</h3>
            <button className="ProductBox-btn">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
