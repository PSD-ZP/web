import React from "react";
import './main-page.css'
import {Header} from "../../components/header/Header.jsx";
import {Navigation} from "../../components/navigation/Navigation.jsx";
import {WeatherPanel} from "../../components/weather-info/WeatherPanel.jsx";
import DressupPanel from "../../components/dressup-info/DressupPanel.jsx";

export function MainPage() {
    return (
      <>
        <Header />
        <Navigation />
        <div className="mainPanels">
          <WeatherPanel />
          <div className="dressupPanel">
            <DressupPanel />
          </div>
        </div>
      </>
    );
}