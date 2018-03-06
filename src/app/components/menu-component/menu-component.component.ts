import {Component, OnInit, HostListener, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {IEmployee} from './menu';
import {MenuService} from './menu.service';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponent implements OnInit {

// menu: IEmployee[];
menu: IEmployee;
location: string;
menuCategories: Object[];
cartCost: number = 5;
// userName: string = `User Name`;
statusMessage: string = 'Loading data. Please wait';

// public hideCart: boolean = true;
// public hideRouter: boolean = false;
public href: string = '';

windowWidth: number = window.innerWidth;

ngAfterViewInit() {
  this.windowWidth = window.innerWidth;
}

// if screen size changes it'll update
@HostListener('window:resize', ['$event'])
resize(event: any) {
  this.windowWidth = window.innerWidth;
}

constructor(private route: ActivatedRoute, private router: Router, private _menuService: MenuService) {
this.menuCategories = [
                          {
                                category : 'Appetizers',
                                ImagePath : 'https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-foo' +
                                'd-lab-35-1500x1125.jpg'
                          }, {
                                category : 'Max Pasta',
                                ImagePath : 'https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-foo' +
                                'd-lab-35-1500x1125.jpg'
                          }, {
                               category : 'Our Speciality Pizza',
                               ImagePath : 'https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-foo' +
                                'd-lab-35-1500x1125.jpg'
                          }, {
                               category: 'Meals',
                               ImagePath : 'https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-foo' +
                              'd-lab-35-1500x1125.jpg'
                          }, {
                               category: 'Salads',
                               ImagePath : 'https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-foo' +
                              'd-lab-35-1500x1125.jpg'
                          }, {
                               category : 'Beverages',
                               ImagePath : 'https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-foo' +
                              'd-lab-35-1500x1125.jpg'
                          }, {
                               category : 'Sides',
                               ImagePath : 'https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-foo' +
                              'd-lab-35-1500x1125.jpg'
                          }, {
                              category: 'Desserts',
                              ImagePath : 'https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-foo' +
                             'd-lab-35-1500x1125.jpg'
                            }
                 ];

}

ngOnInit() {
  this
    .route
    .params
    .subscribe(params => (this.location = params.location));
  //   this._menuService.getEmployees()
  // .subscribe((employeeData)=> this.menu = employeeData,
  // (error)=>{                     this.statusMessage = 'Problem with the
  // service. Please try again later!';                     console.error(error);
  //                  }); }

  const pizzaLocation: string = this.route.snapshot.params['location'];
  this
    ._menuService
    .getMenuByLocation(pizzaLocation)
    .subscribe(employeeData => {
      if (employeeData == null) {
        this.statusMessage = 'Sorry, We do not deliver at this location as of now,';
      } else {
        this.menu = employeeData;
      }
    }, error => {
      this.statusMessage = 'Problem with the service. Please try again later!';
      console.error(error);
    });

  // check url
  this.href = this.router.url;
  console.log(this.router.url);
}

backToHome() {
  this
    .router
    .navigate(['']);
}

// toggle() {
//   this.hideCart = !this.hideCart;
//   this.hideRouter = !this.hideRouter;
// }
}
