import axios from "axios";

const URL = 'https://pdv-zp-backend.azurewebsites.net/Clothes/GetClothes'

export async function getClothesByWeather(temp, wind, clouds, rain, snow) {
    const payload = { temp, wind, clouds, rain, snow };

    return axios.post(URL, payload)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
}