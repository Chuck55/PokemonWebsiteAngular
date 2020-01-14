import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";
@Component({
  selector: "app-top-teams",
  templateUrl: "./top-teams.component.html",
  styleUrls: ["./top-teams.component.css"]
})
export class TopTeamsComponent implements OnInit {
  topTeams;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.topTeams = this.pokemonService.getTopTeams();
  }
}
