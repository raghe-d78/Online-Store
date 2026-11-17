import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './sign-in/sign-in.component';
import { authGuard } from './guards/auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  { path: '', component: HomeComponent ,canActivate:[authGuard]},
  { path: 'products', component: ProductsComponent ,canActivate:[authGuard]},
  { path: 'products/:id', component: ProductDetailsComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent,canActivate:[authGuard] },
  { path: 'contact', component: ContactComponent,canActivate:[authGuard] },
  { path: 'signin', component: SigninComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }