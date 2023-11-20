import axios from "axios";

const URL = 'https://pdv-zp-backend.azurewebsites.net/Weather/GetWeatherOfLastHours'

export async function getWeatherOfLastHours(lat, lon, location) {
    const payload = {};

    if (lat !== null && lon !== null) {
        payload.lat = lat;
        payload.lon = lon;
    } else if (location !== null) {
        payload.location = location;
    }

    return axios.post(URL, payload)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
}