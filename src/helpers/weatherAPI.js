const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const result = await fetch(`http://api.weatherapi.com/v1/search.json?key=${TOKEN}&q=${term}&aqi=yes`);
  const data = await result.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
  }
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=${TOKEN}&q=${cityURL}&aqi=yes`);
  return result.json();
};

export const getWeather7Days = async (URL_CIDADE, DIAS) => {
  const result = await fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${URL_CIDADE}&days=${DIAS}`);
  const data = await result.json();
  const forecast = await data.forecast.forecastday;
  const city7DaysTemp = forecast.map(async (dia) => ({
    date: dia.date,
    maxTemp: dia.day.maxtemp_c,
    minTemp: dia.day.mintemp_c,
    condition: dia.day.condition.text,
    icon: dia.day.condition.icon,
  }));
  return Promise.all(city7DaysTemp);
};
