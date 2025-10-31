import React from "react";
import { useNavigate } from "react-router-dom";
import Stars from "./Stars";

function ProductItem({ product, onDelete, onUpdate }) {
  const navigate = useNavigate();

  const handlePriceChange = (e) => {
    onUpdate(product.id, "price", e.target.value);
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
      onDoubleClick={() => onDelete(product.id)}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-img"
      />
      <h3>{product.title}</h3>
      <p>
        Price: $
        <input
          type="number"
          value={product.price}
          onChange={handlePriceChange}
          onClick={(e) => e.stopPropagation()}
        />
      </p>
      <Stars
        rating={product.rating}
        onChange={(newRating) => onUpdate(product.id, "rating", newRating)}
      />
    </div>
  );
}

export default ProductItem;



































// import React from "react";
// import Stars from "./Stars";

// function ProductItem({ product, onDelete, onUpdate }) {
//   // Изменение цены вручную
//   const handlePriceChange = (e) => {
//     onUpdate(product.id, "price", e.target.value);
//   };

//   return (
//     <div
//       className="product-card"
//       onDoubleClick={() => onDelete(product.id)}
//     >
//       <img
//         src={product.thumbnail}
//         alt={product.title}
//         className="product-img"
//       />
//       <h3>{product.title}</h3>
//       <p>
//         Price: $
//         <input
//           type="number"
//           value={product.price}
//           onChange={handlePriceChange}
//         />
//       </p>

//       {/* Компонент рейтинга */}
//       <Stars
//         rating={product.rating}
//         onChange={(newRating) => onUpdate(product.id, "rating", newRating)}
//       />
//     </div>
//   );
// }

// export default ProductItem;

