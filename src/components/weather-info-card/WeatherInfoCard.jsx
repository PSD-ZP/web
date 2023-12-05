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
        unit = 'km/h';
        icon = <img src='https://icons-for-free.com/iconfiles/png/64/cloud+weather+wind+icon-1320196574652316456.png' alt='Vietor' style={{ 'filter': 'invert(1)' }} />
    }

    const hour = new Date(time).getHours();
    const formattedHour = (hour < 10 ? '0' : '') + hour + ':00';

    return (
        <div className='weatherInfoCard'>
            { icon }
            <span>{value} {unit}</span>
            <span>{formattedHour}</span>
        </div>
    );
}
