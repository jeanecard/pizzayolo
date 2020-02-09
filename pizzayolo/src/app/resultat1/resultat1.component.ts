import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-resultat1',
  templateUrl: './resultat1.component.html',
  styleUrls: ['./resultat1.component.scss']
})
export class Resultat1Component implements OnInit {

  @Input() garnitures: Ingredient[]; // decorate the property with @Input()

  constructor() { }

  ngOnInit() {
  }

}
