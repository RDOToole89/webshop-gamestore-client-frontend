import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import ProductFeed from "../../components/ProductFeed/ProductFeed";
import { fetchProducts } from "../../store/products/productActions";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <NavBar />
      <ProductFeed />
    </div>
  );
}

export default HomePage;
