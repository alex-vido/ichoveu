const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  // const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=${TOKEN}&q=${term}&aqi=yes`);
  const result = await fetch(`http://api.weatherapi.com/v1/search.json?key=${TOKEN}&q=${term}&aqi=yes`);
  const data = await result.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
  }
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=${TOKEN}&q=${cityURL}&days=7&aqi=yes`);
  const data = await result.json();
  return data;
};
