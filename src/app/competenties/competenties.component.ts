import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competenties',
  templateUrl: './competenties.component.html',
  styleUrls: ['./competenties.component.scss']
})
export class CompetentiesComponent implements OnInit {

  // TODO find better way to implement
  showAngularDetails = false;
  showJavaDetails = false;
  showSpringBootDetails = false;
  showBasiskennisDetails = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetailsOf(competence: string){
    switch (competence){
      case 'angular':
        this.showAngularDetails = !this.showAngularDetails;
        break;
      case 'java':
        this.showJavaDetails = !this.showJavaDetails;
        break;
      case 'spring_boot':
        this.showSpringBootDetails = !this.showSpringBootDetails;
        break;
      case 'basiskennis':
        this.showBasiskennisDetails = !this.showBasiskennisDetails;
        break;
    }
  }

}
