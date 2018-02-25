import { Component, OnInit, HostListener, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { MenuService } from './menu.service';
import { IEmployee } from './menu';


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
  // menu: IEmployee[];
  menu: IEmployee;
  location: string;
  cartCost: number = 5;
  userName: string = `User Name`;
  statusMessage: string = "Loading data. Please wait";

  windowWidth: number = window.innerWidth;

  //initial values, The window object may still be undefined during this hook, let me know if that's the case and we'll figure out a better hook for the initial value
  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
  }

  //if screen size changes it'll update
  @HostListener("window:resize", ["$event"])
  resize(event: any) {
    this.windowWidth = window.innerWidth;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _menuService: MenuService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => (this.location = params.location));
    //   this._menuService.getEmployees()
    //                    .subscribe((employeeData)=> this.menu = employeeData,
    //                   (error)=>{
    //                     this.statusMessage = 'Problem with the service. Please try again later!';
    //                     console.error(error);
    //                   });
    // }

    let pizzaLocation: string = this.route.snapshot.params["location"];
    this._menuService.getMenuByLocation(pizzaLocation).subscribe(
      employeeData => {
        if (employeeData == null) {
          this.statusMessage =
            "Sorry, We do not deliver at this location as of now,";
        } else {
          this.menu = employeeData;
        }
      },

      error => {
        this.statusMessage =
          "Problem with the service. Please try again later!";
        console.error(error);
      }
    );
  }

  backToHome() {
    this.router.navigate([""]);
  }
}