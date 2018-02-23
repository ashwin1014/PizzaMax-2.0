import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

declare var $: any; // for jQuery

@Component({
  selector: "menu",
  templateUrl: "app/components/menuComponent/menu.component.html",
  styleUrls: ["app/components/menuComponent/menu.component.css"]
})
// export class MenuComponent {
//   constructor(private route: ActivatedRoute) {
//    this.route.params.subscribe(params => console.log(params));

//   }
// }
export class MenuComponent implements OnInit {
  location: string;
  constructor(private route: ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => (this.location = params.location));
  }

  backToHome() {
    this.router.navigate(['']);
  }

}