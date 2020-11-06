import React from "react";
import { useSelector } from "react-redux";
import { selectAllProducts, selectProductLoading } from "../../store/products/productSelectors";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductFeed.css";

function ProductFeed() {
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectProductLoading);
  // console.log("ISLOADING?", loading);
  // console.log("WHAT ARE PRODUCTS?", products);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
      <div className="ProductFeed">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductFeed;
