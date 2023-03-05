import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./weather-service";

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"]
})
export class CurrentWeatherComponent implements OnInit {
  city = "New York";
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getCurrentWeather();
  }

  getCurrentWeather() {
    const apiKey = "d37bd714412491a1a9f02107a792a2d4";
    this.weatherService
      .getCurrentWeather(this.city, apiKey)
      .subscribe((data) => {
        this.weather = data;
      });
  }

  convertWindSpeed(speed: number) {
    return (speed * 0.277778).toFixed(2);
  }
}
