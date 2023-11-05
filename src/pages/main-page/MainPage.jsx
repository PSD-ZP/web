import React from "react";
import './main-page.css'
import {Header} from "../../components/header/Header.jsx";
import {Navigation} from "../../components/navigation/Navigation.jsx";
import {WeatherPanel} from "../../components/weather-info/WeatherPanel.jsx";

export function MainPage() {
    return (
        <>
            <Header />
            <Navigation />
            <div className='mainPanels'>
                <WeatherPanel />
                <div className='filler'>
                    POZDRAVUJEM 2
                </div>
            </div>
        </>
    );
}