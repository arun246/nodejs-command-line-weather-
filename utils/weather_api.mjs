import axios from 'axios';

export const my_weather = async (location) => {

var options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: location,
    lat: '0',
    lon: '0',
    id: '2172797',
    lang: 'null',
    units: 'metric',
  },
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': 'paste your api'
  }
};
const res = await axios.request(options);
return {main:res.data["weather"][0]["main"],temp:res.data["main"]["temp"]};


}
