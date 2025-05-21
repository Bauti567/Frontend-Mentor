import React, { useEffect, useState } from 'react'
import { Card } from './components/ui/card';

interface WeatherData {
    location: {
        name: string;
        country: string;
    };
    current: {
        temp_c: number;
        humidity: number;
        condition: {
            text: string;
            icon: string
        };
    };
}


function App() {
    const [data, setData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function FetchData() {
            const response = await fetch('http://api.weatherapi.com/v1/current.json?key=12abee8958704a97a46221338252704&q=London&aqi=no')
            const data = await response.json()
            setData(data)
            setLoading(false)
            console.log(data.location)

        }
        FetchData();

    }, [])
    return (
        <div className='container'>
            <h1>Aplicacion de clima</h1>
            {
                loading || !data ? (
                    <h1>Loading</h1>
                ) : (
                    <div className="container-weather">
                        <h2>{data.location.name}, {data.location.country}</h2>
                        <p><strong>Temperatura:</strong> {data.current.temp_c}°C</p>
                        <p><strong>Clima:</strong> {data.current.condition.text}</p>
                        <img src={data.current.condition.icon} alt={data.current.condition.text} />
                        <p><strong>Humedad:</strong> {data.current.humidity}%</p>
                    </div>
                )
            }
        </div>
    );

}

export default App;
