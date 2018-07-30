import { Component, OnInit } from '@angular/core';
declare var $: any; // for jQuery

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss']
})
export class NavbarComponent {
  selectedValue: string = ``;
  areas = [
    { value: '1', viewValue: 'Munnar' },
    { value: '2', viewValue: 'Kottayam' },
    { value: '3', viewValue: 'Ettumanoor' },
    { value: '4', viewValue: 'Thekkady' }
  ];
  onChange() {
   document.getElementById('btnSubmitDiv').classList.remove('notAllowed');
   document.getElementById('btnOrder').classList.remove('pointerNone');
  // document.getElementById("btnOrder").removeAttribute("disabled");
  }

OnInit() {
    $('.modal').modal();
  }
}
