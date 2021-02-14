import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  @Input() team: Pokemon[];
  @Output() teamChange = new EventEmitter<number>();

  @Input() message?: string;

  constructor() { }

  deletePokemon(index: number) {
    this.teamChange.emit(index);
  }

  ngOnInit(): void {
  }

}
