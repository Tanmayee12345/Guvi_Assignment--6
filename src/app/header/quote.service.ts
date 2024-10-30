import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Quote {
  id: string;
  type: string;
  applicant: {
    name: string;
    age: number;
    address: string;
    [key: string]: any;
  };
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'https://6713b118690bf212c75f69ee.mockapi.io/quote';

  constructor(private http: HttpClient) {}

  getQuote(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.apiUrl);
  }
}
