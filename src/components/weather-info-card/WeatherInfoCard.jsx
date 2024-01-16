import React from 'react';
import './WeatherInfoCard.css';

export const WeatherInfoCard = (props) => {
    const { type, value, time } = props;

    let unit = '';
    let icon;
    if (type === 'temperature') {
        unit = '°C';
        icon = <img src='https://cdn.weatherapi.com/weather/64x64/day/113.png' alt='Teplota' />
    } else if (type === 'chanceOfRain') {
        unit = '%';
        icon = <img src='https://cdn.weatherapi.com/weather/64x64/day/263.png' alt='Zrážky' />
    } else if (type === 'windKmph') {
        unit = 'm/s';
        icon = <img src='/wind.png' alt='Vietor' style={{ 'width': '50px', 'height': '50px' }} />
    }

    const hour = new Date(time).getHours();
    const formattedHour = (hour < 10 ? '0' : '') + hour + ':00';

    return (
        <div className='weatherInfoCard'>
            { icon }
            <span>{type === 'windKmph' ? Math.round(value * 0.27778 * 100) / 100 : value} {unit}</span>
            <span>{formattedHour}</span>
        </div>
    );
}
