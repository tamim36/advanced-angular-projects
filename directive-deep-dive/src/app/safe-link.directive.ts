import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)' : 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {
    queryParam = input('myApp', {alias: 'appSafeLink'});
    constructor(){
        console.log('Safe link directive is on action!');
    }

    onConfirmLeavePage(event : MouseEvent){
        const isConfirm = window.confirm('Do you want to leave the app');

        if (isConfirm){
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href
                = address + '?from=' + this.queryParam();

            return;
        }

        event.preventDefault();
    }
}