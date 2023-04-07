import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { LetterPanelComponent } from './components/letter-panel/letter-panel.component';

import { playerReducer } from '../app/player.reducer';
import { letterReducer } from '../app/letter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ScoreBoardComponent,
    LetterPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ player: playerReducer, letters: letterReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
