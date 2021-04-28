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

export const fetchData = async (query) => {
  const { data } = await axios.get(weatherURL, {
    params: {
      q: query,
      units: 'imperial',
      appid: API_Key,
    },
  });

  return data;
};
