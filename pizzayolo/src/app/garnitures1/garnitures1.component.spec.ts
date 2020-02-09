import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Garnitures1Component } from './garnitures1.component';

describe('Garnitures1Component', () => {
  let component: Garnitures1Component;
  let fixture: ComponentFixture<Garnitures1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Garnitures1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Garnitures1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
