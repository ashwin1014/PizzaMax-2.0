import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbarComponent/navbar.component';
import { OfferComponent } from './components/offersComponent/offers.component';
import { FooterComponent } from './components/footerComponent/footer.component';
import { MenuComponent } from './components/menuComponent/menu.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/homeComponent/home.component'
import { PageNotFoundComponent} from './pageNotFound.component'
import { Routes, RouterModule,} from '@angular/router';
import { HttpModule } from '@angular/http';
import { MenuService } from './components/menuComponent/menu.service';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "menu/:location", component: MenuComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OfferComponent,
    FooterComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: [MenuService]
})
export class AppModule {}
