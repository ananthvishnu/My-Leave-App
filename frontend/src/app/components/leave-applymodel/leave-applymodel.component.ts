import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  NgbDate,
  NgbCalendar,
  NgbDatepickerModule,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { LeaveService } from 'src/app/shared/leave.service';

@Component({
  selector: 'app-leave-applymodel',
  templateUrl: './leave-applymodel.component.html',
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./leave-applymodel.component.scss'],
})
export class LeaveApplymodelComponent implements OnInit {
  //Datepicker functions
  hoveredDate: NgbDate | null = null;
  fromDate!: NgbDate;
  toDate: NgbDate | null = null;
  selectedMonthYear: string = '';
  selectedDate: NgbDate | null = null;

  category: string = 'Medical';
  duration: any;
  reason!: string;

  constructor(private leaveService: LeaveService, private datePipe: DatePipe) {}

  ngOnInit() {}

  onSubmit() {
    
    const formData = {
      category: this.getLeaveType(),
      fromDate: this.ngbDateToISOString(this.fromDate),
      toDate: this.ngbDateToISOString(this.toDate),
      duration: this.getNumberOfDays(),
      reason: this.reason,

      // category: this.category,
      // fromDate: this.fromDate,
      // toDate: this.toDate,
      // duration: this.duration,
      // reason: this.reason,
    };





    this.leaveService.applyLeave(formData).subscribe(
      (response) => {
        console.log('Form data sent successfully:', response);
      },
      (error) => {
        console.error('Error sending form data:', error);
      }
    );
  }


  getLeaveType():string {
   return this.leaveService.selectLeave
  }

  ngbDateToISOString(date: NgbDateStruct | null): string {
    if (date) {
      const jsDate = new Date(date.year, date.month - 1, date.day);
      return jsDate.toISOString();
    }
    return '';
  }

  ngbDateToDate(ngbDate: NgbDate | null): Date | null {
    if (ngbDate) {
      return new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    }
    return null;
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    this.selectedDate = date;
    this.updateSelectedMonthYear(date);
  }

  updateSelectedMonthYear(date: NgbDate) {
    const selectedDate = new Date(date.year, date.month - 1);
    this.selectedMonthYear =
      this.datePipe.transform(selectedDate, 'MMMM yyyy') ?? 'N/A';
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  getNumberOfDays(): number {
    if (this.fromDate && this.toDate) {
      const fromDate = this.ngbDateToDate(this.fromDate);
      const toDate = this.ngbDateToDate(this.toDate);
      const timeDifference = toDate!.getTime() - fromDate!.getTime();
      const dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
      return dayDifference + 1;
    }
    return 1; // Return 0 if either fromDate or toDate is null
  }
}
