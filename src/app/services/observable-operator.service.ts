import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObservableOperator } from '../interface/observable-operator';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObservableOperatorService {
  baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  postData(data): Observable<ObservableOperator[]> {
    return this.httpClient.post<ObservableOperator[]> (`${this.baseUrl}postData`, data);
  }

  getPostData(): Observable<ObservableOperator[]> {
    return this.httpClient.get<ObservableOperator[]> (`${this.baseUrl}postData`)
    .pipe(
      map(responseData => {
        const postObj = {...responseData};
        return postObj;
      })
    );
  }

  deletePostData(): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:3000/postData');
  }

}
