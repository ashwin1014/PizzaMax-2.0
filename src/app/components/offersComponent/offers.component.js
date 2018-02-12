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
var OfferComponent = /** @class */ (function () {
    function OfferComponent() {
        this.offers = [
            { title: 'Title1',
                ImagePath: 'https://mymodernmet.com/wp/wp-content/uploads/2017/09/albert-dros-landscape-photography-tips-3.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sapien in tortor facilisis dignissim.'
            },
            { title: 'Title2',
                ImagePath: 'https://media.istockphoto.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?k=6&m=509636590&s=612x612&w=0&h=0n261AbJgmWI5cUWLUwpcRAbuGfmbWPF44tvPvErZXA=',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sapien in tortor facilisis dignissim.'
            },
            { title: 'Title3',
                ImagePath: 'https://img.apmcdn.org/6c7afe284089915c9e2305322faa29ba8878c4d5/uncropped/81f186-20151012-thomas-cole-the-oxbow-landscape-painting.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sapien in tortor facilisis dignissim.'
            }
        ];
    } // end constructor
    OfferComponent = __decorate([
        core_1.Component({
            selector: 'offers',
            templateUrl: "app/components/offersComponent/offers.component.html",
            styleUrls: ['app/components/offersComponent/offers.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], OfferComponent);
    return OfferComponent;
}()); // end Component
exports.OfferComponent = OfferComponent;
//# sourceMappingURL=offers.component.js.map