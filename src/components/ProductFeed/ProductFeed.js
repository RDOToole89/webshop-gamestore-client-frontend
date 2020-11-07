import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts, selectProductLoading } from "../../store/products/productSelectors";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductFeed.css";

function ProductFeed() {
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectProductLoading);
  const [genre, setGenre] = useState(0);

  let changeSort;

  switch (genre) {
    case 0:
      changeSort = products;
      break;
    case 1:
      changeSort = products.filter((x) => x.categoryId === 1);
      break;
    case 2:
      changeSort = products.filter((x) => x.categoryId === 2);
      break;
    case 3:
      changeSort = products.filter((x) => x.categoryId === 3);
      break;
    case 4:
      changeSort = products.filter((x) => x.categoryId === 4);
      break;
    case 5:
      changeSort = products.filter((x) => x.categoryId === 5);
      break;
    case 6:
      changeSort = products.filter((x) => x.categoryId === 6);
      break;
    default:
      changeSort = products;
  }

  return (
    <div className="ProductFeed-wrapper">
      <select
        className="SelectGenre"
        onChange={(e) => {
          setGenre(parseInt(e.target.value));
        }}
      >
        <option value="">select a genre</option>
        <option value="1">Thrillers</option>
        <option value="2">Fantasy</option>
        <option value="3">Novel</option>
        <option value="4">Romance</option>
        <option value="5">Horror</option>
        <option value="6">Literature</option>
      </select>

      {loading ? <h1>Loading...</h1> : null}
      <div className="ProductFeed">
        {changeSort?.map((product) => (
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
