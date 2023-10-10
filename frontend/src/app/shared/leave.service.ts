import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
selectLeave: string = 'casual'


  private apiUrl = 'http://localhost:8080/api'


  constructor(private http: HttpClient) { }

  applyLeave(formData: any) {
    return this.http.post(`${this.apiUrl}/applyleave`, formData);
  }
}