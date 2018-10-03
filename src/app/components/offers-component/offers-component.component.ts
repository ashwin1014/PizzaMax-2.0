import { Component, OnInit } from '@angular/core';
declare var $: any; // for jQuery

@Component({
  selector: 'app-offers-component',
  templateUrl: './offers-component.component.html',
  styleUrls: ['./offers-component.component.scss']
})
export class OffersComponent implements OnInit {
offers: Object[];

constructor() {
  this.offers = [
    {
      title: 'Pizza Max Special',
      ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/PizzaMaxSpecial.jpeg?alt=media&token=c7a89408-197d-444e-8545-bbfe471a8256',
      description: 'A Combination of Pepperoni, chicken sausage,fresh onion, green pepper, mushroom and black olives spread over a delicious base of pizza'
    }, {
      title: 'Hot & Spicy Chicken',
      ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/hot-n-spicy-chicken.jpeg?alt=media&token=eae71c68-a57d-4306-a9b4-a53f56909a06',
      description: 'A spicy flavour of seasoned chicken topped with green peppers, jalapenos and red onions'
    }, {
      title: 'Max Veggie',
      ImagePath: 'https://firebasestorage.googleapis.com/v0/b/pizzamax-website-data.appspot.com/o/max-veggie.jpeg?alt=media&token=4f6a6137-dc55-40b3-9a40-a860f018aba6',
      description: 'A combination of fresh vegetable (Onion, green pepper black olives,mushroom and tomato) topped with our own special fajitha sauce'
    }
  ];
} // end constructor

ngOnInit() {
}

}
