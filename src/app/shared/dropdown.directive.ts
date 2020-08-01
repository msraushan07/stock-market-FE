import {Directive, HostListener, HostBinding} from '@angular/core';
@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    @HostBinding('class.open') open = false
    @HostListener('click') toggleOpen(){
         this.open = !this.open
    }
}