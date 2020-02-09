import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Garnitures2Component } from './garnitures2.component';

describe('Garnitures2Component', () => {
  let component: Garnitures2Component;
  let fixture: ComponentFixture<Garnitures2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Garnitures2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Garnitures2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
