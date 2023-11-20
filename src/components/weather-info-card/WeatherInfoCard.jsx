import React from 'react';
import './WeatherInfoCard.css';

export const WeatherInfoCard = (props) => {
    const { type, value, time } = props;

    let unit = '';
    if (type === 'temperature') {
        unit = '°C';
    } else if (type === 'chanceOfRain') {
        unit = '%';
    } else if (type === 'windKmph') {
        unit = 'km/h';
    }

    const hour = new Date(time).getHours();
    const formattedHour = (hour < 10 ? '0' : '') + hour + ':00';

    return (
        <div className='weatherInfoCard'>
            {/*<span>IKONKA</span>*/}
            <span>{value} {unit}</span>
            <span>{formattedHour}</span>
        </div>
    );
}
