import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { TestComponent } from './admin/test/test.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminSidebarComponent},
  {path:'test', component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
