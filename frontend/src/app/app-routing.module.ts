import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
