import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CurrentWeatherComponent } from "./current-weather.component";
import { ForecastComponent } from "./forecast.component";

const routes: Routes = [
  { path: "", component: CurrentWeatherComponent },
  { path: "forecast", component: ForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
