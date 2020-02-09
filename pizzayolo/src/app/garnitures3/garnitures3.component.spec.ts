import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Garnitures3Component } from './garnitures3.component';

describe('Garnitures3Component', () => {
  let component: Garnitures3Component;
  let fixture: ComponentFixture<Garnitures3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Garnitures3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Garnitures3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
