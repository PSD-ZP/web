import React, {useEffect} from "react";
import './main-page.css'
import {Header} from "../../components/header/Header.jsx";
import {Navigation} from "../../components/navigation/Navigation.jsx";
import {WeatherPanel} from "../../components/weather-info/WeatherPanel.jsx";
import {useStore} from "../../Store.js";
import {getWeatherOfLastHours} from "../../api/weather-api.js";

export function MainPage() {
    const { forecast, setForecast } = useStore();

    const fetchDataOnFirstRender = async () => {
        const data = await getWeatherOfLastHours(null, null, 'Kosice');
        setForecast(data);
    }

    useEffect(() => {
       fetchDataOnFirstRender();
    }, []);

    return (
        <>
            <Header />
            <Navigation />
            <div className='mainPanels'>
                { forecast ? <WeatherPanel/> : <p>Načítavajú sa dáta</p> }
                <div className='filler'>
                    POZDRAVUJEM 2
                </div>
            </div>
        </>
    );
}