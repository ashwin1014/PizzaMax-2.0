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

  priceMapper = function(object, index){
    return "<span class='chip right'>" + object.size + '  ' + object.price + "</span>";
  }

  selectedCategory: string = 'All sections'; // model name
  selectedFood;
  foodCategories = [
    { sectionName : 'All sections', ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-day-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format' },
    { sectionName : 'Appetizers', ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/garlic-bread.jpeg?alt=media&token=41ae5e55-8c1f-4c4b-bba5-b84468d9d55a' },
    { sectionName : 'Max Pasta', ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/pasta.jpg?alt=media&token=834522b7-3d59-423f-8d2f-f78a90db0723' },
    { sectionName : 'Pizza', ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/PizzaMaxSpecial.jpeg?alt=media&token=c7a89408-197d-444e-8545-bbfe471a8256' },
    { sectionName : 'Family Meals', ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/family-meals.jpg?alt=media&token=5bdfbc35-76ca-4e6d-8af6-dfe7beb78661' },
    { sectionName : 'Individual Meals', ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/individual-meals.jpg?alt=media&token=29a5dcce-f92c-4748-b1bb-4c50d2e10051' },
    { sectionName : 'Happy Kids Meals', ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/kids-meal.jpg?alt=media&token=95ca34b8-d950-431b-a4d8-b1c6cb5d59ad' },
    { sectionName : 'Salads', ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/salad.jpg?alt=media&token=2a84401e-a502-4c78-ac25-71c82edd2663' },
    { sectionName : 'Crispy Chicken', ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/CRISPY%20CHICKEN.jpg?alt=media&token=ca6631fd-c94f-49bb-a108-7edc17f3981d', excludeLocations: ["Kottayam"] },
    { sectionName : 'Hot Crispy Burgers', ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/Chicken-burger.jpeg?alt=media&token=2fb0fdf5-42da-4bd2-ab1c-3121b46229a2' },
    { sectionName : 'Beverages', ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/mojito.jpeg?alt=media&token=5b3b00bd-0367-4821-962d-82d7a3419009' },
    { sectionName : 'Sides', ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/coleslaw.jpeg?alt=media&token=3a0425c7-6c8f-4b86-bd03-9765c1035b57' }
  ];

foodData = [

  {
      category: 'Appetizers',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'French Fries',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 95 }
              ]
  },

  {
      category: 'Appetizers',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Potato Wedges',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 110 }
              ]
  },

  {
      category: 'Appetizers',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Garlic Bread ( 4 Pcs)',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 95 }
              ]
  },

  {
      category: 'Appetizers',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Garlic Bread With Cheese ( 4 Pcs)',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 150 }
              ]
  },

  {
      category: 'Appetizers',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Bar- B- Que Chicken Wings (6 Pcs)',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 150 }
              ]
  },

  {
      category: 'Appetizers',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Spicy Corn Nuggets (8 Pcs)',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 100 }
              ]
  },

  {
      category: 'Appetizers',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Chicken Nuggets (6 Pcs)',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 150 }
              ]
  },

  {
      category: 'Max Pasta',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Lasagna (Chicken)',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 300 }
              ]
  },

  {
      category: 'Max Pasta',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Max Fajitha',
      description: 'Chicken kheema ,cheese,onion,Green pepper,black olives',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 225 }
              ]
  },

  {
      category: 'Max Pasta',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Al Forono',
      description: 'Grilled chicken,Onion,Green pepper, mushroom and black olives',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 225 }
              ]
  },

  {
      category: 'Max Pasta',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Primavera',
      description: 'Onion,Green pepper,Green olives and black olives with red or white sauce',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 225 }
              ]
  },

  {
      category: 'Max Pasta',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'BBQ Pasta',
      description: 'Onion, Mushroom with BBQ Sauce',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 200 }
              ]
  },

  {
      category: 'Family Meals',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Max Big Family Box',
      description: '8 PCS Fried chicken, 2 French Fries,4 Garlic paste , 4 Coleslaw,4 Bun ,4 Glass coke (Take away 1 ltr coke)',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 999 }
              ]
  },

  {
      category: 'Family Meals',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Max Family Meals',
      description: '6 PCS Fried chicken, 2 French Fries,3 Garlic paste , 3 Coleslaw, 3 Bun ,3 Glass coke (Take away 1 ltr coke)',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 849 }
              ]
  },

  {
      category: 'Family Meals',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Max  Meals For 2',
      description: '4 PCS Fried chicken, 1 French Fries, 2 Garlic paste , 2 Coleslaw, 2 Bun ,2 Glass coke (Take away  600 ml coke)',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 599 }
              ]
  },

  {
      category: 'Crispy Chicken',
      ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/fried-chicken.jpeg?alt=media&token=dd0ed904-c0fe-4f8b-bf78-3e0931c20bac',
      item: '4 Pcs Chicken',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 349 }
              ]
  },

  {
      category: 'Crispy Chicken',
      ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/fried-chicken.jpeg?alt=media&token=dd0ed904-c0fe-4f8b-bf78-3e0931c20bac',
      item: '6 Pcs Chicken',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 499 }
              ]
  },

  {
      category: 'Crispy Chicken',
      ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/fried-chicken-larger.jpeg?alt=media&token=f3e67fd5-3697-4b2e-9732-d2a015ee7c25',
      item: '9 Pcs Chicken',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 729 }
              ]
  },

  {
      category: 'Crispy Chicken',
      ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/fried-chicken-larger.jpeg?alt=media&token=f3e67fd5-3697-4b2e-9732-d2a015ee7c25',
      item: '12 Pcs Chicken',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 949 }
              ]
  },

  {
      category: 'Individual Meals',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Max Snack',
      description: '2 PCS CHICKEN,BUN & GARLIC PASTE',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 189 }
              ]
  },

  {
      category: 'Individual Meals',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Max Delite',
      description: '3 PCS CHICKEN,BUN & GARLIC PASTE',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 299 }
              ]
  },

  {
      category: 'Happy Kids Meals',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: '1 Pc Chicken, Fries & Coke',
      description: '1 PCS NUGGETS, FRIES & COKE',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 150 }
              ]
  },

  {
      category: 'Salads',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Garden Fresh Salads With Dressings',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 150 }
              ]
  },

  {
      category: 'Hot Crispy Burgers',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Hot & Crispy Chicken Burger',
      description: 'Served with fries and coke',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 179 }
              ]
  },

  {
      category: 'Hot Crispy Burgers',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Crispy Vegetable Burger',
      description: 'Served with fries and coke',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 169 }
              ]
  },

  {
      category: 'Sides',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: '1 Pc Chicken',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 95 }
              ]
  },

  {
      category: 'Sides',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Bun',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 10 }
              ]
  },

  {
      category: 'Sides',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Garlic Dip',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 10 }
              ]
  },

  {
      category: 'Sides',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Cheesy Dip',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 20 }
              ]
  },

  {
      category: 'Sides',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Coleslaw',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 40 }
              ]
  },

  {
      category: 'Sides',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Mayyonnaise',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 10 }
              ]
  },

  {
      category: 'Beverages',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Lime Mint Mojito',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 90 }
              ]
  },

  {
      category: 'Beverages',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Coke Glass',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 40 }
              ]
  },

  {
      category: 'Beverages',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Sprite Glass',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 40 }
              ]
  },

  {
      category: 'Beverages',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Fanta Glass',
      description: '',
      isVeg: true,
      prices: [
                {size:'Rs.', price: 40 }
              ]
  },

  {
      category: 'Beverages',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Mineral Water',
      description: '',
      isVeg: true,
      prices: [
                {size:'', price: 'At MRP' }
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/PizzaMaxSpecial.jpeg?alt=media&token=c7a89408-197d-444e-8545-bbfe471a8256',
      item: 'Pizza Max Special',
      description: 'A Combination of Pepperoni, chicken sausage, fresh onion, green pepper , mushroom and black olives spread over a delicious base of pizza',
      isVeg: true,
      prices: [
                {size:'S /', price:249},
                {size:'M /', price:459},
                {size:'L /', price:629}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Pepperoni',
      description: 'A perfect pizza served with extra pepperoni and cheese',
      isVeg: true,
      prices: [
                {size:'S /', price:249},
                {size:'M /', price:459},
                {size:'L /', price:629}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Grilled Chicken',
      description: 'Get the great taste of grilled chicken cubes with onions green pepper and tomato',
      isVeg: true,
      prices: [
                {size:'S /', price:219},
                {size:'M /', price:429},
                {size:'L /', price:599}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Bar B Que Chicken',
      description: 'Pieces of chicken with  BBQ flavour ,topped with red onion and sprinkled with fresh corriander',
      isVeg: true,
      prices: [
                {size:'S /', price:219},
                {size:'M /', price:429},
                {size:'L /', price:599}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Tandoori Chicken',
      description: 'A special flavour from South Asia, Pieces of orginal tandoori seasoned chicken topped with Red Onion and Sprinkled with coriander',
      isVeg: true,
      prices: [
                {size:'S /', price:219},
                {size:'M /', price:429},
                {size:'L /', price:599}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/hot%20n%20spicy%20chicken.jpeg?alt=media&token=8ec00f6e-8a5b-4315-b693-9935a90ae494',
      item: 'Hot & Spicy Chicken',
      description: 'A spicy flavour of seasoned chicken topped with green peppers, jalapenos and red onions',
      isVeg: true,
      prices: [
                {size:'S /', price:219},
                {size:'M /', price:429},
                {size:'L /', price:599}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Fajitha Chicken',
      description: 'Succulent pieces of spicy seasoned chicken cubes with our own special fajitha sauce,topped with green pepper,onion and black olives',
      isVeg: true,
      prices: [
                {size:'S /', price:249},
                {size:'M /', price:459},
                {size:'L /', price:629}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Chicken Supreme',
      description: 'Succulent pieces of seasoned chicken onion,green peppers black olives ,mushroom topped on our special sauce',
      isVeg: true,
      prices: [
                {size:'S /', price:249},
                {size:'M /', price:459},
                {size:'L /', price:629}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Margherita',
      description: 'A Royal cheese pizza',
      isVeg: true,
      prices: [
                {size:'S /', price:179},
                {size:'M /', price:279},
                {size:'L /', price:419}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Max Veggie',
      description: 'A combination of fresh vegetables (Onion, green pepper, black olives, mushroom and tomato) topped with our own special fajitha sauce',
      isVeg: true,
      prices: [
                {size:'S /', price:219},
                {size:'M /', price:429},
                {size:'L /', price:599}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Max Gourmet',
      description: 'A Combination of fresh onions , sweet corn and jalapenos',
      isVeg: true,
      prices: [
                {size:'S /', price:209},
                {size:'M /', price:369},
                {size:'L /', price:549}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Royal Veggie',
      description: 'A Combination of fresh vegetable including onion ,green olive,sweet corn,green pepper and jalapenos',
      isVeg: true,
      prices: [
                {size:'S /', price:219},
                {size:'M /', price:429},
                {size:'L /', price:599}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Paneer Supreme',
      description: 'A combination of green olives, green pepper,mushroom , onion and seasoned paneer topped on our special sauce',
      isVeg: true,
      prices: [
                {size:'S /', price:219},
                {size:'M /', price:429},
                {size:'L /', price:599}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Max Paneer',
      description: 'A Combination of Onion ,green pepper,mushroom and jalapenos with seasoned paneer topped on our special fajitha sauce',
      isVeg: true,
      prices: [
                {size:'S /', price:219},
                {size:'M /', price:429},
                {size:'L /', price:599}
              ]
  },

  {
      category: 'Pizza',
      ImagePath: 'https://mrhyde.imgix.net/app/uploads/2017/02/19141103/the-best-national-pizza-da' +
          'y-offers-in-london-613x409.png?w=1200&h=1&q=90&fit=max&auto=format',
      item: 'Max Veganza',
      description: 'A combination of onion ,green pepper , Black olives , jalapenos ,tomato and mushroom',
      isVeg: true,
      prices: [
                {size:'S /', price:219},
                {size:'M /', price:429},
                {size:'L /', price:599}
              ]
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
    this.selectedCategory = val
    this.selectedFood = this
      .foodData
      .filter(x => x.category === val);
  }

  allSections() {
    return this.foodCategories.filter(cat => cat.sectionName != 'All sections')
  }

  // toggle() {   this.hideCart = !this.hideCart;   this.hideRouter =
  // !this.hideRouter; }
}
