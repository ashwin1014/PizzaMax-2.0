import {Component, OnInit, HostListener, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {IEmployee} from './menu';
import {MenuService} from './menu.service';

@Component({selector: 'app-menu-component', templateUrl: './menu-component.component.html', styleUrls: ['./menu-component.component.scss']})
export class MenuComponent implements OnInit {

  // menu: IEmployee[];
  menu: IEmployee;
  location: string;
  menuCategories: Object[];
  cartCost: number = 5;
  // userName: string = `User Name`;
  statusMessage: string = 'Loading data. Please wait';

  // public hideCart: boolean = true; public hideRouter: boolean = false;
  public href: string = '';

  selectedCategory: string = 'All sections'; // model name
  selectedFood;
  foodCategories = [
    { sectionName : 'All sections' },
    { sectionName : 'Appetizers' },
    { sectionName : 'Max Pasta' },
    { sectionName : 'Pizza' },
    { sectionName : 'Family Meals' },
    { sectionName : 'Individual Meals' },
    { sectionName : 'Happy Kids Meals' },
    { sectionName : 'Salads' },
    { sectionName : 'Crispy Chicken' },
    { sectionName : 'Hot Crispy Burgers' },
    { sectionName : 'Beverages' },
    { sectionName : 'Sides' },
  ];

foodData = [
  {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Pizza Max Special',
    description: 'A Combination of Pepperoni, chicken sausage,fresh onion, green pepper , mushroom and black olives spread over a delicious base of pizza',
    isVeg: false
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Pepperoni',
    description: 'awesome pizza!',
    isVeg: false
  }, {
    category: 'All sections',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Garlic Bread',
    description: 'awesome pizza!',
    isVeg: false
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Bar-B-Que Chicken',
    description: 'awesome pizza!',
    isVeg: false
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: ' Tandoori Chicken',
    description: 'awesome pizza!',
    isVeg: false
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Hot & Spicy Chicken',
    description: 'awesome pizza!',
    isVeg: false
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Fajita Chicken',
    description: 'awesome pizza!',
    isVeg: false
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Chicken Supreme',
    description: 'awesome pizza!',
    isVeg: false
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Max Eggiza',
    description: 'awesome pizza!',
    isVeg: false
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Margherita',
    description: 'awesome pizza!',
    isVeg: true
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Max Veggie',
    description: 'awesome pizza!',
    isVeg: true
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Max Gourmet',
    description: 'awesome pizza!',
    isVeg: true
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Royal Veggie',
    description: 'awesome pizza!',
    isVeg: true
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Paneer Supreme',
    description: 'awesome pizza!',
    isVeg: true
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Max Paneer',
    description: 'awesome pizza!',
    isVeg: true
  }, {
    category: 'Pizza',
    ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
        'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
    item: 'Max Veganza',
    description: 'awesome pizza!',
    isVeg: true
  }, {
    category: 'Max Pasta',
    ImagePath: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_420' +
        '1_1466.jpg',
    item: 'Lasagna',
    description: 'awesome pasta!',
    isVeg: true
  }, {
    category: 'Max Pasta',
    ImagePath: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_420' +
        '1_1466.jpg',
    item: 'Spaghetti Bolognese',
    description: 'awesome pasta!',
    isVeg: true
  }, {
    category: 'Max Pasta',
    ImagePath: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_420' +
        '1_1466.jpg',
    item: 'Penne al Forno',
    description: 'awesome pasta!',
    isVeg: true
  }, {
    category: 'Max Pasta',
    ImagePath: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_420' +
        '1_1466.jpg',
    item: 'Cremolata',
    description: 'awesome pasta!',
    isVeg: true
  }, {
    category: 'Max Pasta',
    ImagePath: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_420' +
        '1_1466.jpg',
    item: 'Bbq Pasta',
    description: 'awesome pasta!',
    isVeg: true
  }, {
    category: 'Max Pasta',
    ImagePath: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_420' +
        '1_1466.jpg',
    item: 'Primavera',
    description: 'awesome pasta!',
    isVeg: true
  }, {
    category: 'Sides',
    ImagePath: 'https://images.freshop.com/2421655/82b409145003d6576df5f14e1032db75_medium.png',
    item: '1 piece Chicken',
    description: 'awesome pasta!',
    isVeg: true
  }, {
    category: 'Sides',
    ImagePath: 'https://images.freshop.com/2421655/82b409145003d6576df5f14e1032db75_medium.png',
    item: 'Garlic Dip',
    description: 'awesome pasta!',
    isVeg: true
  }, {
    category: 'Sides',
    ImagePath: 'https://images.freshop.com/2421655/82b409145003d6576df5f14e1032db75_medium.png',
    item: 'Bun',
    description: 'awesome pasta!',
    isVeg: true
  }, {
    category: 'Sides',
    ImagePath: 'https://images.freshop.com/2421655/82b409145003d6576df5f14e1032db75_medium.png',
    item: 'Mayonnaise',
    description: 'awesome pasta!',
    isVeg: true
  }, {
    category: 'Sides',
    ImagePath: 'https://images.freshop.com/2421655/82b409145003d6576df5f14e1032db75_medium.png',
    item: 'Cheesy Dip',
    description: 'awesome pasta!',
    isVeg: true
  }, {
    category: 'Sides',
    ImagePath: 'https://images.freshop.com/2421655/82b409145003d6576df5f14e1032db75_medium.png',
    item: 'Coleslaw',
    description: 'awesome pasta!',
    isVeg: true
  }
];

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


  }

  ngOnInit() {

    this
      .route
      .params
      .subscribe(params => (this.location = params.location));
    //   this._menuService.getEmployees() .subscribe((employeeData)=> this.menu =
    // employeeData, (error)=>{                     this.statusMessage = 'Problem
    // with the service. Please try again later!';
    // console.error(error);                  }); }

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
    // this.href = this.router.url;
    // console.log(this.router.url);
  }

  backToHome() {
    this
      .router
      .navigate(['']);
  }

  onSelect(val) {
    console.log(val);
    this.selectedFood = this
      .foodData
      .filter(x => x.category === val);
  }

  // toggle() {   this.hideCart = !this.hideCart;   this.hideRouter =
  // !this.hideRouter; }
}
