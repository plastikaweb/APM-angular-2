import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component( {
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
} )
export class ProductsComponent implements OnInit {

    listProductTitle: string = 'Product List';
    imageWidth: number = 20;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];

    constructor(private productService: ProductService){}

    toggleImage() {
        this.showImage = !this.showImage;
    }

    onNotify(message: string): void {
        this.listProductTitle = 'Product List: ' + message;
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }
}
