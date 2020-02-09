import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Allergenes1Component } from './allergenes1/allergenes1.component';
import { Garnitures1Component } from './garnitures1/garnitures1.component';
import { Taille1Component } from './taille1/taille1.component';
import { Resultat1Component } from './resultat1/resultat1.component';
import { Phase1Component } from './phase1/phase1.component';
import { Sauce1Component } from './sauce1/sauce1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Garnitures2Component } from './garnitures2/garnitures2.component';
import { Phase2Component } from './phase2/phase2.component';
import { Phase3Component } from './phase3/phase3.component';
import { Garnitures3Component } from './garnitures3/garnitures3.component';

@NgModule({
  declarations: [
    AppComponent,
    Allergenes1Component,
    Garnitures1Component,
    Taille1Component,
    Resultat1Component,
    Phase1Component,
    Sauce1Component,
    Garnitures2Component,
    Phase2Component,
    Phase3Component,
    Garnitures3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
