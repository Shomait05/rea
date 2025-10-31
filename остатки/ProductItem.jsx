// ProductItem.jsx

import React from 'react';

function ProductItem({ id, name, price, count, onIncrement, onDecrement, onRemove }) {
  const handleDoubleClick = () => {
    onRemove();
  };

  // если count == 0, автоматически удалить (вызвать onRemove)
  React.useEffect(() => {
    if (count === 0) {
      onRemove();
    }
  }, [count, onRemove]);

  return (
    <div
      className="product-item"
      onDoubleClick={handleDoubleClick}
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '5px',
        display: 'inline-block'
      }}
    >
      <div>{name}</div>
      <div>Price: {price}</div>
      <div>
        <button onClick={(e) => { e.stopPropagation(); onDecrement(); }}>–</button>
        <span style={{ margin: '0 10px' }}>{count}</span>
        <button onClick={(e) => { e.stopPropagation(); onIncrement(); }}>+</button>
      </div>
    </div>
  );
}

export default ProductItem;