import {Component} from '@angular/core';
import {ProductService} from './product.service';
import {IProduct} from "./iproduct";

/**
 * Created by gireeshbabu on 02/12/17.
 */

@Component({
  selector: 'products',
  templateUrl: './product.component.html',
  providers: [ProductService]
})

export class ProductComponent {

  products: IProduct[] = [];

  constructor(private productService: ProductService){
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      result => this.products = result
    );
  }
}
