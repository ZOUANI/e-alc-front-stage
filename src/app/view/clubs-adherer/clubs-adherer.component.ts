import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MemberServiceService} from '../../controller/service/member-service.service';
import {Router} from '@angular/router';
import {LoginService} from '../../controller/service/login.service';
import {Clubs} from '../../controller/model/clubs';
import {Member} from '../../controller/model/member';
import {ClubsMembers} from '../../controller/model/clubs-members';
import {Activite} from '../../controller/model/activite';

@Component({
  selector: 'app-clubs-adherer',
  templateUrl: './clubs-adherer.component.html',
  styleUrls: ['./clubs-adherer.component.scss']
})
export class ClubsAdhererComponent implements OnInit {

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private service: MemberServiceService, private router: Router, private user: LoginService) {
  }

  get listClbs(): Array<Clubs> {
    return this.service.listClbs;
  }

  set listClbs(value: Array<Clubs>) {
    this.service.listClbs = value;
  }
  get itemsClubs(): Array<Clubs> {
    if (this.service.itemsClubs == null){
      this.service.itemsClubs = new Array<Clubs>();
    }
    return this.service.itemsClubs;
  }

  set itemsClubs(value: Array<Clubs>) {
    this.service.itemsClubs = value;
  }

  get listClubs(): Array<Clubs> {
    return this.service.listClubs;
  }

  set listClubs(value: Array<Clubs>) {
    this.service.listClubs = value;
  }

  get clubs(): Clubs {
    return this.service.clubs;
  }

  set clubs(value: Clubs) {
    this.service.clubs = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  get member(): Member {
    return this.service.member;
  }

  set member(value: Member) {
    this.service.member = value;
  }
  get itemsClubsMember(): Array<ClubsMembers> {
    return this.service.itemsClubsMember;
  }

  set itemsClubsMember(value: Array<ClubsMembers>) {
    this.service.itemsClubsMember = value;
  }

  get listClubsMember(): Array<ClubsMembers> {
    return this.service.listClubsMember;
  }

  set listClubsMember(value: Array<ClubsMembers>) {
    this.service.listClubsMember = value;
  }

  get clubsMember(): ClubsMembers {
    return this.service.clubsMember;
  }

  set clubsMember(value: ClubsMembers) {
    this.service.clubsMember = value;
  }
  get itemsMember(): Array<Member> {
    return this.service.itemsMember;
  }

  set itemsMember(value: Array<Member>) {
    this.service.itemsMember = value;
  }

  get listMember(): Array<Member> {
    return this.service.listMember;
  }

  set listMember(value: Array<Member>) {
    this.service.listMember = value;
  }
  get itemsActivite(): Array<Activite> {
    return this.service.itemsActivite;
  }

  set itemsActivite(value: Array<Activite>) {
    this.service.itemsActivite = value;
  }
  get activite(): Activite {
    return this.service.activite;
  }

  set activite(value: Activite) {
    this.service.activite = value;
  }
  get listActivite(): Array<Activite> {
    return this.service.listActivite;
  }

  set listActivite(value: Array<Activite>) {
    this.service.listActivite = value;
  }
  ngOnInit(): void {
  }

}
