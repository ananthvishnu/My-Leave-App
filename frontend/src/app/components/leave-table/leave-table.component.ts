import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/shared/leave.service';
@Component({
  selector: 'app-leave-table',
  templateUrl: './leave-table.component.html',
  styleUrls: ['./leave-table.component.scss']
})
export class LeaveTableComponent implements OnInit {
  selectedType: string | null = 'Sort by';
  originalData: any[] = [];
  data: any[] = []; 
  itemsPerPage = 3; 
  currentPage = 1; 
  totalPages!: number;
  pages: number[] = [];
  visiblePages: number[] = [];
  leaveRecords: any[] = [];

  constructor(private leaveService: LeaveService) {
    console.log(this.leaveRecords);
  }

  ngOnInit(): void {
   
      // Call the service method to get all leave records
      this.leaveService.getAllLeaves().subscribe(
        (data:any) => {
          // Store the fetched data in the component's property
          this.leaveRecords = data.data;
          console.log(data);
        },
        (error) => {
          console.error('Error fetching leave records:', error);
        }
      );
  
  




    this.originalData = [...this.data];

    // Calculate the total number of pages
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);

    // Initialize the pages array
    this.updatePages();
  }

 
  filterDataByType(): void {
    if (this.selectedType) {
      this.data = this.originalData.filter(item => item.type === this.selectedType);
    } else {
      // If no type is selected, reset the data to the original data
      this.data = [...this.originalData];
    }
  
    // Recalculate the total number of pages and update the pages array
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    this.updatePages();
  
    // Reset the current page to 1
    this.currentPage = 1;
  }

  // Helper function to update the pages array
  updatePages(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.updateVisiblePages();
  }

  updateVisiblePages(): void {
    const maxVisiblePages = 5; // Adjust the number of visible pages as needed
    const middlePage = Math.floor(maxVisiblePages / 2);

    if (this.totalPages <= maxVisiblePages) {
      this.visiblePages = this.pages;
    } else if (this.currentPage <= middlePage) {
      this.visiblePages = this.pages.slice(0, maxVisiblePages);
    } else if (this.currentPage >= this.totalPages - middlePage) {
      this.visiblePages = this.pages.slice(this.totalPages - maxVisiblePages);
    } else {
      this.visiblePages = this.pages.slice(
        this.currentPage - middlePage - 1,
        this.currentPage + middlePage
      );
    }
  }

  // Function to set the current page
  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateVisiblePages();
    }
  }

  // Function to navigate to the previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateVisiblePages();
    }
  }

  // Function to navigate to the next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateVisiblePages();
    }
  }

}
