import React from "react";
import "./Catlog.css";
import { useEffect, useState } from "react";

function Catlog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="page-container">
      <div className="header">
        <h2>Products </h2>
      </div>

      <div className="card-container">
      {products.length > 0 ? (
        <div className="card">
          {products.map((product) => {
            return (
              <div className="cardStyle">
                <img
                  src={product.image}
                  alt="product_image"
                  width="150"
                  height="180"
                />
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No Products to Display</h2>
      )}
      </div>
    </div>
  );
}

export default Catlog;
