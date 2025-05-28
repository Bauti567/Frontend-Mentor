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
    <div className="container">
      <Card className="w-[350px]">
        <CardHeader>

          <CardTitle>El titulo de la card</CardTitle>
          <CardDescription>Aplicación de temperatura</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Información</p>
        </CardContent>
        <CardFooter>
          <button onClick={fetchData}>Buscar Data</button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App;
