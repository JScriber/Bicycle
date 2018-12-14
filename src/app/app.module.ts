import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes.route';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { TypeJourneyComponent } from './type-journey/type-journey.component';
import { InfoJourneyComponent } from './info-journey/info-journey.component';
import { ChoicesComponent } from './choices/choices.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    AuthentificationComponent,
    MainComponent,
    HomeComponent,
    TypeJourneyComponent,
    InfoJourneyComponent,
    ChoicesComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
