import React, {useEffect} from "react";
import './main-page.css'
import {Header} from "../../components/header/Header.jsx";
import {Navigation} from "../../components/navigation/Navigation.jsx";
import {WeatherPanel} from "../../components/weather-info/WeatherPanel.jsx";
import DressupPanel from "../../components/dressup-info/DressupPanel.jsx";
import {useStore} from "../../Store.js";
import {getWeatherOfLastHours} from "../../api/weather-api.js";
import {getClothesByWeather} from "../../api/clothes-api.js";

export function MainPage() {
    const { forecast, clothes, setForecast, setClothes } = useStore();

    const fetchDataOnFirstRender = async () => {
        let data = await getWeatherOfLastHours(null, null, 'Kosice');
        setForecast(data);
        const firstForecast = data.forecasts[0];
        data = await getClothesByWeather(firstForecast.temperature, firstForecast.windKmph, firstForecast.clouds, firstForecast.chanceOfRain, firstForecast.chanceOfSnow);
        setClothes(data);
    }

    useEffect(() => {
       fetchDataOnFirstRender();
    }, []);

    return (
        <>
            <Header />
            <Navigation />
            { forecast && clothes ? (
                <div className='mainPanels'>
                    <WeatherPanel/>
                    <div className="dressupPanel">
                        <DressupPanel />
                    </div>
                </div>
            ) :
                <p>Načítavajú sa dáta</p>
            }
        </>
    );
}