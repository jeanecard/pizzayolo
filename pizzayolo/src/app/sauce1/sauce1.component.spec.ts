import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sauce1Component } from './sauce1.component';

describe('Sauce1Component', () => {
  let component: Sauce1Component;
  let fixture: ComponentFixture<Sauce1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sauce1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sauce1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
