import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  providers: [DatePipe], 
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  hoveredDate: NgbDate | null = null;

	fromDate: NgbDate;
	toDate: NgbDate | null = null;
	selectedMonthYear: string = '';
	selectedDate: NgbDate | null = null;

	constructor(calendar: NgbCalendar,  private datePipe: DatePipe) {
		this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
		this.updateSelectedMonthYear(this.fromDate);
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
		this.selectedMonthYear = this.datePipe.transform(selectedDate, 'MMMM yyyy') ?? 'N/A';
	  }


	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
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
  
}
