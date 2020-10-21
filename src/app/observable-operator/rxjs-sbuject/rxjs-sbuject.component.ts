import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-rxjs-sbuject',
  templateUrl: './rxjs-sbuject.component.html',
  styleUrls: ['./rxjs-sbuject.component.scss']
})
export class RxjsSbujectComponent implements OnInit {
  user: {id: number, name: string} ;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      // tslint:disable-next-line: no-string-literal
      id: this.route.snapshot.params['id'],
      // tslint:disable-next-line: no-string-literal
      name: this.route.snapshot.params['name']
    };
  }

}
