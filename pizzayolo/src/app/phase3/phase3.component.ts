import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-phase3',
  templateUrl: './phase3.component.html',
  styleUrls: ['./phase3.component.scss']
})
export class Phase3Component implements OnInit {

  public selectedGarnitures : Ingredient[] = null;
  constructor() { }

  ngOnInit() {
  }

  // L'usage @input @output est problématique puisque la vue (html) doit avoir une certaine intelligence.
  // Or les vues sont moins facilement testables que les composants et de plus ne sont pas compilées.
  // Une erreur de syntaxe dans le branchement ne remet pas en cause la construction de l'application alors que ts ne permettrait pas des erreurs de syntaxes dans les branchements dans les controlleurs.
  // La meilleure solution est en réalité de passer par des Reactive Form et de branche la totalité des transmissions de messages
  // dans le controlleur. Ainsi la vue (hml) reste resposnable de l'affichage et uniquement. Les branchement métiers sont réazlisés
  // par le ou les controlleurs et sont testés en tant que tel. (ts vérifi les cohérences dans les ts pas dans le HTML par exmeple.)
  
  onGarnituresChanged(event) : void{
    console.log(event);
    this.selectedGarnitures = event;

  }
}
