import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductFeed from "../../components/ProductFeed/ProductFeed";
import { fetchProducts } from "../../store/products/productActions";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <ProductFeed />
    </div>
  );
}

export default HomePage;
