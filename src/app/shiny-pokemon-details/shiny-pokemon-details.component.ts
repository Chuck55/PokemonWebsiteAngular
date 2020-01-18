import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { shinypokemon } from "../shinypokemon";
import { PokemonService } from "../pokemon.service";
@Component({
  selector: "app-shiny-pokemon-details",
  templateUrl: "./shiny-pokemon-details.component.html",
  styleUrls: ["../pokemon-details/pokemon-details.component.css"]
})
export class ShinyPokemonDetailsComponent implements OnInit {
  shinypokemons;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.shinypokemons = shinypokemon[+params.get("pokemonNumber")];
    });
  }
  addToTeam(shinypokemons) {
    this.pokemonService.addToTeam(shinypokemons);
  }
}
