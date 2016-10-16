import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailComponent} from './products/product-detail.component';

const routes: Routes = [
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule],
    providers: []
} )
export class APMAngular2RoutingModule {
}
