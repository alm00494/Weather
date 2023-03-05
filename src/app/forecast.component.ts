import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./weather-service";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.css"]
})
export class ForecastComponent implements OnInit {
  city = "New York";
  forecast: any[];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getForecast();
  }

  getForecast() {
    const apiKey = "d37bd714412491a1a9f02107a792a2d4";
    this.weatherService.getForecast(this.city, apiKey).subscribe((data) => {
      const currentDate = new Date();
      const endDate = new Date(currentDate.getTime() + (3 * 24 * 60 * 60 * 1000));
      this.forecast = data.list.filter((item: any) => {
        const itemDate = new Date(item.dt_txt);
        return itemDate >= currentDate && itemDate < endDate && item.dt_txt.includes("12:00:00");
      });
    });
  }

  convertWindSpeed(speed: number) {
    return (speed * 0.277778).toFixed(2);
  }
}
