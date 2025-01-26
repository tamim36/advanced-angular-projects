import { Component, inject } from '@angular/core';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'app-weather-custom-action',
  standalone: true,
  template: `
    <button (click)="onClick()">
      Copy & Reload
    </button>
  `,
  styles: [
  ]
})
export class WeatherCustomActionComponent {
  weatherWidget = inject(WeatherWidgetComponent);

  onClick(){
    this.weatherWidget.actions.reload();
    this.weatherWidget.actions.copyData();
  }
}
