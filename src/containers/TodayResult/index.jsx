import React, { useCallback, useMemo } from 'react';

function TodayResult({ data }) {
  const location = useMemo(() => (data ? `${data.name}, ${data.sys.country}` : '-'), [data]);
  const weatherData = useMemo(() => (
    data?.weather && data.weather.length > 0 ? data.weather[0] : {}
  ), [data]);
  const temperature = useMemo(() => (data?.main ? `${data.main.temp_min}°C ~ ${data.main.temp_max}°C` : '-'), [data]);
  const humidity = useMemo(() => (data?.main ? `${data.main.humidity}%` : '-'), [data]);
  const dateTime = useMemo(() => (data?.dt ? new Date(data.dt * 1000).toLocaleString('en-SG').toUpperCase() : '-'), [data]);
  const weatherIcon = useCallback(() => {
    const description = weatherData?.description;
    if (description.includes('cloud')) {
      return 'weather-cloud';
    }
    if (description.includes('rain')) {
      return 'weather-rain';
    }
    if (description.includes('clear')) {
      return 'weather-clear';
    }
    if (description.includes('storm')) {
      return 'weather-storm';
    }
    if (description.includes('snow')) {
      return 'weather-snow';
    }
    if (description.includes('mist')) {
      return 'weather-mist';
    }
    return 'weather-default';
  }, [weatherData]);

  if (data) {
    return (
      <div className="result-section">
        <p>{location}</p>
        <div className="flex">
          <figure className={`${weatherIcon()}`} />
          <h1>{weatherData?.main || '-'}</h1>
        </div>
        <div className="grid-container">
          <span>Description:</span>
          <text>{weatherData?.description || '-'}</text>
          <span>Temperature:</span>
          <text>{temperature}</text>
          <span>Humidity:</span>
          <text>{humidity}</text>
          <span>Time:</span>
          <text>{dateTime}</text>
        </div>
      </div>
    );
  }
}

export default TodayResult;
