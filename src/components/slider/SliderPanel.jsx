import './slider-panel.css'
import {useState} from "react";
import {blurWebPage} from "../../api/blur-page.js";

export function SliderPanel() {

    const [isVisible, setVisible] = useState(false);

    const handleSliderClick = () => {
        blurWebPage();
        setVisible(!isVisible);
    };

    return (
        <div className={`sliderPanelWrapper ${isVisible ? 'visible' : 'hidden'}`}>
           <div className='headerWrapperSlider'>
                <span>
                    Pustíme deti von?
                </span>
           </div>
    
           <div className='sliderContentWrapper'>
                <div className='sliderContentText'>Aktuálna poloha</div>
                <div className='sliderContentRowWrapper' style={{ alignItems: 'baseline'}}>
                    <div className='sliderContentText location'>Snina</div>
                    <div className='sliderContentText' style={{marginLeft: '5vw'}}>Stav</div>
                </div>

                <div className='sliderContentRowWrapper'>
                    <img className='sliderImage' src="/playground-items/hojdacka.png" alt="Image Description" width={150} height={180}/>
                    <div className='sliderContentPropStateWrapper'>
                        <div className='sliderContentText propstate'>Mokro</div>
                        <div className='sliderContentText propstate smaller'>Vyschne za 3 hodiny</div>
                    </div>
                </div>

                <div className='horizontalLine'/>

                <div className='sliderContentRowWrapper'>
                    <img className='sliderImage' src="/playground-items/pieskovisko.png" alt="Image Description" width={150} height={180}/>
                    <div className='sliderContentPropStateWrapper'>
                        <div className='sliderContentText propstate'>Mokro</div>
                        <div className='sliderContentText propstate smaller'>Vyschne za 3 hodiny</div>
                    </div>
                </div>

                <div className='horizontalLine'/>

                <div className='sliderContentRowWrapper'>
                    <img className='sliderImage' src="/playground-items/smykalka.png" alt="Image Description" width={150} height={180}/>
                    <div className='sliderContentPropStateWrapper'>
                        <div className='sliderContentText propstate'>Mokro</div>
                        <div className='sliderContentText propstate smaller'>Vyschne za 3 hodiny</div>
                    </div>
                </div>
                
           </div>

           <div className={`sliderButton ${isVisible ? 'visible' : 'hidden'}`} onClick={handleSliderClick}>
                <div className='buttonText'>Stav ihrísk</div>
                <div className={`arrowIndicator ${isVisible ? 'left' : 'right'}`}/>
            </div>
            
        </div>          
    );
}