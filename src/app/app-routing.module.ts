import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {CatalogPageComponent} from "./catalog/catalog-page/catalog-page.component";
import {UserListPageComponent} from "./admin/user-list-page/user-list-page.component";
import {CompanyPageComponent} from "./admin/company-page/company-page.component";

const routes: Routes = [{ path:'', component: HomePageComponent},
  { path:'catalog', component: CatalogPageComponent},
  { path:'user-list', component: UserListPageComponent},
  {path:'company-list', component: CompanyPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
