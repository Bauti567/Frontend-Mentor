import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";

interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    }
  }
}

function App() {
  const [city, setCity] = useState("London");
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=12abee8958704a97a46221338252704&q=${city}&aqi=no`)
      if (!response.ok) throw new Error("City not found");
      const data = await response.json()
      setData(data);
      console.log(data)

    } catch (err: any) {
      setError(err.message)
      console.log(error)
      setData(null)
    }

  }

  return (
    <div className="">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Clima actual</CardTitle>
          <CardDescription>Ingresa la ciudad</CardDescription>
        </CardHeader>
        <CardContent>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ingresa una ciudad" className="w-full p-2 border border-gray-300 rounded-md" />
          <button onClick={fetchData} className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" >Buscar Clima</button>
        </CardContent>
        <CardFooter>
          <button onClick={fetchData}>Buscar Data</button>
        </CardFooter>
      </Card>
      {data && (
        <div className="text-center">
          <h3 className="text-xl font-bold">{data.location.name}, {data.location.country}</h3>
          <p>{data.location.localtime}</p>
          <img
            src={`https:${data.current.condition.icon}`}
            alt={data.current.condition.text}
            className="mx-auto"
          />
          <p className="text-2xl font-bold">{data.current.temp_c}°C</p>
          <p>{data.current.condition.text}</p>
        </div>
      )

      }
      <CardFooter/>
    </div>

  )
}

export default App;
