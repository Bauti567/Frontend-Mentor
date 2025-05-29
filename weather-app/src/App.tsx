import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";

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

const content = [
  {
    title: "Weather app",
    description: "Enter the city to find out its weather",
  }
]

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
    } finally {
      setLoading(false);

    }

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e8e8e8] p-6">
      <Card className="w-[350px] bg-white">
        <CardHeader>
          <CardTitle>Weather app</CardTitle>
          <CardDescription>Enter the city to find out its weather</CardDescription>
        </CardHeader>
        <CardContent>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ingresa una ciudad" className="w-full p-2 border border-gray-300 rounded-md" />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={fetchData}
            className="rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-purple-700 transition"
          >
            Buscar clima
          </Button>
        </CardFooter>
        {loading && <p className="text-center">Cargando....</p> }
        {error && <p className="text-red-600 text-center">{error}</p>}

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
      </Card>
    </div>

  )
}

export default App;
