import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Stars from "../components/Stars";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2 style={{ textAlign: "center" }}>Загрузка...</h2>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <Stars rating={product.rating} onChange={() => {}} />
      <br />
      <button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>
        Назад
      </button>
    </div>
  );
}

export default ProductDetail;
