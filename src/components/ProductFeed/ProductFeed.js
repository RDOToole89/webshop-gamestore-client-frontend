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
        <option value="">select a category</option>
        <option value="1">Games</option>
        <option value="2">Playstation</option>
        <option value="3">Xbox</option>
        <option value="4">Nintendo</option>
        <option value="5">Gaming Gear</option>
      </select>

      {loading ? <h1>Loading...</h1> : null}
      <div className="ProductFeed">
        {changeSort?.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            name={product.productName}
            imgUrl={product.imgUrl}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductFeed;
