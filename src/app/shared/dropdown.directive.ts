import { ElementRef } from '@angular/core';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) { }
    // @HostListener('click') 
  // toggleOpen(){
  //   this.isOpen = !this.isOpen;
  // }
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) 
  toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }


}
