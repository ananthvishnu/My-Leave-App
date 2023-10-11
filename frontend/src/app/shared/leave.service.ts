import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
selectLeave: string = 'casual'

// POST RECORD
  private apiUrl = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  applyLeave(formData: any) {
    return this.http.post(`${this.apiUrl}/applyleave`, formData);
  }



// READ (GET) All Leave Records
getAllLeaves(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/records`);
}




// READ (GET) a Leave Record by ID
getLeaveById(leaveId: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/leaves/${leaveId}`);
}

// UPDATE (PUT) a Leave Record by ID
updateLeave(leaveId: number, formData: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/leaves/${leaveId}`, formData);
}

// DELETE a Leave Record by ID
deleteLeave(leaveId: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/leaves/${leaveId}`);
}

}