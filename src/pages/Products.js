import React from "react";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Link to="/">
          <button>Главная</button>
        </Link>
      </div>
      <ProductList />
    </div>
  );
}

export default Products;
