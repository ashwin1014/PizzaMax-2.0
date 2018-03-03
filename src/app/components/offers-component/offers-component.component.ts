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
      title: 'Title1',
      ImagePath: 'https://mymodernmet.com/wp/wp-content/uploads/2017/09/albert-dros-landscape-phot' +
          'ography-tips-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sapien in tor' +
          'tor facilisis dignissim.'
    }, {
      title: 'Title2',
      ImagePath: 'https://media.istockphoto.com/photos/misty-summer-mountain-hills-landscape-pictu' +
          're-id509636590?k=6&m=509636590&s=612x612&w=0&h=0n261AbJgmWI5cUWLUwpcRAbuGfmbWPF4' +
          '4tvPvErZXA=',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sapien in tor' +
          'tor facilisis dignissim.'
    }, {
      title: 'Title3',
      ImagePath: 'https://img.apmcdn.org/6c7afe284089915c9e2305322faa29ba8878c4d5/uncropped/81f186' +
          '-20151012-thomas-cole-the-oxbow-landscape-painting.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sapien in tor' +
          'tor facilisis dignissim.'
    }
  ];
} // end constructor

ngOnInit() {
}

}
