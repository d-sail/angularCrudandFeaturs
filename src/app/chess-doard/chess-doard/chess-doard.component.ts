import { Component, OnInit } from '@angular/core';

import { ChessBoard } from 'src/app/interface/chess-board';
import { ChessBoardService } from 'src/app/services/chess-board.service';


@Component({
  selector: 'app-chess-doard',
  templateUrl: './chess-doard.component.html',
  styleUrls: ['./chess-doard.component.scss']
})
export class ChessDoardComponent implements OnInit {

  chessBoard: any[] = [];

  obj: {} = {
    name: 'dwidish sail',
    profetion: 'ui developer',
    age: 45,
    city: 'pune',
    school: 'shinde HighSchool',
    contry: 'India'
  };

  newObj: {} = {
    123445: {
     displayName: 'abcd',
     items: [
       {
         id: 'e7363730-552d-4943-a3b8-082db653fc16',
         name: 'xyz',
         displayName: 'xyd',
         price: 75,
         quntity: 100,
         school: 'New English school'
       },
       {
         id: '302fda08-502d-4f5a-98b8-cbca34f8e186',
         name: 'pqr',
         displayName: 'pqr',
         price: 60,
         quntity: 100,
         age: 45
       }

     ]
   }
};

  constructor(private chessBoardService: ChessBoardService) { }

  ngOnInit(): void {
    this.chessBoardService.getChessData().subscribe(response => {
      // console.log('data', response[0]);
      this.chessBoard = response;
      console.log('dwi', this.chessBoard);
    });
    // this.createChessArr(this.chessBoard);
  }

  createChessArr(arr): any {
    // const chessArr = [];
    for (let i = 1; i <= 8; i++) {
      arr.push({ a: `A${i}`, b: `B${i}`, c: `C${i}`, d: `D${i}`, e: `E${i}`, f: `F${i}`, g: `G${i}`, h: `H${i}` });
    }
  }

}
