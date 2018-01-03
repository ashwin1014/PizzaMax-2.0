import { Component } from '@angular/core';

declare var $:any; //for jQuery

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`,
  templateUrl: `app/app.component.html`,
})
export class AppComponent  {
   name = 'Welcome to PizzaMax';

   ngOnInit() {
        $('.ui.menu .ui.dropdown').dropdown({
          on: 'hover'
        });
        $('.ui.menu a.item').on('click', function() {
            $(this)
              .addClass('active')
              .siblings()
              .removeClass('active') ;
          });
     
    }//ngOnInit
   }
