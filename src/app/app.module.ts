import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

// Custom components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer-component/footer-component.component';
import { CartComponent } from './components/cart-component/cart-component.component';
import { HomeComponent } from './components/home-component/home-component.component';
import { MenuComponent } from './components/menu-component/menu-component.component';
import { NavbarComponent } from './components/navbar-component/navbar-component.component';
import { OffersComponent } from './components/offers-component/offers-component.component';
import { PageNotFound } from  './components/page-not-found/page-not-found.component';
import { MenuService } from  './components/menu-component/menu.service';

// Declare Routes

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'menu/:location',
    component: MenuComponent,
    children: [
      {
        path: 'cart',
        component: CartComponent
      }
    ]
  }, {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }, {
    path: '**',
component : PageNotFound
  }
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CartComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    OffersComponent,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers : [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
