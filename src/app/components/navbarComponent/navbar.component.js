"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.selectedValue = "Kerala";
        this.areas = [
            { value: '1', viewValue: 'Munnar' },
            { value: '2', viewValue: 'Kottayam' },
            { value: '3', viewValue: 'Ettumanoor' },
            { value: '4', viewValue: 'Thekkady' },
            { value: '5', viewValue: 'Varkala' }
        ];
    }
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: "app/components/navbarComponent/navbar.component.html",
            styleUrls: ['app/components/navbarComponent/navbar.component.css']
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map