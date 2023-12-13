import axios from "axios";

const URL = 'https://pdv-zp-backend.azurewebsites.net/Playground/GetPlaygrounds'

export async function getPlaygroundInfo(lat, lon, location) {
    const payload = { lat, lon, location };

    return axios.post(URL, payload)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
}