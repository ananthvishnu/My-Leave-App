import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminSidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
