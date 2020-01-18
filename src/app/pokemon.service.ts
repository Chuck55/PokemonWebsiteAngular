import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  pokemonChosen = [];
  constructor(private http: HttpClient) {}
  addToTeam(pokemon) {
    if (this.pokemonChosen.length == 6) {
      window.alert("Too many Pokemon, not added to team");
    } else {
      window.alert("Pokemon added to team");
      this.pokemonChosen.push(pokemon);
      console.log(`${this.pokemonChosen[0].name} was added to the team`);
    }
  }

  getPokemon() {
    return this.pokemonChosen;
  }
  clearTeam() {
    this.pokemonChosen = [];
    return this.pokemonChosen;
  }
  removePokemon(pokemon, index) {
    console.log(index);
      this.pokemonChosen.splice(index, 1);
      console.log(this.pokemonChosen);
  }
  getTopTeams() {
    return this.http.get("/assets/teamStats.json");
  }
  checkName(pokemonName, pokemon) {
    if (pokemonName.localeCompare(pokemon.name) == 0) {
      return true;
    } else {
      return false
    }

  }
}
