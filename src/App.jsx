import './App.css'

const URL = 'https://pdv-zp-backend.azurewebsites.net/Weather/GetWeatherByCoordinates';
const data = {
    lat: 48.716385,
    lon: 21.261074,
};


async function x() {
    const d = await fetch(URL, {
        method: 'POST',
        body: data
    }).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            console.log('Pardon errorek sa udial');
        }
    })

    console.log(d);
}

function App() {
    return (
        <>
            <h1>
                Pustime deti von?
            </h1>
            <button onClick={x}>
                Fetch data
            </button>
        </>
    )
}

export default App
