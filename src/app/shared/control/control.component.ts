import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)' : 'onClick()'
  }
})
export class ControlComponent {
  label = input.required<string>();
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick(){
  //   console.log('cliecked');
  // }

  private hostElement = inject(ElementRef);

  onClick (){
    console.log('Cliced Success !');
    console.log(this.hostElement);
  }
}
