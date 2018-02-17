import { Component } from '@angular/core';

declare var $: any; // for jQuery

@Component({
  selector: 'navbar',
  templateUrl: `app/components/navbarComponent/navbar.component.html`,
  styleUrls: ['app/components/navbarComponent/navbar.component.css']
})
export class NavbarComponent {
  selectedValue: string = ``;
  areas = [
    { value: '1', viewValue: 'Munnar' },
    { value: '2', viewValue: 'Kottayam' },
    { value: '3', viewValue: 'Ettumanoor' },
    { value: '4', viewValue: 'Thekkady' },
    { value: '5', viewValue: 'Varkala' }
  ];
  onChange() {
   document.getElementById('btnSubmitDiv').classList.remove('notAllowed');
   document.getElementById('btnOrder').classList.remove('pointerNone');
  // document.getElementById("btnOrder").removeAttribute("disabled");
  }
  ngOnInit() {
    $('.modal').modal();
  }
}
