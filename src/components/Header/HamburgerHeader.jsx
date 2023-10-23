import React from "react";
import { useState, useRef } from "react";
import "./Header.css";
import hamburgerIcon from "../../images/hamburger-iconpng.png";

const HamburgerHeader = ({ parallax }) => {
  const mobileMenu = useRef();
  const openButton = useRef();
  const [selectedItem, setSelectedItem] = useState(0);
  const openMenu = (e) => {
    openButton.current.style.display = "none";
    mobileMenu.current.style.display = "flex";
    parallax.current.container.current.style.overflow = "hidden";
  };

  const handleClick = (index) => {
    setSelectedItem(index);
    parallax.current.scrollTo(index);
    mobileMenu.current.style.display = "none";
    openButton.current.style.display = "block";
    parallax.current.container.current.style.opacity = 1;
    parallax.current.container.current.style.overflow = "auto";
  };
  return (
    <>
      <header className="header-mobile" ref={mobileMenu}>
        <nav className="mobile-nav">
          <ul>
            {["Home", "About Us", "Menu", "Contact", "Reservations"].map(
              (item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleClick(index)}
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
      <button onClick={openMenu} className="open-nav-button" ref={openButton}>
        <img src={hamburgerIcon} alt="open menu" className="hamburger-icon" />
      </button>
    </>
  );
};

export default HamburgerHeader;
