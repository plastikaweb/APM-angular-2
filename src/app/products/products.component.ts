import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
import {Response} from '@angular/http';

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
    errorMessage: string;

    constructor(private productService: ProductService){}

    toggleImage() {
        this.showImage = !this.showImage;
    }

    onNotify(message: string): void {
        this.listProductTitle = 'Product List: ' + message;
    }

    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe (
                (data: IProduct[]) => this.products = data,
                (error: any)  => this.errorMessage = <any>error
            );
    }
}
