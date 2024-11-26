import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/ApiResponse';



@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  private url:string = 'http://localhost:8080/api/converter/jsontocsv';

  constructor(private http: HttpClient) { }

  convertJsonToCsv(json: string): Observable<ApiResponse>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<ApiResponse>(this.url, json, {headers});
  }

}
