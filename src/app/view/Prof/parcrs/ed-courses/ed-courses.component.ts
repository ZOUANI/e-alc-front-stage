import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Parcours} from '../../../../controller/Model/parcours.model';
import {Cours} from '../../../../controller/Model/cours.model';
import {Section} from '../../../../controller/Model/section.model';

@Component({
  selector: 'app-ed-courses',
  templateUrl: './ed-courses.component.html',
  styleUrls: ['./ed-courses.component.scss']
})
export class EdCoursesComponent implements OnInit {
  count = 0;
  cols: any[];
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }
  ngOnInit(): void {
    this.initCol();
    this.service.init().subscribe(data => this.itemsparcours = data);
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'libelle', header: 'Libelle'},
      {field: 'code', header: 'Code'},
      {field: 'description', header: 'Description'},
      {field: 'datePublication', header: 'DatePublication'},
      {field: 'dateCreation', header: 'DateCreation'},
      {field: 'numeroOrder', header: 'NumeroOrder'},
      {field: 'nombreCours', header: 'NombreCours'},
      {field: 'coursList', header: 'CoursList'},
      {field: 'centre', header: 'Centre'}
    ];
  }
  public FindCours(parcour: Parcours) {
    this.selectedparcours = parcour;
    this.service.afficheCours().subscribe(
        data => {
          this.selectescours = data;
        });
  }
  get itemsparcours(): Array<Parcours> {
    return this.service.itemsparcours;
  }
  get selectesparcours(): Array<Parcours> {
    return this.service.selectesparcours;
  }
  set selectesparcours(value: Array<Parcours>) {
    this.service.selectesparcours = value;
  }
  get selectedparcours(): Parcours {
    return this.service.selectedparcours;
  }
  set selectedparcours(value: Parcours) {
    this.service.selectedparcours = value;
  }
  get itemscours(): Array<Cours> {
    return this.service.itemscours;
  }
  set itesectionList(value: Array<Section>) {
    this.service.itemssection = value;
  }
  get itemssection(): Array<Section> {
    return this.service.itemssection;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set itemscours(value: Array<Cours>) {
    this.service.itemscours = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set selectescours(value: Array<Cours>) {
    this.service.selectescours = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set itemsparcours(value: Array<Parcours>) {
    this.service.itemsparcours = value;
  }



}
