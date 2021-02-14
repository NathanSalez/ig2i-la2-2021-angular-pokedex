import {Component, OnInit} from '@angular/core';
import {ApiResponse} from "../../models/api-response.model";
import {ConnexionService} from "../connexion.service";
import {ConnexionResponse} from "../../models/connexion-reponse.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  styleUrls: ['./connexion-form.component.scss']
})
export class ConnexionFormComponent implements OnInit {

  username: string;
  password: string;

  error?: string = "";
  constructor(private connexionService: ConnexionService, private router: Router) {
  }

  submit(): void {
    console.log(this.username, this.password);
    this.connexionService.login(this.username,this.password).subscribe(
      (result: ConnexionResponse) => {
        if( !result ) {
          this.error = "Connexion failed, please try again.";
        } else {
          this.router.navigate(['/team']).then();
        }
      });
  }

  ngOnInit(): void {
  }

}
