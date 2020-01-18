import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-team",
  templateUrl: "./pokemon-team.component.html",
  styleUrls: ["./pokemon-team.component.css"]
})
export class PokemonTeamComponent implements OnInit {
  pokemonChosen;
  constructor(private pokemonService: PokemonService) {}
  ngOnInit() {
    this.pokemonChosen = this.pokemonService.getPokemon();
  }
  removePokemon(pokemons, index) {
    window.alert("{{pokemons.name}}");
    this.pokemonService.removePokemon(pokemons, index);
  }
  removeAllPokemon() {
    window.alert("{{pokemons.name}}");
    this.pokemonChosen = this.pokemonService.clearTeam();
  }
}
