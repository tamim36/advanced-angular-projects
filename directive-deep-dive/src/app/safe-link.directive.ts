import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)' : 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {
    queryParam = input('myApp', {alias: 'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor(){
        console.log('Safe link directive is on action!');
    }

    onConfirmLeavePage(event : MouseEvent){
        const isConfirm = window.confirm('Do you want to leave the app');

        if (isConfirm){
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href
                = address + '?from=' + this.queryParam();

            return;
        }

        event.preventDefault();
    }
}