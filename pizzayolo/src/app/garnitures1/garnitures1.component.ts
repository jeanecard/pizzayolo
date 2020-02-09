import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-garnitures1',
  templateUrl: './garnitures1.component.html',
  styleUrls: ['./garnitures1.component.scss']
})
export class Garnitures1Component implements OnInit {
  readonly STUB: Ingredient[] = [
    { Nom: 'Jambon', Position: 1 },
    { Nom: 'Champignons', Position: 2 },
    { Nom: 'Câpres', Position: 3 },
    { Nom: 'Anchois', Position: 4 },
    { Nom: 'Gorgonzola', Position: 5 },
    { Nom: 'Miel', Position: 6 },
    { Nom: 'Fromage chêvre', Position: 7 },
  ];
  // Columns to display : Select for check box and Nom for ingredient
  private displayedColumns: string[] = ['select-column-def', 'nom-column-def'];
  // Create Angular Material dataSource (multiple allowed (true))
  private dataSource = new MatTableDataSource<Ingredient>(this.STUB);
  // Create Angular Material selection (multiple allowed (true)) based on each element of dataSource
  private selection = new SelectionModel<Ingredient>(true, []);

  constructor() { }

  ngOnInit()  {
  }
  //Mise à jour de SelectionModel avec la row transmise.
  private onChangeCheckBox(event: any, row: any): void {
    if (event) {
      this.selection.toggle(row);
    } 
  }
  //Synchronisation de l'affichage de la coche en fonction du SelectionModel pour la rom demandée.
  private isChecked(row : any){
    return this.selection.isSelected(row);
  }



  
}
