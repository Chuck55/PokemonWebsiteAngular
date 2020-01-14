import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";
@Component({
  selector: "app-pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styleUrls: ["./pokemon-details.component.css"]
})
export class PokemonDetailsComponent implements OnInit {
  pokemons;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pokemons = pokemon[+params.get("pokemonNumber")];
    });
  }
  addToTeam(pokemons) {
    this.pokemonService.addToTeam(pokemons);
  }
}
