import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }
  @HostBinding('style.display') isDisplayed = 'none';

  @HostListener('mouseenter') mouseover(event: Event) {
    this.isDisplayed = 'block';
  }

}
