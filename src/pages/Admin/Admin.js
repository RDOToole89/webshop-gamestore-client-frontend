import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewProduct } from "../../store/admin/adminActions";
import { selectLoggedInUser } from "../../store/Signin/signinSelectors";
import "./Admin.css";

function Admin() {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    imgUrl: "",
    supplierId: 0,
    categoryId: 0,
    unit: 0,
    price: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postNewProduct(productData));
    setProductData({
      productName: "",
      description: "",
      imgUrl: "",
      supplierId: 0,
      categoryId: 0,
      unit: 0,
      price: 0,
    });
  };

  const timeOfDay = new Date();
  const hours = timeOfDay.getHours();

  let greet = "";

  if (hours < 12) greet = "morning";
  else if (hours >= 12 && hours <= 17) greet = "afternoon";
  else if (hours >= 17 && hours <= 24) greet = "evening";

  const userData = useSelector(selectLoggedInUser);

  return (
    <div className="Admin">
      <div className="Admin-panel">
        <h2 className="Admin-panel-header">
          Good {greet} {userData.user.name}!{" "}
        </h2>
        <p className="Admin-panel-quote">
          "Motivational quote of the day: Be productive or else we'll fire your ass, the bezos is
          watching you!"
        </p>
        <form className="Admin-panel-form" onSubmit={handleSubmit}>
          <h3 className="Admin-panel-form-header">Add a product</h3>
          <label htmlFor="productName">Product name:</label>
          <input
            id="productName"
            type="test"
            className="Admin-panel-form-input"
            onChange={(e) => setProductData({ ...productData, productName: e.target.value })}
            value={productData.productName}
          />
          <label htmlFor="description">description</label>
          <input
            id="description"
            type="text"
            className="Admin-panel-form-input"
            onChange={(e) => setProductData({ ...productData, description: e.target.value })}
            value={productData.description}
          />
          <label htmlFor="imgUrl">imgUrl</label>
          <input
            id="imgUrl"
            type="text"
            className="Admin-panel-form-input"
            onChange={(e) => setProductData({ ...productData, imgUrl: e.target.value })}
            value={productData.imgUrl}
          />
          <label htmlFor="supplierId">supplierId</label>
          <input
            id="supplierId"
            type="number"
            className="Admin-panel-form-input"
            onChange={(e) => setProductData({ ...productData, supplierId: e.target.value })}
            value={productData.supplierId}
          />
          <label htmlFor="categoryId">categoryId</label>
          <input
            id="categoryId"
            type="number"
            className="Admin-panel-form-input"
            onChange={(e) => setProductData({ ...productData, categoryId: e.target.value })}
            value={productData.categoryId}
          />
          <label htmlFor="unit">unit</label>
          <input
            id="unit"
            type="number"
            className="Admin-panel-form-input"
            onChange={(e) => setProductData({ ...productData, unit: e.target.value })}
            value={productData.unit}
          />
          <label htmlFor="price">price</label>
          <input
            id="price"
            type="text"
            className="Admin-panel-form-input"
            onChange={(e) => setProductData({ ...productData, price: e.target.value })}
            value={productData.price}
          />
          <button className="Admin-panel-form-btn">Add product</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
