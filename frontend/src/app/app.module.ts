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
import { LeaveTypemodelComponent } from './components/leave-typemodel/leave-typemodel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminCardComponent } from './admin/admin-card/admin-card.component';
import { LineGraphComponent } from './admin/line-graph/line-graph.component';
import { TestComponent } from './admin/test/test.component';
import { PermissionCardComponent } from './admin/permission-card/permission-card.component';
import { BarchartComponent } from './admin/barchart/barchart.component';
import { LinechartComponent } from './admin/linechart/linechart.component';
import { RoleChangeModalComponent } from './admin/role-change-modal/role-change-modal.component';
import { RoleChangeSuccessComponent } from './admin/role-change-success/role-change-success.component';
import { SupervisorSidebarComponent } from './supervisor/supervisor-sidebar/supervisor-sidebar.component';
import { SupervisorCardComponent } from './supervisor/supervisor-card/supervisor-card.component';
import { SupervisorTableComponent } from './supervisor/supervisor-table/supervisor-table.component';
import { SupervisorAvailabilityTableComponent } from './supervisor/supervisor-availability-table/supervisor-availability-table.component';
import { ApproveLeaveModalComponent } from './supervisor/approve-leave-modal/approve-leave-modal.component';
import { LeaveRequestApprovedModalComponent } from './supervisor/leave-request-approved-modal/leave-request-approved-modal.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

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
    LeaveTypemodelComponent,
    AdminSidebarComponent,
    AdminCardComponent,
    LineGraphComponent,
    TestComponent,
    PermissionCardComponent,
    BarchartComponent,
    LinechartComponent,
    RoleChangeModalComponent,
    RoleChangeSuccessComponent,
    SupervisorSidebarComponent,
    SupervisorCardComponent,
    SupervisorTableComponent,
    SupervisorAvailabilityTableComponent,
    ApproveLeaveModalComponent,
    LeaveRequestApprovedModalComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
