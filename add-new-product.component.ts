import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  constructor(
              private router:Router,
              private http:HttpClient){}

//=============Code For Form Validation 

  addProductForm:any=FormGroup;
  
  ngOnInit(): void {
    this.futureDateDisabled();

    this.addProductForm = new FormGroup({
        'id': new FormControl(null, [Validators.required , Validators.pattern( /^[a-zA-Z0-9]+$/)]),
        'name':new FormControl(null,[Validators.required,Validators.maxLength(30)]),
        'category':new FormControl(null,[Validators.required]),
        'price':new FormControl(null,[Validators.required , Validators.pattern(/^[+-]?\d+(\.\d+)?$/)]),
        'serial_number':new FormControl(null,[Validators.required , Validators.pattern( /^[a-zA-Z0-9]+$/)]),
        'release_date': new FormControl(null, [Validators.required]),
        'Stock_units':new FormControl(null,[Validators.required , Validators.pattern( /^[0-9]+$/)]),
        'Description':new FormControl(null,[Validators.required,Validators.maxLength(150)])
    })
  }//end of ngOnInit()
  
  get id(){
    return this.addProductForm.get('id')
  }
  get name(){
    return this.addProductForm.get('name')
  }
  get category(){
    return this.addProductForm.get('category')
  }
  get price(){
    return this.addProductForm.get('price')
  }
  get serial_number(){
    return this.addProductForm.get('serial_number')
  }
  get Stock_units()
  {
    return this.addProductForm.get('Stock_units') 
  }
  get Description()
  {
    return this.addProductForm.get('Description')
    
  }
  get release_date()
  {
    return this.addProductForm.get('release_date')
    
  }
//=========Funtion for fetching Past date only validation==========
    maxDate :any;
    futureDateDisabled(){
      var date :any = new Date();
      var today :any = date.getDate();
      var month :any = date.getMonth()+1;
      var year :any = date.getFullYear();
      if (today < 10) {
        today = '0' + today;
      }
      if (month < 10) {
        month = '0' + month;
      }
      
      this.maxDate = year + "-" + month  + "-" + today;
    }
//========================For Submiting Form and
//Fetching/Storing Forms Data into Json Server========================================
  onSubmit(){
    console.log(this.addProductForm.value);
    
    this.http.post<any>('http://localhost:3000/Products',this.addProductForm.value)
    .subscribe(res=>{
       alert("Product Details Added Successfully")
       this.addProductForm.reset();
       this.router.navigate(['ProductList'])   
    })   
  }
//============Code For Navigate back to productlist Component
  onBack(){
    this.router.navigate(['ProductList'])
  }

}//end of class AddNewProductComponent
