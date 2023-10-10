import { Component } from '@angular/core';
import { LeaveService } from 'src/app/shared/leave.service';

@Component({
  selector: 'app-leave-typemodel',
  templateUrl: './leave-typemodel.component.html',
  styleUrls: ['./leave-typemodel.component.scss']
})
export class LeaveTypemodelComponent {
  selectLeave: string = ''


  constructor(private leaveService : LeaveService){}
  
  getLeaveType(type:string) {
    return this.leaveService.selectLeave =  type
   }
}
