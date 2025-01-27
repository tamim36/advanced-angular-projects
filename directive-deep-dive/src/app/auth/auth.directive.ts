import { computed, Directive, effect, ElementRef, inject, input, OnInit } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: 'p[appAuth]',
  standalone: true
})
export class AuthDirective {
  userPermission = input.required<Permission>({ alias: 'appAuth' });
  private hostElementRef = inject<ElementRef<HTMLParagraphElement>>(ElementRef);
  private authService = inject(AuthService);

  constructor() {
    effect(() => {
      const isShown = computed(() => this.authService.activePermission() === this.userPermission());
      if (!isShown()){
        this.hostElementRef.nativeElement.hidden = true;
      }
      else {
        this.hostElementRef.nativeElement.hidden = false;
      }
    });
  }

}
