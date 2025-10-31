import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Stars({ rating, onChange }) {
  const [hover, setHover] = useState(null);

  // Округляем рейтинг до ближайшего целого
  const current = Math.round(rating);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`fa fa-star ${star <= (hover || current) ? "active" : ""}`}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
          onClick={() => onChange(star)} // изменение рейтинга
        ></span>
      ))}
    </div>
  );
}

export default Stars;































// import React, { useState } from "react";
// import StarsEditable from "./StarsEditable";

// /**
//  * Компонент редактируемого рейтинга.
//  * @param {number} rating — начальное значение (1–5)
//  * @param {function} onChange — callback, вызывается при изменении рейтинга
//  * @param {number} max — максимальное число звёзд (по умолчанию 5)
//  */
// const StarsEditable = ({ rating = 0, onChange, max = 5 }) => {
//   const [selectedRating, setSelectedRating] = useState(rating);
//   const [hoverRating, setHoverRating] = useState(0);

//   const handleClick = (value) => {
//     setSelectedRating(value);
//     if (onChange) {
//       onChange(value);
//     }
//   };

//   const handleMouseOver = (value) => {
//     setHoverRating(value);
//   };
//   const handleMouseLeave = () => {
//     setHoverRating(0);
//   };

//   const stars = Array.from({ length: max }, (_, idx) => idx + 1);

//   return (
//     <div className="stars-editable" style={{ display: "flex", cursor: "pointer" }}>
//       {stars.map((value) => {
//         const fillColor = (hoverRating || selectedRating) >= value ? "orange" : "gray";
//         return (
//           <FaStar
//             key={value}
//             size={24}
//             color={fillColor}
//             onClick={() => handleClick(value)}
//             onMouseOver={() => handleMouseOver(value)}
//             onMouseLeave={handleMouseLeave}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default StarsEditable;







// import React from "react";

// const Stars = ({ rating }) => {
//   const stars = [];
//   // Округлим рейтинг до ближайшего целого
//   const rounded = Math.round(rating);

//   // Генерируем 5 иконок звезд
//   for (let i = 1; i <= 5; i++) {
//     // Если номер звезды меньше или равен округлённому рейтингу — активная
//     stars.push(
//       <span
//         key={i}
//         className={`fa fa-star ${i <= rounded ? "active" : ""}`}
//       ></span>
//     );
//   }

//   return <div className="stars">{stars}</div>;
// };

// export default Stars;