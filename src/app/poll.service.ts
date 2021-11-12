import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { poll } from './poll';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private baseURL = "http://localhost:8080/api/v1/polls";

  constructor(private httpClient: HttpClient) { }
  
  getPollList(): Observable<poll[]>{
    return this.httpClient.get<poll[]>(`${this.baseURL}`);
  }

  createpoll(poll: poll): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, poll);
  }

  getpoll(id: number): Observable<poll>{
    return this.httpClient.get<poll>(`${this.baseURL}/${id}`);
  }

  getPollById(id: number): Observable<poll>{
    return this.httpClient.get<poll>(`${this.baseURL}/${id}`);
  }

  updatepoll(id: number, poll: poll): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, poll);
  }

  // deletepoll(id: number): Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }
}
