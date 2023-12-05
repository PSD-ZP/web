import { WeatherInfoCard } from '../weather-info-card/WeatherInfoCard';
import {useState} from "react";
import {useStore} from "../../Store.js";
import {getWeatherOfLastHours} from "../../api/weather-api.js";
import './weather-panel.css';
import {getClothesByWeather} from "../../api/clothes-api.js";

export function WeatherPanel() {
    const { forecast, setForecast, setClothes } = useStore();
    const { forecasts } = forecast;

    const [location, setLocation] = useState('');
    const [cardType, setCardType] = useState('temperature');

    const hour = new Date(forecasts[0]["dateTime"]).getHours();
    const formattedHour = (hour < 10 ? '0' : '') + hour + ':00';

    const handleSubmit = async (event) => {
        if (event.key !== 'Enter') {
            return;
        }

        const forecastData = await getWeatherOfLastHours(null, null, 'Kosice');
        const firstForecast = forecastData.forecasts[0];
        const clothesData = await getClothesByWeather(firstForecast.temperature, firstForecast.windKmph, firstForecast.clouds, firstForecast.chanceOfRain, firstForecast.chanceOfSnow);
        setClothes(clothesData);

        if (forecastData) {
            setForecast(forecastData);
        }
    }

    return (
        <div className='weatherPanelWrapper'>

            <div className='weatherPanelHeader'>
                <span>Aktuálne počasie</span>
                <input
                    placeholder='Vyhľadať iné mesto'
                    onKeyDown={handleSubmit}
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                />
            </div>

            { forecasts &&
                <>
                    <div className='weatherInfo'>
                        <span>{forecast.location}</span>

                        <div className='weatherRow'>

                            <div style={{ 'display': 'flex', 'justifyContent': 'space-evenly', 'alignItems': 'center', 'flexGrow': '2'}}>
                                <img src={`https:${forecasts[0]["iconUrl"]}`} alt='Oblačno' style={{ 'height': '128px', 'width': '128px' }} />
                                <div className='weatherRowLeft'>
                                    <span style={{ 'fontSize': '60px' }}>{forecasts[0]["temperature"]} °C</span>
                                    <span style={{ 'fontSize': '25px' }}>{forecasts[0]["dayOfTheWeek"]} {formattedHour}</span>
                                    <span style={{ 'fontSize': '25px' }}>{forecasts[0]["conditionDestription"]}</span>
                                </div>
                            </div>

                            <div className='weatherRowRight'>
                                <span style={{ 'fontSize': '20px' }}>Pravdepodobnosť zrážok: {forecasts[0]["chanceOfRain"]}%</span>
                                <span style={{ 'fontSize': '20px' }}>Vlhkosť: {forecasts[0]["humidity"]}%</span>
                                <span style={{ 'fontSize': '20px' }}>Vietor: {forecasts[0]["windKmph"]}km/h</span>
                            </div>
                        </div>
                    </div>

                    <div className='nextFourHours'>
                        <span style={{ 'fontSize': '32px' }}>Najbližšie 4 hodiny</span>

                        <div className='nextFourHours_tabs'>
                            <span className='nextFourHours_tab' onClick={() => setCardType('temperature')}>Teplota</span> | <span className='nextFourHours_tab' onClick={() => setCardType('chanceOfRain')}>Zrážky</span> | <span className='nextFourHours_tab' onClick={() => setCardType('windKmph')}>Vietor</span>
                        </div>

                        <div className='weatherInfoCards'>
                            <WeatherInfoCard type={cardType} value={forecasts[0][cardType]} time={forecasts[0]["dateTime"]}/>
                            <WeatherInfoCard type={cardType} value={forecasts[1][cardType]} time={forecasts[1]["dateTime"]}/>
                            <WeatherInfoCard type={cardType} value={forecasts[2][cardType]} time={forecasts[2]["dateTime"]}/>
                            <WeatherInfoCard type={cardType} value={forecasts[3][cardType]} time={forecasts[3]["dateTime"]}/>
                        </div>
                    </div>
                </>
            }

        </div>
    );
}
