import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSbujectComponent } from './rxjs-sbuject.component';

describe('RxjsSbujectComponent', () => {
  let component: RxjsSbujectComponent;
  let fixture: ComponentFixture<RxjsSbujectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSbujectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSbujectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
