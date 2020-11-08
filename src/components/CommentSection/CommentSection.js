import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "../../store/products/productSelectors";
import "./CommentSection.css";

function CommentSection() {
  const product = useSelector(selectComments);
  console.log(product);

  return (
    <div className="CommentSection">
      <h2 className="CommentSection-header">Comment Section</h2>
      {product.length === 0 && <h4>No comments for this product...</h4>}
      {product?.map((x) => (
        <div key={x.id} className="Comment">
          <h4 className="Comment-title">posted by anonymous</h4>
          <p className="Comment-text">{x.text}</p>
          <p className="Comment-date">{x.createdAt}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentSection;
