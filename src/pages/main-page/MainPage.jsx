import React, {useEffect} from "react";
import './main-page.css'
import {Header} from "../../components/header/Header.jsx";
import {Navigation} from "../../components/navigation/Navigation.jsx";
import {WeatherPanel} from "../../components/weather-info/WeatherPanel.jsx";
import DressupPanel from "../../components/dressup-info/DressupPanel.jsx";
import {useStore} from "../../Store.js";
import {getWeatherOfLastHours} from "../../api/weather-api.js";
import {getClothesByWeather} from "../../api/clothes-api.js";
import { SliderPanel } from "../../components/slider/SliderPanel.jsx";
import {getPlaygroundInfo} from "../../api/playground-api.js";
import {BarLoader} from "react-spinners";

export function MainPage() {
    const { forecast, clothes, playgroundInfo, setLocation, setForecast, setClothes, setPlaygroundInfo } = useStore();

    const fetchDataOnFirstRender = async (payload) => {
        let data = await getWeatherOfLastHours(payload.lat, payload.lon, payload.location);
        setForecast(data);
        setLocation(data.location);

        const firstForecast = data.forecasts[0];
        data = await getClothesByWeather(firstForecast.temperature, firstForecast.windKmph, firstForecast.clouds, firstForecast.chanceOfRain, firstForecast.chanceOfSnow);
        setClothes(data);

        data = await getPlaygroundInfo(payload.lat, payload.lon, payload.location);
        setPlaygroundInfo(data);
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => fetchDataOnFirstRender({ lat: position.coords.latitude, lon: position.coords.longitude, location: null}),
                () => fetchDataOnFirstRender({ lat: null, lon: null, location: 'Kosice' }),
            );
        } else {
            console.log("Geolocation not supported");
        }
    }, []);

    return (
        <>
            <Header />
            <Navigation />
            { forecast && clothes && playgroundInfo ? (
                <div>
                    <div className='mainPanels'>
                        <WeatherPanel/>
                        <div className="dressupPanel">
                            <DressupPanel />
                        </div>
                    </div>
                    <SliderPanel/>
                </div>
            ) :
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '32px' }}>
                    <p>Načítavajú sa dáta</p>
                    <BarLoader height={10} width={200} color='#56ACC8' />
                </div>
            }
        </>
    );
}