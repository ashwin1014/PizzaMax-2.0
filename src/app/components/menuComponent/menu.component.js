"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var menu_service_1 = require("./menu.service");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(route, router, _menuService) {
        this.route = route;
        this.router = router;
        this._menuService = _menuService;
        this.statusMessage = "Loading data. Please wait";
    }
    MenuComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe(params => (this.location = params.location));
        //   this._menuService.getEmployees()
        //                    .subscribe((employeeData)=> this.menu = employeeData,
        //                   (error)=>{
        //                     this.statusMessage = 'Problem with the service. Please try again later!';
        //                     console.error(error);
        //                   });
        // }
        var _this = this;
        var pizzaLocation = this.route.snapshot.params["location"];
        this._menuService.getMenuByLocation(pizzaLocation).subscribe(function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage = 'Sorry, We do not deliver at this location as of now,';
            }
            else {
                _this.menu = employeeData;
            }
        }, function (error) {
            _this.statusMessage =
                "Problem with the service. Please try again later!";
            console.error(error);
        });
    };
    MenuComponent.prototype.backToHome = function () {
        this.router.navigate([""]);
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: "menu",
            templateUrl: "app/components/menuComponent/menu.component.html",
            styleUrls: ["app/components/menuComponent/menu.component.css"],
        })
        // export class MenuComponent {
        //   constructor(private route: ActivatedRoute) {
        //    this.route.params.subscribe(params => console.log(params));
        //   }
        // }
        ,
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.Router,
            menu_service_1.MenuService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map