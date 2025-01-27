import { computed, Directive, effect, ElementRef, inject, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userPermission = input.required<Permission>({ alias: 'appAuth' });
  
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      const isShown = computed(() => this.authService.activePermission() === this.userPermission());
      if (!isShown()){
        this.viewContainerRef.clear();
      }
      else {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    });
  }

}
