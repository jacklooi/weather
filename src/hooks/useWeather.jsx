import { useState, useCallback } from 'react';

const useWeather = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const url = 'http://api.openweathermap.org/data/2.5/weather';

  const fetchData = useCallback(async (city, countryCode) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}?q=${city},${countryCode}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
      const responseStatus = response.status;
      const responseData = await response.json();
      if (responseStatus !== 200) {
        throw Error(responseData.message);
      }
      setError();
      setData(responseData);
    } catch (err) {
      setError(err.message);
      setData();
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data, isLoading, fetchData, error,
  };
};

export default useWeather;
