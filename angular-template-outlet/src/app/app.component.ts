import { Component } from '@angular/core';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherWidgetComponent],
  template: `
    <weather-widget [headerTemplet]="altWidgetHeader"></weather-widget>

    <ng-template #altWidgetHeader>
      <div class="alt-header">Yoo Today's Weather</div>
    </ng-template>
  `,
  styles: [`
    :host {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class AppComponent {
}
