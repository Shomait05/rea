// App.jsx

import React, { useState } from 'react';
import ProductItem from './ProductItem';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ]);

  // Добавить новый товар через prompt
  const handleAdd = () => {
    const input = prompt("Введите имя и цену, например: Велосипед 1000");
    if (!input) return;
    const parts = input.split(' ');
    if (parts.length < 2) {
      alert("Неверный формат");
      return;
    }
    const name = parts.slice(0, parts.length - 1).join(' ');
    const priceNum = parseInt(parts[parts.length - 1], 10);
    if (isNaN(priceNum)) {
      alert("Последняя часть должна быть числом (цена)");
      return;
    }
    const newProduct = {
      id: Date.now(),
      name,
      price: priceNum,
      count: 1
    };
    setProducts(prev => [...prev, newProduct]);
  };

  // Изменить count для товара с id
  const changeCount = (id, delta) => {
    setProducts(prev =>
      prev.map(p => {
        if (p.id === id) {
          const newCount = p.count + delta;
          // Проверка: не больше 25
          if (newCount > 25) return p;
          return { ...p, count: newCount };
        } else {
          return p;
        }
      })
    );
  };

  // Удалить товар по id
  const removeProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div>
      <button onClick={handleAdd}>Добавить новый товар</button>
      <div className="product-list">
        {products.map(p => (
          <ProductItem
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            count={p.count}
            onIncrement={() => changeCount(p.id, +1)}
            onDecrement={() => changeCount(p.id, -1)}
            onRemove={() => removeProduct(p.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;