import React from 'react';
import { useState } from 'react/cjs/react.development';

import { fetchData } from '../assets/api/weather';

const Index = () => {
  const [query, setQuery] = useState([]);
  const [weatherData, setWeatherData] = useState({});

  const loadData = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchData(query);

      setWeatherData(data);
      setQuery('');
    }
  };

  return (
    <div className='px-8 py-6' id='weatherContainer'>
      <div className='text-center rounded-xl text-xl' id='searchContainer'>
        <input
          type='text'
          className='bg-gray-200 rounded-xl text-gray-600 text-center overflow-hidden'
          id='searchBar'
          placeholder='City, Zip Code'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={loadData}
        />
      </div>

      {weatherData.main && (
        <div
          className='max-w-md text-center shadow-lg bg-gray-200 rounded-lg mx-auto py-4 my-4'
          id='city'
        >
          <p className='text-xl px-1 py-2 my-1 text-center'>
            {weatherData.name}
            <sup className='px-1 rounded-xl bg-red-400'>
              {weatherData.sys.country}
            </sup>
          </p>
          <p className='rounded-md bg-gray-400 py-2 mx-auto text-lg max-w-xs'>
            {Math.round(weatherData.main.temp)}{' '}
            <sup className='text-xl'>&deg;</sup>{' '}
          </p>
          <div className='mx-auto' id='weatherImgContainer'>
            <img
              className='mx-auto'
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt='weather img according to temperature'
            />
            <p className='capitalize'>{weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
