import './weather-panel.css'

export function WeatherPanel() {
    return (
        <div className='weatherPanelWrapper'>
            <div className='weatherPanelHeader'>
                <span>Aktuálne počasie</span>
                <input placeholder='Vyhľadať iné mesto' />
            </div>
            <div className='weatherInfo'>
                <span>Snina</span>
                <div className='weatherRow'>
                    {/*<img src='../../../public/icons8-clear-sky-64.png' alt='Oblačno' />*/}
                    <div className='weatherRowLeft'>
                        <span style={{ 'fontSize': '60px' }}>15 °C</span>
                        <span style={{ 'fontSize': '25px' }}>Pondelok 10:00</span>
                        <span style={{ 'fontSize': '25px' }}>Oblačno</span>
                    </div>
                    <div className='weatherRowRight'>
                        <span style={{ 'fontSize': '20px' }}>Pravdepodobnosť zrážok: 2%</span>
                        <span style={{ 'fontSize': '20px' }}>Vlhkosť: 70%</span>
                        <div className='vietor_vystrahy'>
                            <div>
                                <span style={{ 'fontSize': '20px' }}>Vietor:</span>
                            </div>
                            <div>
                                <span style={{ 'fontSize': '20px' }}>Výstrahy:</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
