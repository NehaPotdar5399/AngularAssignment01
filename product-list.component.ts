import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private _productservice:ProductServiceService,
    private router:Router) { }

//Fetching Data From JsonServer to ProductList using services
  products:any={}
  ngOnInit(): void {
    this._productservice.product()
    .subscribe(productData => {
      console.log(productData);
      this.products=productData})
  }
//============Code For Navigate  to AddNewProduct Component
  addProduct(){
    this.router.navigate(['AddNewProduct'])
  }
//======================
 
}
