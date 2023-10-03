import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { LeaveAllocationComponent } from './components/leave-allocation/leave-allocation.component';
import { LeaveTableComponent } from './components/leave-table/leave-table.component';
import { LeaveApplymodelComponent } from './components/leave-applymodel/leave-applymodel.component';
import { LeaveConformmodelComponent } from './components/leave-conformmodel/leave-conformmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    UserCardComponent,
    LeaveAllocationComponent,
    LeaveTableComponent,
    LeaveApplymodelComponent,
    LeaveConformmodelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
