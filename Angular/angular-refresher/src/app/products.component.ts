import { Component } from "@angular/core";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent {
    productName = 'Book';
    singleProductName = '';
    products = ['Book', 'Phone', 'Laptop']
    isDisabled = true;

    constructor() {
        setTimeout(() => {
            this.productName = 'Phone';
            this.isDisabled = false;
        }, 3500);
    }

    onAddProduct() {
        this.products.push(this.singleProductName);
        this.singleProductName = '';
    }

    onRemoveProduct(productName: string) {
        // Filtro los elementos del array y quito los que no coinciden con el nombre que paso
        this.products = this.products.filter(p => p !== productName);
    }
}