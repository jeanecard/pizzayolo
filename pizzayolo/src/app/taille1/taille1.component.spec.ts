import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Taille1Component } from './taille1.component';

describe('Taille1Component', () => {
  let component: Taille1Component;
  let fixture: ComponentFixture<Taille1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Taille1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Taille1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
