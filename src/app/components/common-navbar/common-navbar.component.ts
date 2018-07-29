import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-common-navbar',
  templateUrl: './common-navbar.component.html',
  styleUrls: ['./common-navbar.component.scss']
})
export class CommonNavbarComponent implements OnInit {
location: string;
cartCost: number = 5;
userName: string = `User Name`;


constructor(private route: ActivatedRoute, private _location: Location, private router: Router) {}

  ngOnInit() {
      this
        .route
        .params
        .subscribe(params => (this.location = params.location));

  }

goBack() {
  // this
  //   ._location
  //   .back();
this
  .router
  .navigate(['']);
}

backToHome() {
  this
    .router
    .navigate(['']);
}

}
