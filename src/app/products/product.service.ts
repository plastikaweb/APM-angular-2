import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {Observable} from 'rxjs';
import {Http, Response} from '@angular/http';

@Injectable()
export class ProductService {
    private url = 'api/products/products.json';

    constructor(private http: Http) {}
    getProducts() {
        return this.http.get(this.url)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
