import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {APMAngular2RoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {WelcomeComponent} from './welcome/welcome.component';

@NgModule( {
    declarations: [
        AppComponent,
        ProductsComponent,
        ProductFilterPipe,
        StarComponent,
        ProductDetailComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        APMAngular2RoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule {
}
