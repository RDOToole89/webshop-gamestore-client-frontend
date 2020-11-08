import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentSection from "../../components/CommentSection/CommentSection";
import { addToCart } from "../../store/cart/cartActions";
import { fetchProductById } from "../../store/products/productActions";
import { selectSingleProduct } from "../../store/products/productSelectors";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const product = false;

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);

  const product = useSelector(selectSingleProduct);
  console.log(product);

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
            <button onClick={() => dispatch(addToCart(parseInt(id)))} className="ProductBox-btn">
              Add to Cart
            </button>
          </div>
        </div>
      )}
      <CommentSection />
    </div>
  );
}

export default ProductDetailsPage;
