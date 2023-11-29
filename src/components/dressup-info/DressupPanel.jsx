import React, { useState } from "react";
import "./dressup-panel.css"; // Import the CSS file

const DressupPanel = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => (prevCount + 1) % 2);
  };

  return (
    <div className="dressup-panel" onClick={handleClick}>
      <div className="dressupPanel-wrapper">
        <img
          src="./public/clothes/rifle.PNG"
          className="human"
          alt="Human body"
        />
        <img
          src="/public/clothes/sandale.PNG"
          className={`clothes layer2 pulsing ${
            clickCount === 1 ? "moveRight" : clickCount === 0 ? "moveBack" : ""
          }`}
          alt="Gumaky"
        />
        <img
          src="/public/clothes/mikina.PNG"
          className={`clothes layer2 pulsing ${
            clickCount === 1 ? "moveRight" : clickCount === 0 ? "moveBack" : ""
          }`}
          alt="Hoodie"
        />
        <img
          src="/public/clothes/zimna_ciapka.PNG"
          className={`clothes layer1 pulsing ${
            clickCount === 1 ? "moveLeft" : clickCount === 0 ? "moveBack" : ""
          }`}
          alt="Zimna Ciapka"
        />
      </div>
    </div>
  );
};

export default DressupPanel;
