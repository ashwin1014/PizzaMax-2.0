import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbarComponent/navbar.component';
import { OfferComponent } from './components/offersComponent/offers.component';
import { FooterComponent } from './components/footerComponent/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NavbarComponent, OfferComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
