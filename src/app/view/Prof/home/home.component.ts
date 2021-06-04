import { Component, OnInit } from '@angular/core';
import {Cours} from '../../../controller/model/cours.model';
import {RecommendTeacher} from '../../../controller/model/recommend-teacher.model';
import {Prof} from '../../../controller/model/prof.model';
import {RecommendTeacherService} from '../../../controller/service/recommend-teacher.service';
import {ParcoursService} from '../../../controller/service/parcours.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {ClassRoomService} from '../../../controller/service/class-room.service';
import {SalaryVo} from '../../../controller/model/salary-vo.model';
import {EtudiantService} from '../../../controller/service/etudiant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lastUpdate = new Date();
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              // tslint:disable-next-line:max-line-length
              private service: ParcoursService,
              private servicerecommend: RecommendTeacherService, private seviceClass: ClassRoomService ,
              private serviceetudiant: EtudiantService
  ) { }

  ngOnInit(): void {
    this.findSalary();
    this.servicerecommend.findAllEtudiantByProf().subscribe(data => this.itemsetudiant = data);
  }

  get itemssalaryVo(): Array<SalaryVo> {
    return this.seviceClass.itemssalaryVo;
  }

  set itemssalaryVo(value: Array<SalaryVo>) {
    this.seviceClass.itemssalaryVo = value;
  }

  get selectessalaryVo(): Array<SalaryVo> {
    return this.seviceClass.selectessalaryVo;
  }

  set selectessalaryVo(value: Array<SalaryVo>) {
    this.seviceClass.selectessalaryVo = value;
  }
  public findSalary(){
    this.seviceClass.findSalary().subscribe(data =>
    {
      this.selectessalaryVo = data;
      this.itemssalaryVo = this.selectessalaryVo;
      console.log(this.selectessalaryVo);
    });
  }
  get itemsprof(): Array<Prof> {
    return this.servicerecommend.itemsprof;
  }

  set itemsprof(value: Array<Prof>) {
    this.servicerecommend.itemsprof = value;
  }
  public FindAllProf(){
    console.log(this.selected);
    this.servicerecommend.findAllProf().subscribe(data => this.itemsprof = data);
  }
  public save() {
    this.servicerecommend.save().subscribe(data => {
      console.log(this.selected);
      console.log('meryem');
    });
  }
  get selected(): RecommendTeacher {
    return this.servicerecommend.selected;
  }

  set selected(value: RecommendTeacher) {
    this.servicerecommend.selected = value;
  }
  public openCreateCours() {
    this.selectedcours = new Cours();
    this.submittedCours = false;
    this.createDialogCours = true;
  }
  public openCreateEtud() {
    this.submittedetudiant = new Etudiant();
    this.submitted = false;
    this.createDialogEtud = true;
  }
  get createDialogEtud(): boolean {
    return this.serviceetudiant.createDialog;
  }

  set createDialogEtud(value: boolean) {
    this.serviceetudiant.createDialog = value;
  }
  get submitted(): boolean {
    return this.serviceetudiant.submitted;
  }

  set submitted(value: boolean) {
    this.serviceetudiant.submitted = value;
  }

  get submittedetudiant(): Etudiant {
    return this.serviceetudiant.submittedetudiant;
  }

  set submittedetudiant(value: Etudiant) {
    this.serviceetudiant.submittedetudiant = value;
  }
  set submittedCours(value: boolean) {
    this.service.submittedCours = value;
  }
  get selectedcours(): Cours{
    return this.service.selectedcours;
  }
  set selectedcours(value: Cours) {
    this.service.selectedcours = value;
  }
  get createDialogCours(): boolean {
    return this.service.createDialogCours;
  }

  set createDialogCours(value: boolean) {
    this.service.createDialogCours = value;
  }
  get itemsetudiant(): Array<Etudiant> {
    return this.servicerecommend.itemsetudiant;
  }

  set itemsetudiant(value: Array<Etudiant>) {
    this.servicerecommend.itemsetudiant = value;
  }
}
