import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from './ingredient';
import { PaginatedIngredients } from './paginated-ingredients';



const STUB: Ingredient[] = [
  { Nom: 'Jambon', Position: 1 },
  { Nom: 'Champignons', Position: 2 },
  { Nom: 'Câpres', Position: 3 },
  { Nom: 'Anchois', Position: 4 },
  { Nom: 'Gorgonzola', Position: 5 },
  { Nom: 'Miel', Position: 6 },
  { Nom: 'Fromage chêvre', Position: 7 },
  { Nom: 'Camembert', Position: 8 },
  { Nom: 'Poulet', Position: 9 },
  { Nom: 'Saucisse', Position: 10 },
  { Nom: 'Oeuf', Position: 11 },
];


@Injectable({
  providedIn: 'root'
})
export class GarnituresService {

  constructor() { }

  //page 0 based index
  public getPageSize(): number {
    return 5;
  }

  public getGarnitures(page: number): Observable<PaginatedIngredients> {
    return Observable.create(function (observer) {
      let retour = new PaginatedIngredients();
      retour.totalCount = STUB.length;
      if (page == 0) {
        retour.items = STUB.slice(0, 5);
        observer.next(retour);
      } else if (page == 1) {
        retour.items = STUB.slice(5, 10);
        observer.next(retour);
      } else if (page == 2) {
        retour.items = STUB.slice(10, 11);
        observer.next(retour);
      }
      observer.complete();
    });
  }
}
