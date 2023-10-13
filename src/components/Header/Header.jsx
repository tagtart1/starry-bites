import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <header className="header">
      <h1>Starry Bites</h1>
      <nav>
        <ul>
          {["Home", "About Us", "Menu", "Contact", "Reservations"].map(
            (item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setSelectedItem(index)}
                  className={selectedItem === index ? "activated" : ""}
                >
                  {item}
                </li>
              );
            }
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
