import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';


const routes: Routes = [
  
  {path:'WelcomeScreen' ,component:WelcomeScreenComponent},
  {path:'',redirectTo:'WelcomeScreen',pathMatch:'full'},
  {path:'ProductList' ,component:ProductListComponent},
  {path:'AddNewProduct' , component:AddNewProductComponent},
  {path:'ProductDetails',component:ProductDetailsComponent},
  {path:'ProductDetails/:id',component:ProductDetailsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
