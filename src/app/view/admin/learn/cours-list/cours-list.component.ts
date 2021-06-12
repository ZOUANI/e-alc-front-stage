import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Section} from '../../../../controller/model/section.model';
import {Cours} from '../../../../controller/model/cours.model';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class CoursListComponent implements OnInit {
  cols: any[];
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }
  ngOnInit(): void {
    this.initCol();
  }
  public openCreateCours() {
    this.submittedCours = false;
    this.createDialogCours = true;
    this.selectedcours = new Cours();
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set submittedCours(value: boolean) {
    this.service.submittedCours = value;
  }

  public editCours(cour: Cours) {
    this.selectedcours = {...cour};
    this.editDialogCours = true;
  }
  public FindSection(cour: Cours) {
    this.selectedcours = cour;
    this.service.affichelistSection().subscribe(
        data => {
          this.itemssection = data;
        });
  }
  set itemssection(value: Array<Section>) {
    this.service.itemssection = value;
  }
  get createDialogCours(): boolean {
    return this.service.createDialogCours;
  }

  set createDialogCours(value: boolean) {
    this.service.createDialogCours = value;
  }

  get editDialogCours(): boolean {
    return this.service.editDialogCours;
  }

  set editDialogCours(value: boolean) {
    this.service.editDialogCours = value;
  }

  get viewDialogCours(): boolean {
    return this.service.viewDialogCours;
  }

  set viewDialogCours(value: boolean) {
    this.service.viewDialogCours = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  get itemssection(): Array<Section> {
    return this.service.itemssection;
  }
  get selectedcours(): Cours{
    return this.service.selectedcours;
  }
  set selectedcours(value: Cours) {
    this.service.selectedcours = value;
  }
  get itemscours(): Array<Cours> {
    return this.service.itemscours;
  }
  get selectescours(): Array<Cours> {
    return this.service.selectescours;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set itemscours(value: Array<Cours>) {
    this.service.itemscours = value;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  set selectescours(value: Array<Cours>) {
    this.service.selectescours = value;
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'libelle', header: 'Libelle'},
      {field: 'code', header: 'Code'},
      {field: 'description', header: 'Description'},
      {field: 'nombreSectionFinalise', header: 'NombreSectionFinalise'},
      {field: 'image', header: 'Image'},
      {field: 'nombreSectionEnCours', header: 'NombreSectionEnCours'},
      {field: 'nombreLinkEnCours', header: 'NombreLinkEnCours'},
      {field: 'nombreLinkFinalise', header: 'NombreLinkFinalise'},
      {field: 'numeroOrder', header: 'NumeroOrder'},
      {field: 'parcours', header: 'Parcours'}
    ];
  }
  public delete(cour: Cours) {
    this.selectedcours = cour;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + cour.libelle + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteCours().subscribe(data => {
          this.itemscours = this.itemscours.filter(val => val.id !== this.selectedcours.id);
          this.selectedcours = new Cours();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Cours Deleted',
            life: 3000
          });
          this.itemssection = null;
        });
      }
    });
  }
  public AjoutSection(cour: Cours) {
    this.selectedcours = cour;
    this.confirmationService.confirm({
      message: 'Are you sure you want to add sections of '  + cour.libelle + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.AjoutSection(cour.id).subscribe(data => {
          console.log(' save section');
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Section Added',
            life: 3000
          });
        });
      }
    });
  }
  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected cours?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleCoursByid().subscribe(data => {
          this.service.deleteMultipleCoursIndexById();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Cours Deleted',
            life: 3000
          });
          this.itemscours = null;
          this.itemssection = null;
        });
      }
    });
  }
}
