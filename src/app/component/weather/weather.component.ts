import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../service/weather.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public temp: string = null;

  public weatherForm = new FormGroup({
    cityName: new FormControl(''),
  });

  constructor(
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
    const city = 'Warszawa';
    this.getWeatherByCityName(city);
  }

  public onSubmit(): void {
    this.getWeatherByCityName(this.weatherForm.value.cityName);
  }
  
  private getWeatherByCityName(cityName: string): void {
    this.weatherService.getWeatherByCityName(cityName).subscribe((data) => {
      this.temp = data.main.temp;
    });
  }
}
