import React, { useState, useEffect } from 'react';
// import { sampleData } from '../assets/api/weather';
import { fetchData } from '../assets/api/weather';

const Index = () => {
  const [query, setQuery] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [unit, setUnit] = useState('imperial');

  const loadData = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchData({ q: query, units: unit });

      // setWeatherData(sampleData);
      setWeatherData(data);
    }
  };

  const changeUnit = (unit) => {
    unit !== 'imperial' ? setUnit('metric') : setUnit('imperial');
  };

  useEffect(() => {
    let fn = async () => await loadData({ key: 'Enter' });
    fn();
  });

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
        />{' '}
        <span className='border border-red-900 rounded-3xl py-2 px-2 mx-2 bg-gray-200'>
          <button
            className='mx-2 px-1 border hover:bg-white rounded-full'
            onClick={() => changeUnit('metric')}
          >
            C&deg;
          </button>
          <button
            className='mx-2 px-1 border hover:bg-white rounded-full'
            onClick={() => changeUnit('imperial')}
          >
            F&deg;
          </button>
        </span>
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
          <p className='rounded-md bg-gray-200 py-2 mx-auto text-lg max-w-sm'>
            <span className='mx-2 my-1 py-1 px-2 rounded-xl'>
              Temperature: {Math.round(weatherData.main.temp)}
              <sup className='text-xl'>&deg;</sup>{' '}
            </span>
            <span className='mx-2 my-1 py-1 px-2 rounded-xl'>
              Feels Like: {Math.round(weatherData.main.feels_like)}
              <sup className='text-xl'>&deg;</sup>{' '}
            </span>
          </p>
          <div className='mx-auto' id='weatherImgContainer'>
            <span className='mx-2 mt-3 block mb-1 px-2 rounded-xl'>
              Max: {Math.round(weatherData.main.temp_max)}
              <sup className='text-xl'>&deg;</sup>
            </span>

            <img
              className='mx-auto'
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt='weather img according to temperature'
            />
            <span className='mx-2 mt-1 block mb-3 px-2 rounded-xl'>
              Min: {Math.round(weatherData.main.temp_min)}
              <sup className='text-xl'>&deg;</sup>
            </span>
            <p className='capitalize'>{weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
