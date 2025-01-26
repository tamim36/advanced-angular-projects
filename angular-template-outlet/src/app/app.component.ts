import { Component } from '@angular/core';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherWidgetComponent],
  template: `
    <weather-widget 
      [headerTemplet]="altWidgetHeader"
      [contentTemplate]="altWidgetContent">

    </weather-widget>

    <ng-template #altWidgetHeader>
      <div class="alt-header">Yoo Today's Weather</div>
    </ng-template>

    <ng-template #altWidgetContent let-state>
    <div>
        <span>🌡 {{state.data.temperature}}°C</span> - 
        <span>{{state.data.skyCondition === 'sunny' ? '☀️' : '☁️'}}</span> - 
        <span>🌬️ {{state.data.windspeed}}m/s</span>
      </div>
    </ng-template>
  `,
  styles: [`
    :host {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .alt-header {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: -6px;
    }
  `]
})
export class AppComponent {
}
