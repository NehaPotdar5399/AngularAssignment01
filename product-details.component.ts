import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _productservice:ProductServiceService,
    private router:ActivatedRoute,
    private router1:Router) {}

  pid:any;
  id : any;
  name:any;
  category:any;
  price:any;
  serial_number:any;
  release_date:any;
  Stock_units:any;
  Description:any;

  ngOnInit(): void {
    this.pid = this.router.snapshot.params['id']
    this.getDetail();
  }

//==========To get Single Product Details===============
  getDetail(){
    this._productservice.product().
    subscribe((data)=>{
      this.id = data[this.pid]['id'];
      this.name = data[this.pid]['name'];
      this.category = data[this.pid]['category'];
      this.price = data[this.pid]['price'];
      this.serial_number = data[this.pid]['serial_number'];
      this.release_date = data[this.pid]['release_date'];
      this.Stock_units = data[this.pid]['Stock_units'];
      this.Description = data[this.pid]['Description'];
    })
  }

//====================Back To Product List============
    backToProduct(){
      this.router1.navigate(['ProductList'])
    }

}
