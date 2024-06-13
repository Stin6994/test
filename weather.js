import axios from "axios";
import { config } from "./config.js";

export const getWeather = async (ctx) => {
    let locationLatitude = ctx.message.location.latitude;
    let locationLongitude = ctx.message.location.longitude;

    const response = await axios.get(config.weatherUrl + `${locationLatitude}, ${locationLongitude}`);

    /* console.log(response); */

    let text = `${response.data.location.name}, температура: ${response.data.current.temp_c}°C,
    ${response.data.current.condition.text}, ${response.data.current.condition.icon}`;
    return text;
};