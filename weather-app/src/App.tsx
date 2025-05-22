import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";

interface WeatherData {

}

function App() {
  const [data, setData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)


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
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>El titulo de la card</CardTitle>
        <CardDescription>Aplicación de temperatura</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Información</p>
      </CardContent>
      <CardFooter>

      </CardFooter>
    </Card>
  )
}

export default App;
