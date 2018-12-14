import { Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { TypeJourneyComponent } from './type-journey/type-journey.component';
import { InfoJourneyComponent } from './info-journey/info-journey.component';
import { ChoicesComponent } from './choices/choices.component';
import { ShareComponent } from './share/share.component';
import { JourneyComponent } from './journey/journey.component';

export const routes: Routes = [
  {
    path: 'accueil',
    component: HomeComponent
  },
  {
    path: 'connexion',
    component: ConnectionComponent
  },
  {
    path: 'inscription',
    component: AuthentificationComponent
  },
  {
    path: 'type-parcours',
    component: TypeJourneyComponent
  },
  {
    path: 'info-parcours',
    component: InfoJourneyComponent
  },
  {
    path: 'partager',
    component: ShareComponent
  },
  {
    path: 'parcours',
    component: JourneyComponent
  },
  {
    path: 'app',
    component: MainComponent
  },
  { path: '',
    redirectTo: '/inscription',
    pathMatch: 'full'
  }
];