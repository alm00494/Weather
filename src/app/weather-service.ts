import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  private apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric";
  private forecastApiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={api_key}&units=metric";

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string, apiKey: string) {
    const url = this.apiUrl
      .replace("{city}", city)
      .replace("{api_key}", apiKey);
    return this.http.get(url);
  }

  getForecast(city: string, apiKey: string) {
    const url = this.forecastApiUrl
      .replace("{city}", city)
      .replace("{api_key}", apiKey);
    return this.http.get(url);
  }
}
