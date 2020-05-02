import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessDoardComponent } from './chess-doard.component';

describe('ChessDoardComponent', () => {
  let component: ChessDoardComponent;
  let fixture: ComponentFixture<ChessDoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessDoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessDoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
