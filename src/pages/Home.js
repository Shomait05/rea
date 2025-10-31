import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Добро пожаловать в Product Store</h1>
      <div style={{ marginTop: "30px" }}>
        <Link to="/">
          <button>Главная</button>
        </Link>
        <Link to="/products" style={{ marginLeft: "10px" }}>
          <button>Товары</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
