export interface Weather {
  id: WeatherCondition;
  main: string;
  description: string;
  icon: string;
}

export interface CurrentWeatherResponse {
  coord;
  weather: Weather[];
  base;
  main;
  visibility: number;
  wind;
  clouds;
  rain?;
  snow?;
  dt: number;
  sys: CurrentWeatherSys;
  timezone: number; //
  id: number; // City-ID
  name: string; // City Name
  cod: number; // Internal parameter
}
