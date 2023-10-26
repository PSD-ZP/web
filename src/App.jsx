import axios from 'axios';
import './App.css'

const URL = 'https://pdv-zp-backend.azurewebsites.net/Weather/GetWeatherByCoordinates';
const data = {
    lat: 48.716385,
    lon: 21.261074,
};

async function fetchData() {
    await axios.post(URL, data).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}

function App() {
    return (
        <>
            <h1>
                Pustime deti von?
            </h1>
            <button onClick={fetchData}>
                Fetch data
            </button>
        </>
    )
}

export default App
