import axios from "axios"

const API = ''

export async function  fetchWeather() {
    const { data } = await axios.get(API)
    return data;
}

