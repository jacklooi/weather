import React, { useCallback, useState } from 'react';

function LocationForm({ handleSubmit, error }) {
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const handlerCityChange = useCallback((e) => {
    setCity(e.target.value);
  }, [setCity]);
  const handlerCountryChange = useCallback((e) => {
    setCountry(e.target.value);
  }, [setCountry]);
  const handleSubmitLocation = useCallback((e) => {
    e.preventDefault();
    handleSubmit(city, country);
  }, [handleSubmit, city, country]);

  return (
    <div className="location-section">
      <form className="form-container" onSubmit={handleSubmitLocation}>
        <div>
          <span>City:</span>
          <input type="text" onChange={handlerCityChange} />
        </div>
        <div>
          <span>Country:</span>
          <input type="text" onChange={handlerCountryChange} />
        </div>
        <button type="submit">Search</button>
        <button type="reset">Clear</button>
      </form>
      {error && (
        <div className="error">{error}</div>
      )}
    </div>
  );
}

export default LocationForm;
