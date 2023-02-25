import React, { useEffect } from 'react';
import uuid from 'react-uuid';

import './App.css';
import useWeather from './hooks/useWeather';
import useHistory from './hooks/useHistory';
import LocationForm from './containers/LocationForm';
import TodayResult from './containers/TodayResult';
import History from './containers/History';

function App() {
  const [history, setHistory] = useHistory();
  const {
    data, isLoading, fetchData, error,
  } = useWeather();

  const handleSubmit = async (city, country) => {
    await fetchData(city, country);
  };

  const handleHistoryRemove = (id) => {
    const updatedHistory = history.filter((item) => item.id !== id);
    setHistory(updatedHistory);
  };

  useEffect(() => {
    if (!isLoading && data && !error) {
      setHistory([
        {
          id: uuid(),
          city: data.name,
          country: data.sys.country,
          createdAt: new Date().toLocaleTimeString('en-SG').toUpperCase(),
        },
        ...history,
      ]);
    }
  }, [isLoading, data, error]);

  return (
    <div className="container">
      <div>
        <h2>{'Today\'s Weather'}</h2>
        <LocationForm handleSubmit={handleSubmit} error={error} />
        <TodayResult data={data} />
      </div>
      <History data={history} handleSearch={handleSubmit} handleRemove={handleHistoryRemove} />
    </div>
  );
}

export default App;
