import React from "react";

function Header() {
  // Функция для плавного скролла к footer
  const scrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <h1>Product Store</h1>
      <button onClick={scrollToFooter}>Scroll to Footer</button>
    </header>
  );
}

export default Header;
