import React, { useState } from "react";
import "./dressup-panel.css";
import {useStore} from "../../Store.js";

const mapImageToName = (name, layer) => {
  switch(name) {
    case 'Hrubé body':
      return <img
          src="/clothes/hrube_body.PNG"
          className={`clothes ${layer} pulsing`}
          alt="Hrube body"
      />
    case 'Tenké body':
      return <img
          src="/clothes/tenke_body.PNG"
          className={`clothes ${layer} pulsing`}
          alt="Tenke body"
      />
    case 'Zimná bunda':
      return <img
          src="/clothes/zimna_bunda.PNG"
          className={`clothes ${layer} pulsing`}
          alt="Zimna bunda"
      />
    case 'Mikina':
      return <img
          src="/clothes/mikina.PNG"
          className={`clothes ${layer} pulsing`}
          alt="Mikina"
      />
    case 'Prechodná bunda':
      return <img
          src="/clothes/prechodna_bunda.PNG"
          className={`clothes ${layer} pulsing`}
          alt="Prechodna bunda"
      />
    case 'Softshellka':
      return <img
          src="/clothes/softshell.PNG"
          className={`clothes ${layer} pulsing`}
          alt="Softshellka"
      />
    default:
      break;
  }
}

const DressupPanel = () => {
  const [moveRight, setMoveRight] = useState(true);
  const [isClickable, setIsClickable] = useState(true);
  const { clothes } = useStore();
  const { body } = clothes;

  const toggleImageMovement = () => {
    if (!isClickable) return;
    setIsClickable(false);

    const images = document.querySelectorAll('.dressupPanel-wrapper img');

    images.forEach((image, index) => {
      if (image.className === 'human' || image.className === 'clothes' || image.className.includes('baseLayer')) return;

      const currentPosition = parseFloat(window.getComputedStyle(image).left);

      const direction = image.className.includes('layer2') ? -1 : 1;
      const offset = moveRight ? 150 : -150;
      const newPosition = currentPosition + offset * direction;

      image.style.left = `${newPosition}px`;
    });

    setMoveRight((prev) => !prev);

    setTimeout(() => setIsClickable(true), 300);
  }

  return (
    <div className="dressup-panel" onClick={toggleImageMovement}>
      <div className="dressupPanel-wrapper">
        <img
          src="/clothes/rifle.PNG"
          className="human"
          alt="Pajac"
        />
        <img
          src="/clothes/zimne_topanky.PNG"
          className={'clothes'}
          alt="Boty"
        />
        <img
            src="/clothes/zimna_ciapka.PNG"
            className={'clothes'}
            alt="Capica"
        />
        { mapImageToName(body[0]['name'], 'baseLayer') }
        { mapImageToName(body[1]['name'], 'layer1') }
        { mapImageToName(body[2]['name'], 'layer2') }
      </div>
    </div>
  );
};

export default DressupPanel;
