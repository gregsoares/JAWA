import axios from 'axios';
import { API_Key } from '../../.config/keys';

// import { weatherAPI } from '../../.config/keys';

/* API Calls
 *
 * api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 *
 * api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
 *
 * api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
 *
 * Parameters:
 *
 * * - q - City name, state code and country code divided by comma
 *
 * * - appid - Your unique API key
 *
 *  - mode - Response format (xms, html, JSON (Default))
 *
 *  - units - Units of measurement: standard(default), metric, imperial
 *
 *  - lang - Output Language
 */

const weatherURL = `http://api.openweathermap.org/data/2.5/weather`;

// TODO: Checker function that only fetches if location has changed, and not options such as 'units' to minimize # of fetch

export const fetchData = async (query) => {
  const { data } = await axios
    .get(weatherURL, {
      params: {
        q: query.q,
        units: query.units,
        appid: API_Key,
      },
    })
    .catch((err) => {
      console.error(err);
      return { data: 'no data' };
    });

  return data;
};

export const sampleData = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 16093,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: 'US',
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: 'Mountain View',
  cod: 200,
};
