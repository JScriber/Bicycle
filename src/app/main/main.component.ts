import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ShareComponent } from '../share/share.component';

enum Criteria {
  Beginner,
  Expert,
  Professional
}

interface History {
  date: string;
  from: string;
  to: string;
  criteria: Criteria
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  filter: Criteria;

  constructor(private bottomSheet: MatBottomSheet) {}


  openBottomSheet(): void {
    this.bottomSheet.open(ShareComponent);
  }


  /** Different criterias. */
  criterias: { title: string; criteria: Criteria; }[] = [
    {
      title: 'Débutant',
      criteria: Criteria.Beginner
    }, {
      title: 'Expert',
      criteria: Criteria.Expert
    }, {
      title: 'Professionel',
      criteria: Criteria.Professional
    },
  ];

  history: History[] = [
    {
      date: '02/05/2018',
      from: '4 rue des bleus - Rennes',
      to: '14 rue des merveilles - Rennes',
      criteria: Criteria.Beginner
    },
    {
      date: '14/05/2017',
      from: '8 rue des enclumes - Rennes',
      to: '14 rue des merveilles - Rennes',
      criteria: Criteria.Expert
    },
    {
      date: '25/12/1880',
      from: '5 rue de Noël - Rennes',
      to: '14 rue des merveilles - Rennes',
      criteria: Criteria.Professional
    }
  ]
}
