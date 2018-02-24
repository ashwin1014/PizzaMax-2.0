"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbarComponent/navbar.component");
var offers_component_1 = require("./components/offersComponent/offers.component");
var footer_component_1 = require("./components/footerComponent/footer.component");
var menu_component_1 = require("./components/menuComponent/menu.component");
var forms_1 = require("@angular/forms");
var home_component_1 = require("./components/homeComponent/home.component");
var pageNotFound_component_1 = require("./pageNotFound.component");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var menu_service_1 = require("./components/menuComponent/menu.service");
var appRoutes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "menu/:location", component: menu_component_1.MenuComponent },
    { path: "", redirectTo: "", pathMatch: "full" },
    { path: "**", component: pageNotFound_component_1.PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                navbar_component_1.NavbarComponent,
                offers_component_1.OfferComponent,
                footer_component_1.FooterComponent,
                menu_component_1.MenuComponent,
                pageNotFound_component_1.PageNotFoundComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [menu_service_1.MenuService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map