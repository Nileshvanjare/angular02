import { Component } from "@angular/core";

@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]

})

export class productComponent{
    productName : string = "Samsung";
    productID : number = 123


}