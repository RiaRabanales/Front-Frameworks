import { Subject } from 'rxjs'; //para reflejar productsUpdated

export class ProductsService {
    //Un servicio contiene una funcionalidad que sueles querer emplear en diferentes componentes (datos, utilidades...)
    private products = ['Book', 'Phone', 'Laptop'];
    productsUpdated = new Subject();

    addProduct(productName: string) {
        this.products.push(productName);
        this.productsUpdated.next();
    }

    getProducts() {
        return [...this.products]; //con spread syntax creo una nueva copia del array
    }

    deleteProduct(productName: string) {
        this.products = this.products.filter(p => p !== productName);
        this.productsUpdated.next();
    }
}