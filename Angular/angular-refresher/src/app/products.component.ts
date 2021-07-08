import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

import { ProductsService } from "./products.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy {
    products = [];
    private productsSubscription: Subscription;

    //Así inyecto el servicio al crear la instancia; lo establezco en app.module.ts, providers array
    constructor(private productsService: ProductsService) {}

    ngOnInit() {    //equivalente a un created() en vue
        this.products = this.productsService.getProducts();
        this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {  //para mantener cambios actualizados
            this.products = this.productsService.getProducts();
        })   
    }

    onAddProduct(form) {
        // console.log(form); form me devuelve el objeto html subyacente: si se ValidityState, valores...
        //this.products.push(form.value.productName);   sin inyección
        this.productsService.addProduct(form.value.productName);
    }

    ngOnDestroy() {
        this.productsSubscription.unsubscribe();
    }
}