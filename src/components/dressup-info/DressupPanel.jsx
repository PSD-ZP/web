import React, { useState } from "react";
import "./dressup-panel.css";
import {useStore} from "../../Store.js";

const mapImageToName = (name, layer = null, isPulsing = false) => {
  switch(name) {
    case 'Hrubé body':
      return <img
          src="/clothes/hrube_body.PNG"
          className={`clothes ${layer} ${isPulsing && 'pulsing'}`}
          alt="Hrube body"
      />
    case 'Tenké body':
      return <img
          src="/clothes/tenke_body.PNG"
          className={`clothes ${layer} ${isPulsing && 'pulsing'}`}
          alt="Tenke body"
      />
    case 'Zimná bunda':
      return <img
          src="/clothes/zimna_bunda.PNG"
          className={`clothes ${layer} ${isPulsing && 'pulsing'}`}
          alt="Zimna bunda"
      />
    case 'Mikina':
      return <img
          src="/clothes/mikina.PNG"
          className={`clothes ${layer} ${isPulsing && 'pulsing'}`}
          alt="Mikina"
      />
    case 'Prechodná bunda':
      return <img
          src="/clothes/prechodna_bunda.PNG"
          className={`clothes ${layer} ${isPulsing && 'pulsing'}`}
          alt="Prechodna bunda"
      />
    case 'Softshellka':
      return <img
          src="/clothes/softshell.PNG"
          className={`clothes ${layer} ${isPulsing && 'pulsing'}`}
          alt="Softshellka"
      />
    case 'Šiltovka':
      return <img
          src="/clothes/siltovka.PNG"
          className={`clothes`}
          alt="Siltovka"
      />
    case 'Zimna čiapka':
      return <img
          src="/clothes/zimna_ciapka.PNG"
          className={`clothes`}
          alt="Zimna ciapka"
      />
    case 'Sandále':
      return <img
          src="/clothes/sandale.PNG"
          className={`clothes`}
          alt="Sandale"
      />
    case 'Gumáky':
      return <img
          src="/clothes/gumaky.PNG"
          className={`clothes`}
          alt="Gumaky"
      />
    case 'Zimné topánky':
      return <img
          src="/clothes/zimne_topanky.PNG"
          className={`clothes`}
          alt="Zimne topanky"
      />
    case 'Tenisky':
      return <img
          src="/clothes/tenisky.PNG"
          className={`clothes`}
          alt="Tenisky"
      />
    case 'Rifle':
      return <img
          src="/clothes/rifle.PNG"
          className={`clothes`}
          alt="Rifle"
      />
    case 'Kraťasy':
      return <img
          src="/clothes/kratasy.PNG"
          className={`clothes`}
          alt="Kratasy"
      />
    case 'Tričko':
    case 'NONE':
      break;
    default:
      break;
  }
}

const DressupPanel = () => {
  const [moveRight, setMoveRight] = useState(true);
  const [isClickable, setIsClickable] = useState(true);
  const { clothes } = useStore();
  const { head, body, legs, shoes } = clothes;

  const toggleImageMovement = () => {
    if (!isClickable) return;
    setIsClickable(false);

    const images = document.querySelectorAll('.dressupPanel-wrapper img');

    images.forEach((image) => {
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

  const layers = ['baseLayer', 'layer1', 'layer2'];

  return (
    <div className="dressup-panel" onClick={toggleImageMovement}>
      <div className="dressupPanel-wrapper">
        { mapImageToName(legs.some((x) => x['name'] === 'Kraťasy') ? 'Kraťasy' : 'Rifle') }
        { mapImageToName(head[0]['name']) }
        { mapImageToName(shoes[0]['name']) }
        {
          body.map((bodyItem, index) => {
            return mapImageToName(bodyItem['name'], layers[index], true);
          })
        }
      </div>
    </div>
  );
};

export default DressupPanel;
