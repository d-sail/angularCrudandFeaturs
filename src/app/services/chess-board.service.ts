import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ChessBoard } from '../interface/chess-board';

@Injectable({
  providedIn: 'root'
})
export class ChessBoardService {

  baseURL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getChessData(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}chessData`)
      .pipe(map(chessData => {
        console.log('ser1', chessData);
        const chessArr = [];
        let i = 1;
        while (i <= 8) {
          const chessObj = {};
          chessData.forEach(elem => {
            chessObj[elem] = `${elem.toUpperCase()}${i}`;
          });
          chessArr.push(chessObj);
          i++;
        }
        console.log('arr', chessArr);
        return chessArr;
      }));
  }

}
