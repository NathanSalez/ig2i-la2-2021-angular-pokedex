import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";

@Component({
  selector: 'app-team-print',
  templateUrl: './team-print.component.html',
  styleUrls: ['./team-print.component.scss']
})
export class TeamPrintComponent implements OnInit {

  @Input() team: Pokemon[];

  constructor() { }

  ngOnInit(): void {
  }

}
