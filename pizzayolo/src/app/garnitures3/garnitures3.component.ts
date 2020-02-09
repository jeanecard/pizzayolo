import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { GarnituresService } from '../garnitures.service';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-garnitures3',
  templateUrl: './garnitures3.component.html',
  styleUrls: ['./garnitures3.component.scss']
})
export class Garnitures3Component implements OnInit {

  // Columns to display : Select for check box and Nom for ingredient
  private displayedColumns: string[] = ['select-column-def', 'nom-column-def'];
  // Create Angular Material dataSource (multiple allowed (true)). C'est lui qui va paginer et trier
    private dataSource = new MatTableDataSource<Ingredient>([]);
  // Create Angular Material selection (multiple allowed (true)) based on each element of dataSource
  private selection = new SelectionModel<String>(true, []);
  private resultsLength = 0;
  private pageSize = 0;
  @Output() newSelectionEvent = new EventEmitter<Ingredient[]>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private service: GarnituresService) { 
  }

  ngOnInit() {
    //1- Branchement du PageSize du Paginator sur le pagesize imposé par le service.
    this.pageSize = this.service.getPageSize();
    //2- Initialisation du premier remplissage de table avec les n premiers élements
    this.service.getGarnitures(0).subscribe(val => {
      this.dataSource = new MatTableDataSource<Ingredient>(val.items);
      this.resultsLength = val.totalCount;
    });
    //3- Branchement du OutPut Page du Paginator sur le service
    this.paginator.page.subscribe(val => {
      this.service.getGarnitures(val.pageIndex).subscribe(val => {
        this.dataSource = new MatTableDataSource<Ingredient>(val.items);
        this.resultsLength = val.totalCount;
      });
    });
   
  }
  //Mise à jour de SelectionModel avec la row transmise.
  private onChangeCheckBox(event: any, row: any): void {
    if (event) {
      //1- Mise à jour du checkBox
      this.selection.toggle(row.Nom);
      //2- Notification de la nouvelle sélection
      this.notifySelectionChanged();
    }
  }
  //Synchronisation de l'affichage de la coche en fonction du SelectionModel pour la rom demandée.
  private isChecked(row: any) {
    return this.selection.isSelected(row.Nom);
  }
  private notifySelectionChanged() : void {
    const result: Ingredient[] = [
    ];
    this.selection.selected.forEach(element => {
      let ingredient = new Ingredient();
      ingredient.Nom = element;
      ingredient.Position = -1; //!Not set in selection.
      result.push(ingredient);
    });
    this.newSelectionEvent.emit(result);
  }

}
