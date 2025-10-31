import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  const [products, setProducts] = useState([]);

  // Загружаем данные с API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Функция для удаления карточки при двойном клике
  const handleDelete = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  // Обновление рейтинга или цены
  const handleUpdate = (id, key, value) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, [key]: value } : p
      )
    );
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default ProductList;
