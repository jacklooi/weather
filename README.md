# Current Weather App

Integrated with OpenWeatherMap to get weather data by city and country name. You may get free account to retrieve API key from [Open Weather](https://openweathermap.org/price).

Once you get the API key, create `.env` file under root folder, then set API key value to `REACT_APP_WEATHER_API_KEY` key.

```bash
# .env
REACT_APP_WEATHER_API_KEY={YOUR_WEATHER_API_KEY}
```

In this exercise, we will use local storage `weather-history` to keep search history records.

## Scripts

- To get start, run `npm install` to install necessary packages.
- To run app in development mode locally, run `npm start`.
- To build the app for production, run `npm run build`.
