import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Allergenes1Component } from './allergenes1.component';

describe('Allergenes1Component', () => {
  let component: Allergenes1Component;
  let fixture: ComponentFixture<Allergenes1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Allergenes1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Allergenes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
